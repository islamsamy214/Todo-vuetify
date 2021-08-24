<template>
  <v-navigation-drawer
    v-model="localDrawer"
    class="indigo primary"
    overlay-color="black"
    app
  >
    <v-responsive class="text-center pt-6">
      <v-avatar color="grey lighten-2" size="75">
        <v-icon class="display-4">mdi-account-circle</v-icon>
      </v-avatar>
    </v-responsive>
    <div class="text-center py-5">
      <span class="white--text headline">Islam</span>
      <add-project class="mt-2"></add-project>
    </div>
    <v-list>
      <v-list>
        <v-list-item
          v-for="(link, index) in links"
          :key="index"
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import AddProject from "../pop-ups/AddProject.vue";
export default {
  props: ["drawer"],

  components: {
    AddProject,
  },

  data() {
    return {
      localDrawer: this.drawer,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder-network", text: "My Projects", route: "/projects" },
        { icon: "mdi-account-group", text: "Team", route: "/teams" },
      ],
    };
  },

  watch: {
    drawer() {
      this.localDrawer = !this.localDrawer;
    },
  },
};
</script>