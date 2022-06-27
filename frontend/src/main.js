import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific FontAwesome icons */
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


/* add FontAwesome icons to the library */
library.add(faComments, faShareFromSquare)
library.add(faEye, faHouse)



createApp(App).use(store).use(router).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')