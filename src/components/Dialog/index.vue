<script setup name="Dialog">
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    clickCancel: {
        type: Function,
        default: () => {
            console.log('init')
            return []
        }
    },
    clickSumbit: {
        type: Function,
        default: () => {
            console.log('init.clickSumbit')
            return []
        }
    }

})

// const computedIsCollapse = computed(() => props.value)

let dialogVisible = ref(props.modelValue)
// 监控吧v-model 赋值给dialogvisible
watchEffect(() => {
    dialogVisible.value = props.modelValue
})
// 监控dialogVisible 更新v-model
const emits = defineEmits(['update:modelValue', 'clickSumbit'])
// eslint-disable-next-line no-unused-vars
watch(dialogVisible, (newValue, oldValue) => {
    emits('update:modelValue', newValue)
})

const cancel = () => {
    props.clickCancel()
    dialogVisible.value = false
}
const clickSumbit2 = () => {
    emits('clickSumbit', dialogVisible)
}
</script>

<template>
    <el-dialog
        v-model="dialogVisible"
        draggable
        title="编辑" width="30%"
    >
        <slot />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="cancel">取消</el-button>
                <el-button type="primary" @click="clickSumbit2">确定保存</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="scss">
header.el-dialog__header {
    border-bottom: 1px solid #eee !important;
    margin-right: 0 !important;
    padding: 10px 20px !important;
    height: 50px !important;
    display: flex;
    align-items: center;
    align-content: center;
    .el-dialog__title {
        font-size: 16px !important;
        font-weight: bolder;
    }
}
.el-dialog__body {
    padding: 20px !important;
}
.el-dialog__headerbtn {
    top: 0 !important;
}
</style>
