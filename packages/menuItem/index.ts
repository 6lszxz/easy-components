import ecMenuItem from './src/menuItem.vue'
import type { App } from 'vue'

ecMenuItem.install = (app:App):void =>{
    app.component('ecMenuItem' ,ecMenuItem);
}

export default ecMenuItem;