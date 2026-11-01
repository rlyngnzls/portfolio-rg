<script setup lang="ts">
import { animate, inView } from "motion";

const props = withDefaults(defineProps<{ delay?: number; y?: number }>(), { delay: 0, y: 24 });

const el = ref<HTMLElement | null>(null);
const hidden = { opacity: 0, transform: `translateY(${props.y}px)` };

let stop: (() => void) | undefined;

onMounted(() => {
  const node = el.value;
  if (!node) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    node.style.opacity = "1";
    node.style.transform = "none";
    return;
  }
  stop = inView(
    node,
    () => {
      animate(
        node,
        { opacity: [0, 1], transform: [`translateY(${props.y}px)`, "translateY(0px)"] },
        { duration: 0.7, delay: props.delay, ease: [0.2, 0.7, 0.2, 1] },
      );
      stop?.();
    },
    { margin: "0px 0px -80px 0px" },
  );
});

onBeforeUnmount(() => stop?.());
</script>

<template>
  <div ref="el" :style="hidden"><slot /></div>
</template>
