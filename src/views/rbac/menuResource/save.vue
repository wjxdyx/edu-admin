<script setup name="SaveMenuResource">
import { saveRouteMenu } from '@/api/system'
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    mode: {
        type: String,
        default: 'create'
        // create,edit
    },
    baseData: {
        type: Object,
        default: () => {
            return {
                role_id: []
            }
        }
    },
    formData: {
        type: Object,
        default: () => {

            return {
                role_id: undefined,
                RouteAuthTags: [],
                delRouteAuthTags: []
            }
        }
    }

})

let formData = toRef(props, 'formData')
let dialogVisible = ref(props.modelValue)
// 监控吧v-model 赋值给dialogvisible
watch(() => props.modelValue, newValue => {
    dialogVisible.value = newValue
})

// 监控dialogVisible 更新v-model
const emits = defineEmits(['update:modelValue'])
watch(dialogVisible, newValue => {
    emits('update:modelValue', newValue)
})
watch(props.formData, (newValue, oldValue) => {
    console.log(newValue, oldValue, 'change,formData')

})
// 来自userRole.vue 下的菜单树数据
const RouteMenuData = inject('RouteMenuData')

const clickAddRouteAuthTags = data => {
    console.log(data)
    formData.value.RouteAuthTags.push({ name: 'ddd', mark: 'test' })
}
// 删除标识
const removeRouteAuthTags = (data, index) => {
    formData.value.RouteAuthTags.splice(index, 1)
    if (data.route_auth_tags_id)
        formData.value.delRouteAuthTags.push(data.route_auth_tags_id)
}
// 保存
const rules = reactive({
    role_id: [
        { required: true, message: '角色必选' }
    ],
    name: [
        { required: true, message: '必填' }
    ],
    route_path: [
        { required: true, message: '必填' }
    ]
})
const FormDataRef = ref()
const clickSaveRouteAuthTags =  (dialogVisible, formEl) => {
    console.log('init.clickSaveRouteAuthTags')
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            console.log(formData.value)
            saveRouteMenu(formData.value).then(r => {
                console.log(r)
                dialogVisible.value = false
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>

<template>
    <Dialog v-model="dialogVisible" width="800px" @click-sumbit="(e)=>clickSaveRouteAuthTags(e,FormDataRef)">
        <el-form ref="FormDataRef" status-icon :model="formData" label-width="80px" label-position="top" class="df jc-sb" :rules="rules">
            <div class="w-40">
                <el-form-item label="路由菜单目录" prop="pid">
                    <el-cascader
                        v-model="formData.pid"
                        clearable
                        :props="{value:'route_id',label:'name',emitPath:false,checkStrictly:true}"
                        :disabled="mode==='edit'?true:false" style="width: 100%;" :options="RouteMenuData"
                    />
                </el-form-item>

                <el-form-item label="路由菜单名称" prop="name">
                    <el-input v-model="formData.name" placeholder="唯一值" />
                </el-form-item>
                <el-form-item label="路由菜单Icon">
                    <el-input v-model="formData.icon" placeholder="图标名称" />
                </el-form-item>
                <el-form-item label="路由菜单地址" prop="route_path">
                    <el-input v-model="formData.route_path" placeholder="页面的URL路由地址" />
                </el-form-item>
            </div>
            <div class="w-60 ml-10">
                <el-form-item label="业务标识(用户控制页面的组件权限)">
                    <el-button class="mb-10" @click="clickAddRouteAuthTags">新增</el-button>
                    <el-table size="small" :data="formData.RouteAuthTags" border height="200">
                        <el-table-column prop="name" label="名称">
                            <template #default="scope">
                                <el-input v-model="scope.row.name" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="mark" label="备注">
                            <template #default="scope">
                                <el-input v-model="scope.row.mark" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="mark" label="操作" width="70">
                            <template #default="scope">
                                <el-button link type="danger" @click="removeRouteAuthTags(scope.row,scope.$index)">
                                    <el-icon color="red" size="16px">
                                        <svg-icon name="ep:delete" />
                                    </el-icon>
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form-item>
            </div>
        </el-form>
    </Dialog>
</template>
