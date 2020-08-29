<template>
  <div id='host'>
    <home-button />
    <p class='ma-2 text-h4 font-weight-thin' color='info'>ID:{{bingoId}}
      <v-icon class='pb-1 pl-1' large @click='dialog=true'>mdi-link-variant</v-icon>
    </p>
    <p id='number' class='ma-2 text-h1 font-weight-black'>{{number}}</p>
    <v-btn class='ma-2' color='primary' v-bind:disabled='isDrawButtonDisabled' v-on:click='drawNumber'>Draw</v-btn>
    <v-row class='ma-2' no-gutters>
      <v-col v-for='n in drawnNumbers.length' :key='n' cols="2" md='1'>
        <v-card raised tile color="#0000">
          <span class='text-h4 font-weight-bold'>{{drawnNumbers[n-1]}}</span>
        </v-card>
      </v-col>
    </v-row>

    <!-- ダイアログ -->
    <v-dialog v-model='dialog' persistent max-width='500'>
      <v-card>
        <v-card-title primary-title>
          <span>Join URL</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              filled
              readonly
              append-icon='mdi-content-copy'
              :value='joinUrl'
              @click:append='copyText(joinUrl)'>
              </v-text-field>
              <VueQrcode :value='joinUrl'></VueQrcode>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color='primary' text @click='dialog = false'>Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- スナックバー -->
    <v-snackbar
      v-model='snackBar.isEnable'
      :timeout=1000
      :color='snackBar.color'
      :top=true
    >
      {{snackBar.text}}
    </v-snackbar>
  </div>
</template>

<script>
import HomeButton from '../components/HomeButton'
import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
  name: 'Host',
  data: function () {
    return {
      number: 'START',
      drawnNumbers: [],
      bingoId: '',
      isDrawButtonDisabled: false,
      dialog: false,
      joinUrl: '',
      snackBar: {
        color: '',
        text: '',
        isEnable: false
      }
    }
  },
  components: {
    HomeButton,
    VueQrcode
  },
  created: function () {
    // ランダムな数字6桁をビンゴIDに設定する
    for (let i = 0; i < 6; i++) {
      this.bingoId += this.getRandomNumber(1, 9)
    }

    // 参加用のURLを設定
    this.joinUrl = location.href.replace('/host', '/player?bingoId=') + this.bingoId
  },
  methods: {
    drawNumber: function () {
      // 現在の数字を既出配列に追加
      // 初期値が文字のため数値チェック
      if (!isNaN(this.number)) {
        this.drawnNumbers.push(this.number)
        // 数字の昇順で並べ替え
        this.drawnNumbers.sort(function (a, b) {
          if (a < b) return -1
          if (a > b) return 1
          return 0
        })
      }

      // 全部引いた場合、ENDにする
      if (this.drawnNumbers.length >= 75) {
        this.number = 'END'
        return
      }

      // 次の数字にランダム値を設定
      let nextNumber = this.getRandomNumber(1, 75)

      // 既出ではない数字が出るまで繰り返す
      while (this.drawnNumbers.includes(nextNumber)) {
        nextNumber = this.getRandomNumber(1, 75)
      }

      this.showDrawAnimation(nextNumber, 2)
    },
    getRandomNumber: function (min, max) {
      return Math.floor(min + Math.random() * (max - min + 1))
    },
    /**
     * Draw時のアニメーションを表示する
     *
     * @description 非同期処理にして、Vueインスタンスのnumberが更新される毎にレンダリングさせている
     * @param realNumber アニメーション終了後に表示させる数字
     * @param seconds アニメーション見せる秒数
     */
    showDrawAnimation: function (realNumber, seconds) {
      const startTime = new Date()

      // Drawボタンを非活性にする
      this.isDrawButtonDisabled = true

      // 無名関数内でVueインスタンスを使うために変数に格納
      const vueInstance = this

      // 非同期にダミーの数字を設定する無名関数
      const asyncSetDummyNumber = function () {
        vueInstance.number = vueInstance.getRandomNumber(1, 75)
        // 10ミリ秒間隔でこの処理を繰り返す
        var id = setTimeout(asyncSetDummyNumber, 10)

        // 開始から指定秒数経過したら、処理を止め、本当の値を設定する
        if (new Date() - startTime > seconds * 1000) {
          clearTimeout(id)
          vueInstance.number = realNumber
          vueInstance.isDrawButtonDisabled = false
        }
      }

      asyncSetDummyNumber()
    },
    copyText: function (text) {
      // Promise内でVueインスタンスを参照するための変数
      const vueInstance = this

      navigator.clipboard.writeText(text).then(function () {
        vueInstance.snackBar.isEnable = true
        vueInstance.snackBar.text = 'Copied!'
        vueInstance.snackBar.color = 'success'
      }, function () {
        vueInstance.snackBar.isEnable = true
        vueInstance.snackBar.text = 'Copy failed'
        vueInstance.snackBar.color = 'error'
      })
    }
  }
}
</script>

<style>
</style>
