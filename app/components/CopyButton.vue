<script setup lang="ts">
import { Check, Copy } from "@lucide/vue";

const props = defineProps<{ text: string }>();
const done = ref(false);

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text);
    done.value = true;
    setTimeout(() => (done.value = false), 1800);
  } catch {
    // clipboard blocked: leave the mailto link as the way in
  }
}
</script>

<template>
  <button
    type="button"
    aria-label="Copy email address"
    class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-hairline-strong text-silver transition-colors hover:border-teal hover:text-teal active:scale-95"
    @click="copy"
  >
    <Transition name="copy" mode="out-in">
      <span :key="done ? 'done' : 'copy'" class="flex">
        <Check v-if="done" :size="18" />
        <Copy v-else :size="18" />
      </span>
    </Transition>
    <span role="status" class="sr-only">{{ done ? "Email address copied" : "" }}</span>
  </button>
</template>
