<script setup lang="ts">
import LeftPane from "./components/LeftPane.vue";
import RightPane from "./components/RightPane.vue";
</script>

<template>
  <div>
    <LeftPane />
    <RightPane />
  </div>
</template>

<style>
body {
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.main {
  padding: 1em;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: hsl(0, 0%, 80%);
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
}
</style>
