<template>
  <table align='center' border='1'>
    <tr v-for='r of 5' :key='r'>
      <td
        v-bind:class='squares.firstCol[r-1].status'
        v-on:click='changeToEnable(squares.firstCol[r-1])'
      >{{squares.firstCol[r-1].number}}</td>
      <td
        v-bind:class='squares.secondCol[r-1].status'
        v-on:click='changeToEnable(squares.secondCol[r-1])'
      >{{squares.secondCol[r-1].number}}</td>
      <td
        v-bind:class='squares.thirdCol[r-1].status'
        v-on:click='changeToEnable(squares.thirdCol[r-1])'
      >{{squares.thirdCol[r-1].number}}</td>
      <td
        v-bind:class='squares.fourthCol[r-1].status'
        v-on:click='changeToEnable(squares.fourthCol[r-1])'
      >{{squares.fourthCol[r-1].number}}</td>
      <td
        v-bind:class='squares.fifthCol[r-1].status'
        v-on:click='changeToEnable(squares.fifthCol[r-1])'
      >{{squares.fifthCol[r-1].number}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Player',
  data: function () {
    return {
      squares: {
        firstCol: [],
        secondCol: [],
        thirdCol: [],
        fourthCol: [],
        fifthCol: []
      }
    }
  },
  created: function () {
    this.squares.firstCol = this.initCol(1, 15)
    this.squares.secondCol = this.initCol(16, 30)
    this.squares.thirdCol = this.initCol(31, 45)
    this.squares.fourthCol = this.initCol(46, 60)
    this.squares.fifthCol = this.initCol(61, 75)
  },
  methods: {
    /**
     * 列を初期化する関数
     * @description 指定数値の範囲内でランダムな数値が格納される
     */
    initCol: function (minNum, maxNum) {
      // 配列を初期化する
      var array = []
      // 最小値から最大値まで数字を全て配列に追加
      for (var i = minNum; i <= maxNum; i++) {
        array.push({ number: i, status: 'disable' })
      }
      // シャッフル
      for (var j = array.length - 1; j > 0; j--) {
        var k = Math.floor(Math.random() * (j + 1))
        var tmp = array[j]
        array[j] = array[k]
        array[k] = tmp
      }
      // 長さ5にして、返す
      return array.slice(0, 5)
    },
    /**
     * マスを有効化する関数
     * @description マスのステータスをenableに変更する
     */
    changeToEnable: function (square) {
      square.status = 'enable'
    }
  }
}
</script>

<style>
.disable {
  background-color: lightgray;
}
.enable {
  background-color: yellow;
}
td {
  width: 50px;
  height: 50px;
}
</style>
