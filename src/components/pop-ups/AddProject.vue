<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue lighten-2" dark v-bind="attrs" v-on="on">
          Add Project
        </v-btn>
      </template>
      <v-form @submit.prevent="submitForm" ref="form">
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Project</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Project Name"
                    hint="For example, Ninja Turtles"
                    required
                    v-model="pName"
                    :rules="inputRules"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    rows="12"
                    v-model="pDescription"
                    label="Project Description"
                    :rules="inputRules"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text type="submit"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      pName: null,
      pDescription: null,
      inputRules: [
        (value) => !!value || "This field is required",
        (value) => (!!value && value.length >= 3) || "Minimum length is 3",
      ],
    };
  },

  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
          this.$store.commit('triggerSnackbar');
          this.dialog = false;
      }
    },
  },
};
</script>