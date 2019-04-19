<template>
  <v-flex xs12 row>
	<v-layout py-3>
	   		<v-flex xs12>
	   			<!-- <v-card> -->
		   			<v-card-title>
				     
				      <v-spacer></v-spacer>
               </v-card-title>
                   <v-flex xs6 offset-xs3>
                      <h1 class="cl">Do you have any Question?</h1>
               <v-card solo class="val">
                   <v-card-title>
                   
                   </v-card-title>
                   <v-card-text>
                    
                   <v-flex xs10 offset-xs1>
                       <v-textarea
                      
                      label="Please enter your query"
                       input="text"
                       v-model="query">
                      </v-textarea>
                    </v-flex>
                  </v-card-text>
                 <v-flex offset-xs3>
                
                   </v-flex>
               </v-card>
               <br/>
                <v-flex xs6 offset-xs4>
	             <v-btn color="green" dark round @click="addqueries()">Submit</v-btn>
                   <v-btn color="error" dark round>Cancel</v-btn>
                   </v-flex>	
              </v-flex>	
              
			 	</v-flex>	
        
	   </v-layout>	 
				 </v-flex>
</template>

<script>
import axios from 'axios';

const API_URL='http://server.mahatinnovations.com:9091';


  export default {
   
    data () {
      return {
			  e6: 1,
        search: '',
        selected: [],
      query:''
		
      }
    },
   methods:{
    addqueries(){
      const auth={
        headers:{
          Authorization:localStorage.getItem('token')
        }
      }
      const url=`${API_URL}/postQuery`;
      return axios.post(url,{"query":this.query},auth).then(reponse=>{
        if(reponse.status == 200){
          this.$router.push('/UserQueryList');
        }else{
          alert("Oops!!, Something went Wrong");
        }
      },err=>{
        alert("Oops!!, Something went Wrong");
      })
    }
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
div.flex.xs6.offset-xs3 > div > div{
    /* background-color:blue; */
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
 /* border:2px solid blanchedalmond; */
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
}
</style>

