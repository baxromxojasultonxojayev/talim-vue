import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'

// import vue from 'vue'
// import EasySlider from 'vue-easy-slider'
 

const app = createApp(App)
app.use(router)
// vue.use(EasySlider)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-spinner', BaseSpinner)
app.mount('#app')
