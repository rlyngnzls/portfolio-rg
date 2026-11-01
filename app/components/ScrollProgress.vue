<script setup lang="ts">
import { scroll } from "motion";

const bar = ref<HTMLElement | null>(null);
let stop: (() => void) | undefined;

onMounted(() => {
  stop = scroll((progress: number) => {
    if (bar.value) bar.value.style.transform = `scaleX(${progress})`;
  });
});

onBeforeUnmount(() => stop?.());
</script>

<template>
  <div
    ref="bar"
    aria-hidden="true"
    class="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-teal"
    style="transform: scaleX(0)"
  />
</template>
