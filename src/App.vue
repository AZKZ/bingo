<template>
  <v-app>
    <v-container>
      <div id='app'>
        <div v-if='mode != "home"'>
          <v-btn class='ma-2' outlined color='secondary' v-on:click='backHome'>
            <v-icon left>mdi-home</v-icon>Home
          </v-btn>
        </div>
        <div v-if='mode == "home"' class='mt-16'>
          <v-btn class='ma-2' outlined color='secondary' v-on:click='mode="host"'>Host</v-btn>
          <br />
          <v-btn class='ma-2' outlined color='secondary' v-on:click='mode="player"'>Player</v-btn>
        </div>
        <Host v-if='mode == "host"' />
        <Player v-if='mode == "player"' />
      </div>
    </v-container>
  </v-app>
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
  },
  methods: {
    backHome: function () {
      if (confirm('HOME画面に戻りますか？')) {
        this.mode = 'home'
      }
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
}
</style>
