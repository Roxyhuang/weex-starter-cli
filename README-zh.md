# weex-starter-cli

> weex-starter-kit 是一个可以快速构建weex项目的脚手架工具

## 快速安装

```bash
npm install weex-starter-cli -g
```

## 快速安装

```bash

mkdir helloweex

cd helloweex

weex-starter-cli

```

## 目录结构

* `src/*`: 所有Vue相关的源码
* `src/init.js`: Weex入口文件
* `build/*`: 构建脚本
* `dist/*`: 编译后文件目录
* `assets/*`: 资源目录
* `index.html`: a page with Web preview and qrcode of Weex js bundle
* `weex.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm脚本

```bash
# build both two js bundles for Weex and Web
npm run build

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 8080 port
npm run serve

# start weex-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins in `webpack.config.js`.
