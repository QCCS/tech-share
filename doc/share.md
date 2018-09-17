
```
git checkout share
```
之前这种开发方式一般适用于前后端一起开发
比如spring mvc
前端根据设计图，把页面写好，给后端开发
后端把页面需要的数据直接填在页面里面

---

即使是这种方式，如果不用npm安装react
可以用script标签直接引入，
```
git checkout share1
```

引入react,然后写一个组件，没有问题

vue,angularjs一样可以，不做师范，可以到官方网站查看

---

这样开发之后，点击查看网页源码，写的源码全部被看见，加载也大
这样可以引入 gulp，grunt打包工具，
grunt ,gulp 出来很久了，在webpack之前，但是目前还有很多项目在用
```
git checkout share2
```
因为要打包，我这边在js里面多写两个函数，方便看出打包效果
```
npm i -g grunt
//如果不全局安装

```
grunt只是一个工具，还需要依赖很多插件才能完成打包
压缩js
混淆js
压缩css
压缩html
copy文件
替换文件内容等
等等
自己需要什么插件，就在npm搜索，基本都有，没有的根据需要可以自己手动写一点，

根据打包的配置
打包完成之后，可以是多页面，或者单页面
比如我这边要打包之后留下index.html,order.html

我想打包之后在build目录下，就先建一个build文件夹来装文件

gulp与grunt写法不大一样，功能差不多，

这种简单的页面可以用这个打包

老中控是用yeoman-grunt构建，可以看看学习grunt
老app有用gulp打包，可以看看学习 gulp

官方网站可以用这种方式

---

添加.gitignore文件，不然把不需要上传的文件上传了，浪费上传时间

上面react文件没有压缩，是因为依赖babel编译
虽然页面中应入babel编译，也可以支持es6语法，但是对于工程流程化不方便管理

目前这个浏览器普遍能解析编译es5,我们想写es6，或者react,并且在浏览器实时预览，就需要
把写的es6语言编译为es5,再用浏览器看
可以借助node开启服务，websock实时监听服务响应，
这个服务可以自己用node搭建

webpack集成了dev-server可以做到这一点

下面开始用npm 安装babel react webpack
```
git checkout share3
```


```
npm install -g babel-cli
npm install babel-preset-es2015 --save-dev

```
添加.babelrc
{
  "presets": ["es2015"],
  "plugins": []
}
这样可以写es6
```
//package.json添加
"build": "babel src/index.js -o dist/index.js"
```
编辑器配置es6

添加es7语法功能
有不同的阶段，语法有稍微区别
可以选择一个节点的编译依赖
```
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-stage-3
```
配置文件中可以加入stage-0，来支持es7的语法
```
{
  "presets": ["es2015", "stage-0"],
  "plugins": []
}
```
这里可以看看node_modules里面babel依赖了哪些模块

当准备要在项目中写react的时候，需要先安装
babel对jsx语法的编译包

npm install --save-dev babel-preset-react

可以在.babelrc中加入
代表babel编译的时候，把项目中的jsx也编译了，不然
打包的时候，项目会不认识react的jsx语法
```
"presets": ["es2015", "stage-0","react"],
```
加入这样配置之后，就可以用jsx语法写，babel依然可以编译为es5


#这个地方就要注意了
babel编译是编译，就是把es6，es7转换为es5，
但是有一些默认的语法是不会编译的 比如import
就直接编译为require，这样浏览器是不会认识的，
当然可以解决，引入比较老的babel包，就可以直接编译为浏览器认识的语法
也可以引入打包工具，webpack；

安装webpack
git checkout share4


npm install --save-dev webpack


添加 webpack.config.js，配置文件
输入命令,会自动找到配置文件执行，根据版本不一样，会提示安装webpack-cli命令行工具
```
webpack
```

只是安装了webpack ,没有安装react等相关依赖，可以先把index.js其他语言注释
运行命令，就可以打包成功

----

然后把react jsx语法写入，webpack就不认识了，就需要配置loader
怎么配置呢，官网看看
webpack -v
3.8.1

先要安装loader
npm install babel-loader@7 --save

加入配置
```
module: {
    rules:[
        {
            test:/\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: { presets: ["react","es2015","stage-0"] }
            }],
        },
    ]
}
```




由于之前一直没有安装react，react-dom这里就要报找不到模块
```
import React from 'react';
import ReactDOM from 'react-dom';
```


这里放下一个分支安装模块

```
git checkout -b share5

npm i -save react react-dom
```
为了能讲明白这些，我是分很多步骤来操作的
安装之后就可以用webpack打包了

--
但是还没法用模块加载的方式写样式
import ‘./css/index.css’

一样依赖loader
```
npm install --save-dev css-loader
```
如果不安装或者不配置css-loader，加载进入的css语法，就像之前没有安装与配置babel-loader一样；

webpack不会认识，直接报错
安装了css-loader只是认识css语法不报错
还需要
style-loader
```
npm install --save-dev style-loader
```
这样才能把样式加载的html里面，让css生效

网页中还需要加载图片
需要安装file-loader
```
npm install --save-dev file-loader
```
各种各样的loader
可以到官方网站查看，安装与配置方式
https://www.webpackjs.com/loaders/file-loader/

sass，scss，less，stylus等等loader就不这里安装了，
之后需要就安装


但是到这一步，每次打包完，刷新一下浏览器，比较麻烦
安装一下devserver
实时刷新浏览器

```
git checkout -b share6
npm install --save-dev webpack-dev-server 
```

运行dev-server多说两句
```
webpack-dev-server
```
直接运行，由于不是全局安装，命令行找不到对应的bin执行目录，会报错

可以这样运行，输入命令
```
node_modules/.bin/webpack-dev-server
```
会找到当前目录的依赖模块的执行命令
也可以在配置package.json
```
"scripts": {
    "server": "webpack-dev-server --open"
  }
```
自此安装了
webpack
babel-loader es6,es7,jsx-react
css-loader
file-loader
devServer
简单项目开发就可以直接

然后稍微整理为一个简单的webpack+es6+react+css+devServer的开发脚手架
```
git checkout -b share7

```
简单的布局好了，
发现开发单页面，需要路由，没有路由，前端就一个，不方便实现

```
//安装路由
git checkout -b share8

```



