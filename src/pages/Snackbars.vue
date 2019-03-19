<template>
  <v-flex xs12 sm10 offset-sm1>
    <div class="display-1 my-3">Snackbars</div>
    <v-card>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 sm3>
              <v-checkbox v-model="x" value="left" label="Left"></v-checkbox>
            </v-flex>
            <v-flex xs6 sm3>
              <v-checkbox v-model="x" value="right" label="Right"></v-checkbox>
            </v-flex>
            <v-flex xs6 sm3>
              <v-checkbox v-model="y" value="top" label="Top"></v-checkbox>
            </v-flex>
            <v-flex xs6 sm3>
              <v-checkbox v-model="y" value="bottom" label="Bottom"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm3>
              <v-checkbox v-model="mode" value="multi-line" label="Multi-line (mobile)"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm3>
              <v-checkbox v-model="mode" value="vertical" label="Vertical (mobile)"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm4 offset-sm4>
              <v-text-field v-model="text" type="text" label="Text"></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field v-model.number="timeout" type="number" label="Timeout"></v-text-field>
            </v-flex>
          </v-layout>

        </v-container>
        <v-btn block color="primary" dark @click.native="snackbar = true">Show Snackbar</v-btn>
      </v-card-text>
      <v-snackbar
        :timeout="timeout"
        :top="y === 'top'"
        :bottom="y === 'bottom'"
        :right="x === 'right'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode === 'vertical'"
        v-model="snackbar"
      >
        {{ text }}
        <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-card>
    <div class="title py-3 mt-5">Snackbar Colors</div>
    <v-card>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <v-radio-group v-model="color" row>
                <v-radio
                  v-for="(colorValue, i) in ['success', 'info', 'error', 'cyan darken-2']"
                  :key="i"
                  :value="colorValue"
                  :label="colorValue"
                  :color="colorValue"
                ></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 sm3>
              <v-checkbox v-model="mode1" value="multi-line" label="Multi-line (mobile)"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm3>
              <v-checkbox v-model="mode1" value="vertical" label="Vertical (mobile)"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm4 offset-sm4>
              <v-text-field v-model="text1" type="text" label="Text"></v-text-field>
            </v-flex>
            <v-flex xs12 sm4>
              <v-text-field v-model.number="timeout1" type="number" label="Timeout"></v-text-field>
            </v-flex>
          </v-layout>

        </v-container>
        <v-btn block color="primary" dark @click.native="snackbar1 = true">Show Snackbar</v-btn>
      </v-card-text>
      <v-snackbar
        :timeout="timeout1"
        :color="color"
        :multi-line="mode1 === 'multi-line'"
        :vertical="mode1 === 'vertical'"
        v-model="snackbar1"
      >
        {{ text1 }}
        <v-btn dark flat @click.native="snackbar1 = false">Close</v-btn>
      </v-snackbar>
    </v-card>
  </v-flex>
</template>
<script>
  export default {
    name: 'Snackbars',
    data () {
      return {
        snackbar: false,
        y: 'bottom',
        x: 'right',
        mode: '',
        timeout: 6000,
        text: 'Hello, I\'m a snackbar',
        snackbar1: false,
        color: '',
        mode1: '',
        timeout1: 6000,
        text1: 'Hello, I\'m a snackbar'
      }
    },

    methods: {
      
    },
    watch: {
      
    },
    created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'Snack Bars',
          disabled: true
        }
      ]
    }
  }
</script>