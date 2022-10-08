<script setup name="IAPTask">
let dialogVisible = ref(true)
let dataList = reactive([
    {
        date: '2016-05-02',
        create_time: '2016-05-02',
        update_time: '2016-05-02',
        name: '王小虎',
        balance: '1000',
        state: 1,
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        date: '2016-05-04',
        create_time: '2016-05-04',
        update_time: '2016-05-04',
        name: '王小虎',
        balance: '10000000',
        state: 0,
        address: '上海市普陀区金沙江路 1517 弄'
    }
])
function clickSave() {
    dialogVisible.value = true
}
function  changeSearch(e) {
    console.log(e, 4444)
}
</script>

<template>
    <div class="absolute-container">
        <page-header
            title="接入服务商" :search="true" style="display: flex;justify-content: flex-end;"
            @change-search="changeSearch"
        >
            <el-button type="primary" @click="clickSave">创建</el-button>
        </page-header>

        <page-main :auto-height="true">
            <el-table
                scrollbar-always-on
                stripe
                style="border: 1px solid #eee;"
                :data="dataList" table-layout="auto" highlight-current-row
            >
                <el-table-column fixed type="index" label="序" width="50" />
                <el-table-column fixed prop="name" label="接入商" width="180">
                    <template #default="scope">
                        <el-link type="primary" :underline="false">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="balance" label="任务名称" width="100" />
                <el-table-column prop="state" label="任务单价" />
                <el-table-column prop="state" label="任务描述" />
                <el-table-column prop="create_time" label="发布地区" width="110" />
                <el-table-column prop="state" label="任务状态" width="100" class-name="table-state">
                    <template #default="scope">
                        <el-link v-if="scope.row.state===1" type="success" :underline="false">已通过</el-link>
                        <el-link v-if="scope.row.state===0" type="warning" :underline="false">已驳回</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="state" label="操作" width="100" class-name="table-state">
                    <template #default>
                        <div class="df jc-sb">
                            <el-button type="success">通过</el-button>
                            <el-button type="warning">驳回</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                small
                background
                layout="prev, pager, next"
                :total="50"
                class="p-10"
            />
        </page-main>
    </div>
</template>

