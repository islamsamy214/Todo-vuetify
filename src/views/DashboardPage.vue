<template>
  <div>
    <div class="subheading grey--text">Dashboard</div>

    <v-container class="my-5 white">
      <v-row
        v-for="(project, index) in projects"
        :key="index"
        :class="`pa-4 ${project.status}`"
      >
        <v-col cols="12" md="6" xs="12">
          <div class="caption grey--text">Project Title</div>
          <div>{{ project.title }}</div>
        </v-col>
        <v-col cols="12" md="2" sm="4" xs="6">
          <div class="caption grey--text">Person</div>
          <div>{{ project.person }}</div>
        </v-col>
        <v-col cols="12" md="2" sm="4" xs="6">
          <div class="caption grey--text">Due by</div>
          <div>{{ project.due }}</div>
        </v-col>
        <v-col cols="12" md="2" sm="4" xs="6" class="d-flex">
          <v-spacer></v-spacer>
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-chip :color="chipColorize(project.status)" v-bind="attrs" v-on="on">{{
                project.status
              }}</v-chip>
            </template>
            <span>Currntly {{ project.status }}</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Creat a new website",
          person: "Islam",
          due: "1Jan 2021",
          status: "Active",
        },
        {
          title: "Creat a new logo",
          person: "Islam",
          due: "1Jan 2022",
          status: "Preparing",
        },
        {
          title: "Creat a new shape",
          person: "Islam",
          due: "1Jan 2023",
          status: "Ongoing",
        },
        {
          title: "Buy a new house",
          person: "Islam",
          due: "1Jan 2024",
          status: "Ongoing",
        },
        {
          title: "Buy a new gym",
          person: "Islam",
          due: "1Jan 2025",
          status: "Ongoing",
        },
      ],
      status: "tett",
    };
  },

  methods: {
    clicked() {
      alert("clicked");
    },

    chipColorize(status) {
      if (status == "Active") {
        return "green";
      }
      if (status == "Preparing") {
        return "yellow";
      }
    },
  },
};
</script>

<style scoped>
.Active {
  border-left: solid 3px #0ea000;
}
.Preparing {
  border-left: solid 3px #d3b301;
}
.Ongoing {
  border-left: solid 3px #313131;
}
</style>