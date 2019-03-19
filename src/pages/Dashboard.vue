<template>
  <v-flex xs12 row>
	<v-layout py-3>
	   		<v-flex xs12>
	   			<v-card>
		   			<v-card-title>
				      <div class="title">Appointment Table</div>
				      <v-spacer></v-spacer>
				      <v-text-field
				        v-model="search"
				        append-icon="search"
				        label="Search"
				        single-line
				        hide-details
				      ></v-text-field>
				    </v-card-title>
		   			<v-data-table
					    :headers="headers"
					    :loading="true"
					    :items="desserts"
					    :search="search"
					    v-model="selected"
					    item-key="name"
					    
					  >
					    <template slot="headerCell" slot-scope="props">
					      <v-tooltip bottom>
					        <span slot="activator">
					          {{ props.header.text }}
					        </span>
					        <span>
					          {{ props.header.text }}
					        </span> 
					      </v-tooltip>
					    </template>
					    <template slot="items" slot-scope="props">
					      <td>
					        {{props.index+1}}
					      </td>
					      <td>{{ props.item.name }}</td>
					      <td class="text-xs-left">{{ props.item.calories }}</td>
					      <td class="text-xs-left">{{ props.item.fat }}</td>
					      <td class="text-xs-left">{{ props.item.fat }}</td>
                <td class="text-xs-right"><v-btn slot="activator" fab small color="blue" dark><v-icon white>edit</v-icon></v-btn></td>	
								<td class="justify-center layout px-0">
            
							<v-dialog v-model="dialog1" max-width="1000px"> 
        <v-btn slot="activator" fab small color="blue" dark><v-icon white>edit</v-icon></v-btn>
	
        <v-card>
          <v-card-title>
            <span class="headline">Reshedule Appointment</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md4>
					    <v-layout wrap>
							<v-flex xs12 sm6 md6>Requested Date:12-01-2018</v-flex> 
              <v-flex xs12 sm6 md12><v-text-field label="Remarks"></v-text-field></v-flex>
      <br />
							<v-flex xs12 md6></v-flex>
							
            <v-flex xs12 sm6 md12>
              <v-menu
                      ref="menu"
                      lazy
                      :close-on-content-click="false"
                      v-model="menu1"
                      transition="scale-transition"
                      offset-y
                      full-width
                      :nudge-right="40"
                      min-width="150px"
                      :return-value.sync="date">
                      <v-text-field
                        slot="activator"
                        label="Resheduled Date *"
                        v-model="dateFrom"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="dateFrom" no-title scrollable>
                        
                      </v-date-picker>
                    </v-menu>
      </v-flex>
			
 <!-- <v-flex xs6 md4>
        <v-date-picker v-model="picker2" color="info darken-1"></v-date-picker>
      </v-flex>
   -->
   
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
              
               <br/>
               <v-subheader>Start Date and Time: 30-03-2019 11:00 AM</v-subheader>
                            
      
<v-subheader>End Date and Time: 30-03-2019 12:00 PM</v-subheader>
     
              </v-layout>
            </v-container>
            <small>*Indicates required field</small>
           

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn color="error" @click.native="dialog1 = false" round>Close</v-btn>
            <v-btn color="success" @click.native="dialog1 = false" round>Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
            </td>

								<td><v-btn icon class="mx-0" @click="deleteItem(props.item)">
                <v-icon color="pink">delete</v-icon>
              </v-btn></td>							
					    </template>
					  </v-data-table>
				</v-card>	   	
			 	</v-flex>		
	   </v-layout>
<v-layout py-5>
	   		<v-flex xs6>
	   			<v-card>
		   			<v-card-title>
				      <div class="title">Doctors Available</div>
				      <v-spacer></v-spacer>
				    </v-card-title>
		   			<v-data-table
					    :headers="headers2"
					    :loading="true"
					    :items="desserts"
					    :search="search"
					    v-model="selected"
					    item-key="name"
					    
					  >
					    <template slot="headerCell" slot-scope="props">
					      <v-tooltip bottom>
					        <span slot="activator">
					          {{ props.header.text }}
					        </span>
					        <span>
					          {{ props.header.text }}
					        </span>
					      </v-tooltip>
					    </template>
					    <template slot="items" slot-scope="props">
					      <td>
					        {{props.index+1}}
					      </td>
					      <td class="text-xs-left">{{ props.item.name }}</td>
					      <td class="text-xs-left">{{ props.item.calories }}</td>
					      
					    </template>
					  </v-data-table>
				</v-card>
	   		</v-flex>
				 <v-flex xs1></v-flex>
	   		<v-flex xs5>
	   			<v-card>
		   			<v-card-title>
				      <div class="title">Services</div>
				      <v-spacer></v-spacer>
				    </v-card-title>
		   			<v-data-table
					    :headers="headers3"
					    :loading="true"
					    :items="desserts"
					    :search="search"
					    v-model="selected"
					    item-key="name"
					  
					  >
					    <template slot="headerCell" slot-scope="props">
					      <v-tooltip bottom>
					        <span slot="activator">
					          {{ props.header.text }}
					        </span>
					        <span>
					          {{ props.header.text }}
					        </span>
					      </v-tooltip>
					    </template>
					    <template slot="items" slot-scope="props">
					      <td class="text-xs-left">
					        {{props.index+1}}
					      </td>
					      <td class="text-xs-left">{{ props.item.name }}</td>
					      				
					    </template>
					  </v-data-table>
				</v-card>
	   		</v-flex>				 
	   </v-layout>		 
					 <v-layout row wrap>
						 <v-flex xs2>
					 <v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa1"
      :key="i"
      :src="item.src"
			style="height:160px"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex ><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa2"
      :key="i"
      :src="item.src"
			style="height:160px"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa3"
      :key="i"
      :src="item.src"
			style="height:160px"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa4"
      :key="i"
      :src="item.src"
			style="height:160px"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 </v-layout>		 
<v-layout row wrap>
						 <v-flex xs2>
					 <v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa5"
      :key="i"
      :src="item.src"
			style="height:160px"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex ><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa6"
      :key="i"
      :src="item.src"
			style="height:160px"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa7"
      :key="i"
      :src="item.src"
			style="height:160px"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 <v-flex xs2>
	<v-carousel hide-delimiters style="height:160px;margin-left:18px;margin-bottom:20px">
    <v-carousel-item
      v-for="(item,i) in tpa8"
      :key="i"
      :src="item.src"
			style="height:160px"
    ></v-carousel-item>
  </v-carousel>
						 </v-flex><v-flex xs1></v-flex>
						 </v-layout>		 
				 </v-flex>
</template>

<script>

  export default {
    name: 'Dashboard',
    data () {
      return {
				tpa1: [
          {
            src:"../public/images-tpa/1.jpg"
          },
          {
           src:"../public/images-tpa/2.jpg"
          },
          {
           src:"../public/images-tpa/3.jpg"
          },
          {
           src:"../public/images-tpa/4.jpg"
					},
				],
				tpa2: [
          {
            src:"../public/images-tpa/7.jpg"
          },
          {
           src:"../public/images-tpa/8.jpg"
          },
          {
           src:"../public/images-tpa/9.jpg"
          },
          {
           src:"../public/images-tpa/10.jpg"
					},			
				],
				tpa3: [
					{
						src:"../public/images-tpa/13.jpg"
					},
          {
            src:"../public/images-tpa/14.jpg"
          },
          {
           src:"../public/images-tpa/15.jpg"
          },
          {
           src:"../public/images-tpa/16.jpg"
          },
					
				],
				tpa4: [
					{
						src:"../public/images-tpa/19.jpg"
					},
          {
            src:"../public/images-tpa/20.jpg"
          },
          {
           src:"../public/images-tpa/21.jpg"
          },
          {
           src:"../public/images-tpa/22.jpg"
          },
          
				],
				tpa5: [
					{
						src:"../public/images-tpa/25.jpg"
					},
					{
						src:"../public/images-tpa/26.jpg"
					},
          {
            src:"../public/images-tpa/27.jpg"
          },
          {
           src:"../public/images-tpa/28.jpg"
          },          
				],
				tpa6: [
					{
						src:"../public/images-tpa/5.jpg"
					},{
						src:"../public/images-tpa/6.jpg"
					},
					{
           src:"../public/images-tpa/29.jpg"
          },
          {
           src:"../public/images-tpa/30.jpg"
					},
				],
				tpa7: [
					{
           src:"../public/images-tpa/23.jpg"
					},
					{
						src:"../public/images-tpa/24.jpg"
					},
					{
						src:"../public/images-tpa/17.jpg"
					},
					{
						src:"../public/images-tpa/18.jpg"
					},
				],
				tpa8: [
					{
						src:"../public/images-tpa/11.jpg"
					},
					{
						src:"../public/images-tpa/12.jpg"
					},
					{
           src:"../public/images-tpa/4.jpg"
					},
					{
           src:"../public/images-tpa/10.jpg"
					},
				],
        items: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" }
        ],
        e6: 1,
        search: '',
        selected: [],
        headers: [
				 { text: 'Sl.No', value: 'Sl.No', align: 'left', },
				 {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Date', value: 'Date' ,align: 'left',},
          { text: 'Time', value: 'Time',align: 'left', },
          { text: 'Status', value: 'status',align: 'left', },
          { text: 'Edit', value: 'Edit',align: 'left', },
          { text: 'Reshedule', value: 'Edit',align: 'left', },          
          { text: 'Delete', value: 'Delete',align: 'left', }
				],
				headers2: [
					{ text: 'Sl.No', value: 'Sl.No', align: 'left', },
					{
            text: 'Doctor Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Specialization', value: 'Specialization', align: 'left', },
					],
					headers3: [
					{ text: 'Sl.No', value: 'Sl.No', align: 'left', },
					{
            text: 'Services',
            align: 'left',
            sortable: false,
            value: 'Services'
          },
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
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
</style>

