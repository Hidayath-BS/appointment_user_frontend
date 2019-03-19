<template>
  <v-flex xs12 sm12>
      <h2>Appointment Form</h2><br>
      <v-card>
      <v-card-text>
    <v-layout row wrap>
         <v-flex xs5>
       <v-subheader>Appointment For &nbsp;
            <v-radio-group row>
                <v-radio label="Self" value="Self"></v-radio>
                <v-radio label="Other" value="Other"></v-radio>
            </v-radio-group>
       </v-subheader>
      </v-flex> 
    </v-layout>

    <v-layout row>
            <v-flex xs12 sm3 >
              <v-text-field type="text" label="Full Name"></v-text-field>
            </v-flex> 
            <v-flex xs12 sm3 offset-sm1>
               <v-text-field label="Mobile Number" type="number"></v-text-field>
            </v-flex>
            <v-flex xs12 sm3 offset-sm1>
             <v-text-field type="text" label="Email"></v-text-field>
            </v-flex>
     </v-layout>

     <v-layout row>
            <v-flex xs12 sm3 >
              <v-text-field type="number" label="Age"></v-text-field>
            </v-flex> 
            <v-flex xs12 sm3 offset-sm1>
               <v-text-field type="text" label="Current Eye Problem" ></v-text-field>
            </v-flex>
            <v-flex xs12 sm3 offset-sm1>
              <v-select
                      :items="genders"
                      label="Select Gender"
                      item-text="gender"
                      item-value="id"
                      single-line
                    ></v-select>
            </v-flex>
     </v-layout>

     <v-layout row>
           <v-flex xs12 sm3>
              <v-select
                      :items="branch"
                      label="Select Branch"
                      item-text="branch"
                      item-value="id"
                      single-line
                    ></v-select>
            </v-flex> 
            <v-flex xs12 sm3 offset-sm1>
              <v-select
                      :items="genders"
                      label="Apppointment type"
                      item-text="appointmenttype"
                      item-value="id"
                      single-line
                    ></v-select>
            </v-flex>
            <v-flex xs12 sm3 offset-sm1>
              <v-select
                      :items="genders"
                      label="Available Doctors"
                      item-text="doctors"
                      item-value="id"
                      single-line
                    ></v-select>
            </v-flex>
     </v-layout>

        <v-layout row wrap>
            <v-flex xs3>
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
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
        
            <v-flex xs5>
          <v-dialog v-model="dialog1" persistent max-width="900px">
        <v-btn slot="activator" color="primary" dark>Time Slots</v-btn>
      <v-card>
        <v-card-title>
            <span class="headline">Available Slots</span>
          </v-card-title>
                 <v-radio-group v-model="ex7">
               <v-card-text>
                   <v-layout row wrap>
                      
                       <v-flex xs2 style="padding-left:15px;padding-bottom:15px;">
                   <v-card>
                       <v-card-text>
                           
                           <br/><v-radio color="green" value="1" label="10.00AM to 11.00AM"></v-radio>
                       </v-card-text>
                   </v-card>
                       </v-flex>
                       <v-flex xs2 style="padding-left:15px;padding-bottom:15px;">
                   <v-card>
                       <v-card-text>
                           
                           <br/><v-radio color="green" value="2" label="11.00AM to 12.00AM"></v-radio>
                       </v-card-text>
                   </v-card>
                       </v-flex>
                       <v-flex xs2 style="padding-left:15px;padding-bottom:15px;">
                   <v-card>
                       <v-card-text>
                           
                           <br/><v-radio color="green" value="3" label="12.00AM to 1.00AM"></v-radio>
                       </v-card-text>
                   </v-card>
                       </v-flex>
                       <v-flex xs2 style="padding-left:15px;padding-bottom:15px;">
                   <v-card>
                       <v-card-text>
                           
                           <br/><v-radio color="green" value="4" label="1.00PM to 02.00PM"></v-radio>
                       </v-card-text>
                   </v-card>
                       </v-flex>
                       <v-flex xs2 style="padding-left:15px;padding-bottom:15px;">
                   <v-card>
                       <v-card-text>
                           
                           <br/><v-radio color="green" value="5" label="02.00PM to 03.00PM"></v-radio>
                       </v-card-text>
                   </v-card>
                       </v-flex>
                       <v-flex xs2 style="padding-left:15px;padding-bottom:15px;">
                   <v-card>
                       <v-card-text>
                           
                           <br/><v-radio color="green" value="6"  label="03.00PM to 04.00PM"></v-radio>
                       </v-card-text>
                   </v-card>
                       </v-flex>
                       <v-flex xs2 style="padding-left:15px;padding-bottom:15px;">
                   <v-card>
                       <v-card-text>
                          
                           <br/><v-radio color="green" value="7" label=" 04.00PM to 05.00PM"></v-radio>
                       </v-card-text>
                   </v-card>
                       </v-flex>
                       <v-flex xs2 style="padding-left:15px;padding-bottom:15px;">
                   <v-card>
                       <v-card-text>
                           <br/><v-radio color="green" value="8" label="05.00PM to 06.00PM"></v-radio>
                       </v-card-text>
                   </v-card>
                       </v-flex> 
                                                                                                                                                                                      
                   </v-layout>
                </v-card-text> 
                 </v-radio-group>
                  <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog1 = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog1 = false">Submit</v-btn>
          </v-card-actions>
            </v-card>
      </v-dialog>
            </v-flex>

        </v-layout>
     

       <br><hr><br> 

       <v-flex>
           <v-subheader>Can You add your known clinical details?<br>
           (NOTE:This will Save your time at Hospital)&nbsp;&nbsp;&nbsp;
               <v-radio-group row>
                   <v-radio label = "Yes" value="yes" color="blue" @change="selectClinical1()"></v-radio>
                   <v-radio label = "No" value = "no" color="blue" @change="selectClinical2()"></v-radio>
               </v-radio-group>
           </v-subheader>
           <div id="selectClinical" style="display:none">
       

            <v-layout row>
                <v-flex xs5>
                <v-subheader>Are you diabetic? &nbsp;&nbsp;&nbsp;
                    <v-radio-group row>
                    <v-radio label="Yes" value="yes" color="blue" @change="selectDiabetic1()"></v-radio>
                    <v-radio label="No" value="no" color="blue" @change="selectDiabetic2()"></v-radio>
                </v-radio-group> 
                </v-subheader>
                    <div id="selectDiabetic" style="display:none">
                    <v-text-field type="text" label="Enter duration" ></v-text-field>
                    </div>
                </v-flex>
                <v-spacer></v-spacer>
               <v-flex xs5>
                    <v-subheader>Do you have Hypertension? &nbsp;
                    <v-radio-group row>
                    <v-radio label="Yes" value="yes" color="blue" @change="selectHp1()"></v-radio>
                    <v-radio label="No" value="no" color="blue" @change="selectHp2()"></v-radio>
                </v-radio-group> 
                </v-subheader>
                <div id="selectHp" style="display:none">
                    <v-text-field type="text" label="Enter duration" ></v-text-field>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row>
                <v-flex xs5>
                <v-subheader>Do you have any Cardiac condition? &nbsp;
                    <v-radio-group row>
                    <v-radio label="Yes" value="yes" color="blue" @change="selectCardiac1()"></v-radio>
                    <v-radio label="No" value="no" color="blue" @change="selectCardiac2()"></v-radio>
                </v-radio-group> 
                </v-subheader>
                <div id="selectCardiac" style="display:none">
                    <v-text-field type="text" label="Enter duration" ></v-text-field>
                    </div>
                </v-flex>
                 <v-spacer></v-spacer>
               <v-flex xs5>
                    <v-subheader>Do you have Asthma? &nbsp;
                    <v-radio-group row>
                    <v-radio label="Yes" value="yes" color="blue" @change="selectAsthma1()"></v-radio>
                    <v-radio label="No" value="no" color="blue" @change="selectAsthma2()"></v-radio>
                </v-radio-group> 
                </v-subheader>
                <div id="selectAsthma" style="display:none">
                    <v-text-field type="text" label="Enter duration" ></v-text-field>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row>
                <v-flex xs6>
                <v-subheader>Do you have History of Eye Problem? &nbsp;
                    <v-radio-group row>
                    <v-radio label="Yes" value="yes" color="blue" @change="selectEye1()"></v-radio>
                    <v-radio label="No" value="no" color="blue" @change="selectEye2()"></v-radio>
                </v-radio-group> 
                </v-subheader>
                <div id="selectEye" style="display:none">
                    <v-text-field type="text" label="Explain" ></v-text-field>
                    </div>
                </v-flex>
                <v-spacer></v-spacer>
               <v-flex xs5>
                    <v-subheader>Are you using any Eye drops? &nbsp;
                    <v-radio-group row>
                    <v-radio label="Yes" value="yes" color="blue" @change="selectDrop1()"></v-radio>
                    <v-radio label="No" value="no" color="blue" @change="selectDrop2()"></v-radio>
                </v-radio-group> 
                </v-subheader>
                <div id="selectDrop" style="display:none">
                    <v-text-field type="text" label="Explain"></v-text-field>
                    </div>
                </v-flex>
            </v-layout>

            </div>
       </v-flex>

       <v-flex>
           <v-subheader>Do you want to pay the appointment fee online?&nbsp;&nbsp;&nbsp;
               <v-radio-group row>
                   <v-radio label="Yes" value="yes" color="blue"></v-radio>
                   <v-radio label="No" value="no" color="blue"></v-radio>
               </v-radio-group>
           </v-subheader>
       </v-flex>
<hr>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
        <div class="text-xs-center">
          <v-btn round color="success">Submit</v-btn>
          <v-btn round color="error">Cancel</v-btn>
        </div>
      </v-flex>

        </v-layout>

      </v-card-text>
      </v-card>
  </v-flex>
</template>
<script>

  export default {
    name: 'DatePickers',
    
    data () {
      return {
        picker: null,
        date: null,
        menu: false,
        modal: false,
        dialog1: false,
        
      }
    },

    methods: {
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
      save (date) {
        this.$refs.menu5.save(date)
      },
        selectClinical1(){
            document.getElementById('selectClinical').style.display='block';
        },
        selectClinical2(){
            document.getElementById('selectClinical').style.display='none';
        },
      selectDiabetic1(){
           document.getElementById('selectDiabetic').style.display='block';
       } ,
       selectDiabetic2(){
           document.getElementById('selectDiabetic').style.display='none';
       },
        selectHp1(){
           document.getElementById('selectHp').style.display='block';
       } ,
       selectHp2(){
           document.getElementById('selectHp').style.display='none';
       },
       selectCardiac1(){
           document.getElementById('selectCardiac').style.display='block';
       } ,
       selectCardiac2(){
           document.getElementById('selectCardiac').style.display='none';
       },
       selectAsthma1(){
           document.getElementById('selectAsthma').style.display='block';
       } ,
       selectAsthma2(){
           document.getElementById('selectAsthma').style.display='none';
       },
       selectEye1(){
           document.getElementById('selectEye').style.display='block';
       } ,
       selectEye2(){
           document.getElementById('selectEye').style.display='none';
       },
       selectDrop1(){
           document.getElementById('selectDrop').style.display='block';
       } ,
       selectDrop2(){
           document.getElementById('selectDrop').style.display='none';
       },

    },
    watch: {
      menu5 (val) {
        val && this.$nextTick(() => (this.$refs.picker5.activePicker = 'YEAR'))
      }
    },
    
  }
</script>