<template>
  <v-container fluid class="euros-image pa-0">
    <v-card tile color="primary" dark flat>
      <v-img :src="basePath + 'student-gacec86f97_1920.jpg'" height="708" />
      <div class="banner-background" />
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
.euros-image {
  width: 1260px;
  height: 708px;
}

.euros-image .banner-background {
  position: absolute;
  top: 150px;
  height: 408px;
  width: 100%;
  background: linear-gradient(90deg,
    var(--v-primary-darken4) 0%,
    var(--v-primary-darken2) 60%,
    var(--v-primary-lighten4) 100%
  );
  opacity: 0.9;
}

.euros-image .banner {
  position: absolute;
  top: 150px;
  height: 408px;
}
</style>
