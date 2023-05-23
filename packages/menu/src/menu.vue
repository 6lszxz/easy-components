<script setup lang="ts">
import { computed } from 'vue';

interface Props{
    mode?: string,
    defaultActive?: string,
}

const props = withDefaults(defineProps<Props>(),{
    mode: 'row',
})

const isRow = computed(()=>{
    return props.mode === 'row';
})

const isColumn = computed(()=>{
    return props.mode === 'column';
})

</script>

<template>

<ul class = "ecMenu" :class="{row:isRow , column:isColumn}">
    <slot></slot>
</ul>

</template>

<style scoped>
.ecMenu{
    background-color: #545C64;
    display: flex;
}

.row{
    flex-direction: row;
}

.column{
    flex-direction: column;
}

</style>