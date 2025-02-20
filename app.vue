<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </template>
  
  <script setup>
  const { initScrollReveal } = useScrollReveal()
  
  onMounted(() => {
    initScrollReveal()
  })
  </script>