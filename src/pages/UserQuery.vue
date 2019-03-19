<template>
<v-flex xs12 sm10 offset-sm1>
<div class="display-1 my-3">Queries</div>
 <v-card>
     <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 sm12>
                <v-textarea
                      name="query"
                      label="Enter Your Query"
                      v-model="query"
                      color="primary"
                      id="testing"
                       :rules="[rules.required]"></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
     </v-card-text>
     <v-card-actions>
          <v-btn color="primary" @click="formSubmit()" >Ask</v-btn>
          <v-btn color="error" >Cancel</v-btn>
     </v-card-actions>
 </v-card>
</v-flex>

</template>

<script>
 export default {
      data () {
           return {
                rules: {
        required: (value) => !!value || 'Required.',

        }
           };
      },
      methods: {
          
      }

 }

</script>