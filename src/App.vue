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
  /**
   * URL直打ち時に正しく画面遷移するようするための処理
   */
  created: function () {
    // 404.htmlで保管された値を取得する
    const redirectPathname = sessionStorage.redirectPathname
    const redirectParamater = sessionStorage.redirectParamater
    console.log('redirectPathname:' + redirectPathname)
    console.log('redirectParamater:' + redirectPathname)

    // 取得できたため、削除する
    delete sessionStorage.redirectPathname
    delete sessionStorage.redirectParamater

    // URL直打ちリダイレクトされているようなら、そのパスにvue-routerで遷移する
    if (redirectPathname && redirectPathname !== location.pathname) {
      const pushPath = redirectPathname.replace(process.env.BASE_URL, '/') + redirectParamater
      console.log('pushPath:' + pushPath)
      this.$router.push(pushPath)
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
