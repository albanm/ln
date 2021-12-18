<template>
  <v-container id="section-me" fluid class="pa-0">
    <v-card tile flat color="primary" dark>
      <v-container>
        <v-row class="fill-height" no-gatters>
          <v-col cols="12" md="6" order-md="2" class="pa-6">
            <v-row justify="center">
              <v-col cols="12" lg="8">
                <div :class="{'mt-12': $vuetify.breakpoint.mdAndUp, 'mt-6': $vuetify.breakpoint.smAndDown, 'mb-6': true}">
                  <h2 class="text-h4 secondary--text">
                    Qui suis-je ?
                  </h2>
                </div>

                <div class="mt-6 text-body-1" :class="{'mb-12': $vuetify.breakpoint.mdAndUp, 'mb-6': $vuetify.breakpoint.smaAndDown}">
                  <p>Professeure de français langue étrangère depuis plus de 10 ans, j'enseigne depuis quelques années dans une académie militaire.</p>
                  <p>Je me suis lancée dans l'aventure de la relecture-correction en janvier 2021, je corrige des documents variés (sous-titres de vidéos courtes, scripts de court-métrage, rapports de stage, livres...)</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="pa-6" cols="12" md="6" order-md="1" align-self="center">
            <v-row justify="center">
              <v-avatar width="200" height="200">
                <v-img :src="basePath + 'profile.png'" />
              </v-avatar>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
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
