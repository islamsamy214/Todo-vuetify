<template>
  <div>
    <div class="subheading grey--text">Team</div>
    <v-container class="my-5">
      <v-row class="pa-4">
        <v-col
          cols="12"
          lg="3"
          sm="6"
          xs="12"
          v-for="(member, index) in team"
          :key="index"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="text-center pa-3 transition-swing rounded-xl"
                :width="hover ? 100+'%' : 93+'%'"
                :height="hover ? 100+'%' : 97+'%'"
              >
                <v-responsive>
                  <v-avatar color="grey lighten-2" size="128">
                    <v-icon class="display-4">mdi-account-circle</v-icon>
                  </v-avatar>
                </v-responsive>
                <v-card-title class="justify-center">
                  {{ member.name }}
                </v-card-title>
                <v-card-subtitle>
                  {{ member.role }}
                </v-card-subtitle>
                <v-card-actions class="justify-center">
                  <v-btn text color="blue lighten-2">
                    <v-icon left>mdi-phone-message-outline</v-icon>
                    Contact
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Islam", role: "Web developer" },
        { name: "Ryu", role: "Graphic designer" },
        { name: "Chun Li", role: "Web developer" },
        { name: "Gouken", role: "Social media maverick" },
        { name: "Yoshi", role: "Sales guru" },
      ],
    };
  }, //end of data
};
</script>