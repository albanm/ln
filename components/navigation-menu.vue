<template>
  <v-menu>
    <template #activator="{attrs, on}">
      <v-btn
        v-if="$vuetify.breakpoint.mdAndDown"
        v-bind="attrs"
        fab
        style="top: 8px;right: 8px;"
        fixed
        color="secondary"
        v-on="on"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
    <navigation-links />
  </v-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>
