import { createApp } from 'vue'
import App from './App.vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp(App)
// Install Plugin
// app.use(MyPlugin)
// Install Plugin - Passing Customizable Options to Plugins
app.use(MyPlugin, {
  fontSize: "80px",
  hindi: {
    hello: 'नमस्ते',
    student: 'छात्र'
  }
})

app.mount('#app')
