<template>
  <v-container class="fiverr-image pa-0" fluid>
    <v-card tile flat dark>
      <v-img :src="basePath + 'student-gacec86f97_1920.jpg'" height="1076" />
      <div class="banner-background" />
      <v-row class="banner">
        <v-col>
          <v-row style="height:338px;">
            <v-col class="text-center message" align-self="center">
              <p class="secondary--text text-h1 mt-16" style="line-height: 120px;font-weight:500;">
                PROOFREADING EDITING
              </p>
            </v-col>
            <v-col cols="4" class="text-center" align-self="center">
              <v-avatar width="200" height="200">
                <v-img :src="basePath + 'profile.png'" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-row style="height:338px;">
            <v-col class="text-center message" align-self="center">
              <p class="secondary--text text-h1 mb-8" style="line-height: 120px;font-weight:500;">
                RELECTURE CORRECTION
              </p>
            </v-col>
            <v-col cols="4" class="text-center" align-self="center">
              <v-img :src="basePath + 'Flag_of_France_(1794–1815,_1830–1958).svg'" height="338px" />
            </v-col>
          </v-row>
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
.fiverr-image {
  width: 1600px;
  height: 1076px;
}

.fiverr-image .banner-background {
  position: absolute;
  top: 200px;
  height: 676px;
  width: 100%;
  background: linear-gradient(90deg,
    var(--v-primary-darken4) 0%,
    var(--v-primary-darken2) 60%,
    var(--v-primary-lighten4) 100%
  );
  opacity: 0.9;
}

.fiverr-image .banner {
  position: absolute;
  top: 200px;
  height: 676px;
}
</style>
