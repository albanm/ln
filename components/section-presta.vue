<template>
  <v-container id="section-presta" class="my-12">
    <v-row>
      <v-col>
        <h2 class="text-h4 primary--text ml-12">
          <v-icon color="primary" large class="mb-1">
            mdi-text-box-check
          </v-icon>
          Prestations
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-title class="text-h5 primary--text">
            Correction simple
          </v-card-title>
          <v-card-text class="text-body-1">
            <p>Après vérification et correction, votre texte vous sera rendu sans fautes de :</p>
            <ul>
              <li>grammaire, conjugaison, orthographe</li>
              <li>typographie</li>
              <li>syntaxe</li>
              <li>sémantique</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2" />
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-title class="text-h5 primary--text">
            Correction approfondie
          </v-card-title>
          <v-card-text class="text-body-1">
            <p>Il s'agit d'une correction simple à laquelle s'ajoutent :</p>
            <ul>
              <li>une reformulation des passages maladroits</li>
              <li>une vérification et correction d'éléments factuels (noms propres, dates, géographie...)</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
