<template>
  <div
    class="w-full h-full min-h-screen bg-neutral-50 dark:bg-neutral-900 pb-16 px-8 lg:px-16"
  >
    <div class="container mx-auto max-w-screen-xl relative">
      <nav class="h-20 py-4 flex-between text-primary">
        <div class="font-semibold text-xl flex-center gap-2">
          <Logo class="w-8 h-8" />
        </div>
        <div class="flex-center gap-4">
          <!-- <button
            class="!bg-transparent opacity-50 hover:opacity-100 transition"
            @click="(e) => toggleDarkmode()"
          >
            <carbon:moon class="w-6 h-6" v-if="isDark" />
            <carbon:sun class="w-6 h-6" v-else />
          </button> -->
          <a
            class="opacity-50 hover:opacity-100 transition"
            href="https://github.com/xiaoluoboding/coolshapes-vue"
          >
            <carbon:logo-github class="h-6 w-6" />
          </a>
          <a
            class="opacity-50 hover:opacity-100 transition"
            href="https://x.com/robert_shaw_x/status/1788060005620728002"
          >
            <carbon:logo-twitter class="h-6 w-6" />
          </a>
        </div>
      </nav>

      <header class="py-20">
        <div class="font-extrabold flex-center">
          <span class="text-6xl text-neon">Coolshapes Vue</span>
        </div>
        <h1
          class="text-2xl font-semibold text-center flex-center text-neutral-700 py-4 dark:text-neutral-200"
        >
          A Vue component library for coolshapes with little grainy gradients.
        </h1>
        <p class="text-lg text-center font-500 text-neutral-500">
          <strong class="text-neutral-300">100+ Abstract shapes</strong> with
          cool grainy gradient.
        </p>
        <p class="text-lg text-center font-500 text-neutral-500">
          Ready to use with any design dev project.
        </p>
        <p class="text-sm text-center font-500 text-neutral-500 py-2">
          Open-Source with MIT License, Created by
          <a class="text-neon" href="https://x.com/realvjy">@realvjy</a>, Ported
          by
          <a class="text-neon" href="https://x.com/robert_shaw_x"
            >@robert_shaw_x</a
          >
        </p>
        <div class="flex-center flex-col lg:flex-row gap-4 mt-8">
          <LinkButton
            href="https://github.com/xiaoluoboding/coolshapes-vue"
            target="_blank"
          >
            <Coolshape :size="20" :random="true" />
            <span>Documentation</span>
          </LinkButton>
          <LinkButton href="https://coolshap.es/" target="_blank">
            <Coolshape :size="20" :random="true" />
            <span>Coolshap.es</span>
          </LinkButton>
          <LinkButton href="https://demo.coolshap.es/" target="_blank">
            <Coolshape :size="20" :random="true" />
            <span>Try Demo</span>
          </LinkButton>
        </div>
      </header>

      <main class="w-full pb-8 text-xs 2xl:text-sm">
        <div class="w-full flex-center mb-16">
          <Seprator>
            <section class="relative mx-auto">
              <ToggleButton @toggle="(noise: boolean) => isNoise = !noise" />
            </section>
          </Seprator>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <template v-for="n in 13">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="star"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Star :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 16">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="flower"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Flower :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 12">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="ellipse"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Ellipse :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 7">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="wheel"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Wheel :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 15">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="moon"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Moon :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 11">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="misc"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Misc :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 14">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="triangle"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Triangle :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 8">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="polygon"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Polygon :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 9">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="rectangle"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Rectangle :index="n" :noise="isNoise" />
            </ShapeGrid>
          </template>
          <template v-for="n in 10">
            <ShapeGrid
              :index="n"
              :noise="isNoise"
              type="number"
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Number :index="n - 1" :noise="isNoise" />
            </ShapeGrid>
          </template>
        </div>
      </main>

      <footer
        class="my-16 w-full flex-center text-primary"
        text="neutral-900 dark:neutral-300 opacity-60 sm"
      >
        <div class="copyright flex flex-col justify-center items-center">
          <p>
            Code with ❤ & ☕️ by
            <a class="text-neon" href="https://github.com/xiaoluoboding">
              @xiaoluoboding
            </a>
            <span> © {{ new Date().getFullYear() }}</span>
          </p>
          <p class="flex items-center space-x-1">
            <carbon:logo-twitter class="text-emerald-500" />
            <span>
              <a
                href="https://twitter.com/xiaoluoboding"
                class="text-neon"
                target="_blank"
              >
                Follow me on Twitter
              </a>
            </span>
            <span class="px-2 text-emerald-300">|</span>
            <carbon:cafe class="text-emerald-500" />
            <span>
              <a
                href="https://www.buymeacoffee.com/xlbd"
                target="_blank"
                class="text-neon"
              >
                Buy me a coffee
              </a>
            </span>
            <span class="px-2 text-emerald-300">|</span>
            <mdi:heart class="text-emerald-500" />
            <span>
              <a
                href="https://github.com/sponsors/xiaoluoboding"
                target="_blank"
                class="text-neon"
              >
                Sponsor me on GitHub
              </a>
            </span>
          </p>
        </div>
      </footer>

      <div class="w-full mx-auto"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { useSeoMeta } from '@unhead/vue'

import {
  Star,
  Flower,
  Ellipse,
  Wheel,
  Moon,
  Misc,
  Triangle,
  Polygon,
  Rectangle,
  Number,
  Coolshape
} from '@/index'
import { isDark, toggleDarkmode } from '~/composables/useDarkmode'
import ShapeGrid from '~/components/ShapeGrid.vue'

// useSeoMeta({
//   ogTitle: 'Coolshapes Vue',
//   title: 'Coolshapes Vue',
//   twitterTitle: 'Coolshapes Vue',
//   description:
//     '100+ Abstract shapes with cool grainy gradient. Ready to use with any design dev project.',
//   ogDescription:
//     '100+ Abstract shapes with cool grainy gradient. Ready to use with any design dev project.',
//   twitterDescription:
//     '100+ Abstract shapes with cool grainy gradient. Ready to use with any design dev project.',
//   ogImage: 'https://coolshapes-vue.vercel.app/preview.jpg',
//   twitterImage: 'https://coolshapes-vue.vercel.app/preview.jpg',
//   ogLocale: 'en'
// })

const isNoise = ref(true)

toggleDarkmode(true)
</script>

<style lang="scss">
@import '~/assets/highlight.scss';
</style>
