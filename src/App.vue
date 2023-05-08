<script setup lang="ts">
function testFunc(){
  alert(1);
}
</script>

<template>
  <ecCard :isActive="true">
    <template #side>
      <ecButton>
        1
      </ecButton>
    </template>
  </ecCard>
</template>
