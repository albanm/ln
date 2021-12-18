<template>
  <v-main>
    <navigation-drawer />
    <navigation-menu />
    <section-head />
    <section-presta />
    <section-me />
    <section-price />
    <section-contact />
    <section-footer />
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
