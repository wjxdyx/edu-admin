<script setup name="EditTree">
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    edit: {
        type: Boolean,
        default: false
    }

})

const dataSource = ref(
    [
        {
            label: 'Level one 1',
            children: [
                {
                    label: 'Level two 1-1',
                    children: [
                        {
                            label: 'Level three 1-1-1'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Level one 2',
            children: [
                {
                    label: 'Level two 2-1',
                    children: [
                        {
                            label: 'Level three 2-1-1'
                        }
                    ]
                },
                {
                    label: 'Level two 2-2',
                    children: [
                        {
                            label: 'Level three 2-2-1'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Level one 3',
            children: [
                {
                    label: 'Level two 3-1',
                    children: [
                        {
                            label: 'Level three 3-1-1'
                        }
                    ]
                },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] },
                { label: 'Level two 3-2', children: [{ label: 'Level three 3-2-1' }] }
            ]
        }
    ]
)
const defaultProps = {
    children: 'children',
    label: 'label'
}
function clickInput(event) {
    event.stopPropagation()
}
// 菜单树点击
function handleNodeClick(data) {
    console.log(data)

}
const { ctx } = getCurrentInstance()
const append = data => {
    const newChild = { id: 2, label: 'testtest', children: [] }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)
    // dataSource.value = [...dataSource.value]
}
function edit(data) {
    data.isEdit = true
}
const remove = (node, data) => {
    const parent = node.parent
    const children = parent.data.children || parent.data
    console.log(children)
    const index = children.findIndex(d => d.id === data.id)
    children.splice(index, 1)
}
const changeTreeInput = (data, e) => {
    data.label = e
    console.log(data.label, e)
    ctx.$forceUpdate()
}
// eslint-disable-next-line no-unused-vars
const blurTreeInput = (data, e) => {
    data.isEdit = false
    ctx.$forceUpdate()
}

</script>

<template>
    <el-tree
        :data="dataSource" :props="defaultProps" @node-click="handleNodeClick"
    >
        <template #default="{ node, data }">
            <div class="df jc-sb w-100">
                <span v-if="!data.isEdit" style="font-size: 14px;">{{ node.label }}</span>
                <!-- <el-input v-if="data.isEdit" v-model="node.label" @click.stop="clickInput" /> -->
                <el-input v-if="data.isEdit" :model-value="node.label" @blur="(e)=>blurTreeInput(data,e)" @click.stop="clickInput" @input="(e) => changeTreeInput(data, e)" />
                <el-dropdown size="large" type="primary" style="margin-right: 5px;margin-left: 5px;" trigger="click" @click.stop="clickInput">
                    <el-icon class="translate-center " @click.stop="clickInput">
                        <svg-icon name="ep:more-filled" />
                    </el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="append(data)">添加子分类</el-dropdown-item>
                            <el-dropdown-item @click="edit(data)">编辑分类</el-dropdown-item>
                            <el-dropdown-item @click="remove(node, data)">删除分类</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <!-- <el-input v-if="props.edit" :value="node.label" :disabled="data.id === 0" @click.stop="clickInput" @input="(e) => handleInputChange(data, e)"> -->
            <!-- <template #append /> -->
            <!-- <el-button size="small" type="primary">
                        <el-icon>
                            <svg-icon name="ep:more-filled" />
                        </el-icon>
                    </el-button> -->
            <!-- <el-dropdown size="large" type="primary" trigger="click" @click.stop="clickInput">
                        <el-icon @click.stop="clickInput">
                            <svg-icon name="ep:more-filled" />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>添加子分类</el-dropdown-item>
                                <el-dropdown-item>删除部门</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown> -->
            <!-- <el-divider direction="vertical" />

                    <el-icon size="18px">
                        <svg-icon name="ep:delete" />
                    </el-icon> -->
            <!-- <el-button-group style="width: 50px;" class="u-flex u-row-center">
                        <el-button type="primary" icon="el-icon-plus" @click="handleNodeCreate(data)" />
                        <el-button v-if="data.id != 0" type="primary" icon="el-icon-delete" @click="handleNodeDelete(data)" />
                    </el-button-group> -->
            <!-- </el-input> -->
        </template>
    </el-tree>
</template>

<style lang="scss" scoped>
:deep(.el-input) {
    height: 25px !important;
}
:deep(.el-input-group__append) {
    background-color: #fff;
    padding: 0 5px !important;
}
:deep(.el-tree-node__content) {
    width: 100% !important;
}
// :deep(.el-input-group__append:hover) {
//     background-color: red;
//     padding: 0 5px !important;
// }
</style>
