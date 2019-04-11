<template>
    <v-layout row wrap>
         <v-flex xs12 sm12>
             
     <br>
        <v-card>
          <v-card-title>
            <h2>Query List</h2>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="neQuery()">Post New Query</v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table
            :headers="headers"
            :items="QueryList"
            :search="search"
          >
            <template slot="items" slot-scope="props">
              <td>{{props.index+1}}</td>
              <td class="text-xs-left">{{props.item.queryDate}}</td>
              <td class="text-xs-left">
                <br/>
                
               <v-expansion-panel v-if="props.item.len > 0">
    <v-expansion-panel-content>
      <template v-slot:actions>
        <v-icon color="primary">A</v-icon>
      </template>
      <template v-slot:header>
        <div style="font-size:16px">{{props.item.query}}</div>
      </template>
      <v-card>
        <v-card-text style="font-size:16px;background-color:cornsilk">
          <ul>
            <li v-for="response of props.item.responses" :key="response.id">
            {{ response.response }}
           </li>
          </ul>
          
          
          
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  <v-card v-else>
    
      <v-card-title>
        <div style="font-size:16px">{{props.item.query}}</div>
      </v-card-title>
    
  </v-card>
  <br/>
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
const API_URL = 'http://server.mahatinnovations.com:9091';
const apiService = new APIService();
  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'Sl.no',value: 'slno' },
          { text: 'Date', value: 'date' },
          { text: 'Query', value: 'Query' },
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
          this.QueryList = response;
          this.sortQuestinoerrs();
          for(let i= 0; i< this.QueryList.length; i++){
            
              this.getQueryResponses(this.QueryList[i].id).then(response1 => {
                this.QueryList[i].responses =  response1;
                this.QueryList[i].len = this.QueryList[i].responses.length;
             });
          }
          console.log(this.QueryList);
          
        })
      },

      sortQuestinoerrs(){
        this.QueryList.sort(function(a,b){
          return b.id - a.id;
        })
      },

      getQueryResponses(id){
        return apiService.getResponsesList(id).then(res =>res);
      },

      neQuery(){
        this.$router.push('/AskQuery');
      }
      
    },
    computed: {
      
    }
  }
</script>