import type { App } from 'vue'
import ecButton from './button'

// 所有组件列表
const components = [ ecButton ]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    components.forEach(component => {
        app.use(component as unknown as { install: () => any })
    })
}

export {
    ecButton,
}

export default {
    install
}
