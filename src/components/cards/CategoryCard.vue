<template>
  <a :style="{ backgroundColor: color }" class="flex flex-col items-center p-3">
    <img :src="category.image" alt="" />
    <b>{{ category.name }}</b>
    <span>{{ category.count }} items</span>
  </a>
</template>
<script setup>
  defineProps({
    color: {
      required: false,
      defaut: '#F2FCE4'
    },
    category: {
      required: true,
      type: Object
    }
  });
</script>