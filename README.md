
<h1 align="center">lemon-react-app</h1>

> 一个基于react18的开发模版

基于lemon-scripts的深度定制的react18开发模版，增强版的cra脚手架，相比cra，增加了less以及一些业务性的babel支持。
> 同时，抛弃了cra-custom，这意味着连config-overrides都不需要维护了，真正意义上的0配置～

配合[lemon-scripts](https://github.com/lemondreamtobe/lemon-scripts)使用，如果有cdn或者分包之类的需求请查看[文档](https://github.com/lemondreamtobe/lemon-scripts)
> 一切都准备完毕，开箱即用即可 \0^◇^0/

## 技术栈(你需要了解的东西)
- **使用[lemon-scripts](https://github.com/lemondreamtobe/lemon-scripts)进行集成和打包**，不再需要烦恼于各种配置 零配置文件支持更快的热更新和更优化的生产构建。
- **封装了数据模拟**，使用axios请求接口，本地即可支持mock数据，可独立于后台开发前端需求
- **引入了mobx6**, 推荐使用mobx-react-lite，更加轻量化
- **react18**, 相比旧的脚手架，全面拥抱react18
- **支持react hooks**, litter hooks, bigger fun 采用react hook编写应用
- **支持typeScript**, 提供类型+接口支持 开发体验更强
- **按业务模块划分的目录结构**，开发独力功能时无需分心其它模块，做到最小耦合
- **webpack5**，全新版本的webpack，带来更快的开发体验和构建效率
- **react-router6**，更轻量和更扩展的路由系统

## 工程结构
```.
├── components
├── const
│   └── routes.ts
├── global
│   ├── fonts
│   ├── style
├── helpers
│   └── toast.ts
├── hooks
│   └── useReachBottom.ts
├── images
│   └── logo.svg
├── mock
│   ├── index.ts
│   └── login.ts
├── pages
│   ├── home
│   │   ├── index.module.less
│   │   └── index.tsx
│   └── login
│       ├── index.module.less
│       └── index.tsx
├── store
│   └── count.ts
├── App.tsx
├── global.d.ts
├── index.css
├── index.tsx
├── react-app.d.ts
└── reportWebVitals.js
```

## 使用方法

``` javascript
// 安装依赖
$ yarn
// 启动
$ yarn start
// 打包
$ yarn build
```


