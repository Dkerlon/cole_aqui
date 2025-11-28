<template>
<p v-if="pending" class="text-gray-500">Carregando...</p>

<pre v-else class="whitespace-pre-wrap bg-gray-100 p-4 rounded">
{{ anotacao.texto }}
</pre>

<p v-if="error">Erro: {{ error.message }}</p>
</template>

<script setup>
const route = useRoute()

const { data: anotacao, pending, error } = await useAsyncData(
  () => $fetch(`/api/anotacao/${route.params.id}`)
)
</script>