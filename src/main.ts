import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

// 配置element-plus国际化
// 解决打包element-plus的ts检测失败的方法：canvas-sign.d.ts或者在此添加后面的代码（包括//） // @ts-ignore
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn, // element-plus国际化配置
})
// svg插件需要的配置
import 'virtual:svg-icons-register'

// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
// 安装自定义插件
app.use(globalComponent)

// 引入模板的全局的样式
import '@/styles/index.scss'

// 将应用挂载到挂载点上
app.mount('#app')
