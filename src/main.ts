import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementIcons from '@element-plus/icons-vue'

import moudles from './index'

const app = createApp(App);

app.use(ElementPlus).use(moudles)

for (const key in ElementIcons) {
    app.component(key, ElementIcons[key])
}

app.mount('#app')