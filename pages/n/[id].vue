<template>
    <div class="p-4 max-w-xl mx-auto">
    <p v-if="!anotacao" class="text-gray-500">Carregando...</p>
    <pre v-else class="whitespace-pre-wrap bg-gray-100 p-4 rounded">
{{ anotacao }}
    </pre>
    </div>
</template>

<script setup>
const route = useRoute();

const { texto } = await $fetch(`/api/anotacao/${route.params.id}`);
const anotacao = ref(texto);
</script>
