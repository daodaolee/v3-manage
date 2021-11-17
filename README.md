# 遇到的问题
* vite.config.ts 引入 path 找不到

> npm i @types/node -D   // @types/node 就可以获得有关node.js v6.x的API的类型说明文件

* App.vue 引入 dayjs，ts找不到类型声明

> tsconfig.json 加入 allowSyntheticDefaultImports 参数

* vite打包分析

> npm i rollup-plugin-visualizer -D，会生成一个stats.html

* vite配置了alias，@可以在文件里使用，但是在store.d.ts就报错，提示说找不到类型声明

> tsconfig.json 加入 baseUrl 和 Paths 参数

* 请求接口类型不匹配

> request的时候，参数的类型定义要在传参和接口定义这两个地方必填，response的时候，参数的类型定义要在收参和接口返回这两个地方必填

* 接口如何归类

> 接口主要分为：普通类型定义，接口类型定义 和 状态类型定义，目前想到的比较舒服的办法是 types 文件夹里声明一个 index.d.ts 作为项目里所有的类型定义的主入口，然后 export * from "xxx"，这块借鉴了vue2源码的模块引用写法，由此，请求模块也改成了同样的结构

* Apple M1 芯片安装mongodb

1. Install homebrew from https://brew.sh/

2. Install xcode command line using

    ```xcode-select --install```

3. Now to install mongodb use

    ```brew tap mongodb/brew```

    ```brew install mongodb-community@5.0```

4. To check if mongodb has been installed use

    ```mongo --version```

5. to start mongoDB as macOS service use

    ```brew services start mongodb-community@5.0```

    and to stop mongoDB to run as a background service use

    ```brew services stop mongodb-community@5.0```

    Or, if you don't want/need a background service you can just run:

    ```mongod --config /opt/homebrew/etc/mongod.conf```

6. To run mongodb commands, open a new table and run ```mongo```

7. To check your databases run show ```dbs```


https://stackoverflow.com/questions/65357744/how-to-install-mongodb-on-apple-m1-chip

https://www.tinkol.com/372

* 服务器安装node，解压gz文件，没有bin目录，需要sudo，建立koa命令的时候需要用到

# 安装记录

* npm i @types/node -D  
* npm i vue-router@4   
* npm i vuex@next  
* npm i --save ant-design-vue@next
* npm i axios
* npm i sass node-sass sass-loader -S-D# v3-manage
