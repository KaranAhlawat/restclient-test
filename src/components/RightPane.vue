<script setup lang="ts">
import resStore from '../stores/res.store';

const { res } = resStore();
</script>

<template>
  <div>
    Result of Reqwest
    <p>{{ res }}</p>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  text-align: center;
}
</style>
