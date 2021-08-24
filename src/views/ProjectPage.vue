<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header
            >Project {{ item }}</v-expansion-panel-header
          >
          <v-expansion-panel-content class="grey--text">
              <div class="font-weight-bold">XxX-CcC-VvV</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam veniam enim,
              voluptatibus laboriosam nulla delectus maxime itaque ipsam
              accusantium similique eaque beatae illo soluta molestiae voluptas
              aut dignissimos consectetur eius!
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>