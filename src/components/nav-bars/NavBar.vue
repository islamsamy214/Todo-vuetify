<template>
  <div>
    <v-app-bar app flat>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-toolbar-title
        ><span class="font-weight-light">Todo</span
        ><span class="font-weight-bold blue--text text--lighten-2"
          >Vuetify</span
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" dark v-bind="attrs" v-on="on" plain>
            <span>islam</span>
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn plain>
                <span>sign out</span>
                <v-icon right>mdi-account-arrow-right</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <side-bar :drawer="drawer"></side-bar>
  </div>
</template>
<script>
import SideBar from "./SideBar.vue";

export default {
  components: {
    SideBar,
  },

  data() {
    return {
      drawer: true,
    };
  },
};
</script>