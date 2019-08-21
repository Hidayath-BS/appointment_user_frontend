<template>
 <v-container fluid class="logg7">
    
        <br><br>
    <v-layout row wrap >

      <v-flex lg4 md4></v-flex>
      <v-flex lg4 md4 sm12 xs12>
         <v-card class="mx-auto logg3">
           <v-flex>
             <center><img src="../static/BN-logo-47.png" class="logg6" alt="Vue Material Admin" width="310" height="80"/>
             </center>
             </v-flex>
          <h3 class="logg5">Login Here</h3>
           <v-card-text>
              <v-form ref="form"
      v-model="valid"
      :lazy-validation="lazy">
                <v-text-field
                   append-icon="person"
                   name="login"
                   label="Login"
                   type="text"
                   :rules="[v => !!v || 'Please Enter the User name']"
                   v-model="model.username"
                 ></v-text-field>
                <v-text-field
                   append-icon="lock"
                   name="password"
                   label="Password"
                   id="password"
                   type="password"
                   :rules="[v => !!v || 'Please Enter the password']"
                   v-model="model.password"
                ></v-text-field>
             </v-form>
            <div class="logg8">
              <a href="#" class="logg" @click="forgot()">Forgot Password ?</a> 
            </div>
           </v-card-text>
          <v-card-actions>
            <v-flex lg2>

            </v-flex>
            
           <v-flex lg8 sm12 xs12>
              <v-btn block color="primary" class="logg4" @click="login()" :loading="loading">Login</v-btn>
          </v-flex>
          </v-card-actions>
          <br>
           <div class="logg8">
              <a href="#" class="logg" @click="register()">New User? Register Here</a> 
            </div>
           
            <br><br>
         </v-card>
       </v-flex>
      </v-layout>
    </v-container> 
</template>

<script>
import {APIService} from '../APIService.js';
import axios from 'axios';
const apiService = new APIService();
const API_URL = apiService.serverUrl;

export default {
  data: () => ({
    loading: false,
    model: {
      username: '',
      password: '',
    
    }
  }),

  methods: {
    login(){
    let flag
    let url = `${API_URL}/auth`;
    return axios.post(url,{
      email: this.model.username,
      password: this.model.password,
    })
    .then(response=>
    {
      console.log(response);
      
      if(response.status==200){ 
        flag=true;
        const token="Bearer"+' '+response.data.token;
        localStorage.setItem('token', token);
        
        this.getUserRole();
        
        console.log("Bearer"+' '+response.data.token);
         
       
      }
      else{
        alert("response not 200 Someting went wrong");
        flag=false
      console.log("Flag"+' '+flag);
      }
    },err=>{
      alert("response is not comming Something went wrong");
    })
  },

  getUserRole(){
    let authorities = [];
    
    let url = `${API_URL}/User`;
    const auth = {
      headers: { Authorization: localStorage.getItem('token') }
    };

    return apiService.getloggedinUser().then((response)=>{
      console.log(response);
      authorities = response;
      console.log(authorities.length);
      
      let fail = 1;
      for(let i =0; i< authorities.authority.length; i++){
        console.log(authorities.authority[i].role);
        if(authorities.authority[i].role == "PATIENT"){
          
          localStorage.setItem("role","PATIENT");
          localStorage.setItem("username", response.firstName);
          this.successLogin();
          fail = 0;
          break;
        }else{

          }
          }
      if(fail == 1){
        this.faliureLogin();
      }


    })
  },
  

  successLogin(){
    localStorage.setItem('loggedIn',1);
    this.$router.push('/dashboard');
  },
  faliureLogin(){
    localStorage.setItem('loggedIn',0);
    localStorage.removeItem("token");
    alert("You are Not a patient User");
  },

    forgot () {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/forgotPassword');
      }, 1000);
    },

    register(){
      this.$router.push('/registration')
    }

  }

};
</script>



<style scoped lang="css">
.logg{
  text-decoration: none;
}

.logg1{
  text-decoration: none;
  float: right;
}
.logg3{
  border-top: 3px solid darkblue;
    border-left: 3px solid darkblue;
    border-right: 3px solid #29abe2;
    border-bottom: 3px solid #29abe2
}
.logg5{
  text-align: center;
  
}
.logg6{
  padding: 8px 0px 0px 2px;
  margin: 0 0 0 10px;

}

.logg8{
  text-align: center;
}




</style>
