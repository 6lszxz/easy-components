<script setup lang="ts">
import { computed, useSlots } from 'vue';


interface Props{
    index?: string,
    active?: boolean,
}

const props =withDefaults(defineProps<Props>(),{
    index: 'undefined',
    active: false,
});

props.index = computed(()=>{
	return String(useSlots().default);
}).value


function itemClick():void{
    props.active=true

}

</script>

<template>
<li class="ecMenuItem" @click="itemClick" :class="{active: props.active}">
        <slot>{{ props.index }}</slot>
</li>
</template>

<style scoped lang="scss">
@import "../../utils/index.scss";
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
        background-color: $primary;
    }
}

.active{
    color: $primary;
}

</style>