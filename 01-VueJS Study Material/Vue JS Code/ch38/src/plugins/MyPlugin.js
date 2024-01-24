// Create Plugin
import User from "../components/User.vue"
export default {
  install: (app, options) => {
    // Add Global Component
    app.component('User', User)

    // Add Directives
    // app.directive('font-size', (el, binding) => {
    //   el.style.fontSize = "70px"
    // })

    // Passing Customizable Options to Plugins
    // console.log(options)
    app.directive('font-size', (el, binding) => {
      el.style.fontSize = options.fontSize
    })

    // Provide - Inject
    app.provide("website", "GeekyShows")

    // Add global instance properties or methods
    // Inject a globally available $translate() method
    app.config.globalProperties.$translate = (key) => {
      // console.log(key)
      // retrieve a nested property in `options` using `key` as the path
      return key.split('.').reduce((o, i) => {
        // console.log(options)
        // console.log(o)
        // console.log(i)
        if (o) {
          // console.log(o[i])
          return o[i]
        }
      }, options)
    }
  }
}