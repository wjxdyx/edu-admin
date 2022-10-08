<script setup name="EditTree">
const props = defineProps({
    edit: {
        type: Boolean,
        default: false
    },
    treeData: {
        type: Array,
        default: () => []
    },
    // 搜索的文本
    filterText: {
        type: String,
        default: ''
    },
    nodeKey: {
        type: String,
        default: 'role_id'
    }
})
// 树props配置
const defaultProps = {
    children: 'children',
    label: 'name'
}
const dataSource = ref(props.treeData)
watch(() => props.treeData, newValue => {
    dataSource.value = newValue
})

const emit = defineEmits(['update:treeData', 'change-node', 'remove-node', 'click-node'])
// 树节点内容变更
const changeTreeInput = data => {
    emit('change-node', data)
    emit('update:treeData', dataSource)
}

function clickInput(event) {
    event.stopPropagation()
}
// 菜单树点击
const handleNodeClick = data => {
    emit('click-node', data)
}
const { ctx } = getCurrentInstance()
// 添加子分类
const append = data => {
    const newChild = { id: 2, label: 'testtest', children: [] }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)
    // dataSource.value = [...dataSource.value]
}
// 移除分类
const remove = (node, data) => {
    const parent = node.parent
    // const children = parent.data.children || parent.data
    // const index = children.findIndex(d => d[props.nodeKey] === data[props.nodeKey])
    // const delNode =  children.splice(index, 1)
    emit('remove-node', { parent, data })
}

// 同步正在的更改
const inputTreeInput = (data, e) => {
    data.name = e
    ctx.$forceUpdate()
}

const blurTreeInput = () => {

    // data.isEdit = false
    // ctx.$forceUpdate()
}
// 树分类搜索
const searchTreeNode = (value, data) => {
    console.log(value, data)
    if (!value) return true
    return data.name.indexOf(value) !== -1
}
// 搜索
const Tree = ref(null)
watch(() => props.filterText, val => {
    Tree.value.filter(val)
})
</script>

<template>
    <el-tree ref="Tree" :filter-node-method="searchTreeNode" highlight-current :node-key="props.nodeKey" :expand-on-click-node="false" :data="dataSource" :props="defaultProps" @node-click="handleNodeClick">
        <template #default="{ node, data }">
            <div class="df jc-sb w-100">
                <span v-if="props.edit" style="font-size: 14px;">{{ node.label }}</span>
                <el-input v-if="!props.edit" :model-value="node.label" @change="changeTreeInput(data)" @blur="(e)=>blurTreeInput(data,e)" @click.stop="clickInput" @input="(e) => inputTreeInput(data, e,node)">
                    <template #prepend>
                        <el-icon size="18px" @click.stop="append(data)">
                            <svg-icon name="ep:circle-plus" />
                        </el-icon>
                    </template>

                    <template #append>
                        <el-icon size="18px" @click.stop="remove(node,data)">
                            <svg-icon name="ep:delete" />
                        </el-icon>
                    </template>
                </el-input>
            </div>
        </template>
    </el-tree>
</template>

<style lang="scss" scoped>
:deep(.el-input) {
    height: 25px !important;
}
:deep(.el-input__wrapper) {
    background-color: #e1dcdc;
}
:deep(.el-input-group__append) {
    background-color: #e1dcdc;
    padding: 0 5px !important;
}
:deep(.el-input-group__prepend) {
    background-color: #e1dcdc;
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
