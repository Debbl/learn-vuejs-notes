# 04_learn-composition

## 01_setup函数体验
> setup函数中没有 `this`
- setup函数有两个参数
    - props
    - context
        - attrs
        - slots
        - emit

## 02_setup定义数据
- reactive
    - 参数为一个复杂类型， 对象或数组
    - 本地的数据，聚合的数据（数据之间有关系）
- ref
    - 返回一个可变的响应式对象
    - `.value`
    - 独立的数据, 从网络中获取的数据

## 03_setup其他函数
- readonly
    - 单向数据流，子组件不能更改父组件传来的数据，是只读的，通过事件传给父组件修改，避免其他的子组件修改数据，无法追踪数据的修改。

## 04_setup中的toRefs
- toRefs
- toRef
- isRef
- unRef
    - `val =  isRef(val) ? val.value : val`
- shallowRef
- triggerRef

## 05_setup中的computed

## 06_setup函数中引用ref
- 元素
- 组件实例

## 07_setup生命周期函数
- onBeforeMount
- onMounted
- onBeforeUpdate
- onUpdated
- onBeforeUnmounted
- onUnmount

## 08_setup-Provide-Inject

## 09_setup侦听数据变化
- watch
- watchEffect

## 10_setup-hooks练习
