<script>

export default {
    name: 'WaitVerifyIAP',
    props: {},
    data() {
        return {
            dataList: [
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
            ]
        }
    }
}
</script>

<template>
    <div class="absolute-container">
        <page-header title="接入服务商">
            <el-button>新增</el-button>
        </page-header>
        <page-main :auto-height="true">
            <el-table
                style="border: 1px solid #eee;"

                scrollbar-always-on
                stripe
                :data="dataList" table-layout="auto" highlight-current-row
                height="100%"
            >
                <el-table-column fixed type="index" label="序" width="50" />
                <el-table-column fixed prop="name" label="接入商" width="180">
                    <template #default="scope">
                        <el-link type="primary" :underline="false">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column
                    show-overflow-tooltip
                    prop="address" label="详细地址"
                />
                <el-table-column prop="create_time" label="创建时间" width="110" />
                <el-table-column prop="update_time" label="更新时间" width="110" />
                <el-table-column prop="state" label="操作" width="100" class-name="table-state">
                    <template #default="scope">
                        <el-link v-show="scope.row.state===1" type="primary" :underline="false">通过</el-link>
                        <el-link v-show="scope.row.state===0" type="danger" :underline="false">拒绝</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                small
                background
                layout="prev, pager, next"
                :total="50"
                class="mt-4"
            />
        </page-main>
    </div>
</template>

<style lang="scss" scoped>
::v-deep td.table-state .cell {
    display: flex;
}
.table-dropdown {
    display: flex;
}
.absolute-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .auto-height {
        background-color: var(--g-app-bg);
        transition: background-color 0.3s;
        flex: 1;
        overflow: auto;
        margin-top: 0;
        display: flex;
        flex-direction: column;
    }
    // .page-main {
    //     // 让 page-main 的高度自适应
    //     flex: 1;
    //     overflow: auto;
    //     margin-top: 0;
    //     display: flex;
    //     flex-direction: column;
    //     .el-button {
    //         margin-top: 20px;
    //     }
    // }
}
</style>
