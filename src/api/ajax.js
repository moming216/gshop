/*
  ajax请求函数模块

  返回值：promise对象（异步返回的数据是：response.data）

  axios.get和axios.post返回的是response对象
  response.data封装接口返回数据

  之前的ajax方法，没有return new Promise封装
  使用的时候，const response=ajax(url,data,type)
  获取数据const result = response.data

  如果希望const result = ajax(url,data,type)
  就需要进行如下封装
 */

import axios from 'axios'

export  default function ajax(url, data={}, type='GET'){
  return new Promise(function (resolve, reject) { // resolve成功的回调函数、reject失败的回调函数
    // 返送ajax请求
    let promise
    if (type === 'GET') { //GET请求，需要将参数拼接到url后面
      // 准备 url query 参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送 get 请求
      promise = axios.get(url)  // 返回的是response
    } else {
      // 发送 post 请求
      promise = axios.post(url, data) // 返回的是response
    }

    // ajax请求成功会触发.then()回调函数
    // ajax请求失败会触发.catch()回调函数
    promise.then(response => {
      // 成功了调用resolve函数，将异步操作的结果，作为参数传递出去
      resolve(response.data)
    }).catch(error => {
      // 失败了调用reject函数，将异步操作报出的错误，作为参数传递出去
      reject(error)
    })

    // 上面箭头函数简写代码
    // promise.then(function (response){
    //
    // }).catch(function (error){
    //
    // })

  })
}
