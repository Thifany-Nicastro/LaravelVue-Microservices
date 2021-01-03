import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import '@/assets/styles/main.css'

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('user-token')}`

createApp(App).use(router, VueAxios, axios).mount('#app')
