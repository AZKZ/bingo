<template>
  <div id='player'>
    <div class='d-flex justify-center ma-2'>
      <table border='1'>
        <!-- 5行分繰り返す -->
        <tr v-for='recNum of 5' :key='recNum'>
          <!-- 5列分繰り返す -->
          <td
            class='square'
            v-bind:class='[
              { filled: squares[colNum - 1][recNum - 1].isFilled },
              squares[colNum - 1][recNum - 1].status
            ]'
            v-on:click='switchSquareFilled(colNum - 1, recNum - 1)'
            v-for='colNum of 5'
            :key='colNum'
          >{{ squares[colNum - 1][recNum - 1].number }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  data: function () {
    return {
      squares: [[], [], [], [], []]
    }
  },
  created: function () {
    var minNum = 1
    var maxNum = 15
    for (let index = 0; index < 5; index++) {
      this.squares[index] = this.initCol(minNum, maxNum)
      minNum += 15
      maxNum += 15
    }
    // 中心のマスは初めから埋めておく
    this.squares[2][2] = { number: '★', isFilled: true, status: '' }
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
        array.push({ number: i, isFilled: false, status: '' })
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
    switchSquareFilled: function (c, r) {
      // 中心のマスは変更できない
      if (c === 2 && r === 2) {
        return
      }

      // 既に埋められている場合は確認ダイアログ表示
      if (this.squares[c][r].isFilled) {
        if (confirm('このマスを戻しますか？')) {
          this.squares[c][r].isFilled = false
        }
      } else {
        this.squares[c][r].isFilled = true
      }

      // 全マスのステータス初期化
      this.resetAllSquaresStatus(this.squares)
      // 垂直・水平・対角方向のマス更新
      this.updateSquaresVertical(this.squares)
      this.updateSquaresHorizonal(this.squares)
      this.updateSquaresDiagonal(this.squares)

      this.refreshAllSquares()
    },
    /**
     * 垂直方向でマスを更新する関数
     */
    updateSquaresVertical: function (squares) {
      for (let colNum = 0; colNum < 5; colNum++) {
        var cnt = this.countFilled(squares[colNum])
        this.updateStatus(squares[colNum], cnt)
      }
    },
    /**
     * 水平方向でマスを更新する関数
     */
    updateSquaresHorizonal: function (squares) {
      for (let recNum = 0; recNum < 5; recNum++) {
        var array = []
        for (let colNum = 0; colNum < 5; colNum++) {
          array.push(squares[colNum][recNum])
        }
        var cnt = this.countFilled(array)
        this.updateStatus(array, cnt)
      }
    },
    /**
     * 体格方向でマスを更新する関数
     */
    updateSquaresDiagonal: function (squares) {
      var arrayLtoR = []
      var arrayRtoL = []
      var arrays = []
      for (let colNum = 0; colNum < 5; colNum++) {
        arrayLtoR.push(squares[colNum][colNum])
        arrayRtoL.push(squares[colNum][4 - colNum])
        arrays = [arrayLtoR, arrayRtoL]
      }

      for (let index = 0; index < arrays.length; index++) {
        var cnt = this.countFilled(arrays[index])
        this.updateStatus(arrays[index], cnt)
      }
    },
    /**
     * 埋まっているマスを数を返す関数
     */
    countFilled: function (array) {
      let cnt = 0
      array.forEach((square) => {
        if (square.isFilled) {
          cnt++
        }
      })
      return cnt
    },
    /**
     * 数に応じてステータスを変える関数
     */
    updateStatus: function (array, cnt) {
      let status
      if (cnt === 4) {
        status = 'reach'
      } else if (cnt === 5) {
        status = 'bingo'
      } else {
        return
      }
      for (let index = 0; index < 5; index++) {
        if (array[index].isFilled) {
          // 既にステータスがビンゴの場合は、更新しない
          if (array[index].status === 'bingo') {
            continue
          }
          array[index].status = status
        }
      }
    },
    /**
     * 全マスのステータスをリセットする
     */
    resetAllSquaresStatus: function (squares) {
      for (let colNum = 0; colNum < 5; colNum++) {
        for (let recNum = 0; recNum < 5; recNum++) {
          squares[colNum][recNum].status = ''
        }
      }
    },
    /**
     * 全マスをリフレッシュする関数
     * @description この処理がないと、リアクティブに更新されない場合がある
     */
    refreshAllSquares: function () {
      for (let colNum = 0; colNum < 5; colNum++) {
        this.$set(this.squares, colNum, this.squares[colNum])
      }
    }
  }
}
</script>

<style>
.filled {
  font-weight: 100;
  color: lightgray;
  text-decoration-line: line-through;
}
.reach {
  background-color: yellow;
}
.bingo {
  background-color: red;
}
.square {
  font-size: 150%;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
