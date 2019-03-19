import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import 'babel-polyfill'

import router from './router'

Vue.use(Vuetify, {
	theme:  {
	  primary: "#039BE5",
	  secondary: "#0288D1",
	  accent: "#0277BD",
	  error: "#E53935",
	  warning: "#FFA000",
	  info: "#2196F3",
	  success: "#4caf50"
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data () {
      return {
        breadcrumbs: [],
        sidebarBg: "blue-grey"//blue-grey, deep-purple, indigo, cyan, teal, deep-orange
      }
    }
})
