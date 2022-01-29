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
                    {{ $t('whoAmI') }}
                  </h2>
                </div>

                <div class="mt-6 text-body-1" :class="{'mb-12': $vuetify.breakpoint.mdAndUp, 'mb-6': $vuetify.breakpoint.smaAndDown}">
                  <p>{{ $t('me1') }}</p>
                  <p>{{ $t('me2') }}</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            class="pt-6"
            :class="{'pb-16': $vuetify.breakpoint.smAndDown, 'pb-6': '$vuetify.breakpoint.mdAndUp'}"
            cols="12"
            md="6"
            order-md="1"
            align-self="center"
          >
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

<i18n lang="yaml">
fr:
  whoAmI: Qui suis-je ?
  me1: Professeure de français langue étrangère depuis plus de 10 ans, j'enseigne depuis quelques années dans une académie militaire.
  me2: Je me suis lancée dans l'aventure de la relecture-correction en janvier 2021. Je corrige des documents variés (sous-titres de vidéos courtes, scripts de court-métrage, rapports de stage, livres...)
en:
  whoAmI: Who am I
  me1: I have been teaching French as a foreign language for more than 10 years, and for the past few years I have been teaching in a military academy.
  me2: I started proofreading in January 2021. I proofread various documents (subtitles of short videos, short film scripts, internship reports, books...)
</i18n>

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
