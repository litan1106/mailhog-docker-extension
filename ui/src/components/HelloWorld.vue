<script setup lang="ts">
import { createDockerDesktopClient } from '@docker/extension-api-client';
import { ref } from 'vue'

const client = createDockerDesktopClient();

function useDockerDesktopClient() {
  return client;
}

defineProps<{ msg: string }>()

const ddClient = useDockerDesktopClient();

const response = ref("");

const fetchAndDisplayResponse =async () => {
    const result = await ddClient.extension.vm?.service?.get('/hello');
    response.value = JSON.stringify(result);
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="fetchAndDisplayResponse">Call backend</button>
    <p>
      Backend response: {{ response }}
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
