<script lang="ts" setup>
interface Props{
    isActive?: boolean
}

const props = withDefaults(defineProps<Props>(),{
    isActive: true,
})
</script>

<template>
    <div class = 'ec-button' :class="{active: props.isActive}">
        <slot></slot>
    </div>
</template>

<style scoped>

.ec-button{
    /*边框*/
    border: 1px;
    border-color: black;
    border-style: solid;
    border-radius: 2em;
    /*大小*/
    height: 5vh;
    width: 10vw;
    /*文本位置*/
    text-align: center;
}

.ec-button:hover{
    cursor: not-allowed;
}

.active:hover{
    animation-duration: 0.5s;
    animation-name: pointerAt;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    cursor: pointer;
}

@keyframes pointerAt{
    from{
    }
    to{
        background-color: #FFD103;
    }
}

</style>