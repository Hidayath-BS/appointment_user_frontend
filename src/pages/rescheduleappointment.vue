<template>
  <v-flex xs12 sm10 offset-sm1>
  <v-card>
  <v-card-text>
    <v-layout row wrap>
      
      <!-- <v-text-field
            slot="activator"
            v-model="reshedule.date"
            label="Requested Date"
            prepend-icon="event"
            color="red"
            readonly></v-text-field>-->
           
   
      <v-flex xs12 sm6 md4>
        <v-menu
          ref="menuu"
          :close-on-content-click="false"
          v-model="menuu"
          :nudge-right="40"
          :return-value.sync="datee"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px">
          <v-text-field
            slot="activator"
            v-model="datee"
            
            label="Resheduled Date"
            prepend-icon="event"
            color="red"
            readonly
          ></v-text-field>
          <v-date-picker v-model="datee" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" to="/dashboard">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menuu.save(datee),ondate(datee)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs12></v-flex>
<br/>
 <div id="slott" style="display:none"> 
   <v-container>
     <v-layout row wrap>
        <v-flex>
        <v-radio-group v-model="slotid" >
                     <v-card v-for="ts of datewiseslot" :key="ts.id">
                       <v-card-title>
                         <h5>{{ts.slot.slotName}}</h5>
                       </v-card-title>
                       <v-divider></v-divider>
                       <v-card-text>
                         
                        <v-radio color="green" :value="ts.id" :label="ts.slot.slotName"  ></v-radio>
                       </v-card-text>
                      </v-card>
        </v-radio-group>
       </v-flex>
       
 </v-layout>
   </v-container>
  
</div>
<v-flex xs12 ></v-flex>
       <v-btn  color="green" round dark @click="resheduleAppointment()"> Update
          </v-btn>
          <v-btn color="error" round>Cancel</v-btn>
    </v-layout>

   </v-card-text>
   </v-card>
  </v-flex>
</template>
<script>
import {APIService} from '../APIService.js';
import axios from 'axios';
const API_URL = 'http://server.mahatinnovations.com:9091';
// const API_URL = 'http://localhost:9091';
const apiService = new APIService();
  export default {
    name: 'DatePickers',
    data () {
      return {
        appointmentid: this.$route.params.id,
       ddid : this.$route.params.rid,
       reshedule:{
         "date":'null'
       } ,       
        slot:[],               
        date: '',
        menu: false,
        menuu: null,
        datee: null,
        menu5: false,
        datewiseslot:[],
        slotid:0,
      }
    },
    mounted(){
   
   this.getavailableTimeSlot();

    },
    methods: {
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
      save (date) {
        this.$refs.menu5.save(date)
      },
     
      getDate(){
        apiService.getDatee(this.ddid).then((response)=>{
          this.reshedule.date =response.date;
          console.log(this.reshedule.date);
        });
        },
     
  
     ondate(datee) {
       let slot= this.slot;
       this.datewiseslot = slot.filter(as=>as.date== datee)
        console.log(this.datewiseslot);
        
      },

      resheduleAppointment(){
      const auth = {
      headers: { Authorization: localStorage.getItem('token') } 
    };
    let data={
      "datee":this.datee,
      "appointmentId":this.appointmentid,
      "slotid":this.slotid,
    }
    console.log(data);
    
    const url = `${API_URL}/ResheduledAppointments`;
    return axios.post(url,data,auth).then(response=>{
      if(response.status == 202){
        alert("Appointment Resheduled Successfully");
        this.$router.push('/reschedule');
      }
      else{
        alert("oops... something went wrong,Please Try again");
      }
    })
    },

      getavailableTimeSlot(){
        document.getElementById('slott').style.display='block';
        const auth = {
      headers: { Authorization: localStorage.getItem('token') } 
    }
    const url = `${API_URL}/getavailableTimeSlot/${this.appointmentid}`;
    return axios.get(url, auth).then(response=>{
      this.slot = response.data;
      console.log(this.slot);
    }) 
      },


    },
   
   
    watch: {
      menu5 (val) {
        val && this.$nextTick(() => (this.$refs.picker5.activePicker = 'YEAR'))
      },
      
    },
    created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'Reshedule',
          disabled: true
        }
       
      ]
    }
  }
</script>
