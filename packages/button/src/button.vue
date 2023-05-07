<script lang="ts" setup>

</script>

<template>
    <div class = 'ec-button'>
        <slot></slot>
    </div>
</template>

<style scoped>

.ec-button{
    border: 10px;
    border-color: black;
    border-radius: 5%;
    height: 5vh;
    width: 10vw;
}

.ec-button:hover{
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