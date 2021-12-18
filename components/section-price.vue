<template>
  <v-container id="section-price" class="my-12">
    <v-row>
      <v-col>
        <h2 class="text-h4 primary--text ml-12">
          <v-icon color="primary" large class="mb-1">
            mdi-currency-eur
          </v-icon>
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
            2 € les 1000 signes, soit environ 3 € par page <span class="avoidwrap">(1 page ≈ 1500 signes)</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-title class="primary--text">
            Correction approfondie
          </v-card-title>
          <v-card-text>
            2,50 € les 1000 signes, soit environ 3,75 € par page
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-title class="primary--text">
            Documents courts (1 page)
          </v-card-title>
          <v-card-text>
            <p>Lettre administrative, lettre de motivation, CV : 10 €</p>
            <p>Lettre de motivation + CV : 16 €</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col :class="{'text-caption': true, 'ml-12': $vuetify.breakpoint.mdAndUp}">
        <v-card flat>
          <v-card-text>
            <p class="mb-1">
              Tarifs dégressifs selon volume
            </p>
            <p class="mb-1">
              Tarifs réduits pour les étudiants
            </p>
            <p>
              Possibilité de commander via <a href="https://www.fiverr.com/s2/b7c08b3aba">Fiverr</a> (tarifs majorés pour compenser les frais occasionnés par la
              plateforme).
            </p>
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
