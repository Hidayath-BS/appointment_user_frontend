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
                   <h3>Do you have any Question?</h3>
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
import axios from 'axios';

const API_URL='http://server.mahatinnovations.com:9091';
// const API_URL='http://localhost:9091';


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
      },
      consversation: this.$route.params.id
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
      const url=`${API_URL}/postQuery`;
      let request = {
        "query":this.query,
        "conversation":this.consversation
      }
      return axios.post(url,request,auth).then(reponse=>{
        if(reponse.status == 200){
          this.$router.push('/ConversationDetials/'+this.consversation);
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
/* .v-carousel{
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
div.flex.xs6.offset-xs3 > div > div{
    
    padding:3px;
    color:white;
   
}
#app > div.application--wrap > div > main > div > div > div > div > div > div > div.flex.xs6.offset-xs3 > div > div.v-card__title{
       border-top: 120px solid #29abe2;
    border-right: 237px solid transparent;
    border-left: 240px solid transparent;
    border-bottom: 0px;
   
   
}
#app > div.application--wrap > div > main > div > div > div > div > div > div > div.flex.xs6.offset-xs3 > div > v-card-body > div > div > div > div.v-input__slot{
 
border-bottom:3px solid darkblue;
background-color:aliceblue;

 }
 
 h1.cl{
       font-size: 16px;
    font-weight: 900;
    color: black;
    padding: 10px;
    text-align: center;
 }
.v-card.val{
  border:7px solid #29abe2;
  background:aliceblue;
} */
</style>

