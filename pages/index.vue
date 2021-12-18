<template>
  <v-main>
    <v-container fluid class="px-0">
      <v-sheet color="primary" dark>
        <v-row class="pa-0 fill-height">
          <v-col class="pa-0" cols="12" md="6" order-md="2">
            <v-row justify="center">
              <v-col cols="12" lg="8">
                <div class="mt-12 mb-12">
                  <h1>
                    <span class="text-h4 amber--text text--lighten-2">
                      Hélène Cabillic
                    </span>
                    <span class="text-body-1 primary--text text--lighten-5">
                      Correctrice
                    </span>
                  </h1>
                </div>

                <div class="mt-16">
                  <p class="text-h1 amber--text text--lighten-2">
                    Correction <span class="avoidwrap">sur mesure</span>
                  </p>
                  <p class="text-h6 mt-6">
                    Confiez moi votre projet !
                  </p>
                  <v-btn depressed light large class="primary--text mt-4">
                    Demandez un devis
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="pa-0" cols="12" md="6" order-md="1">
            <v-img :src="basePath + 'adult-ge5ee21cb1_1920.jpg'" height="600" />
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>

    <v-container class="my-12">
      <v-row>
        <v-col>
          <h2 class="text-h4 primary--text ml-12">
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
            <v-card-text>
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
            <v-card-text>
              <p>Il s'agit d'une correction simple à laquelle s'ajoutent :</p>
              <ul>
                <li>une reformulation des passages maladroits</li>
                <li>une vérification et correction d'éléments fatuels (noms propres, dates, géographie...)</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0">
      <v-sheet color="primary" dark>
        <v-container>
          <v-row class="pa-0 fill-height">
            <v-col class="pa-0" cols="12" md="6" order-md="2">
              <v-row justify="center">
                <v-col cols="12" lg="8">
                  <div class="mt-12 mb-6">
                    <h2 class="text-h4 amber--text text--lighten-2">
                      Qui suis-je ?
                    </h2>
                  </div>

                  <div class="mt-6">
                    <p>Professeure de français langue étrangère depuis plus de 10 ans, j'enseigne depuis quelques années dans une académie militaire.</p>
                    <p>Je me suis lancée dans l'aventure de la relecture-correction en janvier 2021, je corrige des documents variés (sous-titres de vidéos courtes, scripts de court-métrage, rapports de stage, livres...)</p>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="pa-0" cols="12" md="6" order-md="1" align-self="center">
              <v-row justify="center">
                <v-avatar width="200" height="200">
                  <v-img :src="basePath + '20190430_145301_2.png'" />
                </v-avatar>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h4 primary--text ml-12">
            Tarifs
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card flat>
            <v-card-title class="primary--text">
              Correction simple
            </v-card-title>
            <v-card-text>
              “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card flat>
            <v-card-title class="primary--text">
              Correction approfondie
            </v-card-title>
            <v-card-text>
              “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card flat>
            <v-card-title class="primary--text">
              Documents commerciaux
            </v-card-title>
            <v-card-text>
              “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    basePath () {
      return process.env.basePath
    }
  }
}
</script>

<style>
span.avoidwrap { display:inline-block; }
</style>
