<template>
  <v-flex xs12 row>
	<v-layout py-3>
	   		<v-flex xs12>
	   			<!-- <v-card> -->
		   			
                   <v-flex xs6 offset-xs3>
                      <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation>
               <v-card>
                 
                   <v-card-title>
                   <h3>Ask a Query to Start conversation</h3>
                   </v-card-title>
                   <v-divider></v-divider>
                   <v-card-text>
                    
                   <v-flex xs10 offset-xs1>
                       <v-textarea
                      outline
                      label="Please enter your query"
                       input="text"
                       v-model="query"
                       :rules="[rules.required, rules.length]">
                      </v-textarea>
                    </v-flex>
                  </v-card-text>
                 <v-flex offset-xs3>
                
                   </v-flex>
               </v-card>
               <br/>
                <v-flex xs6 offset-xs4>
	             <v-btn color="green" :disabled="!valid" dark round @click="addqueries()">Submit</v-btn>
                   <v-btn color="error" dark round>Cancel</v-btn>
                   </v-flex>	
                      </v-form>
              </v-flex>	
              
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
        selected: [],
      query:'',
      valid: true,
      rules:{
        required: v => !!v || 'Please Enter Your Query',
        length : v=> v.length > 10 || 'Query Should be greater than 10 Chars'
      }
      }
    },
   methods:{
    addqueries(){
      if(this.$refs.form.validate()){
        const auth={
        headers:{
          Authorization:localStorage.getItem('token')
        }
      }
      const url=`${API_URL}/postNewConversation`;
      let request = {
        "query":this.query
      }
      return axios.post(url,request,auth).then(reponse=>{
        if(reponse.status == 200){
          this.$router.push('/UserQueryList');
        }else{
          alert("Oops!!, Something went Wrong");
        }
      },err=>{
        alert("Oops!!, Something went Wrong");
      })
      }else{
        this.valid = false;
      }
      
    }
  },
   
    
    created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'Query List',
          disabled: false,
          href: '/UserQueryList'
        },
        {
          text: 'Ask Query',
          disabled: true,
        }
      ]
    }
  } 
</script>
<style>

</style>

