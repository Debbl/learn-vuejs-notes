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
