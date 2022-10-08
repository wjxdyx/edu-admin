<script setup name="PageHeader">
defineProps({

    search: {
        type: Boolean,
        default: false
    },
    searchWidth: {
        type: String,
        default: '300px'
    }
})
// 搜索关键词
let searchKeyword = ref('')

import useUserStore from '@/store/modules/user'

const emits = defineEmits(['change-search'])
// 失去焦点时 保存到store中
function blurSetAutoComlete() {
    // console.log('blur', searchKeyword)
    // let keyword = JSON.parse(JSON.stringify(searchKeyword.value))
    // useUserStore().setAutoComlete({ value: keyword })
    console.log(useUserStore().auto_comlete)
}
// 自动补全下拉框 选择
function handleSelect(e) {
    console.log(e)

}
// 搜索适合反馈的补全下拉
function querySearch(querySrting, cb) {
    console.log(useUserStore().auto_comlete)
    emits('change-search', querySrting)
    // 获取最近搜索的
    cb(useUserStore().auto_comlete)
}
</script>

<template>
    <div class="header" style="position: relative;">
        <slot />
        <slot v-if="search" name="search">
            <el-autocomplete
                v-model="searchKeyword"
                :fetch-suggestions="querySearch"
                clearable
                :style="{width:searchWidth}"
                class="inline-input w-50 translate-center search"
                placeholder="请输入搜索内容"
                @change="blurSetAutoComlete"
                @select="handleSelect"
            >
                <template #suffix>
                    <!-- <div class="value"></div> -->
                    <el-icon color="red" size="12px">
                        <svg-icon name="ep:edit" />
                    </el-icon>
                </template>
            </el-autocomplete>
        </slot>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    padding: 0 16px;
    background-color: var(--g-app-bg);
    transition: background-color 0.3s;
}
.header + .header {
    border-top: 1px solid #eee;
}
.header:first-of-type {
    border-bottom: 1px solid #eee;
}
</style>
