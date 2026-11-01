<script setup lang="ts">
const props = defineProps<{ items: { href: string; label: string }[] }>();

const active = ref("");
const links = ref<HTMLElement[]>([]);
const pill = reactive({ left: 0, width: 0, on: false });

function place() {
  const i = props.items.findIndex((n) => n.href.slice(1) === active.value);
  const link = links.value[i];
  if (!link) {
    pill.on = false;
    return;
  }
  pill.left = link.offsetLeft;
  pill.width = link.offsetWidth;
  pill.on = true;
}

let io: IntersectionObserver | undefined;

onMounted(() => {
  const els = props.items
    .map((n) => document.getElementById(n.href.slice(1)))
    .filter((e): e is HTMLElement => !!e);
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id;
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  els.forEach((el) => io!.observe(el));
  window.addEventListener("resize", place);
});

onBeforeUnmount(() => {
  io?.disconnect();
  window.removeEventListener("resize", place);
});

watch(active, () => nextTick(place));
</script>

<template>
  <nav aria-label="Primary" class="relative flex items-center gap-1">
    <span
      aria-hidden="true"
      class="absolute inset-y-0 rounded-full bg-teal transition-[left,width,opacity] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
      :style="{ left: pill.left + 'px', width: pill.width + 'px', opacity: pill.on ? 1 : 0 }"
    />
    <a
      v-for="n in items"
      :key="n.href"
      ref="links"
      :href="n.href"
      :aria-current="active === n.href.slice(1) ? 'location' : undefined"
      class="relative rounded-full px-3 py-1.5 text-sm font-semibold transition-colors sm:px-4"
      :class="active === n.href.slice(1) ? 'text-canvas' : 'text-ink-muted hover:text-ink'"
    >
      {{ n.label }}
    </a>
  </nav>
</template>
