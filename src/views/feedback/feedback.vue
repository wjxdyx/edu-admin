<script setup name="Feedback">
let dataList = reactive([
    {
        date: '2016-05-02',
        create_time: '2016-05-02 08:12:11',
        update_time: '2016-05-02 08:12:11',
        name: '王小虎',
        balance: '1000',
        state: 1,
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        date: '2016-05-04',
        create_time: '2016-05-04 08:12:11',
        update_time: '2016-05-04 08:12:11',
        name: '王小虎',
        balance: '10000000',
        state: 0,
        address: '上海市普陀区金沙江路 1517 弄'
    }
])

function     changeSearch(e) {
    console.log(e, 4444)
}
</script>

<template>
    <div class="absolute-container">
        <page-header
            :search="true" style="display: flex;justify-content: flex-end;"
            @change-search="changeSearch"
        />

        <page-main :auto-height="true">
            <el-table
                scrollbar-always-on
                stripe
                style="border: 1px solid #eee;"
                :data="dataList" table-layout="auto" highlight-current-row
            >
                <el-table-column fixed type="index" label="序" width="50" />
                <el-table-column fixed prop="name" label="用户名称" width="180">
                    <template #default="scope">
                        <el-link type="primary" :underline="false">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="balance" label="反馈描述" />
                <el-table-column prop="state" label="我的回复" />
                <el-table-column prop="create_time" label="创建时间" width="170" />
                <el-table-column prop="update_time" label="更新时间" width="170" />
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

