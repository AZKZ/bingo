<template>
  <div id='homeButton'>
    <v-btn class='ma-2' outlined color='secondary' v-on:click='backHome'>
      <v-icon left>mdi-home</v-icon>Home
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'homeButton',
  methods: {
    backHome: function () {
      if (confirm('HOME画面に戻りますか？')) {
        this.$router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<style>
</style>
