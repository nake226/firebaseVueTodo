// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
// Initialize Firebase
var config = {
  apiKey: "AIzaSyADC5YYNgsDD1HjwLkhpBRng8jpfek7KEw",
  authDomain: "vue-firebase-authenticat-c0e25.firebaseapp.com",
  databaseURL: "https://vue-firebase-authenticat-c0e25.firebaseio.com",
  projectId: "vue-firebase-authenticat-c0e25",
  storageBucket: "vue-firebase-authenticat-c0e25.appspot.com",
  messagingSenderId: "72046001552"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })    
  }
});
