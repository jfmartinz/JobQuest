import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import '@/index.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
