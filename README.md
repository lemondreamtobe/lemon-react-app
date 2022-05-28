
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

## Document & Explain

#### 支持 less
通过替换了scss正则，以及引入了less-loader，注意原cra不支持less

#### 支持svg
```js
import Logo from '@/images/logo.svg';
 <img src={Logo}  />
 or
 <Logo />
```


#### 分包&cdn
在lemon-scripts 提前做好了一些工具库的分离，将一些稳定的库不需要被经常打包的依赖存放在cdn，比如react。
通过这样，我们在开发之前就力争提供一个完全pure的环境，让你的bundle尽量只包含你的业务代码。
![app](https://shenshipin-1253925857.cos.ap-guangzhou.myqcloud.com/2022/05/28/03MS4OVzL5KfD07WvNkpqOdcIszQtpjjYuXDMPm1xJ6o8rVW9kh59FuODO1bNkpu_SAanHiMB11841653713358_.pic.jpg)
可以看到，我们将一系列工具库，都提取到了cdn，节省了构建时间和打包效率。
![app2](https://shenshipin-1253925857.cos.ap-guangzhou.myqcloud.com/2022/05/28/03MS4OVzL5KfD07WvNkpqOdcIszQtpjjYuXDMPm1xJ6o8rVW9kh59FuODO1bNkpu_TmPXYjha11851653713376_.pic.jpg)

<font color="red">注意，因为lemon-scripts自带支持将以下依赖抽离成cdn。
react | react-dom | react-router-dom | react-router | mobx |axios | mobx-react-lite。

如果你不需要这些cdn，可以在package.json中加配置来替换：
```js
"cdnModules" : [{name: 'react', path: 'react.min.js'}]
```

lemon-scripts默认使用了[七牛云](http://www.staticfile.org/) 作为cdn服务，如果你想使用自己的cdn，可以在package.json中加配置来替换：</font>
```js
"cdnSourcePaths" : "https://www.baidu.com"
```

#### 移动端h5适配
如果你想做移动端的项目，可以在package.json中设置设计尺寸375/750/xxx等等，内置的px2rem-loader将会自动工作。
```js
"designSize": 375
```

#### webpack analyze
lemon scripts内置了webpack analyze plugin，如何开启分析，只需要命令行加入 --analyze


#### alias resolve
项目中想要alias，因为lemon的项目是ts项目，所以lemon-scripts设计之初，会从tsconfig.paths.json去读。
也就是ts path能读到的module，用了lemon0-scripts都可以通过alias找到。
```js
// tsconfig.paths.json
{
  "compilerOptions": {
    "paths": { 
      "@/global/*": [
        "src/global/*"
      ], 
      "@/helpers/*": [
        "src/helpers/*"
      ],
      "@/components/*": [
        "src/components/*"
      ],
      "@/store/*": [
        "src/store/*"
      ],
      "@/hooks/*": [
        "src/hooks/*"
      ],  
      "@/images/*": [
        "src/images/*"
      ],
      "@/const/*": [
        "src/const/*"
      ],   
      "@/type/*": [
        "src/type/*"
      ],
      "@/pages/*": [
        "src/pages/*"
      ],
    },
  }
```

#### 同时支持多页和单页
cra项目初始化是单页应用，部分场景和业务需要多页，这块在加紧施工中。

## More
由于lemon-scripts是基于cra项目来扩展的，如果lemon-scripts并不能解决你的问题，可以看看[create-react-app](https://create-react-app.dev/docs/advanced-configuration/)，cra支持的lemon都会支持。
