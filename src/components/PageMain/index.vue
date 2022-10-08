<script setup name="PageMain">
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    leftMenuWidth: {
        type: String,
        default: '400px'
    },
    collaspe: {
        type: Boolean,
        default: false
    },
    expandLeftMenu: {
        type: Boolean,
        default: false
    },
    autoHeight: {
        type: Boolean,
        default: false
    },
    height: {
        type: String,
        default: ''
    }
})
let collaspeLeftMenu = ref(!props.expandLeftMenu)

// 监控吧expandLeftMenu 赋值给collaspeLeftMenu
watch(() => props.expandLeftMenu, newValue => {
    console.log(newValue, 'props.expandLeftMenu')
    // collaspeLeftMenu.value = !newValue
})
// 监控赋值给collaspeLeftMenu 更新expandLeftMenu
const emits = defineEmits(['changeExpend'])
watch(collaspeLeftMenu, newValue => {
    emits('changeExpend', newValue)
})

// const collaspeData = ref(props.collaspe)
// const autoheightData = ref(props.autoheight)
// console.log(autoheightData, props.autoheight)
// console.log(collaspeData, props.collaspe)

// const { ctx } = getCurrentInstance()

// watch(() => collaspeData, (newValue, oldValue) => {
//     console.log('watch 已触发', newValue, oldValue)
//     ctx.$forceUpdate()
// })

function leftMenuCollaspe() {

    collaspeLeftMenu.value = !collaspeLeftMenu.value
}
defineExpose({
    leftMenuCollaspe
})
const dragControllerDiv = () => {
    var resize = document.getElementsByClassName('resize')
    var left = document.getElementsByClassName('page-left')
    var mid = document.getElementsByClassName('page-right-main')
    var box = document.getElementsByClassName('page-main')
    for (let i = 0; i < resize.length; i++) {
        // 鼠标按下事件
        resize[i].onmousedown = function(e) {
            // 颜色改变提醒
            resize[i].style.background = '#818181'
            var startX = e.clientX
            resize[i].left = resize[i].offsetLeft
            // 鼠标拖动事件
            document.onmousemove = function(e) {
                var endX = e.clientX
                var moveLen = resize[i].left + (endX - startX) // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
                var maxT = box[i].clientWidth - resize[i].offsetWidth  // 容器宽度 - 左边区域的宽度 = 右边区域的宽度

                if (moveLen < 0) moveLen = 0 // 左边区域的最小宽度为32px
                if (moveLen > maxT - 150) moveLen = maxT - 150 // 右边区域最小宽度为150px

                resize[i].style.left = moveLen // 设置左侧区域的宽度

                for (let j = 0; j < left.length; j++) {
                    left[j].style.width = moveLen + 'px'
                    // 右侧容器宽度
                    mid[j].style.width = (box[i].clientWidth - moveLen - 15) + 'px'
                }
            }
            // 鼠标松开事件
            document.onmouseup = function(evt) {
                console.log(evt)
                // 颜色恢复
                resize[i].style.background = '#d6d6d6'
                document.onmousemove = null
                document.onmouseup = null
                resize[i].releaseCapture && resize[i].releaseCapture() // 当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
            }
            resize[i].setCapture && resize[i].setCapture() // 该函数在属于当前线程的指定窗口里设置鼠标捕获
            return false
        }
    }
}
const changeIframeDivStyle = display => {
    var iframeDiv = document.getElementsByClassName('iframeDiv')
    iframeDiv[0].style.display = display
}
onMounted(() => {
    dragControllerDiv()
    // changeIframeDivStyle('none')
})
</script>

<template>
    <div
        class="page-main"
        :class="{

        }" :style="{
            'height': collaspe ? height : '',
            '--left-menu-width':props.leftMenuWidth
        }"
    >
        <div v-if="props.expandLeftMenu" class="page-left " :class="{collaspeLeftMenu:collaspeLeftMenu}">
            <slot name="left-menu" />
        </div>
        <div v-if="props.expandLeftMenu" class=" resize" @mousedown="changeIframeDivStyle('')" @onmouseup="changeIframeDivStyle('none')">
            <div class="resize-div" />
        </div>
        <div class=" page-right-main " :class="{collaspeLeftMenu:props.expandLeftMenu?collaspeLeftMenu:true}">
            <div class="iframeDiv" />
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.iframeDiv {
    position: absolute;
    z-index: 1111;
    /* stylelint-disable-next-line function-no-unknown */
    filter: alpha(opacity=0);
    opacity: 0;
    background: transparent;
    margin-top: 30px;

    /* display: none; */
}
.hk {
    position: absolute;
    left: calc(var(--left-menu-width) - 2.5px);
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    z-index: 9999;
    width: 10px;
    height: 60px;
    border-radius: 15px;
    cursor: ew-resize;
    box-shadow: 0 0 5px 0 #666565;
    // pointer-events: auto;
}

/* 包围div样式 */
.page-main {
    padding: 5px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s;
}

/* 左侧div样式 */
.page-left {
    background-color: var(--g-app-bg);
    width: var(--left-menu-width);  /* 左侧初始化宽度 */
    height: 100%;
    float: left;
    min-width: 0;
    padding: 5px;
    box-shadow: 4px 0 0 0 #f2f3f5;
}

/* 拖拽区div样式 */
.resize {
    cursor: col-resize;
    float: left;
    position: relative;
    top: 45%;
    background-color: #d6d6d6;
    border-radius: 5px;
    margin-top: -10px;
    width: 5px;
    height: 50px;
    background-size: cover;
    background-position: center;

    /* z-index: 99999; */
    font-size: 32px;
    color: white;
    &-div {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 10px;
        border-radius: 5px;
        background-color: #d6d6d6;
        z-index: 1001;
    }
}

/* 拖拽区鼠标悬停样式 */
.resize:hover {
    color: #444;
}

/* 右侧div'样式 */
.page-right-main {
    float: left;
    width: calc(100% - var(--left-menu-width) - 15px);
    transition: margin-left 0.2s;
    height: 100%;
    background: #fff;
    padding: 5px;
    overflow: auto;
    background-color: var(--g-app-bg);
    position: relative;
}

/* 右侧div'样式 */
.page-right-main.collaspeLeftMenu {
    float: left;
    width: 100%;
    transition: margin-left 0.2s;
    height: 100%;
    background: #fff;
    padding: 5px;
    overflow: auto;
    position: relative;
}

</style>
