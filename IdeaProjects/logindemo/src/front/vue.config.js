module.exports = {
  chainWebpack: config => {
      config.externals({
        'Kakao': 'Kakao'
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
      }
    }
  },
};