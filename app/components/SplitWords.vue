<script setup lang="ts">
import { animate } from "motion";

type Word = { t: string; className?: string; br?: boolean };

const props = defineProps<{ words: Word[] }>();

const root = ref<HTMLElement | null>(null);
const label = computed(() => props.words.map((w) => w.t).join(" "));
const hiddenWord = { transform: "translateY(110%) rotate(4deg)" };

onMounted(() => {
  const nodes = root.value?.querySelectorAll<HTMLElement>("[data-word]");
  if (!nodes) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  nodes.forEach((node, i) => {
    if (reduce) {
      node.style.transform = "none";
      return;
    }
    animate(
      node,
      { transform: ["translateY(110%) rotate(4deg)", "translateY(0%) rotate(0deg)"] },
      { duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] },
    );
  });
});
</script>

<template>
  <h1 ref="root" :aria-label="label">
    <span v-for="(w, i) in words" :key="i" aria-hidden="true" class="inline">
      <span class="inline-block overflow-hidden pb-[0.12em] pr-[0.2em] -mr-[0.2em] align-bottom">
        <span data-word class="inline-block" :class="w.className" :style="hiddenWord">{{ w.t }}</span>
      </span>
      <br v-if="w.br" />
      <template v-else>{{ " " }}</template>
    </span>
  </h1>
</template>
