<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-spacer></v-spacer>
        <v-flex sm12 md4>
            <img src="../static/BN-logo-47.png" alt="thank you" width="100%" height="80" class="thank">
        </v-flex>
        <v-spacer></v-spacer>
        </v-layout>
        <br>
        <v-layout row wrap>
            <v-spacer></v-spacer> 
        <v-flex>
            <h3 class="thank1">Thank You! for booking an appointment.</h3>
        </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-spacer></v-spacer>
        
        </v-layout>
        <br>
        <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex sm10 md6>
                <v-card>
                    <v-card-title>
                        <h3>PAYMENT DETAILS</h3>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        
                        <v-layout row wrap>
                            <v-flex xs12 md6>
                                <b>Name & Email</b>
                            </v-flex>
                            <v-flex xs12 md6>
                                <div class="text-center">
                                    <p>{{ paymentDetails.name }} &   <u>{{ paymentDetails.email }} </u> </p>
                                </div>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout row wrap>
                            <v-flex xs12 md6>
                                <b>Payment Id</b>
                            </v-flex>
                            <v-flex xs12 md6>
                                <div class="text-center">
                                    <p>{{ transId }}</p>
                                </div>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout row wrap>
                            <v-flex xs12 md6>
                                <b>Amount</b>
                            </v-flex>
                            <v-flex xs12 md6>
                                <h3 class="text-center">
                                    {{ paymentDetails.amount }} {{paymentDetails.currency}}
                                </h3>
                            </v-flex>
                            
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout row wrap>
                            <v-flex xs12 md6>
                                <b>Status</b>
                            </v-flex>
                            <v-flex xs12 md6>
                                <p class="text-center">
                                    {{ paymentDetails.status }}
                                </p>
                            </v-flex>
                            
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>
        <br>
        <v-layout row wrap>
            
            <v-flex class="text-center">
            
            <h3 id="thank2"><b>Note * :</b> Show the message/email you recieved when you visit the hospital</h3>
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
    data(){
        return{
            paymentId : this.$route.query.id,
            transId: this.$route.query.payment_id,
            paymentDetails : null
        }
    },
    methods:{
        getPaymentDetails(){
            return apiService.getPaymentDetail(this.paymentId).then(response => {
                this.paymentDetails = response;
                console.log(response);
            })
        }
    },
    mounted(){
        this.getPaymentDetails();
    }
    
}
</script>


<style scoped lang="css">
    .thank{
        text-align: center;
    }
    .thank1{      
        color: red;
    }
    .text-right{
        text-align: right;
    }
    .text-center{
        text-align: center;
    }
   
</style>
