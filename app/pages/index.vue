<template>
  <div class="justify-center bg-slate-900 h-screen">
    <section class="py-12 text-center">
      <div class="flex flex-col items-center gap-4 mb-3">
        <Icon name="logos:nuxt-icon" size="42" />
        <span class="text-stone-300 text-lg font-bold">Unofficial</span>
      </div>
      <h1 class="text-4xl font-bold text-white">Nuxt Boilerplate</h1>
      <span class="text-green-400"
        >A ready to use starter kit for all kinds of projects</span
      >
    </section>
    <section
      class="pt-12 text-center flex min-h-32 justify-center border-t-4 border-t-[#56CB82] bg-gradient-to-b from-[#0D3335] to transparent"
    >
      <h2 class="text-3xl font-bold text-white">
        Packed with <span class="text-green-400">features</span> to use
      </h2>
    </section>
    <section class="flex flex-col items-center">
      <div>
        <ul
          class="grid sm:grid-cols-2 lg:grid-cols-3 [&>li]:text-white [&>li]:flex [&>li]:items-center [&>li>span]:text-green-400 [&>li>span]:me-2 [&>li>span]:text-3xl gap-2 gap-x-16"
        >
          <li class="py-2 font-bold">
            <Icon name="i-simple-icons:googlefonts" />Google Fonts
          </li>
          <li class="py-2 font-bold">
            <Icon name="i-simple-icons:tailwindcss" />TailwindCSS
          </li>
          <li class="py-2 font-bold">
            <Icon name="i-simple-icons:prettier" />Prettier
          </li>
          <li class="py-2 font-bold">
            <Icon name="i-simple-icons:eslint" />Eslint
          </li>
          <li class="py-2 font-bold">
            <Icon name="i-simple-icons:typescript" />Typescript
          </li>
          <li class="py-2 font-bold">
            <Icon name="i-ph:images" />Image Optimisation
          </li>
          <li class="py-2 font-bold">
            <Icon name="i-simple-icons:iconify" />MDI Icons
          </li>
          <li class="py-2 font-bold">
            <Icon name="i-simple-icons:svgo" />Optimized SVG
          </li>
          <li class="py-2 font-bold">
            <Icon name="i-icon-park-solid:seo" />SEO Optimisation
          </li>
        </ul>
      </div>
    </section>
    <section class="text-300 py-5 text-center text-sm text-gray-400">
      <p>© {{ new Date().getFullYear() }} - Boiler Nuxt 3</p>
    </section>
  </div>
</template>
