<template>
    <div class="p-4 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Cole Aqui</h1>
  
    <textarea v-model="texto" class="w-full border p-2 rounded" rows="6" />
  
    <button
        @click="salvar"
        class="bg-blue-600 text-white px-4 py-2 rounded mt-4"
    >
        Gerar Link
    </button>
  
    <div v-if="link" class="mt-4">
        <p>Seu link:</p>
        <a :href="link" class="text-blue-700 underline">{{ link }}</a>
    </div>
    </div>
  </template>
  
  <script setup>
  const texto = ref("");
  const link = ref("");
  
  async function salvar() {
    const { id } = await $fetch("/api/anotacao", {
    method: "POST",
    body: { texto: texto.value }
    });
  
    link.value = `/n/${id}`;
  }
  </script>
  