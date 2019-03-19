<template style = "background-color: red">
<v-app id="login">
    <div id="app">
  <v-container>
    <v-layout row class="text-xs-center" style="border-radius:9%">
      <!-- <v-flex xs4>
        <v-card height="500px" style="background-color: lightblue"></v-card>
      </v-flex> -->
      <v-flex xs6 class="grey lighten-4">
        <v-container style="top: 10%;height:500px;border:2px solid blue" class="text-xs-center">
          <img src="/static/BN-logo-47.png" alt="Bangalore Nethralaya" width="380" height="80">
          <br><br><v-card flat>
            <v-card-title primary-title>
              <h4>Login Here</h4>
            </v-card-title>
            <v-form>
              <v-flex xs12 sm11>
            <v-text-field prepend-icon="person" name="Username" label="Username"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
            </v-flex>
            <v-card-actions>
              <v-layout row wrap>
                <v-flex xs4>
                </v-flex>
              <v-flex xs4>
              <v-btn primary block color="primary">Login</v-btn>
              </v-flex>
              </v-layout>
            </v-card-actions>
             <br> <v-flex>
              <p><a href="/#/registration">Don't Have an account?SignUp Here</a></p>
              </v-flex><br>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</div> 
</v-app> 
</template>

<script>
 
</script>
<style scoped lang="css">
#app{
  margin-left: 450px;
  margin-top: 50px;
  
}
/* #login{
  background: url('/static/back.jpg');
  background-repeat: no-repeat;
} */

</style>
