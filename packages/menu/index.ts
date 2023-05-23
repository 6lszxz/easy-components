import ecMenu from './src/menu.vue'
import type { App } from 'vue'

ecMenu.install = (app: App):void => {
    app.component('ecMenu',ecMenu);
}

export default ecMenu;