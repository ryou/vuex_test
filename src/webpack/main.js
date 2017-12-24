import Vue from 'vue';
import store from './store.js';
import AppComponent from './App.vue';
import CounterComponent from './Counter.vue';
import AlertComponent from './Alert.vue';

Vue.component('counter-component', CounterComponent);
Vue.component('alert-component', AlertComponent);

new Vue({
  el: '#app',
  store: store,
  render: function(h) {
    return h(AppComponent);
  },
});
