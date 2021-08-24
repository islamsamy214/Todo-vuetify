<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="grey lighten-3">
      <div class="ma-5">
        <router-view />
      </div>
      <v-snackbar v-model="snackbar" color="success" top right timeout="1300">
        The form has submited but it didn't add any record 34an ana 3ayl bedan
        :P

        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/nav-bars/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
  },

  data() {
    return {
      snackbar: false,
    };
  },

  computed: {
    ...mapGetters(["getSnackbar"]),
  },

  watch: {
    getSnackbar(newVal) {
      if (newVal == true) {
        this.snackbar = true;
      }
    },
    snackbar(newVal) {
      if (newVal == false) {
        this.$store.commit("endSnackbar");
      }
    },
  },
};
</script>
