import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// // Global Custom Directive
// const app = createApp(App)
// app.directive('font-size', {
//   mounted: (el, binding) => {
//     console.log("el:", el);
//     console.log("binding:", binding);
//     el.style.fontSize = "60px";
//   },
// })
// app.mount('#app')

// // Global Custom Directive - Function Shorthand
// const app = createApp(App)
// app.directive('font-size', (el, binding) => {
//   el.style.fontSize = "70px";
// })
// app.mount('#app')