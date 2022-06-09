此页面为[json-server](https://github.com/typicode/json-server)的使用方法，用于本课程的大作业。仅供参考, 详情见官方github.

json-server 使用REST API，所有数据存储在一个json文件中, 以下为一个简单示例
```js
// db.json 文件
{
    "key1": [
        {
            "id": "guyong",
            "password": "guyong123"
        },
        {
            "id": "john",
            "password": "john123"
        }
    ],
    "key2": [

    ],
    "key3": {

    }
}
```
其中各个key对应的数据是一个集合，可以是对象，也可以是数组。本课程大作业中给的key对应的数据都是数组，数组中的元素都是对象，每个对象有一个唯一的id。

以下内容中，使用fetch函数为示例来描述如何访问数据，其中`url`代表json-server的网址，`key`对应的是数据集合的名称(也就是大作业中的密钥)，每个key对应的数据是一个数组, 数组中每个元素是一个对象，有一个唯一的id.

# 读取某个id的数据
方法为"GET", 网址为`${url}/${key}/${id}`, 不能有body. fetch请求成功的话，得到的数据是一个对象（json格式）。若id不存在，会返回一个空的对象。

若要读取key对应的所有数据，只需修改网址为`${url}/${key}`。以下为简单示例：
```js
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = { // 里面不能有body
  method: "GET",  
  headers: myHeaders,
  redirect: "follow",
}
fetch(`${url}/${key}/${id}`, requestOptions)
  .then(response => response.json())
  .then(data => {
    if (data.id === id) {   // 验证是否存在该用户
      return data
    } else {
      throw new Error("用户名不存在")
    }
  })
  .catch(err => console.log(err))
```

## 更改某个id的数据
方法为"PUT", 网址为`${url}/${key}/${id}`, body为更改后的数据，用一个对象表示(需字符串化). "PUT"方法会完全替换原来的数据，若想合并数据，只需将方法改为"PATCH".

注意：该id(id不一定是用户名）必须已经存在，且id是不可更改的，也就是说body数据中的id会被忽略（以网址中的id为准）。

```js
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = {
  method: "PUT",
  headers: myHeaders,
  redirect: "follow",
}
const userData = {
  id: "guyong",  // id可省略，因为网址中有id
  password: "guyong123",
  name: "辜勇",
  tasks: [   // 修改tasks
    {
      name: "learn vuejs in 2 weeks",
      status: "in-progress",
    },
  ],
}
requestOptions.body = JSON.stringify(userData); //将数据字符串化

fetch(`${url}/${key}/${id}`, requestOptions)
  .then(response => console.log("保存数据成功"))
  .catch(err => console.log(err));
```

## 增加一个新的id
方法为"POST"，网址为`${url}/${key}`, body必须是一个对象（需字符串化），不能是数组，也不能是其它类型. body中若包含id, 需要跟已存在的id不重复。若不包含id, 系统会自动生成一个不重复的id.

```js
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow",
}
requestOptions.body = JSON.stringify({
    id: id,
    password: pwd,
    name: "匿名",
    tasks: [],   // 初始化一个空的待办清单
});
fetch(`${url}/${key}`, requestOptions) // 这里的网址没有id
.then(response => response.json())
  .then(data => console.log(data.id))  //新创建后的数据的id
  .catch(err => console.log(err)) 
```
## 删除某个id的数据
方法为"DELETE", 网址为`${url}/${key}`, 不能有body.

```js
const myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = { // 里面不能有body
  method: "DELETE",  
  headers: myHeaders,
  redirect: "follow",
}
fetch(`${url}/${key}/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => console.log('删除数据成功'))
  .catch(err => console.log(err))
```