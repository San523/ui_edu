module.exports = {


  /*
   ** Headers of the page
   */
  head: {
    title: 'I\'m Windy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://map.qq.com/api/js?v=2.exp&key=NQVBZ-V6MK5-DA5IP-QQEZW-KD26V-QLB2Z' },
      { src: 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js' },
      {src: 'https://hm.baidu.com/hm.js?bcb307bbdb0d23ede3c7a1cf9b2c357d'},/*引入百度统计的js*/
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#00C58C' },
  /*
   ** Build configuration
   */
  build: {
    vender: [
      'element-ui',
    ],


    /*
     ** Run ESLint on save
     */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },

  modules: [
    // 请求代理配置，解决跨域
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    baseURL: 'http://127.0.0.1:3000/ws',
    requestInterceptor: (config, { store }) => {
      if (store.state.token) {
        config.headers.common['Authorization'] = store.state.token
      }
      return config
    }
  },
  proxy: [
    [
      '/ws',
      {
        target: 'https://apis.map.qq.com/ws',
        pathRewrite: {
          '^/ws': '/',
        }
      }
    ],
    [
      '/django',
      {
        target: 'http://127.0.0.1:8001',
        pathRewrite: {
          '^/django': '/',
        }
      }
    ],
  ],
  babel: {
    "plugins": [
      ["component", [{
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]
    ],
    comments: true
  },
  plugins: [
    { src: '~plugins/element-ui', ssr: true },
    { src: '~plugins/baidutongji' },
  ],
  css: [
    { src: 'element-ui/lib/theme-chalk/index.css' }
  ],
}
