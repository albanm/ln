<template>
  <v-container id="section-contact" fluid class="pa-0">
    <v-card tile flat color="primary" dark>
      <v-container>
        <v-row class="fill-height">
          <v-col
            v-if="$vuetify.breakpoint.mdAndUp"
            class="pa-0"
            cols="12"
            md="6"
            align-self="center"
          >
            <v-row justify="center">
              <v-icon size="200">
                mdi-send-circle
              </v-icon>
            </v-row>
          </v-col>
          <v-col class="pa-6" cols="12" md="6">
            <v-row justify="center">
              <v-col cols="12" lg="8">
                <div :class="{'mt-12': $vuetify.breakpoint.mdAndUp, 'mt-6': $vuetify.breakpoint.smAndDown, 'mb-6': true}">
                  <h2 class="text-h4 secondary--text">
                    {{ $t('contact') }}
                  </h2>
                </div>

                <div class="mt-6 mb-12 contact-links text-body-1">
                  <p>{{ $t('msg') }}</p>
                  <p><v-icon>mdi-email</v-icon>&nbsp;<a href="mailto:contact@helenecabillic.fr">contact@helenecabillic.fr</a></p>
                  <p><v-icon>mdi-linkedin</v-icon>&nbsp;<a target="_blank" href="https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-cabillic-baa2a6140">Linkedin</a></p>
                  <p style="position: relative;">
                    <img width="20" height="20" style="position: absolute;left:2px;top:1px;" :src="basePath + 'fiverr2.png'">
                    <span style="padding-left: 30px;"><a target="_blank" href="https://www.fiverr.com/s2/b7c08b3aba">Fiverr</a></span>
                    <br><span style="padding-left: 30px;" class="caption">{{ $t('fiverrNote') }}</span>
                  </p>
                  <p style="position: relative;">
                    <img width="24" height="24" style="position: absolute;" :src="basePath + '5euros.png'">
                    <span style="padding-left: 30px;"><a target="_blank" href="https://5euros.com/profil/helenecabillic">5euros</a></span>
                    <br><span style="padding-left: 30px;" class="caption">{{ $t('5eurosNote') }}</span>
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<i18n lang="yaml">
fr:
  contact: Contact
  msg: "Une question ? Une demande de devis ? Contactez-moi :"
  fiverrNote: pour une commande exclusivement sur Fiverr
  5eurosNote: pour une commande exclusivement sur 5euros.com
en:
  contact: Contact
  msg: "Have a question? A request for a quote ? Please contact me:"
  fiverrNote: for an order exclusively on Fiverr
  5eurosNote: for an order exclusively on 5euros.com
</i18n>

<script>
export default {
  computed: {
    basePath () {
      return process.env.basePath
    }
  }
}
</script>

<style>
.contact-links a {
  color: white!important;
  text-decoration:none!important;
}
</style>
