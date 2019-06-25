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
          <img src="../static/BN-logo-47.png" alt="Bangalore Nethralaya" width="380" height="80">
          <br><br><v-card flat>
            <v-card-title primary-title>
              <h4>Forgot Password</h4>
            </v-card-title>
            <v-form>
              <div id="btn">
              <v-flex xs12 sm11>
            <v-text-field prepend-icon="person" name="Username" label="Mobile Number" v-model="mobileNumber"></v-text-field>
            </v-flex>
            <v-card-actions>
              <v-layout row wrap>
                <v-flex xs4>
                </v-flex>
                
              <v-flex xs4>
              <v-btn primary block color="primary" @click="forgotPasswordOtp()">Submit</v-btn><br/><br/><br/>
              </v-flex>
              </v-layout>
            </v-card-actions>
            </div>             
            </v-form>
            <div id="otp" style="display:none">
              <v-form>
              <v-flex xs12 sm11>
            <v-text-field prepend-icon="person" name="otp" label="Enter OTP" v-model="otp"></v-text-field>
            </v-flex>
            <v-card-actions>
              <v-layout row wrap>
                <v-flex xs4>
                </v-flex>
              <v-flex xs4>
              <v-btn primary block color="primary" @click="submitotp()">Submit</v-btn><br/><br/><br/>
              </v-flex>
              </v-layout>
            </v-card-actions>             
            </v-form>
            </div>
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
    mobileNumber:'',
    mobileNo:0,
    otp:'',
 
  }),
  methods:{
    
    forgotPasswordOtp(){
      const url = `${API_URL}/forgotpassword/forgotPasswordOtp/`
      const data ={
        "mobilenumber":this.mobileNumber
      }
      console.log(data);
      
      return axios.post(url,data).then(response=>{
        if (response.status==202) {
          this.getotp();
        }
        else if(response.status== 403){
          alert("User with above mobile number is not active... Please register")
        }
        else if(response.status== 409){
          alert("User does not exit")
        }  
        else{
          alert("something went wrong...")
        }     
      })
    },
    getotp(){
    document.getElementById('btn').style.display='none';
    document.getElementById('otp').style.display='block';    
    },
    submitotp(){
      const url = `${API_URL}/forgotpassword/validateFpOtp`
     const data ={
        "mobileNumber":this.mobileNumber,
        "otp":this.otp
      }
      console.log(data);
      
      return axios.post(url,data).then(response=>{
        if (response.status==202) {
          localStorage.setItem("mobile_number",this.mobileNumber);
          this.$router.push('/ResetPassword')
        }
        else if(response.status== 403){
          alert("User with above mobile number is not active... Please register")
        }
        else if(response.status== 409){
          alert("User does not exit")
        }  
        else{
          alert("something went wrong...")
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


</style>
