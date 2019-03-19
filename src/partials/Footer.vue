<template>
  <!-- <v-footer :fixed="fixed" app inset>
    <span>&copy; 2018</span>
  </v-footer> -->
  <v-footer height="auto" app inset>
    <v-card
      flat
      tile
      class="grey lighten-3 text-xs-center" width="100%"
    >
      <v-card-text class="grey--text darken-2 py-2">
        &copy;2019 — 
        Powered by <a href="" target="_blank"><strong>Mahat Innovations</strong></a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
      }
    }
  }
</script>
