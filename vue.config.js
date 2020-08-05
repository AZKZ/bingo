module.exports = {
  pwa: {
    themeColor: '#FFA500',
    appleMobileWebAppStatusBarStyle: 'black'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/bingo/' : '/',
  outputDir: 'docs',
  transpileDependencies: [
    'vuetify'
  ]
}
