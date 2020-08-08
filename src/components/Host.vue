<template>
  <div id='host'>
      <p class='ma-2 text-h4 font-weight-thin' color='info'>ID:{{bingoId}}</p>
      <p id='number' class='ma-2 text-h1 font-weight-black'>{{number}}</p>
      <v-btn class='ma-2' outlined color='primary' v-on:click='drawNumber'>Draw</v-btn>
        <v-row class='ma-2' no-gutters>
          <v-col v-for='n in drawnNumbers.length' :key='n' cols="2" md='1'>
            <v-card outlined tile>
              <span class='text-h4 font-weight-bold'>{{drawnNumbers[n-1]}}</span>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'Host',
  data: function () {
    return {
      number: 'START',
      drawnNumbers: [],
      bingoId: ''
    }
  },
  created: function () {
    // ランダムな数字6桁をビンゴIDに設定する
    for (let i = 0; i < 6; i++) {
      this.bingoId += this.getRandomNumber(1, 9)
    }
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

      // ビューの数字を変更する
      this.number = nextNumber
    },
    getRandomNumber: function (min, max) {
      return Math.floor(min + Math.random() * (max - min + 1))
    }
  }
}
</script>

<style>
</style>
