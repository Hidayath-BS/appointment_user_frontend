<template>
    <v-layout row wrap>
         <v-flex xs12 sm12>
             
     <br>
        <v-card>
          <v-card-title>
            <h2>YOUR CONVERSATIONS</h2>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="neConversation()">START NEW CONVERSATION</v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table
            :headers="headers"
            :items="QueryList"
            :search="search"
          >
            <template slot="items" slot-scope="props">
              <td>{{props.index+1}}</td>
              <td class="text-xs-left">{{props.item.startDate}} / {{ props.item.startTime }}</td>
              <td class="text-xs-left"> {{props.item.topic}} </td>
              <td class="text-xs-left">
                <v-btn fab small icon color="primary" dark @click="conversationDetials( props.item.id )"> 
                  <v-icon>visibility</v-icon>
                </v-btn>
              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
      
    </v-layout>
    
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
        headers: [
          { text: 'Sl.no',value: 'slno' },
          { text: 'Date', value: 'date' },
          { text: 'Query', value: 'Query' },
          { text: 'view', value: 'view'}
        ],
        QueryList:[],
      }
    },
   
    mounted () {
      this.getQueriesList();
      
    },
    methods: {
      getQueriesList(){
        
        return apiService.getQueriesList().then(response=>{
          this.QueryList = response.reverse();
          // this.getLen();
          console.log(this.QueryList);
          
        })
      },

      getLen(){
        for(let i=0; i< this.QueryList.length; i++){
          let arr = this.QueryList[i].queries;
          this.QueryList[i].len = arr.length;
        }
      },

      conversationDetials(id){
        this.$router.push('/ConversationDetials/'+id);
      },

      getQueryResponses(id){
        return apiService.getResponsesList(id).then(res =>res);
      },

      neConversation(){
        this.$router.push('/NewConversation');
      }
      
    },
    computed: {
      
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
          disabled: true,
        }
      ]
    }
  }
</script>