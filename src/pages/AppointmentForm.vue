<template>

<v-container fluid>
  
  <v-card>
    <v-card-title>
<h2>Appointment Form</h2>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
      <v-layout row wrap>
        <v-flex md3 xs12>
        <v-menu
          ref="menu"
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="40"
          :return-value.sync="date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="date"
            label="Select Date"
            prepend-icon="event"
            :rules="[v => !!v || 'Please Select the Appointment Date']"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" :min="mindate" @change="getAvailableSlotsBranchWise()" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex> 
      <v-spacer></v-spacer>
       <v-flex xs12 md6>
          <v-subheader>Appointment for
          
                    <v-radio-group row v-model="appFor" @change="getLoggedinuser()">
                    <v-radio label="Self" value="self" color="blue"></v-radio>
                    <v-radio label="Other" value="other" color="blue"></v-radio>
                </v-radio-group> 
                </v-subheader>
                
        </v-flex>
      </v-layout>
      <v-layout row wrap>
            <v-flex xs12 md3>
              <v-select
                      :items="titles"
                      label="Select Title"
                      item-text="title"
                      v-model="title"
                      item-value="title"
                      :rules="[v => !!v || 'Please Select Your title']"
                      single-line
                    ></v-select>
            </v-flex>
            <v-flex xs12 md3 offset-md1>
              <v-text-field class="uppercase" type="text" label="Full Name"
              :rules="[v => !!v || 'Please Enter Full Name']"
               v-model="fullName"></v-text-field>
            </v-flex> 
            <v-flex xs12 md3 offset-md1>
               <v-text-field label="Mobile Number"
               :rules="[mobileNoRules.required, mobileNoRules.counter]"
                type="number" counter="10" maxlength="10" v-model="mobileNumber"></v-text-field>
            </v-flex>
            
     </v-layout>

     <v-layout row wrap>
            <v-flex xs12 md3>
             <v-text-field type="text" label="Email" v-model="email"></v-text-field>
            </v-flex>
            <v-flex xs12 md3 offset-md1>
              <v-text-field label="Age (In years)"
               :rules="[v => !!v || 'Please Enter Your Age']"
                type="number" :max="100" v-model="age"></v-text-field>
            </v-flex> 

            <v-flex xs12 md3 offset-md1>
            <v-menu
            ref="dob"
          :close-on-content-click="false"
          v-model="menu1"
          :nudge-right="40"
          :return-value.sync="date1"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
          class="fields"
            >
              <v-text-field
            slot="activator"
            v-model="dob"
            label="Select Date Of Birth"
            prepend-icon="event"
            :rules="[v => !!v || 'Please Select Your Date of Birth']"
            readonly
          ></v-text-field>
          <v-date-picker v-model="dob"  no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.dob.save(date1),calculateAge()">OK</v-btn>
          </v-date-picker>
            </v-menu>
            </v-flex>

            
            
     </v-layout>

     <v-layout row wrap>
            <v-flex xs12 md3>
               <v-text-field type="text" label="Current Eye Problem" ></v-text-field>
            </v-flex>
            <v-flex xs12 md3 offset-md1>
              <v-select
                      :items="genders"
                      label="Select Gender"
                      item-text="gender"
                      v-model="gender"
                      item-value="id"
                      :rules="[v => !!v || 'Please Select Your Gender']"
                      single-line
                    ></v-select>
            </v-flex>

            
            
           <v-flex xs12 md3 offset-md1>
              <v-select
                      :items="branchs"
                      label="Select Branch"
                      v-model="branch"
                      item-text="branchName"
                      item-value="id"
                      :rules="[v => !!v || 'Please Enter Branch']"
                      single-line
                      class="fields"
                      @change="filterBranchWise(branch)"
                    ></v-select>
            </v-flex> 
            
     </v-layout>

     <v-layout row wrap>
       <v-flex md3>
         <v-text-field v-model="addressLine1" label="Address Line 1">

         </v-text-field>
       </v-flex>
       <v-flex md3 offset-md1>
         <v-text-field v-model="addressLine2" label="Address Line 1">

         </v-text-field>
       </v-flex>
       <v-flex md3 offset-md1>
         <v-text-field v-model="pincode" label="Address Line 1">

         </v-text-field>
       </v-flex>
     </v-layout>

     <v-layout row wrap>
       <v-flex xs12 md6>
              <v-subheader>
                Do you Prefer Any Doctor ?
                <v-spacer></v-spacer>
                <v-radio-group row v-model="prefarance" @change="priorityCheck()" :rules="[v => !!v || 'Please Select Any Prefarance']">
                  <v-radio color="primary" label="YES" value="YES"></v-radio>
                  <v-radio color="primary" label="NO" value="NO"></v-radio>
                </v-radio-group>
              </v-subheader>
            </v-flex>
            
       <v-flex xs12 md3 offset-md2 v-if="prefarance == 'YES'">
              <v-select
                      :items="doctors"
                      label="Available Doctors"
                      item-text="username"
                      v-model="doctor"
                      item-value="id"
                      :rules="[v => !!v || 'Please Select Doctor']"
                      single-line
                      @change="filterDoctorSlots(doctor)"
                    ></v-select>
            </v-flex>
     </v-layout>

     <v-layout row wrap>
       <v-flex xs12 sm4>
          <v-subheader>Referred By
          <v-radio-group row v-model="referredType">
            <v-radio label="DOCTORS" value="DOCTOR" color="blue"></v-radio>
            <v-radio label="OTHERS" value="OTHERS" color="blue"></v-radio>
          </v-radio-group>
          </v-subheader>
        </v-flex>
        <v-flex xs12 sm4 v-if="referredType == 'DOCTOR'">
          <v-autocomplete
          :items="referredDoctors"
          label="Referred Doctors"
          item-text="fullName"
          item-value="fullName"
          v-model="refferedBy"
          class="fields">
          </v-autocomplete>
        </v-flex>

       <v-flex xs12 v-else md3 offset-md1>
              <v-text-field label="Reffered By " v-model="refferedBy">

              </v-text-field>
        </v-flex>
     </v-layout>

     <v-layout row wrap>
       <v-flex md12 sm12>
         <v-card>
         <v-card-title>
            <span class="headline">Available Slots</span>
          </v-card-title>
          <v-card-text v-if="displayError">
              <v-layout row warp>
                <v-flex sm6 offset-sm3>
                  <v-card color="primary">
                    <v-card-text>
                      No Slots Available 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
          </v-card-text>

          <v-card-text v-else>
             <v-radio-group  v-model="slotid" :rules="[v => !!v || 'Please Select Appointment Slot']">
               <v-layout row wrap>
                
                   <v-card  v-for="(ava,i) in availSlots" :key="i" style="padding-left:15px;padding-bottom:15px;margin-left:15px;">
                     <v-flex sm12 md12 >  
                       <v-card-text>
                         <b> <u>{{ ava.doctor.username }}</u> </b>
                            <v-divider></v-divider>
                            <br>
                           <v-radio color="green" :value="ava.id" :label="ava.slot.slotName"></v-radio>
                           
                         
                       </v-card-text>
                     </v-flex>
                     <v-spacer></v-spacer>
                   </v-card>
                   
               </v-layout>
             </v-radio-group>
          </v-card-text>
       </v-card>
       </v-flex>
     </v-layout>

        
          <!-- <v-card>
        
          


                 <v-radio-group  v-model="slotid" :rules="[v => !!v || 'Please Select Appointment Slot']">
               <v-card-text>
                   <v-layout row wrap>
                      
                     <v-flex sm12 md4 style="padding-left:15px;padding-bottom:15px;">  
                   <v-card  v-for="(ava,i) in availSlots" :key="i">
                     
                       <v-card-text>
                         
                            <u>{{ ava.slot.startTime}} - {{ ava.slot.endTime}} </u>
                           <v-radio color="green" :value="ava.id" :label="ava.slot.slotName"></v-radio>
                           <b> <u>{{ ava.doctor.username }}</u> </b>
                         
                       </v-card-text>
                       
                   </v-card>
                   </v-flex>                                                                                                                               
                   </v-layout>
                </v-card-text> 
                 </v-radio-group>
                  
            </v-card> -->
      

    <v-divider></v-divider>

  <br><hr><br> <h4><u>Clinical Details</u></h4><br>

  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-subheader>Are you diabetic? 
        <v-spacer></v-spacer>
                  <v-radio-group row v-model="diabetic" @change="selectDiabetic(diabetic)">
                    <v-radio label="Yes" value="yes" color="blue" ></v-radio>
                    <v-radio label="No" value="no" color="blue" ></v-radio>
                  </v-radio-group> 
      </v-subheader>
    </v-flex>
    <v-flex>
      <div id="selectDiabetic" style="display:none">
                    <v-text-field type="text" v-model="diabeticDuration" label="Enter duration" ></v-text-field>
      </div>
    </v-flex>

    <v-spacer></v-spacer>
    <v-flex xs12 md6>
                    <v-subheader>Do you have Hypertension? 
                      <v-spacer></v-spacer>
                <v-radio-group row v-model="bp" @change="selectHp(bp)">
                    <v-radio label="Yes" value="yes" color="blue" ></v-radio>
                    <v-radio label="No" value="no" color="blue" ></v-radio>
                </v-radio-group> 
                </v-subheader>
                
      </v-flex>
      <v-flex>
        <div id="selectHp" style="display:none">
                    <v-text-field type="text" v-model="bpDuration" label="Enter duration" ></v-text-field>
        </div>
      </v-flex>
      <v-spacer></v-spacer>

  </v-layout>

  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-subheader>Do you have any Cardiac condition? 
        <v-spacer></v-spacer>
                    <v-radio-group row v-model="cardiac" @change="selectCardiac(cardiac)">
                    <v-radio label="Yes" value="yes" color="blue" ></v-radio>
                    <v-radio label="No" value="no" color="blue"></v-radio>
                </v-radio-group> 
      </v-subheader>          
    </v-flex>

    <!-- <v-flex>
      <div id="selectCardiac" style="display:none">
                    <v-text-field type="text" v-model="cardiacDuration" label="Enter duration" ></v-text-field>
      </div>
    </v-flex> -->
    <v-spacer></v-spacer>
    <v-flex xs12 md6>
      <v-subheader>Do you have Asthma? 
        <v-spacer></v-spacer>
                <v-radio-group row v-model="asthama" @change="selectAsthma(asthama)">
                    <v-radio label="Yes" value="yes" color="blue" ></v-radio>
                    <v-radio label="No" value="no" color="blue" ></v-radio>
                </v-radio-group> 
      </v-subheader>
                
    </v-flex>
    <!-- <v-flex>
      <div id="selectAsthma" style="display:none">
                    <v-text-field type="text" v-model="asthamaDuration" label="Enter duration" ></v-text-field>
      </div>
    </v-flex> -->
    <v-spacer></v-spacer>
  </v-layout>
     

     <v-layout row wrap>
       <v-flex xs12 md6>
         <v-subheader>Do you have History of Eye Problem? 
           <v-spacer></v-spacer>
                    <v-radio-group row v-model="eyeProblem" @change="selectEye(eyeProblem)">
                    <v-radio label="Yes" value="yes" color="blue" ></v-radio>
                    <v-radio label="No" value="no" color="blue" ></v-radio>
                </v-radio-group> 
                </v-subheader>
                
       </v-flex>
       <v-flex>
         <div id="selectEye" style="display:none">
                    <v-text-field type="text" v-model="eyeProblemDescription" label="Explain" ></v-text-field>
          </div>
       </v-flex>
       <v-spacer></v-spacer>
        <v-flex xs12 md6>
          <v-subheader>Are you using any Eye drops? 
          <v-spacer></v-spacer>
                    <v-radio-group row v-model="eyeDrops" @change="selectDrop(eyeDrops)">
                    <v-radio label="Yes" value="yes" color="blue"></v-radio>
                    <v-radio label="No" value="no" color="blue"></v-radio>
                </v-radio-group> 
                </v-subheader>
                
        </v-flex>
                <v-flex>
                  <div id="selectDrop" style="display:none">
                    <v-text-field type="text" v-model="eyeDropsDescription" label="Explain"></v-text-field>
                    </div>
                </v-flex>
  <v-spacer></v-spacer>
     </v-layout>

  <v-layout row wrap>
       <v-flex xs12 md6>
         <v-subheader>Do you have any Drug Allergy? 
           <v-spacer></v-spacer>
                    <v-radio-group row v-model="drugAllergy" @change="selectDrug(drugAllergy)">
                    <v-radio label="Yes" value="yes" color="blue" ></v-radio>
                    <v-radio label="No" value="no" color="blue" ></v-radio>
                </v-radio-group> 
                </v-subheader>
                
       </v-flex>
       <v-flex>
         <div id="selectDrug" style="display:none">
                    <v-text-field type="text" v-model="drugAllergyDescription" label="Explain" ></v-text-field>
          </div>
       </v-flex>
       <v-spacer></v-spacer>
        <v-flex xs12 md6>
          <v-subheader>Do have any Medical Conditions? 
          <v-spacer></v-spacer>
                    <v-radio-group row v-model="medCond" @change="selectMed(medCond)">
                    <v-radio label="Yes" value="yes" color="blue"></v-radio>
                    <v-radio label="No" value="no" color="blue"></v-radio>
                </v-radio-group> 
                </v-subheader>
                
        </v-flex>
                <v-flex>
                  <div id="selectMed" style="display:none">
                    <v-text-field type="text" v-model="medicalCondition" label="Explain"></v-text-field>
                    </div>
                </v-flex>
  <v-spacer></v-spacer>
     </v-layout>



  <v-divider></v-divider>
     <v-layout row wrap>
       <v-flex xs12 sm8 offset-sm2>
        <div class="text-xs-center">
          <v-btn round color="success" :disabled="!valid"  @click="submit('COA')">Submit</v-btn>
          <v-btn round color="error">Cancel</v-btn>
        </div>
      </v-flex>
     </v-layout>
    </v-form>
    </v-card-text>
  </v-card>
  <v-dialog v-model="paymentdialog" max-width="400">
        <v-card>
          <v-card-title>
           <h3> Please Select Your Payment Method </h3> 
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-layout row wrap>
              <v-flex>
                <v-btn color="primary" @click="submit('COA')" dark>CASH ON ARRIVAL</v-btn>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex>
                 <v-btn color="primary" :href="paymentUrl" @click="submit('ONLINE')" dark>ONLINE PAYMENT</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider></v-divider>
          
        </v-card>
      </v-dialog>
</v-container>


  <!-- <v-flex xs12 sm12>
      <br>
      <v-card>
      <v-card-text>
  

<hr>
        <v-layout>
            

        </v-layout>

      </v-card-text>
      </v-card>
      

  </v-flex> -->
</template>
<script>
import {APIService} from '../APIService.js';
const API_URL = 'http://server.mahatinnovations.com:9091';
const apiService = new APIService();
import axios from 'axios';
  export default {
    name: 'DatePickers',
    
    data () {
      return {
        picker: null,
        date: new Date().toISOString().substr(0, 10),
        mindate: new Date().toISOString().substr(0, 10),
        dob: null,
        menu: false,
        menu1: false,
        modal: false,
        dialog1: false,
        paymentdialog:false,

        paymentUrl:"",

        valid:true,

        fullName: "",
        mobileNumber: "",
        email:"",
        CurrenteyeProblem:"",
        gender:"",
        branch:null,
        doctor:null,
        diabetic: "no",
        diabeticDuration:"",
        bp:"no",
        bpDuration:"",
        cardiac:"no",
        cardiacDuration: "",
        asthama:"no",
        asthamaDuration:"",
        eyeProblem:"no",
        eyeProblemDescription:"",
        eyeDrops:"no",
        eyeDropsDescription:"",
        refferedBy:"NONE",
        drugAllergy:"no",
        drugAllergyDescription:"",
        medCond:"no",
        medicalCondition:"",

        addressLine1:"",
        addressLine2: "",
        pincode:"",

        date1: "",

        


        genders:[{
          gender:"MALE"
        },{
          gender:"FEMALE"
        },{
          gender:"OTHERS"
        }],

        titles:[{
          title:"Mr."
        },
        {
          title:"Mrs."
        },
        {
          title:"Miss."
        },
        {
          title:"Dr."
        }],

        branchs:[],
        doctors:[],

        slots:[],
        branchSlots:[],
        availSlots:[],
        slotid: "",
        formRequest: null,
        displayError: false,
        appFor:"self",
        title:"",
        age:null,
        mobileNoRules:{
          required: value=> !!value || "Required",
          counter: value=> value.length <= 10 || "Max 10 digits"
        },
        prefarance:"YES",

        referredType: "DOCTOR",
        referredDoctors: []
        
        
      }
    },

    methods: {
      
       selectDiabetic(diabetic){
        if(diabetic == "yes"){
          document.getElementById('selectDiabetic').style.display='block';
        }else{
          document.getElementById('selectDiabetic').style.display='none';
        }
      },
       selectHp(bp){
        if(bp == "yes"){
          document.getElementById('selectHp').style.display='block';
        }else{
          document.getElementById('selectHp').style.display='none';
        }
      },
      selectDrug(drugAllergy){
        if(drugAllergy == "yes"){
          document.getElementById('selectDrug').style.display='block';
        }else{
          document.getElementById('selectDrug').style.display='none';
        }
      },
       selectMed(medCond){
        if(medCond == "yes"){
          document.getElementById('selectMed').style.display='block';
        }else{
          document.getElementById('selectMed').style.display='none';
        }
      },
       selectEye(eyeProblem){
        if(eyeProblem == "yes"){
          document.getElementById('selectEye').style.display='block';
        }else{
          document.getElementById('selectEye').style.display='none';
        }
      },
       selectDrop(drop){
        if(drop == "yes"){
          document.getElementById('selectDrop').style.display='block';
        }else{
          document.getElementById('selectDrop').style.display='none';
        }
      },

       getBranches(){
         return apiService.getBranches().then(res =>{
           this.branchs = res;
           console.log(this.branchs);
           
         })
       },
       //  get full slots here
       getAvailableSlotsBranchWise(){
         

         return apiService.getAvailableSlotFromBranch(this.date).then(response =>{
           console.log(response);
           this.slots = response;
           
           if(response.length > 0){
             this.displayError = false;
           }else{
             this.displayError = true;
           }
         })
       },

       filterBranchWise(branch){
         let Slots = this.slots;
         var branchslots = Slots.filter(bslot => bslot.branch.id == branch);
         this.branchSlots = branchslots;
         console.log("Branch wise Slots ");
         console.log(this.branchSlots);
         this.getDoctor();
       },

       filterDoctorSlots(doctor){
         let branch = this.branchSlots;
         var result = branch.filter(avslot => avslot.doctor.id === doctor);
         this.availSlots = result;
         
         console.log("Doctor wise Slots ");
         console.log(this.availSlots);
        
         this.slotid = null;
       },

       getDoctor(){
        let doctors =[];
        for(let i=0; i< this.branchSlots.length; i++){
          if(doctors == null || doctors.length == 0){
            doctors.push(this.branchSlots[i].doctor);
          }else{
            let added =0;
            for(let j =0; j< doctors.length; j++){
              if(doctors[j].id == this.branchSlots[i].id){
                added = 1;
              }else{
                added = 0;
              }
            }
            if(added == 0){
              doctors.push(this.branchSlots[i].doctor);
            }
          }
        }
        this.doctors = doctors;
        console.log("The list of Doctors");
        
        console.log(this.doctors);        
      },

      getBool(value){
        if(value == "yes"){
          return true;
        }else{
          return false;
        }
      },


    submit1(){
      if(this.$refs.form.validate()){
        this.paymentdialog = true;
      }else{
        this.paymentdialog = false;
      }
      
    },

    getReferredDoctors(){
      return apiService.getRefferedDoctors().then((response)=>{
        this.referredDoctors = response;
        console.log(this.referredDoctors);
        
      })
    },

    priorityCheck(){
      if(this.prefarance == "YES"){
        this.filterDoctorSlots(this.doctor);
      }else{
        this.availSlots = this.branchSlots;
      }
    },

      submit(payment){
       let formRequest ={
         "fullName": this.title+" "+this.fullName,
         "mobileNumber":this.mobileNumber,
         "date":this.date,
         "email":this.email,
         "age":this.age,
         "eyeProblem":this.CurrenteyeProblem,
         "gender":this.gender,
         "slot":this.slotid,
         "diabetic": this.getBool(this.diabetic),
         "diabeticDuration":this.diabeticDuration,
         "bp": this.getBool(this.bp),
         "bpDuration":this.bpDuration,
         "cardiac":this.getBool(this.cardiac),
         "asthma":this.getBool(this.asthama),
         "eyeProblem":this.getBool(this.eyeProblem),
         "eyeProblemDetails":this.eyeProblemDescription,
         "eyeDrops":this.getBool(this.eyeDrops),
         "dropDetails":this.eyeDropsDescription,
         "drugAllergy":this.getBool(this.drugAllergy),
         "drugAllergyDuration":this.drugAllergyDescription,
         "otherMedicalCondition":this.getBool(this.medCond),
         "otherMedicalConditionDuration":this.medicalCondition,
         "refferedBy":this.refferedBy,        
         "payment_method":payment,
         "addressLine1":this.addressLine1,
         "addressLine2": this.addressLine2,
         "pincode":this.pincode
       } ;

        if(this.$refs.form.validate()){
          //  let url ="http://server.mahatinnovations.com:9091/onlineAppointments/addOnlineAppointment";
       let url ="http://localhost:9091/onlineAppointments/addOnlineAppointment";
       const auth = {
        headers: { Authorization: localStorage.getItem('token') },
       };
         console.log(formRequest);

         
           return axios.post(url, formRequest, auth).then(response=>{
           console.log(response);
           if(response.status == 200){
             
             this.$router.push('/dashboard');

           }else{
             alert("Oops !!! something went wrong , Try again later");
           }
         },err=>{
           alert("Oops !!! something went wrong , Try again later");
         });
        }
      },
      getLoggedinuser(){
        
          return apiService.getloggedinUser().then(response => {
            this.mobileNumber = response.mobileNumber;
            this.addressLine1 = response.addressLine1;
            this.addressLine2 = response.addressLine2;
            this.pincode = response.pincode;
            console.log(response);
            
              this.email = response.email;


            if(this.appFor =="self"){
              this.fullName = response.firstName+" "+response.lastName;
              
            }else{
              this.fullName = "";

            }
          
        })
        
        
      },
      calculateAge(){
        let myDate= new Date(this.dob),
                        milli = myDate.getTime(),
                        newDate = new Date(),
                        newMilli = newDate.getTime();
        this.age = Math.floor((newMilli - milli)/1000/60/60/24/30/12);
        console.log(this.age);
        
      }

    },
    watch: {
      menu5 (val) {
        val && this.$nextTick(() => (this.$refs.picker5.activePicker = 'YEAR'))
      }
    },

    mounted(){
        this.getBranches();
        this.getAvailableSlotsBranchWise();
        this.getLoggedinuser();
        this.getReferredDoctors();
    },
    created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'APPOINTMENT FORM',
          disabled: true,
        }
      ]
    }
    
  }
</script>
<style>
.uppercase{
  text-transform: uppercase
}
</style>
