<template>
  <v-navigation-drawer
    expand-on-hover
    app
    color="secondary"
  >
    <v-row class="fill-height">
      <v-col align-self="center">
        <navigation-links />
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
