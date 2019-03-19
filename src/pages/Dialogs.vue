<template>
  <v-flex xs12 sm8 offset-sm2>
    <div class="text-xs-center">
      <v-dialog v-model="dialog" max-width="290">
        <v-btn slot="activator" color="primary" dark>Open Dialog 1</v-btn>
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog1" persistent max-width="500px">
        <v-btn slot="activator" color="primary" dark>Open Dialog 2</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Legal first name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    label="Legal last name"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                    autocomplete
                    chips
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog1 = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog1 = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" scrollable max-width="300px">
        <v-btn slot="activator" color="primary" dark>Open Dialog 3</v-btn>
        <v-card>
          <v-card-title>Select Country</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="dialogm1" column>
              <v-radio label="Bahamas, The" value="bahamas"></v-radio>
              <v-radio label="Bahrain" value="bahrain"></v-radio>
              <v-radio label="Bangladesh" value="bangladesh"></v-radio>
              <v-radio label="Barbados" value="barbados"></v-radio>
              <v-radio label="Belarus" value="belarus"></v-radio>
              <v-radio label="Belgium" value="belgium"></v-radio>
              <v-radio label="Belize" value="belize"></v-radio>
              <v-radio label="Benin" value="benin"></v-radio>
              <v-radio label="Bhutan" value="bhutan"></v-radio>
              <v-radio label="Bolivia" value="bolivia"></v-radio>
              <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
              <v-radio label="Botswana" value="botswana"></v-radio>
              <v-radio label="Brazil" value="brazil"></v-radio>
              <v-radio label="Brunei" value="brunei"></v-radio>
              <v-radio label="Bulgaria" value="bulgaria"></v-radio>
              <v-radio label="Burkina Faso" value="burkina"></v-radio>
              <v-radio label="Burma" value="burma"></v-radio>
              <v-radio label="Burundi" value="burundi"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="dialog2 = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog2 = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-flex>
</template>
<script>
  export default {
    name: 'Dialogs',
    data () {
      return {
        dialog: false,
        dialog1: false,
        dialog2: false
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
          text: 'Dialogs',
          disabled: true
        }
      ]
    }
  }
</script>