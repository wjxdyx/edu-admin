<script setup name="TableHeaderFilter">
const props = defineProps({
    placeholder: {
        type: String,
        required: true,
        default: ''
    },
    type: {
        type: String,
        default: 'input'
    },
    downFilter: {
        type: Boolean,
        default: true
    },
    optionData: {
        type: Array,
        default: () => []
    },
    optionProps: {
        type: Object,
        default: () => {
            return {
                label: 'label',
                value: 'value'
            }
        }
    }
})
let value = ref('')
</script>

<template>
    <div class="center ">
        <div>{{ props.placeholder }}</div>
        <div v-show="downFilter" style="border-top: 1px solid #eee;">
            <el-input v-if="props.type==='input'" v-model="value" size="small" clearable :placeholder="props.placeholder" style="padding-top: 2px;">
                <template #suffix>
                    <el-icon>
                        <svg-icon name="ep:search" />
                    </el-icon>
                </template>
            </el-input>
            <el-select v-if="props.type==='select'" v-model="value" class="" clearable :placeholder="props.placeholder">
                <el-option
                    v-for="item in props.optionData"
                    :key="item[props.optionProps.value]"
                    :label="item[props.optionProps.label]"
                    :value="item[props.optionProps.value]"
                />
            </el-select>
            <el-date-picker
                v-if="props.type==='date'"
                v-model="value"
                style="width: 100%;"
                type="date"
                clearable
                :placeholder="props.placeholder"
                value-format="x"
                :default-time="[new Date(2000, 1, 1, 12, 0, 0)]"
            />
        </div>
    </div>
</template>
