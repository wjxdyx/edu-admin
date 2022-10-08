<script setup name="TableHeaderFilter">
const props = defineProps({
    placeholder: {
        type: String,
        required: true,
        default: ''
    },
    active: {
        type: Boolean,
        default: false
    }

})
</script>

<template>
    <div class="df center jc-sb w-100">
        <div>
            {{ props.placeholder }}
        </div>
        <el-icon size="16px" :style="{'color':props.active?'#409EFF':''}">
            <svg-icon name="ep:filter" class="translate-center" />
        </el-icon>
    </div>
</template>
