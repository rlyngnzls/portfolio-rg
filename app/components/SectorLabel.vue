<script setup lang="ts">
defineProps<{ n: 1 | 2 | 3 }>();
</script>

<template>
  <div class="flex items-center gap-3">
    <span class="flex gap-1" aria-hidden="true">
      <span
        v-for="i in 3"
        :key="i"
        class="h-1.5 w-6 rounded-full"
        :class="i === n ? (n === 2 ? 'bg-[#b14aed]' : 'bg-teal') : 'bg-surface-3'"
      />
    </span>
    <SectionLabel><slot /></SectionLabel>
  </div>
</template>
