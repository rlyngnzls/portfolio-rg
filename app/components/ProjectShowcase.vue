<script setup lang="ts">
import type { Component } from "vue";
import { ChevronLeft, ChevronRight, Pause, Play } from "@lucide/vue";

type Item = { name: string; title: string; desc: string; role: string; icon: Component };

const props = defineProps<{ items: Item[] }>();

const i = ref(0);
const paused = ref(false);
const hover = ref(false);
const reduce = ref(false);
const n = computed(() => props.items.length);
const item = computed(() => props.items[i.value]!);

const go = (d: number) => {
  i.value = (i.value + d + n.value) % n.value;
};

let timer: ReturnType<typeof setInterval> | undefined;

function sync() {
  clearInterval(timer);
  if (reduce.value || paused.value || hover.value) return;
  timer = setInterval(() => go(1), 4500);
}

onMounted(() => {
  reduce.value = matchMedia("(prefers-reduced-motion: reduce)").matches;
  sync();
});
watch([paused, hover], sync);
onBeforeUnmount(() => clearInterval(timer));

const btn =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong text-silver transition-colors hover:border-teal hover:text-teal active:scale-95";
</script>

<template>
  <div
    role="group"
    aria-roledescription="carousel"
    aria-label="Featured systems"
    class="relative rounded-2xl border border-hairline bg-surface-1 p-6 sm:p-8"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @focusin="hover = true"
    @focusout="hover = false"
  >
    <div class="flex items-center justify-between">
      <span class="font-mono text-xs uppercase tracking-[0.18em] text-ink-subtle">Featured Systems</span>
      <span class="font-mono text-xs tabular-nums text-teal">
        {{ String(i + 1).padStart(2, "0") }} / {{ n }}
      </span>
    </div>

    <div class="mt-8 min-h-[19rem]" :aria-live="paused || hover ? 'polite' : 'off'">
      <Transition name="swap" mode="out-in">
        <div :key="item.name">
          <span
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-[#041211] [&_svg]:h-7 [&_svg]:w-7"
          >
            <component :is="item.icon" :size="22" aria-hidden="true" />
          </span>
          <h3 class="mt-6 text-3xl font-bold italic tracking-tight sm:text-4xl">{{ item.name }}</h3>
          <p class="mt-1 font-semibold text-silver">{{ item.title }}</p>
          <p class="mt-3 line-clamp-4 text-ink-muted">{{ item.desc }}</p>
          <span
            class="mt-4 inline-flex rounded-full border border-hairline-strong bg-surface-2 px-3 py-1 text-xs font-semibold text-silver"
          >
            {{ item.role }}
          </span>
        </div>
      </Transition>
    </div>

    <div class="mt-6 h-1 overflow-hidden rounded-full bg-surface-3">
      <div
        class="h-full origin-left rounded-full bg-teal transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
        :style="{ transform: `scaleX(${(i + 1) / n})` }"
      />
    </div>

    <div class="mt-6 flex items-center justify-between">
      <div class="flex gap-2">
        <button type="button" aria-label="Previous system" :class="btn" @click="go(-1)">
          <ChevronLeft :size="18" />
        </button>
        <button type="button" aria-label="Next system" :class="btn" @click="go(1)">
          <ChevronRight :size="18" />
        </button>
      </div>
      <button
        v-if="!reduce"
        type="button"
        :aria-label="paused ? 'Resume auto-advance' : 'Pause auto-advance'"
        :class="btn"
        @click="paused = !paused"
      >
        <Play v-if="paused" :size="16" />
        <Pause v-else :size="16" />
      </button>
    </div>
  </div>
</template>
