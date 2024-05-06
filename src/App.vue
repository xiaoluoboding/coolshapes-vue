<template>
  <div
    class="w-full h-full min-h-screen bg-neutral-50 dark:bg-neutral-900 pb-16 px-8 lg:px-16"
  >
    <div class="container mx-auto max-w-5xl relative">
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
            href="https://github.com/xiaoluoboding/coolshapes-vue"
          >
            <carbon:logo-twitter class="h-6 w-6" />
          </a>
        </div>
      </nav>

      <header class="py-20">
        <div class="font-extrabold flex-center">
          <span class="text-6xl text-neon">Coolshapes Vue</span>
        </div>
        <div
          class="text-2xl font-semibold text-center flex-center text-slate-700 py-4 dark:text-slate-200"
        >
          A vue component library for coolshapes with little grainy gradients.
        </div>
        <div class="flex-center flex-col lg:flex-row gap-4 mt-8">
          <LinkButton
            href="https://github.com/xiaoluoboding/coolshapes-vue"
            target="_blank"
          >
            <Coolshape :size="20" random />
            <span>Documentation</span>
          </LinkButton>
          <LinkButton href="https://coolshap.es/" target="_blank">
            <Coolshape :size="20" random />
            <span>Coolshap.es</span>
          </LinkButton>
          <LinkButton href="https://demo.coolshap.es/" target="_blank">
            <Coolshape :size="20" random />
            <span>Try Demo</span>
          </LinkButton>
        </div>
      </header>

      <main class="w-full py-8 text-xs 2xl:text-sm">
        <div class="w-full flex-center mb-16">
          <Seprator>
            <section class="relative mx-auto">
              <ToggleButton @toggle="(noise: boolean) => isNoise = !noise" />
            </section>
          </Seprator>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <template v-for="n in 13">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Star :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 16">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Flower :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 12">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Ellipse :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 7">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Wheel :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 15">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Moon :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 11">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Misc :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 14">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Triangle :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 8">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Polygon :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 9">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Rectangle :index="n" :noise="isNoise" />
            </div>
          </template>
          <template v-for="n in 10">
            <div
              class="rounded-3xl border dark:border-white/5 flex-center aspect-square"
            >
              <Number :index="n - 1" :noise="isNoise" />
            </div>
          </template>
        </div>
      </main>

      <footer
        class="my-16 w-full flex-center text-primary"
        text="slate-900 dark:slate-300 opacity-60 sm"
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

const isNoise = ref(true)

toggleDarkmode(true)

const demoCode0 = `# install dependencies
> pnpm install

# start the doc app with HMR
> pnpm run dev

# build the doc app, available under /dist
> pnpm run build:docs

# build the library, available under /lib
> pnpm run build:lib

# create the changelog
> pnpm run changelog
`
</script>

<style lang="scss">
@import '~/assets/highlight.scss';
</style>
