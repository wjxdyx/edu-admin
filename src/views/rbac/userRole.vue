<script setup name="UserRole">
import { getRoleTree } from '@/api/system'
import UserMain from './userRole/user.vue'
import RoleMain from './userRole/role.vue'
// 读取权限分组数据
let dataSource = ref([])
getRoleTree().then(r => {
    if (r.code === 101) {
        dataSource.value = r.data
    }
})
provide('RoleTreeData', dataSource)
// 分页
let activeName = ref('RoleMain')
// 树分组搜索词
let searchTreeKeyword = ref('')

// 菜单的树是否为编辑状态
let treeIsEdit = ref(true)
function changeTreeEditState() {
    treeIsEdit.value = !treeIsEdit.value
}
// 删除树节点
const removeTreeNode = ({ parent, data }) => {
    const children = parent.data.children || parent.data
    const index = children.findIndex(d => d['role_id'] === data['role_id'])
    const delNode =  children.splice(index, 1)

    console.log(delNode)
}
// 点击树节点
let AuthUserMain = ref(null)
let AuthRoleMain = ref(null)
// 当前点击的树节点
let CurrentTreeData = ref({ role_id: undefined })
provide('CurrentTreeData', CurrentTreeData)

const clickTreeNode = data => {
    CurrentTreeData.value = data
    if (activeName === 'UserMain') {
        AuthUserMain.value.getTable(data.role_id)
    } else {
        AuthRoleMain.value.getTable(data.role_id)
    }
}
// 搜索

</script>

<template>
    <div class="absolute-container h-100">
        <page-main ref="UserRolePageMain" class="df js-fs h-100" :expand-left-menu="true" left-menu-width="300px">
            <template #left-menu>
                <div class="w-100  h-100 " style="display: flex;flex-direction: column;">
                    <div style="min-height: 40px;border-bottom: 1px solid #eee;" class="df center jc-sb ">
                        <div> 角色权限    </div>
                        <el-button size="small" type="primary" link>
                            <el-icon size="16px" @click="changeTreeEditState">
                                <svg-icon name="ep:operation" class="translate-center" />
                            </el-icon>
                        </el-button>
                    </div>
                    <div class="df jc-fs mt-10">
                        <el-input v-model="searchTreeKeyword" placeholder="搜索角色" class="tree-search">
                            <template #prefix>
                                <el-icon size="18px"> <svg-icon name="ep:search" /> </el-icon>
                            </template>
                        </el-input>
                    </div>
                    <div style="overflow-y: auto;flex: auto;">
                        <edit-tree refs="RoleGroupTree" :filter-text="searchTreeKeyword" :node-key="'role_id'" :tree-data="dataSource" :edit="treeIsEdit" @click-node="clickTreeNode" @remove-node="removeTreeNode" />
                    </div>
                </div>
            </template>
            <template #default>
                <el-tabs v-model="activeName" class="h-100 df " style="flex-direction: column;">
                    <el-tab-pane label="被授权用户" name="UserMain" class="h-100 ">
                        <UserMain ref="AuthUserMain" v-auth="['rbacRoleAuthUser.edit','rbacRoleAuthUser.create','rbacRoleAuthUser.edit','rbacRoleAuthUser.delete']" class="tabs-main" />
                    </el-tab-pane>
                    <el-tab-pane label="角色授权规则" name="RoleMain" class="h-100 ">
                        <RoleMain ref="AuthRoleMain" v-auth="['rbacRoleAuthRole.edit','rbacRoleAuthRole.create']" class="tabs-main h-100 " />
                    </el-tab-pane>
                </el-tabs>
            </template>
        </page-main>
    </div>
</template>

<style lang="scss" scoped>
// header:first-of-type
:deep(.el-tabs__header) {
    margin-bottom: 0;
}

// 利用absolute 计算剩余高度 top 0 对齐顶部
.absolute-container {
    // position: absolute;
    // top: 0;
    // height: 100%;
    width: 100%;
}
:deep(.el-tabs__content) {
    // height: 100%;
    flex: 1;
    // padding: 0 !important;
}
.tabs-main {
    padding: 0 !important;
    margin: 0 !important;
}
:deep(.user-main > .page-main) {
    margin-left: 0 !important;
    margin-right: 0 !important;
}
:deep(.user-main .page-right-main) {
    padding: 0 !important;
}
// 树搜索框颜色
:deep(.page-left .tree-search .el-input__wrapper) {
    background-color: #e1dcdc;
}
</style>
