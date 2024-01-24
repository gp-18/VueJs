import { createApp } from 'vue'
import App from './App.vue'
import ByeWorld from './components/ByeWorld.vue'
import HelloWorld from './components/HelloWorld.vue'

import './assets/main.css'

const app = createApp(App)
app.component("ByeWorld", ByeWorld)
app.component("HelloWorld", HelloWorld)
app.mount('#app')



