<template>
  <v-footer class="mt-16" color="transparent">
    <v-row class="my-12">
      <v-col class="text-center" cols="12">
        <v-btn nuxt :to="localePath('/cgv')" text small>
          CGV
        </v-btn>
        <v-btn nuxt :to="localePath('/mentions-legales')" text small>
          mentions légales
        </v-btn>
      </v-col>
      <v-col class="text-center mb-12" cols="12">
        <v-icon>mdi-copyright</v-icon>&nbsp;2021 - Hélène Cabillic
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
