<template>
  <div id='player'>
    <home-button />
    <p class='ma-2 text-h4 font-weight-thin' color='info'>ID:{{bingoId}}</p>
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
            v-on:click='switchSquareFilled(colNum - 1, recNum - 1,squares)'
            v-for='colNum of 5'
            :key='colNum'
          >{{ squares[colNum - 1][recNum - 1].number }}</td>
        </tr>
      </table>
    </div>
    <v-dialog v-model='dialog' persistent max-width='500px'>
      <template v-slot:activator='{ on, attrs }'>
        <v-btn
          color='primary'
          v-bind='attrs'
          v-on='on'
          x-small
        >
          New Bingo Game
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span>New Bingo Game</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-text-field label='Bingo ID' v-model='bingoId' required></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color='primary' text @click='dialog = false'>Cancel</v-btn>
          <v-btn color='primary' text @click='createBingoCard(bingoId)'>Start</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { openDB } from 'idb/with-async-ittr.js'
import HomeButton from './HomeButton.vue'

export default {
  name: 'Player',
  data: function () {
    return {
      bingoId: '',
      dialog: false,
      squares: [[], [], [], [], []]
    }
  },
  components: {
    HomeButton
  },
  created: async function () {
    // 先にsquaresを作らないと、isFulledの読み込みなどでエラーになる
    this.squares = this.getNewSquares()
    // 最新のビンゴIDを取得
    this.bingoId = await this.getLatestBingoId()
    if (this.bingoId === null) {
      // 取得できない場合は、ダイアログを開く
      this.dialog = true
    } else {
      // 最新のIDでビンゴカードを作成する
      this.createBingoCard(this.bingoId)
    }
  },
  methods: {
    /**
     * 最新のビンゴIDを取得する
     */
    getLatestBingoId: async function () {
      // オブジェクトストアの取得
      const store = await this.getBingoObjectStore()

      // 件数が0件ならNULLを返す
      if (await store.count() === 0) {
        return null
      }
      // インデックス:更新日時の取得
      const index = await store.index('updateDateTime')

      // 降順で最初の一件を取得
      const latestBingoCard = await index.openCursor(null, 'prev')

      return await latestBingoCard.value.bingoId
    },
    /**
     * ビンゴカードを作成する
     */
    createBingoCard: async function (inputBingoId) {
      // オブジェクトストアの取得
      const store = await this.getBingoObjectStore()

      // 既存データの取得
      const existsBingocard = await store.get(inputBingoId)

      if (await existsBingocard === undefined) {
      // 未登録であれば、新規登録
        // ゲーム途中から新規ゲームを開始する場合も考慮して、都度squaresを新しくする
        this.squares = await this.getNewSquares()
        await store.add({ bingoId: inputBingoId, squares: this.squares, updateDateTime: new Date().getTime() })
      } else {
      // 登録されていれば復元
        this.squares = await existsBingocard.squares
      }

      this.dialog = false
    },
    /**
     * ビンゴカードを保存する
     */
    saveBingoCard: async function (inputBingoId, inputSquares) {
      const store = await this.getBingoObjectStore()
      const bingoCard = await { bingoId: inputBingoId, squares: inputSquares, updateDateTime: new Date().getTime() }
      await store.put(bingoCard)
    },
    /**
     * ビンゴで使うオブジェクトストアを取得する
     */
    getBingoObjectStore: async function () {
      // IndexedDBをopen
      const db = await this.openBingoDb()
      // トランザクションの設定
      const tx = await db.transaction('bingocards', 'readwrite')
      // オブジェクトストアの指定
      const store = await tx.objectStore('bingocards')

      return store
    },
    /**
     * ビンゴで使うIndexedDBをopenする
     */
    openBingoDb: async function () {
      const db = await openDB('BingoDatabase', 1, {
        // IndexedDBが存在していない場合は、createする
        upgrade (db) {
          const store = db.createObjectStore('bingocards', { keyPath: 'bingoId' })
          store.createIndex('updateDateTime', 'updateDateTime')
        }
      })
      return db
    },
    /**
     * 新規のsquaresを取得する
     */
    getNewSquares: function () {
      const squares = [[], [], [], [], []]

      var minNum = 1
      var maxNum = 15
      for (let index = 0; index < 5; index++) {
        squares[index] = this.initCol(minNum, maxNum)
        minNum += 15
        maxNum += 15
      }
      // 中心のマスは初めから埋めておく
      squares[2][2] = { number: '★', isFilled: true, status: '' }

      return squares
    },
    /**
     * 列を初期化する
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
    switchSquareFilled: function (colNum, rowNum, squares) {
      // 中心のマスは変更できない
      if (colNum === 2 && rowNum === 2) {
        return
      }

      // 既に埋められている場合は確認ダイアログ表示
      if (squares[colNum][rowNum].isFilled) {
        if (confirm('このマスを戻しますか？')) {
          squares[colNum][rowNum].isFilled = false
        }
      } else {
        squares[colNum][rowNum].isFilled = true
      }

      // 全マスのステータス初期化
      this.resetAllSquaresStatus(squares)
      // 垂直・水平・対角方向のマス更新
      this.updateSquaresVertical(squares)
      this.updateSquaresHorizonal(squares)
      this.updateSquaresDiagonal(squares)

      this.refreshAllSquares(squares)
      this.saveBingoCard(this.bingoId, squares)
    },
    /**
     * 垂直方向でマスを更新する
     */
    updateSquaresVertical: function (squares) {
      for (let colNum = 0; colNum < 5; colNum++) {
        var cnt = this.countFilled(squares[colNum])
        this.updateStatus(squares[colNum], cnt)
      }
    },
    /**
     * 水平方向でマスを更新する
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
     * 体格方向でマスを更新する
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
     * 埋まっているマスを数を返す
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
     * 数に応じてステータスを変える
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
     * 全マスをリフレッシュする
     * @description この処理がないと、リアクティブに更新されない場合がある
     */
    refreshAllSquares: function (squares) {
      this.squares = squares
    }
  }
}
</script>

<style>
.square {
  font-size: 150%;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.filled {
  font-weight: lighter;
  background-color: lightgray;
  text-decoration-line: line-through;
}
.reach {
  background-color: yellow;
}
.bingo {
  background-color: red;
}

</style>
