<template>
  <v-list>
    <v-list-item nuxt :to="localePath({path: '/', hash: 'section-head'})">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-home
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        {{ $t('welcome') }}
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt :to="localePath({path: '/', hash: 'section-presta'})">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-text-box-check
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        {{ $t('services') }}
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt :to="localePath({path: '/', hash: 'section-me'})">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-account
        </v-icon>
      </v-list-item-icon>
      <!--  class="px-2"<v-list-item-avatar>
              <v-img :src="basePath + '20190430_145301_2.png'" />
            </v-list-item-avatar>-->
      <v-list-item-title class="primary--text">
        {{ $t('whoAmI') }}
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt :to="localePath({path: '/', hash: 'section-price'})">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-currency-eur
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        {{ $t('prices') }}
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt :to="localePath({path: '/', hash: 'section-contact'})">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-send
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        {{ $t('contact') }}
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt @click="$i18n.setLocale($i18n.locale === 'en' ? 'fr' : 'en')">
      <v-list-item-icon class="primary--text">
        {{ $i18n.locale === 'en' ? 'FR' : 'EN' }}
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        {{ $i18n.locale === 'en' ? 'Consulter en français' : 'Read in english' }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<i18n lang="yaml">
fr:
  welcome: Accueil
  services: Prestations
  whoAmI: Qui suis-je ?
  prices: Tarifs
  contact: Contact
en:
  welcome: Welcome
  services: Services
  whoAmI: Who am I
  prices: Prices
  contact: Contact

</i18n>

<script>
export default {

}
</script>

<style>

</style>
