import ecButton from "./src/button.vue"
import type { App } from 'vue';
// 仅类型导入

ecButton.install= (app: App):void =>{
    app.component("ecButton", ecButton);
}

export default ecButton;