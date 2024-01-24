import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Global Async Component
// const app = createApp(App)
// app.component('AsyncGlobalUserComp', defineAsyncComponent(() =>
//   import("./components/Users.vue")
// ))
// app.mount('#app')
