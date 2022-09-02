import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this Vue app in a browser, it won't work properly.

createApp(App).mount('#app')
