<script setup name="BuyIt">
const isActived = ref(true)
setTimeout(() => {
    isActived.value = false
}, 5000)

onMounted(() => {
    ElNotification({
        type: 'success',
        title: '温馨提示',
        dangerouslyUseHTMLString: true,
        message: `
            <p>当前访问的是<b></b> (瑞泽源)</p>
            <p>你可以点<a href="https://www.baidu.com/" target="_blank"><b>这里联系客服</p>
        `,
        position: 'bottom-right',
        duration: 5000
    })
})

function open(url) {
    window.open(url, 'top')
}
</script>

<template>
    <div class="buy-it" :class="{'actived': isActived}">
        <div class="item" @click="open(`https://www.baidu.com/`)">
            <el-icon>
                <svg-icon name="fixed-right-buy" />
            </el-icon>
            <!-- 294047771 -->

            <span class="title">联系我们<br>客服：卡莎</span>
        </div>
        <div class="item" @click="open('www.baidu.com')">
            <el-icon>
                <svg-icon name="fixed-right-code" />
            </el-icon>
            <span class="title">审核<br>客服：寒冰</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.buy-it {
    position: fixed;
    z-index: 10;
    right: -58px;
    top: 50%;
    transform: translateY(-50%);
    width: 70px;
    display: flex;
    flex-direction: column;
    transition: right 0.3s;
    &.actived,
    &:hover {
        right: 0;
    }
    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 70px;
        text-align: center;
        color: #fff;
        border-bottom: 1px solid #fff;
        transition: 0.3s;
        opacity: 0.7;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
        &:first-child {
            border-top-left-radius: 5px;
        }
        &:last-child {
            border-bottom-left-radius: 5px;
            border-bottom: 0;
        }
        &:nth-child(1) {
            background-color: #ff4200;
        }
        &:nth-child(2) {
            background-color: #409eff;
        }
        &:nth-child(3) {
            background-color: #0fcc1a;
        }
        &:nth-child(4) {
            background-color: #343b42;
        }
        .el-icon {
            display: block;
            margin: 0 auto;
            font-size: 20px;
        }
        .title {
            display: inline-block;
            font-size: 12px;
        }
    }
}
</style>
