<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex md12>
                <v-card>
                    <v-card-title>
                        <h3>New Opinion Request</h3>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation>
                            <v-layout row wrap>
                            <v-flex xs4 sm4>
                                <v-label>Email Id</v-label>
                            </v-flex>
                            <v-flex xs8 sm8>
                                <v-text-field
                                label="Email Id"
                                v-model="emailId"
                                :rules="[v => !!v || 'Please Provide Vaild Email Id']"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs4 sm4>
                                <v-label>Phone Number</v-label>
                            </v-flex>
                            <v-flex xs8 sm8>
                                <v-text-field
                                label="Phone Number"
                                v-model="mobileNumber"
                                type="number"
                                counter="10"
                                :rules="[mobileNoRules.required, mobileNoRules.counter]"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <br>
                        <v-layout row wrap>
                            <v-flex xs4 sm4>
                                <v-label>Request Details</v-label>
                            </v-flex>
                            <v-flex xs8 sm8>
                                <v-textarea
                                    outline
                                    name="Consultation Request"
                                    label="Please Add Details of Consultation"
                                    v-model="ConsultationRequest"
                                    counter="500"
                                    :rules="[requestRules.required, requestRules.counter]"
                                ></v-textarea>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-spacer></v-spacer>
                            <v-flex xs4 sm4>
                                <v-btn color="primary" :disabled="!valid" @click="submit()" dark>
                                    SUBMIT
                                </v-btn>
                            </v-flex>
                            <v-spacer></v-spacer>
                        </v-layout>
                        </v-form>
                        
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import {APIService} from '../APIService.js';
import axios from 'axios';
// const API_URL = 'http://server.mahatinnovations.com:9091';
const API_URL = 'http://localhost:9091';
const apiService = new APIService();

export default {
    
    
    data() {
        return{
            mobileNumber:"",
            emailId:"",
            ConsultationRequest:"",
            valid: true,
            mobileNoRules:{
                required: value=> !!value || "Required",
                counter: value=> value.length <= 10 || "Max 10 digits"
            },
            requestRules:{
                required: value=> !!value || "Required",
                counter: value=> value.length >= 10 || "Min 10 Characters"
            },
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                let data ={
                    "email":this.emailId,
                    "mobile_number": this.mobileNumber,
                    "request":this.ConsultationRequest
                }
                const auth = {
                headers: { Authorization: localStorage.getItem('token') }
                };

                const url = `${API_URL}/consultation/newConsultationrequest`;

                return axios.post(url, data, auth).then(result => {
                    console.log(result);
                    if(result.status == 200){
                        this.$router.push('/OpinionConsultationList');
                    }else{
                        alert("Oops !!!, Something went Wrong ")
                    }
                })
            }
        },
        getUserDetails(){
            return apiService.getloggedinUser().then(response => {
                this.mobileNumber = response.mobileNumber;
                this.emailId = response.email;
        })
        }
    },
    mounted(){
        this.getUserDetails();
    },
    created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'Opinion & Consultations',
          disabled: false,
          href: '/OpinionConsultationList'
        },
        {
            text: 'New Request',
            disabled: true,
        }
      ]
    }
}
</script>

<style>

</style>
