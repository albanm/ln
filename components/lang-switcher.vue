<template lang="html">
  <v-speed-dial
    direction="bottom"
    transition="fade-transition"
    style="position:absolute; top:8px; right:8px;"
  >
    <template #activator>
      <v-btn
        depressed
        fab
        small
      >
        {{ $i18n.locale }}
      </v-btn>
    </template>
    <v-btn
      v-for="locale in $i18n.locales.filter(l => l !== $i18n.locale)"
      :key="locale"
      fab
      elevation="1"
      small
      nuxt
      @click="setLocale(locale)"
    >
      {{ locale }}
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  methods: {
    setLocale (locale) {
      this.$i18n.setLocale(locale)
    }
  }
}
</script>

<style lang="css">
</style>
