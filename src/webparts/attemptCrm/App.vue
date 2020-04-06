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
          width="30"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="30"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn class="px-4" to="/updates">
        <v-icon class="pr-1">mdi-database-check</v-icon>
        <span class="mr-2">Updates</span>
      </v-btn>
      <v-btn class="px-4" to="/datagrid">
        <v-icon class="pr-1">mdi-database</v-icon>
        <span class="mr-2">Data</span>
      </v-btn>
      <v-btn class="px-4" to="/about">
        <v-icon class="pr-1"mdi-information</v-icon>
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid="">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
</style>
