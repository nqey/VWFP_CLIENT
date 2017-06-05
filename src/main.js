// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'

// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'
Vue.use(Framework7Vue);

// Init App
var vm = new Vue({
  el: '#app',
  template:'<app/>',
  framework7: {
    root: '#app',
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
});

