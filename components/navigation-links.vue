<template>
  <v-list>
    <v-list-item nuxt :to="{path: '/', hash: 'section-head'}">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-home
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        Accueil
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt :to="{path: '/', hash: 'section-presta'}">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-text-box-check
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        Prestations
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt :to="{path: '/', hash: 'section-me'}">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-account
        </v-icon>
      </v-list-item-icon>
      <!--  class="px-2"<v-list-item-avatar>
              <v-img :src="basePath + '20190430_145301_2.png'" />
            </v-list-item-avatar>-->
      <v-list-item-title class="primary--text">
        Qui suis-je
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt :to="{path: '/', hash: 'section-price'}">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-currency-eur
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        Tarifs
      </v-list-item-title>
    </v-list-item>

    <v-list-item nuxt :to="{path: '/', hash: 'section-contact'}">
      <v-list-item-icon>
        <v-icon color="primary">
          mdi-send
        </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="primary--text">
        Contact
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {

}
</script>

<style>

</style>
