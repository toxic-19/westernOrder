# westernOrder

## 1. order-nest
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

### Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### 目录
```
├─config // 配置文件
├─dist // 打包文件
├─entities // 生成实体文件
├─public // 静态资源
│  └─uploads // 上传文件
├─src
│  ├─common // 公共文件
│  │  └─logger
│  ├─config // 配置文件
│  ├─interface // TS文件
│  ├─modules // 业务文件
│  │  ├─app
│  │  ├─article
│  │  ├─auth
│  │  ├─category
│  │  ├─common
│  │  ├─file
│  │  ├─menu
│  │  ├─nav
│  │  ├─role
│  │  ├─tags
│  │  └─user
│  └─shared // 核心文件
│      ├─constants
│      ├─core
│      │  ├─decorator
│      │  ├─exception
│      │  ├─filters
│      │  └─interceptors
│      ├─transformer
│      └─utils
└─test
```

### 连接数据库
1. 下载依赖
```shell
npm install --save @nestjs/typeorm typeorm mysql2 # 三个依赖
```
2. 生成实体类
使用工具类 `typeorm-model-generator`
```shell
npm install typeorm typeorm-model-generator --save-dev
```
然后进入 npx 状态 执行：
```shell
typeorm-model-generator -h <Database Host> -d <Database Name> -u <Database User> -x <Database Password> -e mysql -o <Output Path> -s <Schema>
typeorm-model-generator -h localhost -d order -u root -x 123456 -e mysql -o entities -s public -t SeatEntity # eg
```
```shell
npx 是 npm v5.2+ 附带的一个命令 是 execute 的缩写
它的主要作用是帮助我们安装和运行npm包中的可执行文件 如git http-server等
在使用 npm 安装的可执行文件 需要通过 ./node_modules/.bin/ 目录下的命令来运行 而 npx 则省去了这个步骤 
例如 使用 npx http-server. 命令可以直接启动一个本地 HTTP 服务器而无需先安装全局的 http-server 包 
此外 npx 还可以执行远程的包 例如 npx create-react-app my-app 可以快速创建一个新的 React 应用程序 而无需先全局安装 create-react-app 包 
```
生成的entities目录：
```
├─entities // 生成实体文件
   └─ entities
     └─ SeatEntity.ts // 实体类
   └─ ormconfig.json
   └─ tsconfig.json
```
