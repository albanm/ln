<template>
  <v-main>
    <navigation-drawer />
    <navigation-menu />
    <section-head :light="true" />
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h3 mt-6">
            Mentions légales
          </h2>
          <h2 class="text-h5 my-6">
            Éditrice, responsable de la publication
          </h2>
          <pre style="white-space: pre-wrap;">
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
          <pre style="white-space: pre-wrap;">
github
https://github.com/
88 Colin P. Kelly Jr St, CA 94107 99404 San Francisco
(415) 448-6673
        </pre>
        </v-col>
      </v-row>
    </v-container>
    <section-footer />
  </v-main>
</template>

<script>
export default {
  head: {
    title: 'Mentions légales'
  }
}
</script>

<style>

</style>
