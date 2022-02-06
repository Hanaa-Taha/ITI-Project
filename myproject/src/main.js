//import '@babel/polyfill'
//import 'mutationobserver-shim'
//import './plugins/bootstrap-vue'
import { createApp } from 'vue'
//import Vue from 'vue'
//import './plugins/bootstrap-vue'

//import App from './App.vue'
import router from './router'
//import store from './store/store.js'
//import Vuex from 'vuex'

//import store from "./store/store";

//import '@babel/polyfill'
//import 'mutationobserver-shim'
//import './plugins/bootstrap-vue'
import wrapper from './components/wrapper.vue'
import store from "./store/store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)

//.component('font-awesome-icon', FontAwesomeIcon)
import 'bootstrap';
//import 'bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css';


//import 'bootstrap-vue/dist/bootstrap-vue.css';
//import CountryFlag from 'vue-country-flag'
//createApp(App).use(router).mount('#app')


createApp(wrapper).component('fa',FontAwesomeIcon).use(store).use(router).mount('#app')

