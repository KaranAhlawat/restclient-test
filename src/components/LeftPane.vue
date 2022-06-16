<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api";
import resStore from "../stores/res.store";

const url = ref("")
const { setRes } = resStore();

async function makeReq() {
  try {
    let res: string = await invoke('make_req', { url: url.value });
    setRes(res);
  } catch (e: any) {
    setRes(e);
  }
}

function reset() {
  url.value = ""
  setRes("");
}
</script>

<template>
  <div>
    Enter the URL
    <div class="spacer"></div>
    <input v-bind:inputmode="'url'" v-model="url">
    <button @click="makeReq">GET</button>
    <p>{{ url || "Empty for now" }}</p>
    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  text-align: center;
}

.spacer {
  padding: 1rem;
}
</style>
