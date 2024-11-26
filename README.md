# gowninng.cn_vue

![alt text](1732611051902.png)

![alt text](1732611106184.png)

![alt text](1732611121820.png)

![alt text](1732611136862.png)

将某源码（忘了叫啥，没找到模板名）改成了vue版本，并大量改动部分样式，添加一言，服务器状态等

服务器状态js在src/utils/server.js 打包项目的时候要单独拉出来 下面是打包后的结构

![1732611612307](https://github.com/user-attachments/assets/a92ced6a-73ef-46a2-9189-a09bb29c0f2a)

将server.js 和package.json 放到项目根目录 package.json内容为

`{
  "name": "gowninng_vue_server",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^3.1.7"
  }
}
`
然后npm install 安装模块 再npm run start启动服务器状态插件

#以下是Vue官方介绍的启动方式

这个模板应该帮助你开始使用 Vue 3 和 Vite 进行开发。

## 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）。

## `.vue` 导入的 TS 类型支持

TypeScript 默认无法处理 `.vue` 导入的类型信息，因此我们用 `vue-tsc` 替换 `tsc` CLI 进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 使 TypeScript 语言服务能够识别 `.vue` 类型。

## 自定义配置

请参阅 [Vite 配置参考](https://vite.dev/config/)。

## 项目设置

```sh
npm install
```

### 开发时编译和热重载

```sh
npm run dev
```

### 生产环境的类型检查、编译和压缩

```sh
npm run build
```

### 使用 [Vitest](https://vitest.dev/) 运行单元测试

```sh
npm run test:unit
```

### 使用 [Cypress](https://www.cypress.io/) 运行端到端测试

```sh
npm run test:e2e:dev
```

这将在 Vite 开发服务器上运行端到端测试。
它比生产构建快得多。

但仍然建议在部署之前使用 `test:e2e` 测试生产构建（例如，在 CI 环境中）：

```sh
npm run build
npm run test:e2e
```

### 使用 [ESLint](https://eslint.org/) 进行代码检查

```sh
npm run lint
```
