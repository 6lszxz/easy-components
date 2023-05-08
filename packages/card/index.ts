import ecCard from './src/card.vue'
import type { App } from 'vue'

ecCard.install = (app:App):void =>{
    app.component('ecCard',ecCard);
}

export default ecCard;