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
        <v-card flat>
          <v-card-text class="ml-12 pb-0 text-body-1">
            {{ $t('subtitle') }}
          </v-card-text>
        </v-card>
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
              <li>{{ $t('simple6') }}</li>
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
  subtitle: Je corrige des documents variés (sous-titres de vidéos courtes, scripts de courts-métrages, rapports de stage, romans, essais, etc.)
  simple: Correction
  simple1: "Après vérification et correction, votre texte vous sera rendu sans fautes de :"
  simple2: grammaire, conjugaison, orthographe
  simple3: typographie
  simple4: syntaxe
  simple5: sémantique
  simple6: vérification et correction d'éléments factuels (noms propres, dates, géographie, etc.)
  deep: Réécriture
  deep1: "À la correction peut s'ajouter :"
  deep2: une reformulation des passages maladroits
  deep3: "une mise en forme de texte brut (par exemple : retranscription audio)"
en:
  presta: Services
  subtitle: I proofread various documents (subtitles of short videos, short film scripts, internship reports, books...)
  simple: Proofreading
  simple1: "After verification and correction, your text will be returned to you without errors of :"
  simple2: grammar, conjugation, spelling
  simple3: typography
  simple4: syntax
  simple5: semantic
  simple6: verification and correction of factual elements (proper nouns, dates, geography...)
  deep: Rewriting
  deep1: "This is a proofreading to which are added :"
  deep2: rewording of awkward passages
  deep3: "formatting of raw text (for example: audio transcription)"

</i18n>

<script>
export default {

}
</script>

<style>

</style>
