<template>
  <v-container id="section-price" class="mt-12 mb-8">
    <v-row>
      <v-col>
        <h2 class="text-h4 primary--text ml-md-12">
          <v-icon color="primary" large class="mb-1">
            mdi-currency-eur
          </v-icon>
          {{ $t('prices') }}
        </h2>
        <v-card flat>
          <v-card-text class="ml-md-12 pb-0 text-body-1">
            {{ $t('subtitle') }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-title class="primary--text">
            {{ $t('simple') }}
          </v-card-title>
          <v-card-text class="text-body-1" v-html="$t('simple1')" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-title class="primary--text">
            {{ $t('deep') }}
          </v-card-title>
          <v-card-text class="text-body-1">
            {{ $t('deep1') }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-title class="primary--text" v-html="$t('shortDoc')" />
          <v-card-text class="text-body-1">
            <p>{{ $t('shortDoc1') }}</p>
            <p>{{ $t('shortDoc2') }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col :class="{'text-caption': true, 'ml-12': $vuetify.breakpoint.mdAndUp}">
        <v-card flat>
          <v-card-text class="text-body-1">
            <p class="mb-1">
              {{ $t('notes1') }}
            </p>
            <p class="mb-1">
              {{ $t('notes2') }}
            </p>
            <p class="mb-1">
              {{ $t('notes3') }}
            </p>
            <p v-html="$t('notes5')" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<i18n lang="yaml">
fr:
  prices: Tarifs
  subtitle: Voici, à titre indicatif, les prix que je peux pratiquer. Dans tous les cas, pour chaque demande, un devis sur mesure doit être établi.
  simple: Correction
  simple1: 2 € les 1000 signes, soit environ 3 € par page <span class="avoidwrap">(1 page ≈ 1500 signes)</span>
  deep: Réécriture
  deep1: 3 € les 1000 signes, soit environ 4,5 € par page
  shortDoc: Correction rapide&nbsp;<span class="avoidwrap">(1 page)</span>
  shortDoc1: "Lettre administrative, lettre de motivation, CV : 10 €"
  shortDoc2: "Lettre de motivation + CV : 16 €"
  notes1: Commande minimale de 10 €.
  notes2: Tarifs dégressifs selon le volume.
  notes3: Tarifs réduits pour les étudiants.
  notes4: Possibilité de commander via <a href="https://5euros.com/service/260910/corriger-500-mots-1">5euros.com</a>.
  notes5: Possibilité de commander via <a href="https://www.fiverr.com/s2/b7c08b3aba">Fiverr</a> (tarifs majorés pour compenser les frais occasionnés par la plateforme).
en:
  prices: Prices
  subtitle: Here are some prices as an indication. In any case, for each request, a personal quote must be done.
  simple: Proofreading
  simple1: 2 € per 1000 signs, or about 3 € per page <span class="avoidwrap">(1 page ≈ 1500 signs)</span>
  deep: Rewriting
  deep1: 3 € per 1000 characters, i.e. approximately 4,5 € per page
  shortDoc: Short proofreading&nbsp;<span class="avoidwrap">(1 page)</span>
  shortDoc1: "Administrative letter, cover letter, CV (french resume): 10 €."
  shortDoc2: "Cover letter + CV: 16 €."
  notes1: Minimum order of 10 €.
  notes2: Decreasing rates according to volume.
  notes3: Reduced rates for students.
  notes4: Ability to order via <a href="https://5euros.com/service/260910/corriger-500-mots-1">5euros.com</a>.
  notes5: Ability to order via <a href="https://www.fiverr.com/s2/b7c08b3aba">Fiverr</a> (increased rates to compensate for fees incurred by the platform).
</i18n>

<script>
export default {

}
</script>

<style>

</style>
