import ReactDOM from 'react-dom/client';
import reportWebVitals from '../reportWebVitals';
// import '@/components/i8n'; // 注入多语言

export default async function render(App) {

    // 获取语言环境
    const lng = location.href.includes('zh-CN') ? 'zh_CN' : (location.href.includes('en') ? 'en' : 'zh_CN'); // 默认中文

    // 获取运行环境
    const UA = window.navigator.userAgent;
    const isMiniProgram = /miniprogram/i.test(UA);
    window['isMiniProgram'] = isMiniProgram ? true : false;

    // 挂载 渲染应用
    const run = () => {
        const root = ReactDOM.createRoot(document.getElementById('root')!);
        root.render(
            App
        );
    };

    try {

        // try do something
    } catch (err) {

    } finally {
        run()
    }

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


if (process.env.NODE_ENV === 'development') {
    require('../mock/index');
    console.log('development');
}

// const VConsole = require('vconsole');
// // // eslint-disable-next-line @typescript-eslint/no-unused-vars
// var vConsoler = new VConsole();
