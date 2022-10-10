
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import quasarUserOptions from './quasar-user-options'

const pinia = createPinia()
createApp(App).use(Quasar, quasarUserOptions).use(router).use(pinia).mount('#app')
