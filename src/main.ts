import { createApp } from 'vue'
import { createHead } from '@unhead/vue'

import App from './App.vue'
import 'uno.css'
import '@unocss/reset/tailwind-compat.css'
import highlight from '~/plugins/highlight'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(highlight)
app.mount('#app')
