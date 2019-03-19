<template>
  <v-flex xs12 row>
    <h1>Typography</h1>
    <p>The typography of an application is just as important as its functionality. We uses the Material Design spec Roboto Font. Each heading size also has a corresponding helper class to style other elements the same.</p>
    <h3>Examples</h3>
    <div class="display-4 py-3">Light 112sp</div>
    <strong>.display-4</strong>
    <span>font-weight 300</span>
    <div class="display-3 py-3">Regular 56sp</div>
    <strong>.display-3</strong>
    <span>font-weight 400</span>
    <div class="display-2 py-3">Regular 45sp</div>
    <strong>.display-2</strong>
    <span>font-weight 400</span>
    <div class="display-1 py-3">Regular 34sp</div>
    <strong>.display-1</strong>
    <span>font-weight 400</span>
    <div class="headline py-3">Regular 24sp</div>
    <strong>.headline</strong>
    <span>font-weight 400</span>
    <div class="title py-3">Medium 20sp</div>
    <strong>.title</strong>
    <span>font-weight 500</span>
    <div class="subheading py-3">Regular 16sp</div>
    <strong>.subheading</strong>
    <span>font-weight 400</span>
    <div class="body-2 py-3">Medium 14sp</div>
    <strong>.body-2</strong>
    <span>font-weight 500</span>
    <div class="body-1 py-3">Regular 14sp</div>
    <strong>.body-1</strong>
    <span>font-weight 400</span>
    <div class="caption py-3">Regular 12sp</div>
    <strong>.caption</strong>
    <span>font-weight 400</span>
  </v-flex>
</template>

<script>

  export default {
    name: 'Typography',
    data () {
      return {
        
      }
    },
    created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'Typography',
          disabled: true
        }
      ]
    }
  }
</script>
