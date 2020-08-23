<template>
  <div id='home'>
    <!-- タイトルを画像にするのもあり -->
    <p id='title' class='ma-8 text-h1 font-weight-medium font-italic'>Bingo</p>
    <router-link :to='{name: "Host"}' tag='v-btn'>
      <v-btn class='ma-2' color='#2c3e50' dark>Host</v-btn>
    </router-link>
    <br />
    <router-link :to='{name: "Player"}' tag='v-btn'>
      <v-btn class='ma-2' color='#2c3e50' dark>Player</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
