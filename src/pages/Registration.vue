<template>
<v-app id="login" class="primary">
  <v-content>
    <img src="../static/BN-logo-47.png" alt="Bangalore Nethralaya" width="380" height="80" id="logo">
    <v-container fluid fill-height>
      <v-slide-y-transition mode="out-in">
        <v-layout align-center justify-center id="reg">
          <v-flex xs12 sm12 md5 id="reg1">
            <v-stepper v-model="e1">
    <v-stepper-header id="reg1">
      <v-stepper-step :complete="e1 > 1" step="1">Step 1</v-stepper-step>

      <!-- <v-divider></v-divider> -->

      <v-stepper-step :complete="e1 > 2" step="2">Step 2</v-stepper-step>

      
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        
          <v-card-text>
          <v-layout row wrap>
            <v-flex xs5>
          <v-text-field
            label="First Name"
            v-model="firstName"
            ></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5>
          <v-text-field
            label="Last Name"
            v-model="lastName"
            ></v-text-field>
            </v-flex>
          </v-layout>
          <v-text-field
            label="Mobile Number"
            type="number"
            v-model="mobileNumber"
          ></v-text-field>
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          
        </v-card-text>
     

        <v-layout row wrap>
          <v-flex>
          </v-flex>
          <v-flex xs3>
            <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
          </v-flex>
        
        <!-- <v-flex>
        <v-btn color="red">Cancel</v-btn>
        </v-flex> -->
        </v-layout>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs5> 
          <v-select
                      :items="states"
                      label="Select State"
                      item-text="state"
                      item-value="id"
                      v-model="stateid"
                      @input="getcity( stateid )"
                      single-line
                    ></v-select></v-flex>
                    <v-spacer></v-spacer>
          <v-flex xs5>
              <v-select
                      :items="cities"
                      label="Select City"
                      v-model="cityid"
                      item-text="city"
                      item-value="id"
                      single-line
                    ></v-select>
          </v-flex>
          </v-layout>
          <v-text-field
            label="Address Line 1"
            type="text"
            v-model="addressLine1"
          ></v-text-field>
           <v-text-field
            label="Address Line 2"
            type="text"
            v-model="addressLine2"
          ></v-text-field>
          <v-text-field
            label="Pincode"
            type="number"
            v-model="pincode"
          ></v-text-field>
        </v-card-text>

       <v-layout row wrap>
          <v-flex>
        <v-btn color="red" @click="e1 = 1">Back</v-btn>
        </v-flex>
          <v-flex>
          </v-flex>
          <v-flex xs3>
            <v-btn color="primary" @click="formSubmit()">Register</v-btn>
          </v-flex>
        
       
        </v-layout>
      </v-stepper-content>

      
      
    </v-stepper-items>
  </v-stepper>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-content>    
</v-app>
</template>

<script>
import {APIService} from '../APIService.js';
import axios from 'axios';
const apiService = new APIService();
const API_URL = apiService.serverUrl;

  export default {
    data () {
      return {
        e1: 1,
         firstName:'',
         lastName:'',
         mobileNumber:'',
         email:'',
         password: '',
         addressLine1:'',
         addressLine2:'',
         pincode:'',
         states:[], 
         cities:[],
         stateid:null,
         cityid: null,
         id:null,



      }
    },
    methods:{
      getstate(){
      apiService.getStates().then((response) =>
      {
        this.states=response;
        console.log(response);
       
      }) 
    },
    getcity( id ){
      apiService.getCities(id).then(response=>{
        this.cities= response;
        console.log(response);
      })
    },
    formSubmit(){
      const auth = {
        headers: {
          Authorization:localStorage.getItem('token')
          } 
           }
          const url=`${API_URL}/patientRegister`;
          return axios.post(url,{"firstName": this.firstName,
                                  "lastName": this.lastName,
                                  "email": this.email,
                                  "password": this.password,
                                  "mobileNumber": this.mobileNumber,
                                  "addressLine1": this.addressLine1,
                                  "addressLine2": this.addressLine2,
                                  "pincode": this.pincode,
                                  "stateid":this.stateid,
                                  "cityid":this.cityid},auth).then(response=>{
            if(response.status==202){
              this.$router.push("/login");
              }
              else{
                alert("Somethiong went wrong");
              }
          },err=>{
            alert("Something Went Wrong");
          })
    }
    },

    mounted(){
      this.getstate();
     
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

  #reg{
    margin-top: -100px;
    
  }

  #reg1{
  background-color:red;
  }

  #logo{
    margin-top: 10px;
  }
</style>