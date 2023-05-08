<script setup lang="ts">
function testFunc(){
  alert(1);
}
</script>

<template>
  <ecCard  size="small">
    <template #side>
      <ecButton>
        1
      </ecButton>
    </template>
  </ecCard>
</template>
