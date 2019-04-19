<template>
  <div>
    <v-navigation-drawer fixed v-model="drawer" :class="$root.sidebarBg" class="darken-2" dark app>
      <v-toolbar flat dark :class="$root.sidebarBg" class="darken-3 bg-logo">
        <v-list class="pa-0">
          <!-- <router-link to="/dashboard"> -->
            <v-list-tile>
              <img src="../static/BN-logo-47.png" width="100%" alt="LOGO">
            </v-list-tile>
          <!-- </router-link> -->
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile to="/dashboard">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <!-- appointment -->
         <v-list-tile  to="/appointmentform">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>New Appointment</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>        
     
        <v-list-tile to="/reschedule">
          <v-list-tile-action>
            <v-icon>event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Reschedules</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

<!-- queries -->
      
           <v-list-tile  to="/UserQueryList">
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Query List</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> 

       


      </v-list>

      <!-- Queries -->
        <!-- <v-list-group prepend-icon="edit" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Queries</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/UserQueryList">
            <v-list-tile-content>
              <v-list-tile-title>queryList</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile to="/UserQuery">
            <v-list-tile-content>
              <v-list-tile-title>query</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile to="/UserQueryReply">
            <v-list-tile-content>
              <v-list-tile-title>query reply</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group> -->


      <!-- nav bar -->

    </v-navigation-drawer>
    <v-toolbar fixed app light class="white">
      
      <v-icon @click.stop="drawer = !drawer">menu</v-icon>
      <!-- <v-toolbar-title>
        AMS-BANGALORE NETHRALAYA
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <!-- <v-btn flat class="hidden-sm-and-down">Link One</v-btn>
      <v-btn flat class="hidden-sm-and-down">Link Two</v-btn> -->
      <!-- <v-badge overlap color="red">
        <small slot="badge">3</small>
        <v-avatar color="transparent red--after" size="36">
          <v-icon light>notifications</v-icon>
        </v-avatar>
      </v-badge> -->
      <!-- <v-badge overlap color="red">
        <small slot="badge">5</small>
        <v-avatar color="transparent red--after" size="36">
          <v-icon light>email</v-icon>
        </v-avatar>
      </v-badge> -->
      <v-menu bottom left transition="slide-y-transition">
        <v-btn slot="activator" icon>
          <v-icon class="grey--text text--darken-1">account_circle</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-btn fab small @click="logout">
              <v-icon>lock_open</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        title: 'AMS-USER',
        drawer: true,
        admins: [
          ['Management', 'people_outline'],
          ['Settings', 'settings']
        ],
        cruds: [
          ['Create', 'add'],
          ['Read', 'insert_drive_file'],
          ['Update', 'update'],
          ['Delete', 'delete']
        ],
        types: [
          ['Headings', 'people_outline'],
          ['Sub Heading', 'settings']
        ]
      }
    },
    methods:{
      logout(){
        localStorage.removeItem('token');
        localStorage.setItem('loggedIn',0);
        this.$router.push('/login');
			}
    }
  }
</script>
<style>
.blue-grey.darken-3{
  background: #eeeeee !important;
}
</style>
