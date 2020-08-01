<template>
  <table align='center' border='1'>
    <tr v-for='r of 5' :key='r'>
      <td
        v-bind:class='{isFilled : squares.firstCol[r-1].isFilled}'
        v-on:click='switchSquareFilled(squares.firstCol[r-1])'
      >{{squares.firstCol[r-1].number}}</td>
      <td
        v-bind:class='{isFilled : squares.secondCol[r-1].isFilled}'
        v-on:click='switchSquareFilled(squares.secondCol[r-1])'
      >{{squares.secondCol[r-1].number}}</td>
      <td
        v-bind:class='{isFilled : squares.thirdCol[r-1].isFilled}'
        v-on:click='switchSquareFilled(squares.thirdCol[r-1])'
      >{{squares.thirdCol[r-1].number}}</td>
      <td
        v-bind:class='{isFilled : squares.fourthCol[r-1].isFilled}'
        v-on:click='switchSquareFilled(squares.fourthCol[r-1])'
      >{{squares.fourthCol[r-1].number}}</td>
      <td
        v-bind:class='{isFilled : squares.fifthCol[r-1].isFilled}'
        v-on:click='switchSquareFilled(squares.fifthCol[r-1])'
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
  beforeUpdate: function () {},
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
        array.push({ number: i, isFilled: false })
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
     * マスの選択状態を切り替える
     * @description マスの選択状態を反転させる。戻す場合は確認ダイアログを出す。
     */
    switchSquareFilled: function (square) {
      if (square.isFilled) {
        if (confirm('このマスを戻しますか？')) {
          square.isFilled = false
        }
      } else {
        square.isFilled = true
      }
    },
    checkSquaresVertical: function (squares) {},
    countFilled: function (array) {
      var cnt = 0
      array.forEach((square) => {
        if (square.isFilled) {
          cnt++
        }
      })
      return cnt
    }
  }
}
</script>

<style>
.isFilled {
  background-color: yellow;
}
td {
  width: 50px;
  height: 50px;
}
</style>
