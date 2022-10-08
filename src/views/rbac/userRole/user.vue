<script setup name="AuthUser">
import { getRoleUser } from '@/api/system'
// import DatePanel from '../../../../node_modules/element-plus/components/date-picker/src/date-picker-com/basic-date-table.js'

let openSearch = ref(false)
// 被授权用户表格数据变量
let dataList = ref([])

// 根据角色获取授权用户
const getTable = (role_id = '') => {
    getRoleUser({ role_id: role_id, page: 1, limit: 30 }).then(r => {
        dataList.value = r.data
        console.log(dataList)
    })
}
function clickSave() {
}
function changeSearch() {
}
const clickOpenSearch = () => {
    openSearch.value = !openSearch.value
}
defineExpose({
    getTable
})
</script>

<template>
    <div class="absolute-container">
        <page-header
            :search="false" style="display: flex;justify-content: flex-end;border-bottom: 0;"
            @change-search="changeSearch"
        >
            <el-button type="primary" @click="clickSave">创建用户</el-button>
            <el-button type="primary" @click="clickOpenSearch">开启高级搜索{{ openSearch }}</el-button>
        </page-header>
        <page-main :auto-height="true">
            <el-table
                border
                scrollbar-always-on stripe highlight-current-row
                :data="dataList" table-layout="auto"
                class="table-header-filter"
            >
                <el-table-column fixed type="index" label="序" width="50" />
                <el-table-column fixed prop="User.username" label="登陆账户" width="160">
                    <template #header>
                        <TableHeaderFilter :down-filter="openSearch" placeholder="登陆账户" />
                    </template>
                    <template #default="scope">
                        <el-link type="primary" :underline="false">{{ scope.row.User.username }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column fixed prop="User.nickname" label="昵称" width="100">
                    <template #header>
                        <TableHeaderFilter :down-filter="openSearch" placeholder="昵称" />
                    </template>
                    <template #default="scope">
                        <el-link type="primary" :underline="false">{{ scope.row.User.nickname }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column fixed prop="User.wx_openid" label="绑定微信" width="120">
                    <template #header>
                        <TableHeaderFilter :down-filter="openSearch" placeholder="绑定微信" type="select" :option-data="[{value:1,label:'已绑定'},{value:2,label:'未绑定'}]" />
                    </template>
                    <template #default="scope">
                        <el-tag effect="dark">{{ scope.row.User.wx_openid?'已绑定':'未绑定' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="role_name" label="角色权限" min-width="180">
                    <template #header>
                        <TableHeaderFilter :down-filter="openSearch" placeholder="角色权限" type="input" />
                    </template>
                </el-table-column>
                <el-table-column prop="User.gender" label="性别" width="100">
                    <template #header>
                        <TableHeaderFilter :down-filter="openSearch" placeholder="性别" type="select" :option-data="[{value:1,label:'男'},{value:2,label:'女'}]" />
                    </template>
                    <template #default="scope">
                        <el-icon size="16px">
                            <svg-icon v-if="scope.row.User.gender===1" name="ep:female" class="translate-center" />
                            <svg-icon v-if="scope.row.User.gender===2" name="ep:male" class="translate-center" />
                            <svg-icon v-if="scope.row.User.gender===0" name="ep:user-filled" class="translate-center" />
                        </el-icon>
                    </template>
                </el-table-column>

                <el-table-column prop="User.last_login_time" label="最后登录时间" width="160">
                    <template #header>
                        <TableHeaderFilter :down-filter="openSearch" placeholder="最后登录时间" type="date" />
                    </template>
                </el-table-column>

                <el-table-column prop="create_time" label="创建时间" width="180" />
                <el-table-column prop="update_time" label="更新时间" width="180" />
            </el-table>
            <el-pagination
                small
                hide-on-single-page
                background
                layout="prev, pager, next"
                :total="50"
                class="p-10"
            />
        </page-main>
    </div>
</template>

