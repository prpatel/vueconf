module.exports = {
  build: {
    filenames: {
      // TMP: Increment this each time when doing a release to bust the cache
      app: 'app.' + Date.now() + '.js'
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', content: "Official Vue.js Conference USA" },
      { name: 'description', content: 'Official Vue.js Conference USA' },
      { name: 'keywords', content: 'Vue.js,Vue,HTML,CSS,XML,JavaScript' },
      { property: 'og:title', content: 'VueConf US 2019 – MARCH 25-27, 2019 in Tampa, USA | Vue.js Conference' },
      { property: 'og:site_name', content: 'VueConf US 2019 – MARCH 25-27, 2019 in Tampa, USA | Vue.js Conference' },
      { property: 'og:url', content: 'https://vueconf.us' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'VueConf US 2019 – MARCH 25-27, 2019 in Tampa, USA | Vue.js Conference' },
      { property: 'og:image', content: 'https://vueconf.us/img/cover.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@vueconfus' },
      { property: 'twitter:image', content: 'https://vueconf.us/img/cover.png' },
      { property: 'twitter:title', content: 'VueConf US 2019 – MARCH 25-27, 2019 in Tampa, USA | Vue.js Conference' },
      { property: 'twitter:description', content: 'Official Vue.js Conference USA' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#3EB882' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo-48.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;subset=latin-ext' },
    ],
    script: [
      { type: 'text/javascript', src: '/sw.js' }
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~assets/css/style.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    // { src: '~plugins/analytics', ssr: false },
    { src: '~plugins/cookies', ssr: false },
    { src: '~plugins/offline.js', ssr: false }
  ]
}
