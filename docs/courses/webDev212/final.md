本页面随时会有更新，大更新会在微信群发通知

# 大作业题目
使用Vue3制作一个支持多用户登录的待办清单应用

## 要求
### 用户功能
1. 登录：至少验证用户名和密码，验证通过才能登录成功，否则登录失败
1. 待办清单：登录后待办清单为当前用户的待办清单，<mark>不同用户的待办清单存储在不同的数据中</mark>；待办清单的功能参考上一次作业，至少要实现以下功能：
  - 每个任务有一个名字和状态
  - 可以修改任务的名字
  - 可以修改任务的状态
  - 可以添加新的任务
  - 可以删除某个存在的任务
1. 注册：至少要提供用户名和密码，若是数据库中已有该用户名，则注册失败

### 数据存储
每个用户至少要存储用户名、密码、待办列表，用户名需要唯一

## 提交和评分方式
<mark>提交代码和报告，代码整个目录压缩成一个压缩包，报告放在压缩包的根目录中，在学习通上提交。</mark>
- 代码必须要有源代码(放到一个目录中），不能只是编译后的代码。
- 第三方包（例如node_modules)也一起提交，若是不提交的话，需在报告中说明如何安装
- 报告用来提供信息，以免我看不到你的效果（例如如何安装第三方包，如何运行）

<mark>评分以代码的效果为准</mark>：
- 源代码需尽可能清晰、易读，否则会扣分
- 报告本身不占分，但是写得好有加分；<mark>因报告中未做说明或说明不清，可能会使得我看不到你的效果，从而影响效果评分</mark>



# 远程数据库使用

项目要求使用后端 JSON 存储(建议使用`fetch`函数来访问)
- 可以使用[Pantry](getpantry.cloud)或其它第三方提供的数据库
- 也可以使用本课程提供的[json-server](https://github.com/typicode/json-server)
- 提交时只提交前端，所以不要使用本地的后端。如果想自己搭建后端的话，要保证该后端可以直接访问，不需要我做额外的步骤。

## Pantry使用方法
参考 https://getpantry.cloud

待续...

## json-server 使用方法
我在阿里云上搭建好了数据库，简单的使用方法如下，详情请参考[github](https://github.com/typicode/json-server)
- url: http://47.99.244.42:2999
- key: <mark>私发给每个同学（大家在学习通或微信或课上找我要）</mark>

重要：每个key对应的数据是一个数组，数组元素是一个个的对象。每个对象代表一个用户，每个用户必须有一个 id 作为用户名。每个key的数据已初始化了一个用户。

以下为 6TTP6PL 这个 key 的数据，<mark>供大家参考（可以增加或修改）</mark>。大家尽量只读这个key的数据，不要去修改，修改的话用自己的key.

```js
[
  {
    id: "guyong",
    password: "guyong123",
    name: "辜勇",
    tasks: [
      {
        name: "Steal bananas from supermarket.",
        status: "in-progress",
      },
      {
        name: "Eat 1 kg chocolate in 1 hour",
        status: "finished",
      },
      {
        name: "Create YouTude video.",
        status: "finished",
      },
      {
        name: "learn vuejs in 2 weeks",
        status: "in-progress",
      },
      {
        name: "Eat 1 kg chocolate in 3 hour",
        status: "to-do",
      },
    ],
  },
  {
    id: "john",
    password: "john",
    name: "匿名",
    tasks: [],
  },
]
```

### 读取用户名为 id 的数据

```js
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
}
fetch(`${url}/${key}/${id}`, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    if (data.id === id) {   // 验证是否存在该用户
      return data
    } else {
      throw new Error("用户名不存在")
    }
  })
  .catch((err) => console.log(err))
```

### 更改用户名为 id 的数据为 userData

注意：该用户必须已经存在，且 id 是不可更改的

```js
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
}

const userData = {
  id: "john",
  password: "john123",
  name: "John Smith",
  tasks: [
    {
      name: "learn vuejs in 2 weeks",
      status: "in-progress",
    },
  ],
}
requestOptions.body = JSON.stringify(userData)

fetch(`${url}/${key}/${userData.id}`, requestOptions)
  .then((response) => {
    this.log({
      msg: "Save data succeed",
      type: 1,
    })
  })
  .catch((err) => {
    this.log({
      msg: err.message,
      type: -1,
    })
  })
```

### 注册新用户（用户名为 id, 用户密码为 pwd)

注意：要先判断该用户名是否已经存在

```js
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
}

fetch(`${url}/${key}/${id}`, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    if (data.id === id) {   // 验证是否存在该用户
      throw new Error("用户名已存在")
    } else {
      return true
    }
  })
  .then(() => {
    requestOptions.method = "POST"
    requestOptions.body = JSON.stringify({
      id: id,
      password: pwd,
      name: "匿名",
      tasks: [],   // 初始化一个空的待办清单
    })
    return fetch(`${url}/${key}`, requestOptions) // 这里的网址不需要key
  })
```
