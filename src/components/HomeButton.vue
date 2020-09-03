<template>
  <div id='homeButton'>
    <v-btn class='ma-2' color='#2c3e50' v-on:click='backHome' dark>
      <v-icon left>mdi-home</v-icon>Home
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'homeButton',
  props: {
    additionalMessage: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      message: 'HOME画面に戻りますか？\n' + this.additionalMessage
    }
  },
  methods: {
    backHome: function () {
      if (confirm(this.message)) {
        this.$router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<style>
</style>
