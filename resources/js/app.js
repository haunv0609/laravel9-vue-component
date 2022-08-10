import {createApp} from 'vue/dist/vue.esm-bundler';
import'./config/axios';

import test from './components/test.vue';
import header from './components/header.vue';

const app = createApp({
    components: {
        'test-component': test,
        'header-pc': header,
    },
},);
app.mount('#app');
