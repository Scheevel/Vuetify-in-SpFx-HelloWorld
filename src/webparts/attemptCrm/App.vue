<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn class="px-4" to="/updates">
        <v-icon class="pr-1">mdi-database-check</v-icon>
        <span class="mr-2">Updates</span>
      </v-btn>
      <v-btn class="px-4" to="/data">
        <v-icon class="pr-1">mdi-database</v-icon>
        <span class="mr-2">Data</span>
      </v-btn>
      <v-btn class="px-4" to="/about">
        <v-icon class="pr-1"mdi-information</v-icon>
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <SpFxComponent/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

//import AboutComponent from "./components/About.vue";
//import SpFxComponent from './components/AttemptCrm.vue';
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
.v-transition {
  transition: opacity .1s ease-out;
}
  
.v-enter, .v-leave {
  opacity: 0;
}
</style>
