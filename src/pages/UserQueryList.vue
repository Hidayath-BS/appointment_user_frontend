<template>
    <v-layout row wrap>
         <v-flex xs12 sm12>
             <h2>Query List</h2>
     <br>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          >
            <template slot="items" slot-scope="props">
              <td></td>
              <td class="text-xs-right"></td>
              <td class="text-xs-right"></td>
              <td class="text-xs-right"></td>
              <td class="text-xs-right"></td>
              <td class="text-xs-right">
              <v-btn flat icon color="green">
                <v-icon>edit</v-icon>
              </v-btn></td>
              <td class="text-xs-right">
                <v-btn flat icon color="red">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
      <v-dialog v-model="deleteDialog1" width="500">
          <v-layout row wrap>
            <v-flex xs12>
              <v-card>
                <v-card-title>
                  Are you Sure want to delete this record ?
                </v-card-title>
                <v-card-link>
                  <v-btn @click="deleteDialog1 = false">Cancel</v-btn>
                  <v-btn color="danger" @click="deleteBankTransaction( bankid )">Yes </v-btn>
                </v-card-link>
              </v-card>
            </v-flex>
          </v-layout>
        </v-dialog>
    </v-layout>
    
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'Sl.no',value: 'slno' },
          { text: 'Date', value: 'date' },
          { text: 'Query', value: 'Query' },
          { text: 'View Reply', value: 'view' },
        ],
      }
    },
   
    mounted () {
      
    },
    methods: {
      
    },
    computed: {
      
    }
  }
</script>