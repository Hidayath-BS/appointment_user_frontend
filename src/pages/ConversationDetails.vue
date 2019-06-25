<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex>
                <v-card>
                    <v-card-title>
                        <h3>CONVERSATION DETAILS</h3>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="newQuery()">ASK NEW QUESTION</v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-card>
                            <v-card-text class="chat-box">
                        <div v-for="(resp, i) of response" :key="i">    
                               <v-layout row wrap>
                                   <v-spacer></v-spacer>
                                   <v-flex sm5>
                                       <v-card class="sent-card">
                                   
                                        <v-card-text>
                                            
                                            <p class="text-right text-upper">
                                                 <b> {{ resp.query.query }} </b>
                                                 <br>
                                                 <sub>
                                                <u>( {{ resp.query.queryDate }} / {{ resp.query.queryTime }} )</u>
                                                </sub>
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                   </v-flex>
                               </v-layout>
                                
                            <br>
                            
                            <div v-for="(qr, j) of resp.responses" :key="j">
                                <v-layout row wrap>
                                    <v-flex>
                                        <v-card class="response-card">
                                            <v-card-text>
                                                
                                                    <p>{{ qr.response }} <br>
                                                        <sub>( {{ qr.responseDate}} / {{ qr.responseTime }} )</sub>
                                                    </p>
                                                    
                                                
                                                
                                
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                                
                                 <br>
                            </div>
                            
                             
                        
                        </div>           
                        </v-card-text>
                        </v-card>             
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
    data(){
        return{
            conversation: this.$route.params.id,
            response : []
        }
    },
    methods:{
        getallConversationDetails(){
           return apiService.getConversationDetails(this.conversation).then((response)=>{
               this.response = response;
               console.log(this.response);
           })
        },
        newQuery(){
            this.$router.push('/AskQuery/'+this.conversation);
        }
    },
    mounted(){
        this.getallConversationDetails();
    },
    created: function(){
      this.$root.breadcrumbs = [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard'
        },
        {
          text: 'Conversations',
          disabled: false,
          href: '/UserQueryList'
        },
        {
          text: 'Details',
          disabled: true,
        }
      ]
    }
}
</script>
<style>
.text-upper{
    text-transform: uppercase;
}
.text-right{
    text-align: right;
}
.text-left{
    text-align: left;
}
.chat-box{
    border: 3px solid black;
}
.sent-card{
    border-radius: 10px;
    background: #d0ceb6 !important;
}
.response-card{
    border-radius: 10px;
    color: #ffffff !important;
    background: #939a9d !important;
    
}
</style>
