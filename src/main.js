import Vue from 'vue'
import firebase from 'firebase'
import store from './store/store'
import App from './App.vue'

import 'vue-awesome/icons/remove'
import 'vue-awesome/icons/pencil'
import 'vue-awesome/icons/reply'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

const config = {
  apiKey: "",
  authDomain: "https://todo-85c91.firebaseapp.com/",
  databaseURL: "https://todo-85c91.firebaseio.com",
  storageBucket: "gs://todo-85c91.appspot.com"
};
firebase.initializeApp(config);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
