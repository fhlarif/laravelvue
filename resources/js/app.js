


// window.Vue = require('vue').default;

import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router'
import VueTailwind from 'vue-tailwind'
// import MySettings from './MySettings.js';
/* VueTailwind */
import TInput from 'vue-tailwind/dist/t-input'
import TButton from 'vue-tailwind/dist/t-button'
import TDropdown from 'vue-tailwind/dist/t-dropdown'

const settings = {
  't-input': {
    component: TInput,
    props: {
      classes: ' px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      // ...More settings
    }
  },
  't-button': {
    component: TButton,
    props: {
      classes: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed',
      // ...More settings
    }
  },
  't-dropdown': {
    component: TDropdown,
    props: {

      // ...More settings
    }
  },
}

/* laravel Bootsrap */
window.axios =axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) { }


Vue.use(VueRouter);
Vue.use(VueTailwind,settings);
Vue.component('Navigation', require('./components/Navigation.vue').default);
// Vue.component('Dropdown', require('./components/Dropdown.vue').default);




const app = new Vue({
    el: '#vue',

    router: new VueRouter(routes),
});


