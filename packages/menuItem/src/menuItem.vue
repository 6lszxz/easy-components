<script setup lang="ts">
import { computed, useSlots } from 'vue';


interface Props{
    index?: string,
}

const props =withDefaults(defineProps<Props>(),{
    index: 'undefined'
});

props.index = computed(()=>{
	return String(useSlots().default);
}).value

</script>

<template>
<li class="ecMenuItem">
        <slot>{{ props.index }}</slot>
</li>
</template>

<style scoped>
.ecMenuItem{
    list-style-type: none;
    width: 40px;
}

.ecMenuItem:hover{
    animation-duration: 0.5s;
    animation-name: pointerAt;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    cursor: pointer;
}

@keyframes pointerAt {
    from{

    }
    to{
        background-color: #FFD103;
    }
}

</style>