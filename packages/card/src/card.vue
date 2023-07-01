<script setup lang="ts">
import { computed } from 'vue';

interface Props{
    isActive?: boolean,
    size?: string
}

const props = withDefaults(defineProps<Props>(),{
    isActive: true,
    size: 'medium'
})

const isLarge = computed(()=>{
    return props.size === 'large';
})

const isMedium = computed(()=>{
    return props.size === 'medium';
})

const isSmall = computed(()=>{
    return props.size === 'small';
})


</script>

<template>
    <div class="ecCard" :class="[
        {active: props.isActive, 
        large: isLarge, 
        medium: isMedium,
        small: isSmall,
        }]">
        <div class="main">
            <h2>
                <slot name="default">title</slot>
            </h2>
            <div>
            <slot name="content"></slot>
            </div>
        </div>
        <div class="side">
            <slot name="side"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../../utils/index.scss';
.ecCard{
    /* 总体的显示方式，分为主页和侧面*/
    display: flex;
    flex-direction: row;
    box-shadow: 2px 2px 5px $info;
    border-radius: 5px;
    background-color: $default;
}

.ecCard *{
    background-color: $default;
}

.main{
    display: flex;
    flex-direction: column;
}

.ecCard:hover{
    cursor: not-allowed;
}
.active:hover{
    cursor: pointer;
}
.medium{
    width: 45vw;
    height: 15vh;
}
.large{
    width: 60vw;
    height: 30vh;
}

.small{
    width: 30vw;
    height: 10vh;
}
.medium>.side{
    margin-top: auto;
    padding: 0;
    width: 15vw;
    height: 15vh;
}

.large>.side{
    margin-top: auto;
    padding: 0%;
    width: 20vw;
    height: 30vh;
}
.small>.side{
    margin-top: auto;
    padding: 0%;
    width: 10vw;
    height: 10vh;
}
.medium>.main{
    width:45vw;
    height: 15vh;
    padding: 0;
}
.small>.main{
    width:10vw;
    height: 10vh;
}
.large>.main{
    width: 20vw;
    height: 30vh;
}
</style>