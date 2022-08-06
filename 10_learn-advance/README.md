# 10_learn-advance

## 01_自定义指令

### 基本使用

- Options api

```js
export default {
  directives: {
    focus: {
      mounted(el) {
        console.log(el);
        el.focus();
      },
    },
  },
};
```

- Composition api

```js
const vFocus = {
  mounted(el) {
    console.log(el, "----");
    el.focus();
  },
};
```

### 生命周期

- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount
- unmounted

### 指令的参数、修饰符、具体值

![](./images/01.png)

![](./images/02.png)

### 全局指令

```js
app.directives("fTime", {
  mounted(el) {
    console.log(el)
  }
})
```

## 02_其它内置组件

- teleport
- suspence