<template>
<v-container fluid>
  
<marquee-text :duration="20" no-repeat class="marque" >
  {{ marqueText }}
</marquee-text><br>

  <v-layout row wrap>
    <v-flex md8 xs12>
      

       <v-card>
         <v-card-title>
           <h3>MY APPOINTMENTS</h3>
         </v-card-title>
         <v-divider></v-divider>
         <v-card-text>
           

           <v-container v-if="appointmentlist.length > 0"  grid-list-xl>
              <v-layout row wrap>
            <v-flex md6 v-for="(app ,i) of appointmentlist" :key="i">
              <v-card class="card-border">
              <v-card-title primary-title>
                
                  <div>
                    <p>
                      Patient Name : <u> {{ app.patientName }} </u> <br>
                      Date : {{ app.date }} <br>
                      Time Slot : {{ app.slot.slot.slotName }}<br>
                      Branch : {{ app.slot.branch.branchName }}<br>
                      Doctor : {{ app.slot.doctor.username }}<br>
                      
                    </p>
                    
                    <div>
                      <v-btn slot="activator" @click="reschedule(app.id)" round small color="blue" dark>RESCHDULE</v-btn>
<v-btn class="mx-0" slot="activator" @click="deleteItem(app.id)" round small color="red" dark>
                <v-icon color="white">delete</v-icon> DELETE
               </v-btn>
                    </div>
                  </div>
              </v-card-title>
            </v-card>
            </v-flex>
            
            </v-layout>
            </v-container>

            <v-container v-else grid-list-xl>
             <v-layout row wrap>
               <v-flex>
                 <v-card class="card-border">
                   <v-card-title primary-title>
                     <div class="text-center">
                       <b>NO APPOINTMENTS</b>
                     </div>
                   </v-card-title>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-card-text>
       </v-card>

		   			
		 <br><br>  
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

  <v-card>
    <v-card-title>
      <h3>Doctors Available</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-layout row wrap>
  
    <v-flex xs10 offset-xs2 md4 offset-md0 v-for="doctor of doctorList" :key="doctor.id">
				    
               <v-card class="design">
              {{doctor.doctor.username}}<br/>
							{{doctor.service.services}}
              </v-card>
      </v-flex>
  </v-layout>
    </v-card-text>
  </v-card>
  
<br>
  
  <br>
  <v-divider></v-divider>
  <br>

  <v-card>
    <v-card-title>
      <h3>OUR FACILITIES</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-layout row wrap>
						 <v-flex md3 xs6>
					 <v-carousel hide-delimiters class="tpa-slide">
    <v-carousel-item >
      <img src="../static/images-tpa/catarex31.png" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>

    <v-carousel-item>
      <img src="../static/images-tpa/pdt.jpg" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>


    
      
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">

    <v-carousel-item>
      <img src="../static/images-tpa/cirrus-oct.png" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>

    <v-carousel-item>
      <img src="../static/images-tpa/lasikmachine2.jpg" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>

    <v-carousel-item>
      <img src="../static/images-tpa/echorule2.jpg" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>


    
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">

    
    <v-carousel-item>
      <img src="../static/images-tpa/TMS_4N.png" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>

    <v-carousel-item>
      <img src="../static/images-tpa/humphrey.jpg" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>

    <v-carousel-item>
      <img src="../static/images-tpa/yag-laser.png" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>


    
  </v-carousel>
						 </v-flex>
						 <v-flex md3 xs6>
	<v-carousel hide-delimiters class="tpa-slide">

    

    <v-carousel-item>
      <img src="../static/images-tpa/soveriegn.jpg" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>

    <v-carousel-item>
      <img src="../static/images-tpa/catarex31.png" style="height:140px;padding:10px;" alt="">  
    </v-carousel-item>


  </v-carousel>
						 </v-flex>
						 </v-layout>
    </v-card-text>
  </v-card>
<br>
<v-divider></v-divider>
  <br>

      <v-layout row wrap>
        					
						
      <v-flex xs12 sm12>
        <v-card>
          <v-card-title>
            <h3>Turn Arround Time For Imaging Reports</h3>
            
          </v-card-title>
          <v-divider></v-divider>
          
          <v-card-text>
            <v-data-table
            :headers="headers1"
            :items="desserts"
            :search="search"
            hide-actions
          >
            <template slot="items" slot-scope="props">
               <td class="text-xs-left">{{ props.item.iron }}</td>
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.calories }}</td>
              <td class="text-xs-left">{{ props.item.fat }}</td>
          
             
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
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
    name: 'Dashboard',
    data () {
      return {
        headers1: [
        
          { text: 'Sl No', value: 'slno' },
          { text: 'Test Name', value: 'testname' },
          { text: 'Turn-arround Time', value: 'turnarroundtime' },
         
        ],
        desserts: [
         
          {
            value: false,
               iron: '1',
            name: 'Refraction',
            calories: '30 minutes',
           
         
          },
          {
            value: false,
               iron: '2',
            name: 'Pediatric Refraction & Squint Assesment',
            calories: '45 minutes',
          },
          {
            value: false,
               iron: '3',
            name: 'A Scan',
            calories: '15 minutes',
          },
          {
            value: false,
               iron: '4',
            name: 'Keratometry',
            calories: '5 minutes',
          },
          {
            value: false,
               iron: '5',
            name: 'Autoperimetry(BE)',
            calories: '1 hour',
          },
          {
            value: false,
               iron: '6',
            name: 'OCT(BE)',
            calories: '20 minutes',
          },
          {
           value: false,
               iron: '7',
            name: 'Topography',
            calories: '15 minutes',
          },
          {
           value: false,
               iron: '8',
            name: 'Pachymetry',
            calories: '10 minutes',
          },
          {
            value: false,
               iron: '9',
            name: 'Fundus Photography',
            calories: '10 minutes',
          }
        ],

				tpa1: [
          {
            src:"../static/BN-logo-47.png"
          },
         
          {
           src:"../static/images-tpa/catarex31.png"
          },
          	{
						src:"../static/images-tpa/pdt.jpg"
					},
				],
				tpa2: [
          {
            src:"../static/images-tpa/cirrus-oct.png"
          },
          
          {
           src:"../static/images-tpa/lasikmachine2.jpg"
          },
        	
          {
           src:"../static/images-tpa/echorule2.jpg"
          },
         		
				],
				tpa3: [

				
          {
						src:"../static/images-tpa/TMS_4N.png"
          },
          	{
						src:"../static/images-tpa/humphrey.JPG"
					},
					{
           src:"../static/images-tpa/yag-laser.png"
          },
           
					
				],
				tpa4: [
				 {
           src:"../static/images-tpa/pachymetry.jpeg"
          },
          {
            src:"../static/images-tpa/soveriegn.jpg"
          },
         {
           src:"../static/images-tpa/catarex31.png"
          },
          
     	],
		
			
			  e6: 1,
        search: '',
        selected: [],
        
        appointmentlist:[],
        doctorList:[],
        serviceList:[],
        applist: [],
        marqueText: ""
      }
    },
   
    methods:{
      getappointmentList(){
				return apiService.getMyAppointments().then(response => {
          this.appointmentlist = response.reverse();
          console.log(this.appointmentlist);
          
				});
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
      },
      getReviewDate(){
        return apiService.getReviewDates().then(response=>{
          this.applist = response;

          let text = '';
          let length = response.length;
          for(let i = 0; i< length; i++){
            let tex = " | Your next Review Date is :"+this.applist[i].reviewDate;
            text += tex;
          }
          this.marqueText = text;
          console.log(this.applist);
          
        })
      },
    },
    mounted(){
      this.getappointmentList();
      this.getdoctorList();
      this.getseviceList();
      this.getReviewDate();
    },
     created: function(){
      this.$root.breadcrumbs = []
    },
  }
</script>
<style>
#app > div.application--wrap > div > main > div > div > div > div > div:nth-child(1) > div.flex.md8.xs12 > div:nth-child(2) > div.v-table__overflow > table > tbody > div > div{
  border: 7px solid aliceblue;
  
}
#app > div.application--wrap > div > main > div > div > div > div > div:nth-child(1) > div.flex.md8.xs12 > div:nth-child(2) > div.v-table__overflow > table > thead{
  display: none;
}
#app > div.application--wrap > div > main > div > div > div > div > div:nth-child(1) > div.flex.md8.xs12 > div:nth-child(2) > div.v-datatable.v-table.theme--light > div{
  display: none;
}
div.designforser.v-card.v-sheet.theme--light{         
   height:56px;
   width:93%;
    position: relative;
    background:darkblue;
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
      border-left: 20px solid darkblue;
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
       /* border:4px solid white;  */
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
     /* font-size:13px;  */
   
    
}
#app > div.application--wrap > div > main > div > div > div > div > div:nth-child(1) > div.flex.md8.xs12 > div:nth-child(2) > div.v-table__overflow > table{
  background:none;
}
   div.design.v-card.v-sheet.theme--light:after{
     content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 13px solid blue;
    border-top: 34px solid transparent;
    border-bottom: 35px solid transparent;
  
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
/* .v-btn .v-btn__content .v-icon{
  color:transparent;
} */
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
.card-border{
  border: 3px solid darkblue !important;
}
.text-center{
  text-align: center;
}

.marque{
  font-size: 18px;
  color: darkblue;
}

</style>
