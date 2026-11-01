<script setup lang="ts">
import { ArrowDown, ArrowUpRight, ChevronDown, Flag, GraduationCap, Gamepad2, Mail } from "@lucide/vue";
import {
  EMAIL,
  achievements,
  activities,
  expertise,
  featured,
  games,
  heroWords,
  hobbies,
  nav,
  ordered,
  rest,
  screenshotFor,
} from "~/data/content";

const btnPrimary =
  "cut-right group inline-flex items-center gap-2 bg-teal py-3.5 pl-7 pr-10 font-bold uppercase tracking-wide text-[#041211] transition-all hover:bg-teal-hover active:scale-[0.98]";
const btnGhost =
  "group inline-flex items-center gap-2 rounded-full border border-hairline-strong px-7 py-3.5 font-semibold uppercase tracking-wide text-silver transition-colors hover:border-teal hover:text-teal active:scale-[0.98]";
</script>

<template>
  <div>
    <ScrollProgress />
    <a
      href="#top"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:font-bold focus:text-[#041211]"
    >
      Skip to content
    </a>

    <header class="fixed inset-x-0 top-3 z-40 px-3 sm:top-4">
      <div
        class="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border border-silver/15 bg-canvas/70 py-2 pl-3 pr-2 backdrop-blur-xl sm:pl-4"
      >
        <a href="#top" class="flex items-center gap-2.5 text-base font-bold italic tracking-tight">
          <span
            class="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-sm font-black not-italic text-[#041211]"
          >
            RG
          </span>
          <span class="hidden sm:inline">Rolyn Gonzales</span>
        </a>
        <SiteNav :items="nav" />
      </div>
    </header>

    <main id="top" class="flex-1">
      <!-- Hero -->
      <section class="relative overflow-hidden">
        <div class="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div class="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <span class="num-outline absolute -right-8 top-16 select-none text-[24rem] font-black italic leading-none">
            19
          </span>
          <span class="livery livery-teal" />
          <span class="livery livery-silver" />
        </div>
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <span class="streak top-[22%]" style="animation-delay: 0s" />
          <span class="streak top-[48%]" style="animation-delay: 2.4s; animation-duration: 9s" />
          <span class="streak top-[74%]" style="animation-delay: 4.6s; animation-duration: 6s" />
        </div>

        <div
          class="relative mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div>
            <Reveal :y="12">
              <span
                class="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-1 px-3.5 py-1.5 text-sm font-semibold text-silver"
              >
                <Flag :size="14" class="text-teal" aria-hidden="true" />
                Web Developer &amp; Designer
              </span>
            </Reveal>

            <SplitWords
              :words="heroWords"
              class="mt-8 text-balance text-6xl font-black italic leading-[0.92] tracking-[-0.03em] sm:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]"
            />

            <Reveal :delay="0.7">
              <p class="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
                I&rsquo;m Rolyn Gonzales, a web developer who loves to bring concepts to reality. I build with
                Laravel, PHP and Vue.js, and design the interfaces people actually use.
              </p>
              <div class="mt-10 flex flex-wrap gap-4">
                <a href="#projects" :class="btnPrimary">
                  View Projects
                  <ArrowDown :size="18" class="nudge" aria-hidden="true" />
                </a>
                <a :href="`mailto:${EMAIL}`" :class="btnGhost">
                  <Mail
                    :size="18"
                    class="transition-transform group-hover:-rotate-12 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  Email Me
                </a>
              </div>
            </Reveal>

            <Reveal :delay="0.85">
              <dl class="mt-14 flex gap-10 sm:gap-14">
                <div>
                  <dt><SectionLabel>Systems Delivered</SectionLabel></dt>
                  <dd class="mt-2 font-mono text-4xl font-medium text-teal sm:text-5xl"><CountUp :to="19" /></dd>
                </div>
                <div>
                  <dt><SectionLabel>BSIT Graduate</SectionLabel></dt>
                  <dd class="mt-2 font-mono text-4xl font-medium text-teal sm:text-5xl">
                    <CountUp :to="2019" :from="1990" />
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal :delay="0.5" :y="40" class="lg:w-full lg:justify-self-end">
            <ProjectShowcase :items="ordered" />
          </Reveal>
        </div>
      </section>

      <div aria-hidden="true" class="checker" />

      <!-- Projects -->
      <section id="projects" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:py-32">
        <Reveal>
          <SectorLabel :n="1">Results</SectorLabel>
          <h2
            class="metal-soft mt-4 text-balance text-4xl font-bold italic leading-none tracking-tight sm:text-6xl"
          >
            Systems I&rsquo;ve Built
          </h2>
          <p class="mt-5 max-w-xl text-lg text-ink-muted">
            Four flagship systems first, then the full list of nineteen, each with the role I played.
          </p>
        </Reveal>

        <ul class="mt-14 grid gap-4 lg:grid-cols-2">
          <li v-for="(p, i) in featured" :key="p.name">
            <Reveal :delay="(i % 2) * 0.08" :y="20" class="h-full">
              <SpotlightCard
                class="group flex h-full flex-col rounded-2xl border border-hairline bg-surface-1 transition-all duration-300 hover:-translate-y-1 hover:border-teal/50"
              >
                <div class="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
                  <img
                    v-if="screenshotFor(p.name)"
                    :src="screenshotFor(p.name)!"
                    :alt="`${p.name} screenshot`"
                    class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    v-else
                    class="flex h-full w-full items-center justify-center text-teal/80 transition-transform duration-500 group-hover:scale-110 [&_svg]:h-16 [&_svg]:w-16"
                  >
                    <component :is="p.icon" :size="22" aria-hidden="true" />
                  </div>
                  <span class="absolute left-5 top-4 font-mono text-xs text-ink-subtle">P{{ p.n }}</span>
                </div>
                <div class="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 class="text-3xl font-bold italic tracking-tight">{{ p.name }}</h3>
                  <p class="mt-1 text-sm font-semibold text-silver">{{ p.title }}</p>
                  <p class="mt-4 text-ink-muted">{{ p.desc }}</p>
                  <div class="mt-auto pt-6">
                    <span
                      class="inline-flex rounded-full border border-hairline-strong bg-surface-2 px-3 py-1 text-xs font-semibold text-silver"
                    >
                      {{ p.role }}
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </li>
        </ul>

        <Reveal class="mt-16">
          <h3 class="text-2xl font-bold italic tracking-tight">More Systems</h3>
          <ul class="mt-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
            <li v-for="p in rest" :key="p.name" class="border-b border-hairline">
              <details class="group">
                <summary
                  class="flex cursor-pointer list-none items-center gap-4 py-4 pr-1 transition-colors hover:text-teal [&::-webkit-details-marker]:hidden"
                >
                  <span
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-3 text-teal [&_svg]:h-5 [&_svg]:w-5"
                  >
                    <component :is="p.icon" :size="22" aria-hidden="true" />
                  </span>
                  <span class="w-8 shrink-0 font-mono text-xs text-ink-subtle">P{{ p.n }}</span>
                  <span class="min-w-0 flex-1">
                    <span class="block truncate font-bold italic">{{ p.name }}</span>
                    <span class="block truncate text-sm text-ink-muted">{{ p.title }}</span>
                  </span>
                  <span
                    class="hidden shrink-0 rounded-full border border-hairline-strong bg-surface-2 px-3 py-1 text-xs font-semibold text-silver sm:inline-flex"
                  >
                    {{ p.role }}
                  </span>
                  <ChevronDown
                    :size="18"
                    class="shrink-0 text-ink-subtle transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div class="pb-5 pl-14 pr-2 text-ink-muted">
                  <p>{{ p.desc }}</p>
                  <p class="mt-3 text-sm font-semibold text-silver sm:hidden">{{ p.role }}</p>
                </div>
              </details>
            </li>
          </ul>
        </Reveal>
      </section>

      <!-- Profile -->
      <section id="profile" class="scroll-mt-20 border-y border-hairline bg-surface-1/60">
        <div class="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <SectorLabel :n="2">Profile</SectorLabel>
            <h2
              class="metal-soft mt-4 text-balance text-4xl font-bold italic leading-none tracking-tight sm:text-6xl"
            >
              Clean Code, Clear Interfaces.
            </h2>
          </Reveal>

          <div class="mt-14 grid gap-4 lg:grid-cols-3">
            <Reveal class="lg:col-span-2">
              <SpotlightCard class="h-full rounded-2xl border border-hairline bg-surface-1 p-8 sm:p-10">
                <p class="text-xl leading-relaxed text-ink sm:text-2xl">
                  I&rsquo;m a web developer and tech enthusiast who creates effective digital experiences. I enjoy
                  writing clear code and designing visually appealing, intuitive interfaces.
                </p>
                <p class="mt-5 text-lg text-ink-muted">
                  From Laravel back ends to Vue front ends, plus the graphic design to make them look right.
                  Flexible, motivated, and happiest when a rough concept becomes a working system.
                </p>
              </SpotlightCard>
            </Reveal>

            <Reveal :delay="0.08">
              <SpotlightCard class="h-full rounded-2xl border border-hairline bg-surface-1 p-8">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-3 text-teal">
                  <GraduationCap :size="22" aria-hidden="true" />
                </span>
                <h3 class="mt-6 text-xl font-bold italic">BS Information Technology</h3>
                <p class="mt-1 text-ink-muted">Polytechnic University of the Philippines, San Juan Campus</p>
                <p class="mt-4 font-mono text-sm text-teal">Graduated 2019</p>
              </SpotlightCard>
            </Reveal>

            <Reveal class="lg:col-span-3">
              <SpotlightCard class="rounded-2xl border border-hairline bg-surface-1 p-8 sm:p-10">
                <SectionLabel>Expertise</SectionLabel>
                <div class="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div v-for="g in expertise" :key="g.group" class="group">
                    <span
                      class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-3 text-teal transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-teal group-hover:text-[#041211]"
                    >
                      <component :is="g.icon" :size="20" aria-hidden="true" />
                    </span>
                    <h3 class="mt-4 text-lg font-bold italic">{{ g.group }}</h3>
                    <ul class="mt-3 flex flex-wrap gap-2">
                      <li
                        v-for="t in g.items"
                        :key="t"
                        class="rounded-full border border-hairline-strong bg-surface-2 px-3 py-1 text-sm font-semibold text-silver transition-colors hover:border-teal hover:text-teal"
                      >
                        {{ t }}
                      </li>
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal class="lg:col-span-2">
              <SpotlightCard class="h-full rounded-2xl border border-hairline bg-surface-1 p-8 sm:p-10">
                <SectionLabel>Achievements</SectionLabel>
                <ul class="mt-6 space-y-5">
                  <li v-for="a in achievements" :key="a.title" class="group flex items-start gap-4">
                    <span
                      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-3 text-teal transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-teal group-hover:text-[#041211]"
                    >
                      <component :is="a.icon" :size="20" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 class="text-lg font-bold italic">{{ a.title }}</h3>
                      <p v-if="a.note" class="text-ink-muted">{{ a.note }}</p>
                    </div>
                  </li>
                </ul>
                <p class="mt-6 text-sm text-ink-subtle">Also: {{ activities.join(" · ") }}</p>
              </SpotlightCard>
            </Reveal>

            <Reveal :delay="0.08">
              <SpotlightCard class="h-full rounded-2xl border border-hairline bg-surface-1 p-8">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-3 text-teal">
                  <Gamepad2 :size="22" aria-hidden="true" />
                </span>
                <h3 class="mt-6 text-xl font-bold italic">Android Games</h3>
                <p class="mt-1 text-ink-muted">Freelance 2D platform games built with the Construct 2 engine.</p>
                <ul class="mt-5 flex flex-wrap gap-2">
                  <li
                    v-for="g in games"
                    :key="g"
                    class="rounded-full border border-hairline-strong bg-surface-2 px-3 py-1 text-sm font-semibold text-silver"
                  >
                    {{ g }}
                  </li>
                </ul>
              </SpotlightCard>
            </Reveal>

            <Reveal class="lg:col-span-3">
              <SpotlightCard class="rounded-2xl border border-hairline bg-surface-1 p-8">
                <div class="flex flex-wrap items-center justify-between gap-6">
                  <SectionLabel>Off the Clock</SectionLabel>
                  <ul class="flex flex-wrap gap-6 sm:gap-10">
                    <li v-for="h in hobbies" :key="h.label" class="group flex items-center gap-3">
                      <span
                        class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-3 text-silver transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-teal group-hover:text-[#041211]"
                      >
                        <component :is="h.icon" :size="20" aria-hidden="true" />
                      </span>
                      <span class="text-sm text-ink-muted">{{ h.label }}</span>
                    </li>
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:py-32">
        <Reveal>
          <SpotlightCard
            class="relative overflow-hidden rounded-3xl border border-hairline bg-surface-1 p-8 sm:p-14"
          >
            <div class="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div class="relative">
              <SectorLabel :n="3">Contact</SectorLabel>
              <h2
                class="metal-soft mt-4 text-balance text-5xl font-black italic leading-[0.95] tracking-tight sm:text-7xl"
              >
                Box, box.
                <br />
                <span class="text-teal">Let&rsquo;s talk.</span>
              </h2>
              <p class="mt-6 max-w-lg text-lg text-ink-muted">
                Have a system, a site or an idea that needs building? Send me a message.
              </p>
              <div class="mt-10 flex flex-wrap items-center gap-3">
                <a
                  :href="`mailto:${EMAIL}`"
                  :class="[btnPrimary, 'min-w-0 max-w-full break-all text-sm sm:text-base']"
                >
                  {{ EMAIL }}
                  <ArrowUpRight
                    :size="18"
                    class="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <CopyButton :text="EMAIL" />
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </section>
    </main>

    <footer class="relative overflow-hidden">
      <div aria-hidden="true" class="checker" />
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8">
        <SectionLabel>© 2026 Rolyn Jay P. Gonzales</SectionLabel>
      </div>
    </footer>
  </div>
</template>
