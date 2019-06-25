<template>
<v-container fluid>


    <v-layout row wrap>
         <v-flex xs12 sm12>
             
     <br>
       <v-card>
	        <v-card-title>
            <h2>Other Appointment List</h2>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container  grid-list-xl>
              <v-layout row wrap>
            <v-flex  v-for="(app ,i) of appointmentlist" :key="i">
              <v-card color="deep-purple lighten-2" class="white--text">
              <v-card-title primary-title>
                
                  <div>
                    <div>Procedure : <u> {{ app.procedure.procedures }} </u> </div>
                    <div>Date : {{ app.appointmentDate }}
                    </div>
                    <div>Time : {{ app.appointmentTime }}
                    </div>
                  </div>
              </v-card-title>
            </v-card>
            </v-flex>
            
            </v-layout>
            </v-container>
          
          </v-card-text>
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
    data () {
      return {
        search: '',
        appointmentlist:[],
        headers: [
          { text: 'Sl.no',value: 'slno',width:10 },
          { text: 'Date', value: 'date' },
          { text: 'Time', value: 'time' },
          { text: 'Procedure', value: 'procedure'},
          { text: 'Patient Name', value: 'Patient Name'}
        ],
        deleteDialog1: false
        
      }
    },
   
    
    methods: {
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
      save (date) {
        this.$refs.menu.save(date)
      },
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
      save (date1) {
        this.$refs.menu1.save(date1)
      },

      getOtherAppointments(){
         return apiService.getOtherAppointments().then(response=>{
              this.appointmentlist = response.reverse();
          });
      },
  },
  mounted() {
        this.getOtherAppointments();
  },
  created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'Other Appointments',
          disabled: true,
        }
      ]
    }
  }
</script>