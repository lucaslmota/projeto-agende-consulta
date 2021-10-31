import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import LoadScript from 'vue-plugin-load-script'
import VueMask from 'v-mask';


const app = createApp(App);
//app.use(VueMask);

app.use(router, LoadScript, VueMask);


app.mount("#app");
