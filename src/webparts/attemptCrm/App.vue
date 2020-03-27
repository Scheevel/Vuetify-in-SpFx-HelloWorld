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
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <SpFxComponent/>
    </v-content>
  </v-app>
</template>
<script>
import SpFxComponent from './components/AttemptCrm.vue';
import auth from "./utils/auth";
import { mapState } from "vuex";
export default {
  components: {
    SpFxComponent,
  },
    data: () => {return {
        dialog: false,
        mini: false,
        dialogText: "",
        dialogTitle: "",
        loggedIn: auth.loggedIn(),
        isRootComponent: true,
        // clipped: false,
        drawer: window.innerWidth > 960,
        fixed: false,
        items: [
          {
            icon: "dashboard",
            title: "Dashboard",
            vertical: "Dashboard",
            link: "dashboard"
          },
          {
            icon: "shopping_cart",
            title: "Orders",
            vertical: "Order",
            link: "orders"
          },
          {
            icon: "perm_identity",
            title: "Customers",
            vertical: "Customer",
            link: "customers"
          },
          {
            icon: "bubble_chart",
            title: "Products",
            vertical: "Product",
            link: "products"
          },
          {
            icon: "thumbs_up_down",
            title: "About",
            vertical: "About",
            link: "about"
          }
        ],
        userMenus: [
          {
            icon: "bubble_chart",
            title: "Logout",
            link: "/logout"
          },
          {
            icon: "bubble_chart",
            title: "Change Password",
            link: "/changepassword"
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        menuItem: "Orders"
      };
    },
    created () {
/*
      auth.onChange = loggedIn => {
        console.log("loggedIn", loggedIn);
        this.loggedIn = loggedIn;
      };
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start();
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress;
          // parse meta tags
          this.$Progress.parseMeta(meta);
        }
        //  start the progress bar
        this.$Progress.start();
        //  continue to next page
        next();
      });
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        if (to.name !== "ErrorPage") {
          this.menuItem = to.name;
        }
        //  finish the progress bar
        this.$Progress.finish();
      });
*/
    },
    computed: {
/*
      ...mapState("user", {
        user: "user"
      }),
      auth () {
        return auth;
      },
      activeMenuItem() {
        return this.menuItem;
      }
*/
    },
    methods: {
/*       clickMenu(item) {
        this.menuItem = item.title;
        this.$router.push({
          name: item.title
        });
      }, */
    },
    mounted () {
//      this.$Progress.finish();
    }
};
</script>
