<template>
  <v-flex xs12 row>
	<v-layout py-3>
	   	<v-flex xs12>
	   			<v-card>
		   			<v-card-title>
				      <div class="title">Appointment Table</div>
				      <v-spacer></v-spacer>
				      <v-text-field
				        v-model="search"
				        append-icon="search"
				        label="Search"
				        single-line
				        hide-details
				      ></v-text-field>
				    </v-card-title>
		   			<v-data-table
					    :headers="headers"
					    :loading="true"
					    :items="applist"
					    :search="search"
					    v-model="selected"
					    item-key="name">
					    <template slot="headerCell" slot-scope="props">
					      <v-tooltip bottom>
					        <span slot="activator">
					          {{ props.header.text }}
					        </span>
					        <span>
					          {{ props.header.text }}
					        </span> 
					      </v-tooltip>
					    </template>
					    <template slot="items" slot-scope="props">
					      <td>
					        {{props.index+1}}
					      </td>
                <td>{{props.item.patientName}}</td>
               <td> {{props.item.slot.date}}</td>
            <td>{{props.item.slot.slot.slotName}}</td>
            <td>{{props.item.appointmentStatus}}</td>
					  	
								<td class="justify-center layout px-0">
                    <v-btn slot="activator" fab small color="blue" dark><v-icon white>event</v-icon></v-btn>
	         </td>

								<td><v-btn icon class="mx-0" @click="deleteItem(props.item)"  fab small color="red" dark>
                <v-icon>delete</v-icon>
              </v-btn></td>							
					    </template>
					  </v-data-table>
				</v-card>	   	
			 	</v-flex>		
	   </v-layout>	 
				 </v-flex>
</template>

<script>
import {APIService} from '../APIService.js';
import axios from 'axios';
const apiService = new APIService();
const API_URL = apiService.serverUrl;


  export default {
   
    data () {
      return {
			  e6: 1,
        search: '',
        applist: [],
        selected: [],
        
        headers: [
         { text: 'Sl.No', value: 'Sl.No', align: 'left', },
					{
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name',
           
          },
          {
            text: 'Date',
            align: 'left',
            sortable: false,
            value: 'date'
          },
          {
            text: 'Time',
            align: 'left',
            sortable: false,
            value: 'time'
          },
           {
            text: 'Status',
            align: 'left',
            sortable: false,
            value: 'status'
          },
          {
            text: 'Reshedule',
            align: 'left',
            sortable: false,
            value: 'edit'
          },
          {
            text: 'Delete',
            align: 'left',
            sortable: false,
            value: 'delete'
          },
			],
		
      }
    },
   methods:{
     getAppointmentList(){
       const auth={
          headers:{
            Authorization:localStorage.getItem('token')
          }
        }
        const url=`${API_URL}/AppointmentListUserBased`;
        return axios.get(url,auth).then(response=>{
          this.applist = response.data;
          console.log(response.data);
        })
    }
  },
    mounted(){
      this.getAppointmentList();
    },
    created: function(){
      this.$root.breadcrumbs = []
    }
  } 
</script>
<style>
.v-carousel{
	height: 160px;
}
.v-window__container{
	height: 160px;
}
div:nth-child(2) > div.v-table__overflow > table > tbody > div:nth-child(n){
border-radius: 2px;
background: aliceblue;
    border-left-style:dotted;
    border-left-width: 4px;

    border-left-color:grey;
    padding:8px;
     margin:10px;


}

</style>

