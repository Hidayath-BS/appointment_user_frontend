import Vue from 'vue'
import Router from 'vue-router'
import ShortKey from 'vue-shortkey'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'

Vue.use(Router)
Vue.use(ShortKey)
Vue.use(VueAxios, axios)
Vue.use(VueCookie)

// Vue.http.options.root = config.api_server_path
// Vue.http.headers.common['Content-Type'] = 'application/json'
// Vue.http.headers.common['Accept'] = 'application/json'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard',
      component: () => import('../pages/Home'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          title: 'Dashboard',
          component: () => import('../pages/Dashboard')
        },
        {
          path: 'typography',
          name: 'Typography',
          title: 'Typography',
          component: () => import('../pages/Typography')
        },
        {
          path: 'settings',
          name: 'Settings',
          title: 'Settings',
          component: () => import('../pages/Settings')
        },
        {
          path: 'text-inputs',
          name: 'TextInputs',
          title: 'Text Inputs',
          component: () => import('../pages/TextInputs')
        },
        {
          path: 'select-boxes',
          name: 'SelectBoxes',
          title: 'Select Boxes',
          component: () => import('../pages/SelectBoxes')
        },
        {
          path: 'selection-controls',
          name: 'SelectionControls',
          title: 'Selection Controls',
          component: () => import('../pages/SelectionControls')
        },
        {
          path: 'buttons',
          name: 'Buttons',
          title: 'Buttons',
          component: () => import('../pages/Buttons')
        },
        {
          path: 'alerts',
          name: 'Alerts',
          title: 'Alerts',
          component: () => import('../pages/Alerts')
        },
        {
          path: 'cards',
          name: 'Cards',
          title: 'Cards',
          component: () => import('../pages/Cards')
        },
        {
          path: 'data-tables',
          name: 'DataTables',
          title: 'DataTables',
          component: () => import('../pages/DataTables')
        },
        {
          path: 'dialogs',
          name: 'Dialogs',
          title: 'Dialogs',
          component: () => import('../pages/Dialogs')
        },

        {
          path: 'date-pickers',
          name: 'DatePickers',
          title: 'DatePickers',
          component: () => import('../pages/DatePickers')
        },
        {
          path: 'time-pickers',
          name: 'TimePickers',
          title: 'TimePickers',
          component: () => import('../pages/TimePickers')
        },
        {
          path: 'snackbars',
          name: 'Snackbars',
          title: 'Snackbars',
          component: () => import('../pages/Snackbars')
        },
        {
          path: 'appointmentform',
          name: 'Appointment Form',
          title: 'Appointment Form',
          component: () => import('../pages/AppointmentForm')
        },
        {
          path: 'UserQuery',
          name: 'User Queries',
          title: 'User Queries',
          component: () => import('../pages/UserQuery')
        },
        {
          path: 'UserQueryList',
          name: 'User Queries List',
          title: 'User Queries List',
          component: () => import('../pages/UserQueryList')
        },
        {
          path: 'UserQueryReply',
          name: 'User Queries Reply',
          component: () => import('../pages/UserQueryReply')
        },
              
        
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/Login')
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('../pages/Registration')
    },
  ]
})

export default router