# 简文集实战项目

## 项目结构
>|- bin 可执行文件

　　|- db  数据库初始数据录入可执行文件

　　|- www 项目启动文件(npm start执行文件)

|- public 静态资源目录

|- routes 路由

|- views jade模板

|- dist gulp压缩打包

|- components  bower自动化目录

>|- tests  Mocha测试目录

## 使用技术
1. node.js
2. express
3. jade
4. gulp
5. sass
6. react
7. mongodb | mongoose
8. jquery | bootstrap
9. git
10. bower
11. atom -> JSHint
12. Mocha & chai & should.js
13. Makefile

## Make
- Make clean
清理项目临时文件 `build/*`

- Make test
开启Mocha测试

- Make start
等同于 `$npm start`

## 依赖
`bower install`
