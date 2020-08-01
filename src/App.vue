<template>
  <div id='app'>
    <button v-on:click='mode="home"'>Home</button>
    <br />
    <br />
    <div v-if='mode == "home"'>
      <button v-on:click='mode="host"'>Host</button>
      <br />
      <button v-on:click='mode="player"'>Player</button>
    </div>
    <Host v-if='mode == "host"' />
    <Player v-if='mode == "player"' />
  </div>
</template>

<script>
import Host from './components/Host.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  data: function () {
    return {
      mode: 'home'
    }
  },
  components: {
    Host,
    Player
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
  margin-top: 60px;
}
</style>
