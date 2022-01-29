<template>
  <v-container id="section-head" fluid class="pa-0">
    <v-card tile color="primary" dark>
      <v-img :src="basePath + 'student-gacec86f97_1920.jpg'" height="708">
        <v-row class="banner">
          <v-col cols="8" class="text-center" align-self="center">
            <p class="secondary--text text-h1 mb-0" style="line-height: 120px;font-weight:500;">
              RELECTURE CORRECTION
            </p>
          </v-col>
          <v-col cols="4" class="text-center" align-self="center">
            <v-avatar width="200" height="200">
              <v-img :src="basePath + 'profile.png'" />
            </v-avatar>
          </v-col>
        </v-row>
      </v-img>
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
.banner {
  margin-top: 150px;
  height: 408px;
  background: linear-gradient(90deg,
    var(--v-primary-darken4) 0%,
    var(--v-primary-darken2) 60%,
    var(--v-primary-lighten4) 100%
  );
  opacity: 0.9;
}
</style>
