<template>
<v-app id="login">
  <v-content>
    <v-container fluid fill-height>
        <v-layout align-center justify-center id="reg">
          <v-flex xs12 sm12 md5>
            <v-card class="mx-auto regg7">
             <center> <img src="../static/BN-logo-47.png" alt="Bangalore Nethralaya" width="305" height="80" id="logo"></center>
              <h2 class="regg5">Register Here</h2>
              <v-card-text>
                <v-form ref="form"
                        v-model="valid"
                lazy-validation>
                <v-layout row wrap>
                 <v-flex lg5 xs12 sm12>
                   <v-text-field
                   name="firstname"
                   label="First Name"
                   type="text"
                   v-model="firstName"
                   :rules="[v => !!v || 'Please Enter the firstname']"
                 ></v-text-field>
                 </v-flex>
                <v-spacer></v-spacer>
                <v-flex lg5 xs12 sm12>
                  <v-text-field
                   name="lastname"
                   label="Last Name"
                   type="text"
                   v-model="lastName"
                   :rules="[v => !!v || 'Please Enter the lastname']"
                ></v-text-field>
                </v-flex>
                
                </v-layout>

                <v-layout row wrap>
                 <v-flex lg5 xs12 sm12>
                   <v-text-field
                   name="mobilenumber"
                   label="Mobile Number"
                   type="number"
                    v-model="mobileNumber"
                    :rules="[v => !!v || 'Please Enter the mobile number']"
                 ></v-text-field>
                 </v-flex>
                <v-spacer></v-spacer>
                <v-flex lg5 xs12 sm12>
                  <v-text-field
                   name="email"
                   label="Email"
                   type="email"
                   v-model="email"
                   :rules="[v => !!v || 'Please Enter the email-id']"
                ></v-text-field>
                </v-flex>
                
                </v-layout>

                <v-layout row wrap>
                 <v-flex lg5 xs12 sm12>
                   <v-select
                      :items="states"
                      label="Select State"
                      item-text="state"
                      item-value="id"
                      v-model="stateid"
                      @input="getcity( stateid )"
                      single-line
                      :rules="[v => !!v || 'Please Select state']"
                    ></v-select>

                 </v-flex>
                <v-spacer></v-spacer>
                <v-flex lg5 xs12 sm12>
                  <v-select
                      :items="cities"
                      label="Select City"
                      v-model="cityid"
                      item-text="city"
                      item-value="id"
                      single-line
                      :rules="[v => !!v || 'Please Select city']"
                    ></v-select>

                </v-flex>
                
                </v-layout>

                <v-layout>
                  <v-flex lg12 xs12 sm12>
                  <v-text-field
                   name="addressline1"
                   label="Address Line1"
                   type="text"
                    v-model="addressLine1"
                    :rules="[v => !!v || 'Please Enter the address']"
                ></v-text-field>
                </v-flex>
                </v-layout>

                <v-layout>
                  <v-flex lg12 xs12 sm12>
                  <v-text-field
                   name="addressline2"
                   label="Address Line2"
                   type="text"
                   v-model="addressLine2"
                   :rules="[v => !!v || 'Please Enter the address']"
                ></v-text-field>
                </v-flex>
                </v-layout>

                <v-layout>
                  <v-flex lg12 xs12 sm12>
                  <v-text-field
                   name="pincode"
                   label="Pincode"
                   type="number"
                   v-model="pincode"
                   :rules="[v => !!v || 'Please Enter the pincode']"
                ></v-text-field>
                </v-flex>
                </v-layout>

                <v-layout>
                  <v-flex lg12 xs12 sm12>
                  <v-text-field
                   name="password"
                   label="Password"
                   type="password"
                   v-model="password"
                   :rules="[v => !!v || 'Please Enter the password']"
                ></v-text-field>
                </v-flex>
                </v-layout>

             </v-form>
              </v-card-text>

              <v-card-actions>
                <v-layout row wrap>
                  <v-spacer></v-spacer>
                  <v-flex lg5 sm6 xs9>
                    <v-btn color="blue" @click="formSubmit()" dark outline>Register</v-btn>
                    <v-btn color="red" dark outline @click="reset()" >Cancel</v-btn>
                  </v-flex>
                  <v-spacer></v-spacer>
                </v-layout>
              </v-card-actions>
               
                   <center><router-link class="regg9" to="/login">Already have an account?Login Here</router-link></center>   
                 <br>
                
            </v-card>
          </v-flex>
        </v-layout>
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
         formRequest: null,
        displayError: false,
       
       
        



      }
    },
    methods:{
      reset () {
        this.$refs.form.reset()
      },
      
      getstate(){
      apiService.getState().then((response) =>
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
          const url=`${API_URL}/register/patientRegister`;
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
    background-color: blue;
  }

  /* #reg{
    margin-top: -100px;
    
  } */

  #reg1{
    background-color: crimson;
  }

  #logo{
    margin-top: 10px;
  }

  .regg5{
    text-align: center;
    color: red;
  }

  .regg7{
    border-radius: 2%;
    border: 1px solid darkred;
  }

  .regg9{
    text-decoration: none;
  }

  
</style>