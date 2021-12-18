<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{attrs, on}">
      <v-btn text v-bind="attrs" v-on="on">
        Mentions légales
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <v-spacer />
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <h2 class="text-h3">
          Mentions légales
        </h2>
        <h2 class="text-h5 my-6">
          Éditrice, responsable de la publication
        </h2>
        <pre>
Hélène Cabillic
3 Les Noées, 56460 Val d’Oust
E-mail : hcabillic@gmail.com
Forme juridique : micro-entreprise
SIRET : 828 548 501 00017
Code APE : 8559B
    </pre>

        <h2 class="text-h5 my-6">
          Hébergeur
        </h2>
        <pre>
github
https://github.com/
88 Colin P. Kelly Jr St, CA 94107 99404 San Francisco
(415) 448-6673
        </pre>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return { dialog: false }
  }
}
</script>

<style>

</style>
