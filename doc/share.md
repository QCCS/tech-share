
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
--

