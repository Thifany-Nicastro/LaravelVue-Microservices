import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router, VueAxios, axios).mount('#app')
