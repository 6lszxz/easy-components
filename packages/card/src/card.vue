<script setup lang="ts">
interface Props{
    isActive?: boolean,
    size?: string
}

const props = withDefaults(defineProps<Props>(),{
    isActive: true,
    size: 'medium'
})

</script>

<template>
    <div class="ecCard" :class="{active: props.isActive}">
        <div class="main">
            <h2>
                <slot name="default">title</slot>
            </h2>
            <div>
            <slot name="content">content</slot>
            </div>
        </div>
        <div class="side">
            <slot name="side">side</slot>
        </div>
    </div>
</template>

<style scoped vars="{props.size}">
.ecCard{
    /* 总体的显示方式，分为主页和侧面*/
    display: flex;
    flex-direction: row;
    width: 40vw;
    height: 15vh;
    box-shadow: 2px 2px 5px gray;
    border-radius: 5px;
    background-color: #f9f7f0;
}

.main{
    display: flex;
    flex-direction: column;
}
.side{
    margin-top: 5vh;
    margin-left: 30vw;
}

.active:hover{
    cursor: pointer;
}

.ecCard :hover{
    cursor: not-allowed;
}
</style>