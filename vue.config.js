module.exports = {
  devServer: {
    proxy: {
      '/posts': {
        target: 'http://jsonplaceholder.typicode.com/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}