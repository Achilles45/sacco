import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

Vue.config.productionTip = false
let app;
firebase.auth().onAuthStateChanged(user=>{
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
