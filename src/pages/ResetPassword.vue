<template style = "background-color: red">
<v-app id="login">
    <div id="app">
  <v-container>
    <v-layout row class="text-xs-center" style="border-radius:9%">
      <!-- <v-flex xs4>
        <v-card height="500px" style="background-color: lightblue"></v-card>
      </v-flex> -->
      <v-flex xs6 offset-xs3 class="grey lighten-4">
        <v-container style="top: 10%;height:500px;border:2px solid blue" class="text-xs-center">
          <img src="/static/BN-logo-47.png" alt="Bangalore Nethralaya" width="380" height="80">
          <br><br><v-card flat>
            <v-card-title primary-title>
              <h4>Reset Password</h4>
            </v-card-title>
            <v-form>
              <v-flex xs12 sm11>
            <v-text-field prepend-icon="lock" name="Password" label="New Password" type="password" v-model="password"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Confirm Password" type="password"></v-text-field>
            </v-flex>
             
            <v-card-actions>
              <v-layout row wrap>
                  <v-flex xs1></v-flex>
                <v-flex xs4>
                    <v-btn error block color="error">Cancel</v-btn>
                </v-flex>
                <v-flex xs2></v-flex>
              <v-flex xs4>
              <v-btn primary block color="primary" @click="changePassword()">Submit</v-btn>
              </v-flex>
              </v-layout>
            </v-card-actions>
             
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
import {APIService} from '../APIService.js';
import axios from 'axios';
const apiService = new APIService();
const API_URL = apiService.serverUrl;

export default {
  data: () => ({
    loading: false,
  password:'',
  }),
  methods:{
    changePassword(){
      const url = `${API_URL}/forgotpassword/changePswd`
     const data ={
        "mobilenumber":localStorage.getItem('mobile_number'),
        "password":this.password
      }
      console.log(data);
      
      return axios.post(url,data).then(response=>{
        if (response.status==202) {
          alert("Password changed Successfully")
          localStorage.removeItem("mobile_number");
          this.$router.push('/login')
        }
        else if(response.status== 403){
          alert("something went wrong... please Try again")
        }
        else if(response.status== 409){
          alert("something went wrong... please Try again")
        }  
        else{
          alert("something went wrong... please Try again")
        }     
      })
    }
  }
}
</script>
<style scoped lang="css">
#app{
  /* margin-left: 450px; */
  margin-top: 50px;
  
}
/* #login{
  background: url('/static/back.jpg');
  background-repeat: no-repeat;
} */

</style>
