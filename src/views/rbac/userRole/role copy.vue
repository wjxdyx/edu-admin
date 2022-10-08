<script setup name="Role">
import { getRolePermission, saveRolePermission, delRolePermission } from '@/api/system'
import { isArray, deepClone } from '@/util'
import { useAuth } from '@/util/composables'
const { auth } = useAuth()
import useRouteStore from '@/store/modules/route'

let page = ref({
    index: 1,
    limit: 30,
    total: 300
})
// const { ctx } = getCurrentInstance()
let routerMenu = deepClone(useRouteStore().routes)
// 根据角色获取角色规则
let isPermission  = ref({})
console.log(isPermission)
const getTable = (role_id = '') => {
    getRolePermission({ role_id: role_id, page: page.index, limit: page.limit }).then(r => {
        if (r.data.length == 0) isPermission.value  = {}
        r.data.forEach(element => {
            isPermission.value[element] = true
        })
    })
}
defineExpose({
    getTable
})

const CurrentTreeData = inject('CurrentTreeData')

// function changeSearch() {
// }

const onChange = (e, item) => {
    if (!CurrentTreeData.value.role_id) {
        isPermission.value[item] = false
        ElMessage({
            message: '请先选择角色',
            type: 'warning'
        })
        return
    }
    let data = { role_id: CurrentTreeData.value.role_id, name: item }
    console.log(data, CurrentTreeData)
    if (e) {
        // eslint-disable-next-line no-unused-vars
        saveRolePermission(data).then(r => {
            isPermission.value[item] = true
        }).catch(err => {
            isPermission.value[item] = false
            ElMessage({
                message: err,
                type: 'warning'
            })
        })

    } else {
        delRolePermission(data).then(r => {
            console.log(r)
            delete isPermission.value[item]
        }).catch(err => {
            isPermission.value[item] = false
            ElMessage({
                message: err,
                type: 'warning'
            })
        })
    }

}
const rowClassName = d => {
    console.log(d)
}
// const isPermission = data => {
//     console.log(data, dataList.value.some(e => {
//         return e === data
//     }))
//     return dataList.value.some(e => {
//         return e === data
//     })
// }
</script>

<template>
    <div class="">
        <page-main :auto-height="true">
            <el-table
                row-key="path"
                :default-expand-all="true"
                :indent="14"
                scrollbar-always-on
                :data="routerMenu" table-layout="auto"
                class="table-header-filter"
                :row-class-name="rowClassName"
            >
                <el-table-column fixed prop="name" label="名称" width="220">
                    <template #default="scope">
                        <div class=" df jc-sb center">
                            <el-icon>
                                <svg-icon :name="'ep:'+scope.row.meta.icon" />
                            </el-icon>
                            <span>{{ scope.row.meta.title }}</span>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column prop="referer" label="权限(业务标识)">
                    <template #default="scope">
                        <div v-if="scope.row.meta.auth">
                            <div v-if="isArray(scope.row.meta.auth)">
                                <el-check-tag
                                    v-for="item,index in scope.row.meta.auth" :key="index" type="success"
                                    class="mr-2"
                                    :checked="item.isPermission" size="small" effect="plain" @change="(e)=>onChange(e,item,scope.row.RouteAuthTags,index)"
                                >
                                    {{ item }}
                                </el-check-tag>
                            </div>
                            <div v-else-if="typeof scope.row.meta.auth == 'string'">
                                <el-check-tag
                                    type="success"
                                    class="mr-2"
                                    :checked="scope.row.meta.permissionChecked" size="small" effect="plain" @change="(e)=>onChange(e,item,scope.row.RouteAuthTags,index)"
                                />
                            </div>
                            <div v-else>
                                <el-checkbox
                                    v-for="item in Object.keys(scope.row.meta.auth)" :key="item"
                                    v-model="isPermission[item]"
                                    :disabled="!auth('rbacRoleAuthRole.edit')"
                                    @change="(e)=>onChange(e,item,scope.row.RouteAuthTags,index)"
                                >
                                    {{ scope.row.meta.auth[item] }}
                                </el-checkbox>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="mark" label="备注" width="180" />
            </el-table>
        </page-main>
    </div>
</template>

<style lang="scss" scoped>
:deep(.el-table) {
    .cell {
        display: flex;
        align-items: center;
        align-content: center;
        // height: 30px;
    }
}
</style>
