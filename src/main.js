/**
 * Client entry point
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import routes from './routes';

// Setup router
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes,
});


// Mount application
const app = new Vue({
	router,
	el: '#app',
	template: '<App />',
	components: { App },
});

