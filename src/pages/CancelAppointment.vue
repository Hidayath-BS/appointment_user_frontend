<template>
    <v-container>
        <v-card>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-layout row>
                            <v-flex xs6>
                                <b>Name :</b>
                            </v-flex>
                            <v-flex xs6>
                                {{ appointmentDetails.patientName }}
                            </v-flex>
                        </v-layout>
                        
                        
                    </v-flex>
                    <v-flex xs6>
                        <v-layout row>
                            <v-flex xs6>
                                <b>AGE :</b>
                            </v-flex>
                            <v-flex xs6>
                                {{ appointmentDetails.age }}
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <br>
                <v-layout>
                    <v-flex xs6>
                        <v-layout row>
                            <v-flex xs6>
                                <b>Slot Date  :</b>
                            </v-flex>
                            <v-flex xs6>
                                {{ appointmentDetails.slot.date }} 
                            </v-flex> 
                        </v-layout>
                    </v-flex>
                    <v-flex xs6>
                        <v-layout row>
                            <v-flex xs6>
                                <b>Time Slot :</b>
                            </v-flex>
                            <v-flex xs6>
                                {{ appointmentDetails.slot.slot.startTime }} To {{appointmentDetails.slot.slot.endTime}}
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <br>
                <v-layout>
                    <v-flex xs6>
                        <v-layout row>
                            <v-flex xs6>
                                <b>DOCTOR :</b>
                            </v-flex>
                            <v-flex xs6>
                                {{ appointmentDetails.slot.doctor.username }}
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    
                </v-layout>
                <br>
                <v-layout>
                    <v-spacer></v-spacer>
                    <v-flex>
                        <v-btn color="red" @click="cancelAppointment()" dark>CANCEL APPOINTMENT</v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import {APIService} from '../APIService.js';
import axios from 'axios';
const apiService = new APIService();
// const API_URL = "http://server.mahatinnovations.com:9091"
const API_URL = "http://localhost:9091"

export default {
    data(){
        return{
            appointmentDetails: null,
            appointmentId : this.$route.params.aid
        }
    },
    methods:{
        getAppointmentDetails(){
            return apiService.getAppointmentDetails(this.appointmentId).then(response => {
                this.appointmentDetails = response;
                console.log(this.appointmentDetails);
                
            })
        },
        cancelAppointment(){
            const auth={
                headers:{
                Authorization:localStorage.getItem('token')
                }
            }
            const url=`${API_URL}/appointments/cancelAppointment`;
            let data = {
                "appid": this.appointmentId
            }
            return axios.put(url, data, auth).then(response => {
                if(response.status == 202){
                    this.$router.push('/dashboard')
                }else{
                    alert("Oops !!, Something went wrong");
                }
            })
        }
    },
    mounted(){
        this.getAppointmentDetails();
    }
}
</script>
<style>

</style>
