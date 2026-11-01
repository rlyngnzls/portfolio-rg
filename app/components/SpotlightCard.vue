<script setup lang="ts">
function onMove(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}
</script>

<template>
  <div class="spot" @mousemove="onMove"><slot /></div>
</template>
