<template>
  <div class="relative">
    <span v-if="isBadge"
      class="bg-color-brand flex items-center justify-center w-4 h-4 rounded-full text-[10px] text-white absolute top-[-12px] left-[5px]"
      >{{ badge }}</span
    >
    <a href="" class="transition-all text-gray-600 flex gap-2 hover:text-color-brand"
      ><i :class="iconClass" class="text-xl"></i> <span>{{ label }}</span></a
    >
  </div>
</template>
<script setup>
    defineProps({
        badge:{
            type: Number,
            default: 0
        },
        label: {
            type: String,
            required: true,
        },
        iconClass: {
            type: String,
            required: true,
        },
        isBadge: {
            type: Boolean,
            default: true,
        }
    });
</script>