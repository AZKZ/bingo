<template>
  <div id='host'>
      <p id='number'>{{number}}</p>
      <v-btn class='ma-2' outlined color='primary' v-on:click='drawNumber'>Draw</v-btn>
        <v-row class='ma-2' no-gutters>
          <v-col v-for='n in drawnNumbers.length' :key='n' cols="2" md='1'>
            <v-card outlined tile >
              <span class='drawn-number'>{{drawnNumbers[n-1]}}</span>
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
      drawnNumbers: []
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
      let nextNumber = this.getRandomNumber()

      // 既出ではない数字が出るまで繰り返す
      while (this.drawnNumbers.includes(nextNumber)) {
        nextNumber = this.getRandomNumber()
      }

      // ビューの数字を変更する
      this.number = nextNumber
    },
    getRandomNumber: function () {
      const min = 1
      const max = 75
      return Math.floor(min + Math.random() * (max - min + 1))
    }
  }
}
</script>

<style>
#number {
  font-size: 600%;
}
.drawn-number {
  font-size:300%;
}

</style>
