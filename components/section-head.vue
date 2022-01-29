<template>
  <v-container id="section-head" fluid class="pa-0">
    <v-card tile color="primary" dark>
      <v-row class="fill-height" no-gutters>
        <v-col cols="12" md="6" order-md="2" class="pa-6">
          <v-row justify="center">
            <v-col cols="12" lg="9" xl="7">
              <div :class="{'mt-12': $vuetify.breakpoint.mdAndUp, 'mt-8': $vuetify.breakpoint.smAndDown}">
                <h1>
                  <span class="text-h4 secondary--text">
                    Hélène Cabillic
                  </span>
                  <span class="text-body-1 primary--text text--lighten-5">
                    {{ $t('job') }}
                  </span>
                </h1>
              </div>

              <div :class="{'mt-16': $vuetify.breakpoint.mdAndUp, 'mt-6': $vuetify.breakpoint.smAndDown}">
                <p :class="{'text-h1': $vuetify.breakpoint.xl, 'text-h2': $vuetify.breakpoint.lg, 'text-h3': $vuetify.breakpoint.mdAndDown, 'secondary--text': true}" v-html="$t('title1')" />
                <p v-if="!light" class="text-h6 mt-6">
                  {{ $t('title2') }}
                </p>
                <v-btn
                  v-if="!light"
                  :nuxt="true"
                  light
                  depressed
                  color="white"
                  large
                  class="primary--text mt-4"
                  :to="{path: '/', hash: 'section-contact'}"
                >
                  {{ $t('askQuote') }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp || !light" class="pa-0" cols="12" md="6" order-md="1">
          <v-img :src="basePath + 'student-gacec86f97_1920.jpg'" :height="$vuetify.breakpoint.mdAndUp && !light ? 560 : 400" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<i18n lang="yaml">
fr:
  job: Correctrice
  title1: Correction <span class="avoidwrap">sur mesure</span>
  title2: Confiez moi votre projet !
  askQuote: Demandez un devis
en:
  job: Proofreader
  title1: French proofreading
  title2: Trust me with your project!
  askQuote: Ask for a quote
</i18n>

<script>
export default {
  props: { light: { type: Boolean } },
  computed: {
    basePath () {
      return process.env.basePath
    }
  }
}
</script>

<style>

</style>
