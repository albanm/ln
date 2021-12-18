<template>
  <v-navigation-drawer
    expand-on-hover
    app
    color="secondary"
  >
    <v-row class="fill-height">
      <v-col align-self="center">
        <v-list>
          <v-list-item @click="$vuetify.goTo('#section-head')">
            <v-list-item-icon>
              <v-icon color="primary">
                mdi-home
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title class="primary--text">
              Accueil
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#section-presta')">
            <v-list-item-icon>
              <v-icon color="primary">
                mdi-text-box-check
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title class="primary--text">
              Prestations
            </v-list-item-title>
          </v-list-item>

          <v-list-item class="px-2" @click="$vuetify.goTo('#section-me')">
            <v-list-item-avatar>
              <v-img :src="basePath + '20190430_145301_2.png'" />
            </v-list-item-avatar>
            <v-list-item-title class="primary--text">
              Qui suis-je
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#section-price')">
            <v-list-item-icon>
              <v-icon color="primary">
                mdi-currency-eur
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title class="primary--text">
              Tarifs
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#section-contact')">
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
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    basePath () {
      return process.env.basePath
    }
  }
}
</script>

<style>

</style>
