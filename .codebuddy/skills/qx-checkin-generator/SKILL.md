---
name: qx-checkin-generator
description: 根据功能描述和接口示例，自动生成 Quantumult X (QX) 签到脚本。遵循 checkinTemplate.js 标准模板，支持 Cookie/Headers 持久化、Bark 推送通知及 BoxJs 配置。当用户要求"生成签到脚本"、"写一个XX签到"、"创建QX签到"或提供签到接口信息时触发。
---

# QX 签到脚本生成器

## Overview

根据用户提供的功能描述和接口示例，基于 `assets/checkin_template.js` 模板生成完整的 Quantumult X 签到脚本。脚本内置 Bark 推送和 BoxJs 配置支持，rewrite 配置仅保留 QX 格式。

## 工作流程

### Step 1: 收集信息

向用户确认以下信息（若未提供则询问）：

1. **脚本名称**: 用于 `$.name`、文件名，如 `ikuu 签到`
2. **签到接口**: 完整的请求方法 (GET/POST)、URL、Headers、Body、响应格式
3. **其他接口** (可选): 如用户信息查询、注册检查等辅助接口
4. **Cookie/Token 获取方式**: URL 正则匹配式 (如 `^https:\/\/ikuu\.pw\/user$`) 用于自动抓取请求头
5. **是否需要 Bark**: 默认内置 Bark 支持，用户只需在 BoxJs 中配置 `bark_key`

### Step 2: 分析接口特征

根据接口示例分析以下内容：

- **请求类型**: GET 还是 POST，POST 是 JSON body 还是 form-urlencoded
- **响应结构**: 成功/失败的判断字段和值（如 `code == 0` 表示成功）
- **关键数据**: 签到结果、积分/余额变化、获取到的流量等
- **特殊处理**: 是否需要先查询用户信息、是否需要注册等前置步骤

### Step 3: 生成脚本

以 `assets/checkin_template.js` 为骨架，按以下规则填充：

#### 3.1 基本信息

```js
const $ = new Env('脚本名称')
$.name = '脚本名称'
$.checkin_url = '接口URL正则匹配式'  // 用于抓取请求头/Cookie
$.url = '接口域名'
```

#### 3.2 存储 Key 定义

定义需要持久化的数据 Key：

```js
$.cookie = ''           // Cookie 存储 key 同 $.name
$.infoVal = '签到信息'  // 签到结果摘要存储 key
```

#### 3.3 Checkin 函数

核心签到逻辑，结构如下：

```js
function checkin() {
  return new Promise((resolve) => {
    $.message = ''
    const options = {
      url: `${$.url}/api/checkin`  // 具体签到接口
    }
    
    // 读取持久化数据
    if (typeof($.cookie) === 'string' && $.cookie !== '') {
      options.headers = {
        'Cookie': $.cookie,
        'User-Agent': $.UA
      }
    }
    
    // 如果是 POST 请求，添加 body
    // options.body = JSON.stringify({...})

    $.get(options, async (err, resp, data) => {
      try {
        const obj = JSON.parse(data)
        
        // 根据实际接口响应判断成功/失败
        if (obj.code === 0) {
          // 成功处理
          $.message += `✅ 签到成功，获得 ${obj.data.points} 积分`
        } else {
          // 失败处理
          $.message += `❌ 签到失败，${obj.msg}`
        }
        // 持久化签到结果
        $.setdata($.message, '签到信息')
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}
```

#### 3.4 辅助函数（可选）

如查询用户信息：

```js
function userInfo() {
  return new Promise((resolve) => {
    $.get({ url: `${$.url}/api/user` }, (err, resp, data) => {
      // 解析用户信息
      resolve()
    })
  })
}
```

#### 3.5 主流程

```js
!(async () => {
  // 从请求中读取 Cookie 并持久化
  if (typeof($request) !== 'undefined') {
    await GetCookie()
    $.done()
    return
  }
  
  // 执行签到流程
  await Promise.all([
    checkin(),
    userInfo()  // 可选
  ])
  
  await showMsg()  // 可选：拼接最终消息
})()
```

#### 3.7 脚本头部注释

生成脚本时，头部注释块只保留 QX 配置格式，示例：

```
/*
脚本名称

说明：
简要说明如何触发获取 Cookie/Headers。

~~~~~~~~~~~~~~~~
QX:
[rewrite_local]
# 本地
<regex> ^<METHOD> url-and-header script-request-header http://192.168.137.1:5500/<path>

# 远程
# <regex> ^<METHOD> url-and-header script-request-header https://raw.githubusercontent.com/zw-95/QxScript/master/<path>
[mitm]
hostname = <hostname>

[task_local]
0 9 * * * <script-url>, tag=<tag>, enabled=false
~~~~~~~~~~~~~~~~
*/
```

#### 3.6 通知与完成

```js
.catch((e) => $.logErr(e))
.finally(async () => {
  if ($.Messages.length > 0) {
    if ($.barkKey) {
      await BarkNotify($, $.barkKey, $.name, $.Messages.join('\n'))
    } else {
      await $.msg($.name, ``, $.Messages.join('\n'))
    }
  }
  $.done()
})
```

### Step 4: 输出脚本

将生成的完整脚本写入指定路径（默认 `MyScripts/<平台>/<名称>/checkin.js`），保持与现有项目一致的目录结构。

## 模板关键函数说明

模板中已内置以下函数，无需重复生成：

| 函数 | 说明 |
|---|---|
| `GetCookie()` | 从 QX $request 中提取并持久化 Cookie |
| `pushMsg(text)` | 收集通知消息 |
| `BarkNotify($, key, title, body)` | Bark 推送，失败重试 3 次 |
| `showMsg()` | 拼接并展示通知内容 |

## 常见接口模式

### RESTful JSON API

```js
$.get({ url: `${$.url}/api/checkin`, headers: {...} }, callback)
```

### POST JSON Body

```js
$.post({
  url: `${$.url}/api/sign`,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ action: 'checkin' })
}, callback)
```

### POST Form URL-Encoded

```js
$.post({
  url: `${$.url}/user/checkin`,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'action=sign_in&token=xxx'
}, callback)
```

## 命名规范

- 文件名: `checkin.js`
- 存放路径: `MyScripts/<分类>/<平台名>/checkin.js` (参考现有项目 `MyScripts/VPN/ikuu/checkin.js`)
- 脚本内部 `$.name`: `平台名 签到` (如 `ikuu 签到`)
- BoxJs 设置 KEY 保持一致

## 注意事项

1. **Cookie 持久化**: 首次运行时需 QX 触发 `$request` 匹配 `checkin_url` 正则
2. **错误处理**: 所有接口回调必须 try-catch，`$.logErr` 记录异常
3. **Bark 优先级**: 配置 Bark 后不弹系统通知（互斥）
4. **Bark Key 读取**: `$.getdata('bark_key')` 来自 BoxJs 全局设置
5. **调试模式**: `$.is_debug` 控制日志详细程度
