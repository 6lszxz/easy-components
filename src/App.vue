<script setup lang="ts">
function testFunc(){
  alert(1);
}
</script>

<template>
  <ecButton :isActive="false" @click="testFunc">
    111
  </ecButton>
</template>
