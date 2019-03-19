<template>
<v-flex xs12 sm11>
<div class="display-1 my-3">Queries</div>
 <v-card>
     <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
           <p>Question to be displayed</p>
            <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title">
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
          </v-layout>
        </v-container>
     </v-card-text>
 </v-card>
</v-flex>

</template>

<script>
 export default {
    data () {
      return {
        items: [
          { header: 'Today' },
          {
           
            title: 'Answer 1',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
           
            title: 'Answer 2',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
           
            title: 'Answer 3',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          }
        ]
      }
    }
  }

</script>