<template>
<v-app id="login" class="primary">
  <v-content>
    <v-container fluid fill-height>
      <v-slide-y-transition mode="out-in">
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md5>
            <v-card class="elevation-1"><br>
             <div class="layout column align-center">
                  <img src="/static/BN-logo-47.png" alt="Bangalore Nethralaya" width="400" height="80">
                  <h1 class="flex my-4 primary--text">Register Here</h1>
                </div>
              <v-form class="p-4">
                <v-card-text>
                <v-layout row wrap>
                <v-flex xs6>
              <v-subheader> Full Name </v-subheader>
                </v-flex>
                <v-flex xs6>    
                 <v-text-field prepend-icon="person" name="login" label="" type="text"></v-text-field>
                </v-flex>
                </v-layout>

                <v-layout row wrap>
                <v-flex xs6>
              <v-subheader> Contact Number </v-subheader>
                </v-flex>
                <v-flex xs6>
               <v-text-field prepend-icon="phone" name="contactNumber" label="" type="number"></v-text-field>
                </v-flex>
                </v-layout>

                <v-layout row wrap>
                <v-flex xs6>
              <v-subheader> Email Id </v-subheader>
                </v-flex>
                <v-flex xs6>
               <v-text-field prepend-icon="envelope" name="email" label="" type="text"></v-text-field>
                </v-flex>
                </v-layout>

                <v-layout row wrap>
                <v-flex xs6>
              <v-subheader> Password </v-subheader>
                </v-flex>
                <v-flex xs6>
               <v-text-field prepend-icon="lock" name="password" label="" type="password"></v-text-field>
                </v-flex>
                </v-layout>

                </v-card-text>
                <v-card-actions>
                  <v-layout row wrap>
                    <v-flex xs5>
                    </v-flex>
                <v-flex xs5>
                  <v-btn color="primary">Register</v-btn>
                </v-flex>
                  </v-layout>
                </v-card-actions><br>
                <v-layout row wrap>
                  <v-flex xs4>
                  </v-flex>
                <v-flex xs6>
                <p><a href="/#/login">Already have an account?Login Here</a></p>
                </v-flex>
                </v-layout>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-content>    
</v-app>
</template>

<script>
  export default {
    data: () => ({
      
    }),
    props: {
      source: String
    }
  }
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>