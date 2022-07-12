# watch
- 默认没有深度监听
- 开启深度监听和立即执行
```js
Vue.createApp({
    info: {
        handler(newValue, oldValue) {
            console.log(newValue === oldValue);
            console.log('newValue: ', newValue);
            console.log('oldValue: ', oldValue);
            },
        deep: true,
        immediate: true,
    },
    'info.name': function(newValue, oldValue) {
        console.log(newValue, oldValue);
    }
})
```
# 其他
- Vue.toRaw()