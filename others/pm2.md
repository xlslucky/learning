## pm2使用 [pm2实用入门指南](http://imweb.io/topic/57c8cbb27f226f687b365636) [pm2中文文档](http://www.cnblogs.com/zhentaoo/p/6421977.html)

### 安装

```shell
npm install pm2 -g
```

### 介绍

安装 pm2 会创建 **$HOME/.pm2** 这个文件夹 日志在 **$HOME/.pm2/logs**

### 使用

> 就拿express举例，启动项目也就是 `npm start(node ./bin/www)`，用 pm2 就可以 `pm2 start ./bin/www --watch`，`--watch` 参数自动重启

> ps: pm2 还有很多命令行参数，就不一一写了，推荐使用配置文件

```shell
# 启动、启动所有
$ pm2 start ./bin/www
$ pm2 start all

# 重启、重启所有
$ pm2 restart ./bin/www
$ pm2 restart all

# 重载、重载所有
$ pm2 reload ./bin/www
$ pm2 reload all

# 停止、停止所有
$ pm2 stop ./bin/www
$ pm2 stop all

# 删除、删除所有
$ pm2 delete ./bin/www
$ pm2 delete all

# 查看进程状态
$ pm2 list

# 监控
$ pm2 monit

# 日志操作
$ pm2 logs
$ pm2 flush
```

### 配置文件

```shell
# process.json

{
  "apps": [
    {
      "name": "pm2-test",
      "script": "./bin/www",
      "watch"       : false,
      "max_memory_restart" : "110M",
      "merge_logs"  : true,
      "instances"   : 2,
      "exec_mode"   : "cluster",
      "env": {
          "NODE_ENV": "test"
      }
    }
  ]
}
```

然后就可以 `pm2 start process.json` 启动项目

```shell
apps：json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
name：应用程序的名称
cwd：应用程序所在的目录
script：应用程序的脚本路径
exec_interpreter：应用程序的脚本类型，这里使用的shell，默认是nodejs
min_uptime：最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
max_restarts：设置应用程序异常退出重启的次数，默认15次（从0开始计数）
exec_mode：应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
error_file：自定义应用程序的错误日志文件
out_file：自定义应用程序日志文件
pid_file：自定义应用程序的pid文件
watch：是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
```

