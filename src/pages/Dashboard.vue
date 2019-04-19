<template>


<v-container fluid>
  <v-layout row wrap>
    <v-flex md8 xs12>
      <v-card>
		   			<v-card-title>
				      <div class="title">My Appointments</div>
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
					    :items="appointmentlist"
					    :search="search"
					    v-model="selected"
					    item-key="name"
					    
					  >
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
               <td>  {{props.item.date}}</td>
            <td>{{props.item.slot.slot.slotName}}</td>
					  		<td>
                {{props.item.appointmentStatus}}
									
	         </td>
								<td class="justify-center layout px-0">
                    <v-btn slot="activator" @click="reschedule(props.item.id)" fab small color="blue" dark><v-icon color="white">event</v-icon></v-btn>
	         </td>

								<td><v-btn icon class="mx-0" @click="deleteItem(props.item.id)"  fab small color="red" dark>
                <v-icon color="white">delete</v-icon>
              </v-btn></td>							
					    </template>
					  </v-data-table>
				</v-card>	  
    </v-flex>
    <v-flex md3 offset-md1 xs12>
       <div class="title">Services</div>
                <v-card v-for="(service) of serviceList" :key="service.id" class="designforser" solo>   <h4> {{ service.services }} </h4>
					      	</v-card>	
    </v-flex>
  </v-layout>
  <br>
  <v-divider></v-divider>
  <br>
  <v-layout row wrap>
      
  <div class="title">Doctors Available</div>
  </v-layout>
<br>
  <v-layout row wrap>
  
    <v-flex xs10 offset-xs2 md4 offset-md0 v-for="doctor of doctorList" :key="doctor.id">
				    
               <v-card class="design">
              Dr. {{doctor.doctor.username}}<br/>
							{{doctor.service.services}}
              </v-card>
      </v-flex>
  </v-layout>
  <br>
  <v-divider></v-divider>
  <br>
  <v-layout row wrap>
						 <v-flex md3 xs6>
					 <v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item
      v-for="(item,i) in tpa1"
      :key="i"
      :src="item.src" style="height:140px;padding:10px;"
	    ></v-carousel-item>
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item
      v-for="(item,i) in tpa2"
      :key="i"
      :src="item.src"
			style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item
      v-for="(item,i) in tpa3"
      :key="i"
      :src="item.src"
		style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item
      v-for="(item,i) in tpa4"
      :key="i"
      :src="item.src"
		style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex>
						 </v-layout>

      <v-layout row wrap>
        						 <v-flex md3 xs6>
					 <v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item
      v-for="(item,i) in tpa5"
      :key="i"
      :src="item.src"
			style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item
      v-for="(item,i) in tpa6"
      :key="i"
      :src="item.src"
			style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item
      v-for="(item,i) in tpa7"
      :key="i"
      :src="item.src"
			style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item
      v-for="(item,i) in tpa8"
      :key="i"
      :src="item.src"
		style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex>
      </v-layout>
</v-container>


  <!-- <v-container>
	      	 
					 <v-layout row wrap>
						 <v-flex xs2>
					 <v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa1"
      :key="i"
      :src="item.src" style="height:140px;padding:10px;"
	    ></v-carousel-item>
  </v-carousel>
						 </v-flex ><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px;">
    <v-carousel-item
      v-for="(item,i) in tpa2"
      :key="i"
      :src="item.src"
			style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa3"
      :key="i"
      :src="item.src"
		style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa4"
      :key="i"
      :src="item.src"
		style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 </v-layout>		 
<v-layout row wrap>
						 <v-container xs2>
					 <v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa5"
      :key="i"
      :src="item.src"
			style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-container ><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa6"
      :key="i"
      :src="item.src"
			style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa7"
      :key="i"
      :src="item.src"
			style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa8"
      :key="i"
      :src="item.src"
		style="height:140px;padding:10px;"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 </v-layout>		 
				 </v-container> -->
</template>

<script>
import axios from 'axios';
const API_URL = 'http://server.mahatinnovations.com:9091';
import {APIService} from '../APIService.js';
const apiService = new APIService();


  export default {
    name: 'Dashboard',
    data () {
      return {
				tpa1: [
          {
            src:"../public/images-tpa/1.jpg"
          },
          {
           src:"../public/images-tpa/2.jpg"
          },
          {
           src:"../public/images-tpa/3.jpg"
          },
          {
           src:"../public/images-tpa/4.jpg"
					},
				],
				tpa2: [
          {
            src:"../public/images-tpa/7.jpg"
          },
          {
           src:"../public/images-tpa/8.jpg"
          },
          {
           src:"../public/images-tpa/9.jpg"
          },
          {
           src:"../public/images-tpa/10.jpg"
					},			
				],
				tpa3: [
					{
						src:"../public/images-tpa/13.jpg"
					},
          {
            src:"../public/images-tpa/14.jpg"
          },
          {
           src:"../public/images-tpa/15.jpg"
          },
          {
           src:"../public/images-tpa/16.jpg"
          },
					
				],
				tpa4: [
					{
						src:"../public/images-tpa/19.jpg"
					},
          {
            src:"../public/images-tpa/20.jpg"
          },
          {
           src:"../public/images-tpa/21.jpg"
          },
          {
           src:"../public/images-tpa/22.jpg"
          },
          
				],
				tpa5: [
					{
						src:"../public/images-tpa/25.jpg"
					},
					{
						src:"../public/images-tpa/26.jpg"
					},
          {
            src:"../public/images-tpa/27.jpg"
          },
          {
           src:"../public/images-tpa/28.jpg"
          },          
				],
				tpa6: [
					{
						src:"../public/images-tpa/5.jpg"
					},{
						src:"../public/images-tpa/6.jpg"
					},
					{
           src:"../public/images-tpa/29.jpg"
          },
          {
           src:"../public/images-tpa/30.jpg"
					},
				],
				tpa7: [
					{
           src:"../public/images-tpa/23.jpg"
					},
					{
						src:"../public/images-tpa/24.jpg"
					},
					{
						src:"../public/images-tpa/17.jpg"
					},
					{
						src:"../public/images-tpa/18.jpg"
					},
				],
				tpa8: [
					{
						src:"../public/images-tpa/11.jpg"
					},
					{
						src:"../public/images-tpa/12.jpg"
					},
					{
           src:"../public/images-tpa/4.jpg"
					},
					{
           src:"../public/images-tpa/10.jpg"
					},
				],
        e6: 1,
        search: '',
        selected: [],
        headers: [
				 { text: 'Sl.No', value: 'Sl.No', align: 'left', },
				 {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Date', value: 'Date' ,align: 'left',},
          { text: 'Time', value: 'Time',align: 'left', },
          { text: 'Status', value: 'status',align: 'left', },
          { text: 'Reshedule', value: 'Edit',align: 'left', },          
          { text: 'Delete', value: 'Delete',align: 'left', }
				],
				
        appointmentlist:[],
        doctorList:[],
        serviceList:[],
      }
    },
   
    methods:{
      getappointmentList(){
				return apiService.getMyAppointments().then(response => {
					this.appointmentlist = response;
          this.sortAppointment();
				});
      },
      sortAppointment(){
        this.appointmentlist.sort(function(a,b){
          return b.id -a.id;
        })
      },
      getdoctorList(){
				
				return apiService.getDoctorsListDashboard().then(response => {
					this.doctorList = response; 
				});
      },
      getseviceList(){

				return apiService.getServiceList().then(response => {
					this.serviceList = response;
				});
			},
			deleteItem(id){
				this.$router.push('/CancelAppointment/'+id);
      },
      reschedule(id){
        this.$router.push('/reschedule/'+id);
      }
    },
    mounted(){
      this.getappointmentList();
      this.getdoctorList();
      this.getseviceList();
    },
     created: function(){
      this.$root.breadcrumbs = []
    },
  }
</script>
<style>
/* .v-carousel{
	height: 160px;
}
.v-window__container{
	height: 160px;
} */
div.designforser.v-card.v-sheet.theme--light{         
   height:56px;
   width:93%;
    position: relative;
    background: red;
    margin-top: 10px;
    padding-top: 18px;
    color:white;
    text-align: center;
    
}
div.designforser.v-card.v-sheet.theme--light.h4{
  padding-left:90px;
}
div.designforser.v-card.v-sheet.theme--light:after{
     
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 20px solid #eeeeee;
      border-top: 26px solid transparent;
      border-bottom: 30px solid transparent;
    }
 div.designforser.v-card.v-sheet.theme--light:before{
 
      content: "";
      position: absolute;
      right: -20px;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 20px solid red;
      border-top: 26px solid transparent;
      border-bottom: 30px solid transparent;
    }
    div.circle.v-card.v-sheet.theme--light {
      width: 100px;
      height: 100px;
      left:11px;
      background:white;
      border-radius: 50%;
      border:4px solid darkblue;
      background-image:url('https://randomuser.me/api/portraits/men/85.jpg');
      background-size:100px;
      /* border:4px solid white; */
    }
    div.design.v-card.v-sheet.theme--light{         
   /* height: 60px;
  
       width: 65%;
    left: 96px;
    top: -87px; */
        height: 69px;
    width: 80%;
    /* left: 111px;
    top: -96px; */
    position: relative;
    background:darkblue;
    margin-top: 10px;
    padding-top: 10px;
    color:white;
    text-align: center;
    /* font-size:13px; */
   
    
}
   div.design.v-card.v-sheet.theme--light:after{
     content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 13px solid blue;
    border-top: 38px solid transparent;
    border-bottom: 31px solid transparent;
  
    }
    table > tbody > tr:nth-child(n){
    border-radius: 2px;
    background:aliceblue;
    border-left-style:dotted;
    border-left-width:6px;
    border-left-color:white;
    padding:8px;
   border-bottom:5px solid white!important;
    }
.v-btn .v-btn__content .v-icon{
  color:transparent;
}
.v-image__image--cover{
  background-size:contain;
}
.tpa-slide{
  height:160px !important;
  margin-left:18px;
  margin-bottom:20px;
  width: 80%;
  text-align: center;
}

</style>



