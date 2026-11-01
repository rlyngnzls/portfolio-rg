<script setup lang="ts">
import { animate, inView } from "motion";

const props = withDefaults(defineProps<{ to: number; from?: number }>(), { from: 0 });

const el = ref<HTMLElement | null>(null);
const value = ref(props.from);

let stop: (() => void) | undefined;

onMounted(() => {
  const node = el.value;
  if (!node) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    value.value = props.to;
    return;
  }
  stop = inView(node, () => {
    animate(props.from, props.to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (x: number) => {
        value.value = Math.round(x);
      },
    });
    stop?.();
  });
});

onBeforeUnmount(() => stop?.());
</script>

<template>
  <span ref="el" class="tabular-nums">{{ value }}</span>
</template>
