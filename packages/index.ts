import type { App } from 'vue'
import ecButton from './button'
import ecCard from './card'
import ecMenu from './menu'
import ecMenuItem from './menuItem'

// 所有组件列表
const components = [ ecButton, ecCard ,ecMenu,ecMenuItem]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    components.forEach(component => {
        app.use(component as unknown as { install: () => any })
    })
}

export {
    ecButton,
    ecCard,
    ecMenu,
}

export default {
    install
}
