<script setup name="IAPSave">
let dialogVisible = ref(true)
const formInline = reactive({
    user: '',
    amt: undefined,
    state: 1
})

</script>

<template>
    <Dialog v-model="dialogVisible">
        <el-form :model="formInline" label-width="100px">
            <el-form-item label="接入商">
                <el-input v-model="formInline.user" placeholder="接入平台名称" />
            </el-form-item>
            <el-form-item label="充值金额">
                <el-input-number v-model="formInline.amt" placeholder="接入平台用户钱包" />
            </el-form-item>

            <el-form-item label="账户状态">
                <el-radio-group v-model="formInline.state">
                    <el-radio-button :label="1">正常</el-radio-button>
                    <el-radio-button :label="0">禁用</el-radio-button>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </Dialog>
</template>
