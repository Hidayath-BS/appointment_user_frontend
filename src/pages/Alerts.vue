<template>
  <div>
    <div class="display-1 px-2">Alert</div>
    <p class="px-2">The v-alert component is used to convey important information to the user. It comes in 4 variations, success, info, warning and error. These have default icons assigned which can be changed and represent different actions</p>
    <v-flex xs12 sm8 offset-sm2>
      <v-alert :value="true" type="success">
        This is a success alert.
      </v-alert>

      <v-alert :value="true" type="info">
        This is a info alert.
      </v-alert>

      <v-alert :value="true" type="warning">
        This is a warning alert.
      </v-alert>

      <v-alert :value="true" type="error">
        This is a error alert.
      </v-alert>
    </v-flex>
  </div>
</template>
<script>

  export default {
    name: 'Alerts',
    data: () => ({
      
    }),
    created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'Alerts',
          disabled: true
        }
      ]
    }
  }
</script>
