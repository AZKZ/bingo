<template>
  <div id='app'>
    <v-app>
      <v-container>
        <router-view/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    const redirect = sessionStorage.redirect
    delete sessionStorage.redirect
    if (redirect && redirect !== location.href) {
      this.$router.push(redirect)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image:url('~@/assets/background.jpg');
  background-size:cover;
}
</style>
