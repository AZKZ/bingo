module.exports = {
  pwa: {
    themeColor: '#2c3e50',
    appleMobileWebAppStatusBarStyle: 'black'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/bingo/' : '/',
  transpileDependencies: ['vuetify']
}
