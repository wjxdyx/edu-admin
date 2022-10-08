<script setup name="UserRoleLeftMenu">
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
function clickSave() {
}

</script>

<template>
    <div class="absolute-container">
        <page-header
            :search="true" style="display: flex;justify-content: flex-end;"
        >
            <el-button type="primary" @click="clickSave">创建用户</el-button>
        </page-header>
        <page-main :auto-height="true">
            <el-table
                scrollbar-always-on
                stripe
                style="border: 1px solid #eee;"
                :data="dataList" table-layout="auto" highlight-current-row
            >
                <el-table-column fixed type="index" label="序" width="50" />
                <el-table-column fixed prop="name" label="用户" width="180">
                    <template #default="scope">
                        <el-link type="primary" :underline="false">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="balance" label="角色权限" />

                <el-table-column prop="create_time" label="创建时间" width="180" />
                <el-table-column prop="update_time" label="更新时间" width="180" />
                <el-table-column prop="state" label="账户状态" width="100" class-name="table-state">
                    <template #default="scope">
                        <el-dropdown>
                            <div class="table-dropdown">
                                <div class="table-dropdown-title">
                                    <el-link v-if="scope.row.state===1" type="success" :underline="false">正常</el-link>
                                    <el-link v-if="scope.row.state===0" type="warning" :underline="false">禁用</el-link>
                                </div>

                                <el-icon class="el-icon--right" />
                            </div>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>正常</el-dropdown-item>
                                    <el-dropdown-item>禁用</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
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

