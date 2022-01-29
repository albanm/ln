<template>
  <v-container id="section-presta" class="my-12">
    <v-row>
      <v-col>
        <h2 class="text-h4 primary--text ml-12">
          <v-icon color="primary" large class="mb-1">
            mdi-text-box-check
          </v-icon>
          {{ $t('presta') }}
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card flat>
          <v-card-title class="text-h5 primary--text">
            {{ $t('simple') }}
          </v-card-title>
          <v-card-text class="text-body-1">
            <p>{{ $t('simple1') }}</p>
            <ul>
              <li>{{ $t('simple2') }}</li>
              <li>{{ $t('simple3') }}</li>
              <li>{{ $t('simple4') }}</li>
              <li>{{ $t('simple5') }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" lg="2" />
      <v-col cols="12" md="6" lg="4">
        <v-card flat>
          <v-card-title class="text-h5 primary--text">
            {{ $t('deep') }}
          </v-card-title>
          <v-card-text class="text-body-1">
            <p>{{ $t('deep1') }}</p>
            <ul>
              <li>{{ $t('deep2') }}</li>
              <li>{{ $t('deep3') }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<i18n lang="yaml">
fr:
  presta: Prestations
  simple: Correction simple
  simple1: "Après vérification et correction, votre texte vous sera rendu sans fautes de :"
  simple2: grammaire, conjugaison, orthographe
  simple3: typographie
  simple4: syntaxe
  simple5: sémantique
  deep: Correction approfondie
  deep1: "Il s'agit d'une correction simple à laquelle s'ajoutent :"
  deep2: une reformulation des passages maladroits
  deep3: une vérification et correction d'éléments factuels (noms propres, dates, géographie...)
en:
  presta: Services
  simple: Simple correction
  simple1: "After verification and correction, your text will be returned to you without errors of :"
  simple2: grammar, conjugation, spelling
  simple3: typography
  simple4: syntax
  simple5: semantic
  deep: In-depth correction
  deep1: "This is a simple correction to which are added :"
  deep2: rewording of awkward passages
  deep3: verification and correction of factual elements (proper nouns, dates, geography...)
</i18n>

<script>
export default {

}
</script>

<style>

</style>
