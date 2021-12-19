<template>
  <v-container id="section-head" fluid class="pa-0">
    <v-card tile color="primary" dark>
      <v-row class="fill-height" no-gutters>
        <v-col class="pa-0" cols="6">
          <v-img :src="basePath + 'Flag_of_France_(1794–1815,_1830–1958).svg'" height="300" />
        </v-col>
        <v-col cols="6" class="text-center" align-self="center">
          <p class="secondary--text text-h3 mt-16">
            PROOFREADING & EDITING
          </p>
        </v-col>
      </v-row>
      <v-row class="fill-height" no-gutters>
        <v-col class="pa-0" cols="6">
          <v-img :src="basePath + 'student-gacec86f97_1920.jpg'" height="300" />
        </v-col>
        <v-col cols="6" class="text-center" align-self="center">
          <p class="secondary--text text-h3 mb-16">
            RELECTURE & CORRECTION
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    basePath () {
      return process.env.basePath
    }
  }
}
</script>

<style>

</style>
