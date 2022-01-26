import { createApp } from 'vue'
import App from './App.vue'
import { provideStore } from 'redux-vuex'
import store from './store';

const app = createApp(App);

provideStore({ app, store });

app.mount('#app');
