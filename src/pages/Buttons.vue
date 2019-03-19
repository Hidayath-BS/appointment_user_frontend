<template>
  <v-flex sm12>
    <div class="display-1">Default Buttons</div>
    <div class="pa-3">
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>
    <div class="pa-3">
      <div class="title mb-2">Flat Buttons</div>
      <p>Flat buttons have no box shadow and no background. Only on hover is the container for the button shown.</p>
      <v-layout align-center>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn flat small>Normal</v-btn>
          </div>
          <div>
            <v-btn flat small color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn flat small color="error">Error</v-btn>
          </div>
          <div>
            <v-btn flat small disabled>Disabled</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn flat>Normal</v-btn>
          </div>
          <div>
            <v-btn flat color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn flat color="error">Error</v-btn>
          </div>
          <div>
            <v-btn flat disabled>Disabled</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn flat large>Normal</v-btn>
          </div>
          <div>
            <v-btn flat large color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn flat large color="error">Error</v-btn>
          </div>
          <div>
            <v-btn flat large disabled>Disabled</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </div>

    <div class="pa-3">
      <div class="title mb-2">Raised Buttons</div>
      <p>Raised buttons have a box shadow that increases when clicked. This is the default style.</p>
      <v-layout align-center>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn small>Normal</v-btn>
          </div>
          <div>
            <v-btn small color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn small color="error">Error</v-btn>
          </div>
          <div>
            <v-btn small disabled>Disabled</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn>Normal</v-btn>
          </div>
          <div>
            <v-btn color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn color="error">Error</v-btn>
          </div>
          <div>
            <v-btn disabled>Disabled</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn large>Normal</v-btn>
          </div>
          <div>
            <v-btn large color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn large color="error">Error</v-btn>
          </div>
          <div>
            <v-btn large disabled>Disabled</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </div>

    <div class="pa-3">
      <div class="title mb-2">Depressed Buttons</div>
      <p>Depressed buttons still maintain their background color, but have no box shadow.</p>
      <v-layout align-center>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn depressed small>Normal</v-btn>
          </div>
          <div>
            <v-btn depressed small color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn depressed small color="error">Error</v-btn>
          </div>
          <div>
            <v-btn depressed small disabled>Disabled</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn depressed>Normal</v-btn>
          </div>
          <div>
            <v-btn depressed color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn depressed color="error">Error</v-btn>
          </div>
          <div>
            <v-btn depressed disabled>Disabled</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm4 text-xs-center>
          <div>
            <v-btn depressed large>Normal</v-btn>
          </div>
          <div>
            <v-btn depressed large color="primary">Primary</v-btn>
          </div>
          <div>
            <v-btn depressed large color="error">Error</v-btn>
          </div>
          <div>
            <v-btn depressed large disabled>Disabled</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </div>

    <div class="pa-3">
      <div class="title mb-2">Button Dropdown Variants</div>
      <p>Button dropdowns are regular selects with additional styling.</p>
      <v-container id="dropdown-example" grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <p>Overflow</p>
            <v-select
              :items="dropdown_font"
              overflow
              label="Select"
              target="#dropdown-example"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <p>Segmented</p>
            <v-select
              :items="dropdown_icon"
              label="Select"
              segmented
              target="#dropdown-example"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <p>Editable</p>
            <v-select
              :items="dropdown_edit"
              label="Select"
              editable
              item-value="text"
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="pa-3">
      <div class="title mb-2">Toggle Buttons</div>
      <p>Toggle buttons are essentially styled radio or checkboxes, depending on the properties selected. This component is compatible with the v-toolbar component.</p>
      <v-flex xs12 sm10 offset-sm1>
        <v-card class="py-3">
          <v-card-text>
            <v-container fluid class="pa-0">
              <v-layout row wrap>
                <v-flex xs12 sm6 class="py-2">
                  <p>Exclusive</p>
                  <v-btn-toggle v-model="toggle_exclusive">
                    <v-btn flat>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex xs12 sm6 class="py-2">
                  <p>Multiple</p>
                  <v-btn-toggle v-model="toggle_multiple" multiple>
                    <v-btn flat>
                      <v-icon>format_bold</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_italic</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_underlined</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_color_fill</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex xs12 sm6 class="py-2">
                  <p>No Options Selected</p>
                  <v-btn-toggle v-model="toggle_none">
                    <v-btn flat>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex xs12 sm6 class="py-2">
                  <p>Mandatory</p>
                  <v-btn-toggle v-model="toggle_one" mandatory>
                    <v-btn flat>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                    <v-btn flat>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex xs12 sm6 class="py-2">
                  <p>Text Options</p>
                  <v-btn-toggle v-model="text">
                    <v-btn flat value="left">
                      Left
                    </v-btn>
                    <v-btn flat value="center">
                      Center
                    </v-btn>
                    <v-btn flat value="right">
                      Right
                    </v-btn>
                    <v-btn flat value="justify">
                      Justify
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
                <v-flex xs12 sm6 class="py-2">
                  <p>Text &amp; Icon Options</p>
                  <v-btn-toggle v-model="icon">
                    <v-btn flat value="left">
                      <span>Left</span>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                    <v-btn flat value="center">
                      <span>Center</span>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                    <v-btn flat value="right">
                      <span>Right</span>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                    <v-btn flat value="justify">
                      <span>Justify</span>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </div>

    <div class="pa-3">
      <div class="title mb-2">Icon</div>
      <p>Icons can be used for the primary content of a button.</p>
      <v-flex xs12 sm8 offset-sm2>
      <v-card>
          <v-card-text>
            <v-container fluid class="pa-0">
              <v-layout row wrap>
                <v-flex xs12>
                  <p>Normal</p>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn flat icon color="pink">
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn flat icon color="indigo">
                    <v-icon>star</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn flat icon color="green">
                    <v-icon>cached</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn flat icon color="deep-orange">
                    <v-icon>thumb_up</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout row wrap class="mt-5">
                <v-flex xs12>
                  <p>Disabled</p>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn icon disabled>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn icon disabled>
                    <v-icon>star</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn icon disabled>
                    <v-icon>cached</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn icon disabled>
                    <v-icon>thumb_up</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </div>

    <div class="pa-3">
      <div class="title mb-2">Floating</div>
      <p>Floating buttons are round and usually contain an icon.</p>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-text>
            <div class="text-xs-center">
              <v-btn fab dark small color="primary">
                <v-icon dark>remove</v-icon>
              </v-btn>
              <v-btn fab dark small color="pink">
                <v-icon dark>favorite</v-icon>
              </v-btn>
              <v-btn fab dark color="indigo">
                <v-icon dark>add</v-icon>
              </v-btn>
              <v-btn fab dark color="teal">
                <v-icon dark>list</v-icon>
              </v-btn>
              <v-btn fab dark large color="cyan">
                <v-icon dark>edit</v-icon>
              </v-btn>
              <v-btn fab dark large color="purple">
                <v-icon dark>android</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </div>

    <div class="pa-3">
      <div class="title mb-2">Floating Buttons</div>
      <p>Floating buttons are round and usually contain an icon.</p>
      <v-flex xs12 sm8 offset-sm2>
        <div class="text-xs-center">
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="secondary"
            @click.native="loader = 'loading'"
          >
            Accept Terms
          </v-btn>

          <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="blue-grey"
            class="white--text"
            @click.native="loader = 'loading3'"
          >
            Upload
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>

          <v-btn
            :loading="loading2"
            :disabled="loading2"
            color="success"
            @click.native="loader = 'loading2'"
          >
            Custom Loader
            <span slot="loader">Loading...</span>
          </v-btn>

          <v-btn
            :loading="loading4"
            :disabled="loading4"
            color="info"
            @click.native="loader = 'loading4'"
          >
            Icon Loader
            <span slot="loader" class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </v-btn>
        </div>
      </v-flex>
    </div>

    <div class="pa-3">
      <div class="title mb-2">Rounded Buttons</div>
      <p>Rounded buttons behave the same as regular buttons but have rounded edges.</p>
      <v-flex xs12 sm8 offset-sm2>
        <div class="text-xs-center">
          <v-btn round color="primary" dark>Primary</v-btn>
          <v-btn round color="success">Success</v-btn>
          <v-btn round color="error">Error</v-btn>
          <v-btn round color="warning">Warning</v-btn>
          <v-btn round color="info">Info</v-btn>
        </div>
      </v-flex>
    </div>

    
  </v-flex>
</template>
<script>

  export default {
    name: 'Buttons',
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') }
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' }
      ],
      text: 'center',
      icon: 'justify',
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false
    }),
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
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
          text: 'Buttons',
          disabled: true
        }
      ]
    }
  }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>