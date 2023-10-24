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
app.mount('#app')
