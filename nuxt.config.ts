import tailwindcss from "@tailwindcss/vite";

const description = "Portfolio of Rolyn Jay P. Gonzales: web developer and designer.";
const title = "Rolyn Gonzales — Web Developer & Designer";

export default defineNuxtConfig({
  compatibilityDate: "2026-11-01",
  devtools: { enabled: false },
  modules: ["@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  fonts: {
    families: [
      { name: "Titillium Web", provider: "google", weights: [400, 600, 700, 900], styles: ["normal", "italic"] },
      { name: "JetBrains Mono", provider: "google", weights: [400, 500] },
    ],
  },
  app: {
    head: {
      title,
      htmlAttrs: { lang: "en", class: "h-full antialiased" },
      bodyAttrs: { class: "min-h-full flex flex-col" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: description },
        { name: "theme-color", content: "#08090a" },
        { name: "color-scheme", content: "dark" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
      ],
      noscript: [
        {
          innerHTML:
            '<style>[style*="opacity: 0"],[style*="opacity:0"]{opacity:1!important;transform:none!important}</style>',
        },
      ],
    },
  },
});
