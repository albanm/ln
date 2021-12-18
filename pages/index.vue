<template>
  <v-main>
    <navigation-drawer />
    <section-head />
    <section-presta />
    <section-me />
    <section-price />
    <section-contact />
    <v-footer class="mt-16">
      <v-row>
        <v-col class="text-center">
          <v-icon>mdi-copyright</v-icon>&nbsp;2021 - Hélène Cabillic
        </v-col>
      </v-row>
    </v-footer>
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
