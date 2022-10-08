<script setup name="Role">
import { getRouteMenu } from '@/api/system'
// 保存添加路由菜单
import SaveMain from './menuResource/save.vue'
let saveFormData = ref({
    RouteAuthTags: [],
    delRouteAuthTags: []

})
let dataList = ref([])
let page = ref({
    index: 1,
    limit: 30,
    total: 300
})
provide('RouteMenuData', dataList)

let saveDialogVisible = ref(false)
// // 当前资源 是创建还是编辑
let saveDialogMode = ref('create')
function clickCreate() {
    saveDialogMode.value = 'create'
    saveDialogVisible.value = !saveDialogVisible.value

}
function clickEdit(row) {
    saveDialogVisible.value = true
    saveDialogMode.value = 'edit'
    saveFormData.value = row
}
function clickRefresh() {
    // eslint-disable-next-line no-unused-vars
    getRouteMenu({  page: page.index, limit: page.limit }).then(r => {
        // dataList.value = r.data
    })
}
clickRefresh()

</script>

<template>
    <div class="">
        <page-header :search="false" style="display: flex;justify-content: flex-end;border-bottom: 0;">
            <el-button type="primary" @click="clickRefresh">刷新</el-button>
            <el-button type="primary" @click="clickCreate">添加路由菜单</el-button>
        </page-header>
        <page-main :auto-height="true">
            <!-- {{ saveFormData }} -->
            <el-table
                row-key="route_id"
                :default-expand-all="true"
                :indent="14"

                scrollbar-always-on highlight-current-row stripe
                :data="dataList" table-layout="auto"
                class="table-header-filter"
            >
                <el-table-column fixed prop="name" label="路由菜单名称(唯一)" width="220" />
                <el-table-column prop="icon" label="图标" width="80" class-name="no-padding">
                    <template #default>
                        <el-icon color="red" size="24px">
                            <svg-icon :name="'ep:'+'umbrella'" />
                        </el-icon>
                    </template>
                </el-table-column>
                <el-table-column prop="route_path" label="路由菜单地址" width="220" />
                <el-table-column prop="referer" label="权限(业务标识)">
                    <template #default="scope">
                        <el-tooltip
                            v-for="item in scope.row.RouteAuthTags"
                            :key="item.route_auth_tags_id"

                            effect="dark" :content="item.mark "
                            placement="top-start"
                        >
                            <el-tag size="small" effect="plain">{{ item.mark }}:{{ item.name }}</el-tag>
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column prop="mark" label="备注" width="180" />
                <el-table-column prop="mark" label="操作">
                    <template #default="scope">
                        <el-button link @click="clickEdit(scope.row,scope.$index)">
                            <el-icon size="16px">
                                <svg-icon name="ep:edit" />
                            </el-icon>
                            编辑
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </page-main>

        <SaveMain v-model="saveDialogVisible" :form-data="saveFormData" :mode="saveDialogMode" />
    </div>
</template>

