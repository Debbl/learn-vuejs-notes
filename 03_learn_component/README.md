# 03_learn_component

## 01_组件的嵌套使用
- 组件树

## 02_组件通信-父传子
- props 元素的 attribute
- https://vuejs.org/api/options-state.html#props
- 对象，数组定义 props 默认值时要返回一个工厂函数
> 非 props 的 attribute

## 03_组件通信-子传父
- $emit 触发事件

## 05_组件插槽-基本使用
- 基本使用
- 插槽的默认内容

## 06_组件插槽-具名插槽
- 具名插槽
- 动态插槽名
- 渲染作用域
    - 父级模板里的所有内容都是在父级作用域中编译的；
    - 子模板里的所有内容都是在子作用域中编译的；

## 07_组件插槽-作用域插槽
- slotProps
- 如果我们的插槽是默认插槽default，那么在使用的时 v-slot:default="slotProps",可以简写为v-slot="slotProps"

## 08_Provide和inject
- 当要放回的数据需要使用 `this` 是，provide 要写成一个函数，保证 `this` 的指向正确

## 09_事件总线的使用
- 组件销毁时，最好移除事件的监听

## 10_生命周期函数演练
> - https://vuejs.org/guide/essentials/lifecycle.html
- beforeCreate
    - 创建组件实例
- created
    - template 模板编译
- beforeMount
    - 挂载到虚拟DOM -> 虚拟 DOM -> 真实 DOM -> display
- mounted
    - 响应式数据更新
- beforeUpdate
    - 根据新的数据生成新的 VNode，生成新的虚拟 DOM -> 真实 DOM
- updated
- beforeUnmount
    - 将虚拟 DOM 中 VNode 从虚拟 DOM 移除
- unmounted
    - 将组件实例销毁，取消事件监听


## 11_ref获取元素组件
- 元素上获取元素
- 在组件上为组件实例，相等于当前组件中的 `this`

## 12_动态组件的使用
- `<component :is="" />`

## 13_Keep-Alive的使用
- include
- exclude
- max
- 缓存的生命周期
    - activated
    - deactivated

## 14_异步组件的使用
- defineAsyncComponent
    - 工厂函数， 返回一个 Promise 对象
    - 对象

## 15_组件的v-model
```template
    <counter :model-value='appCounter' @update:model-value='appCounter = $event' />
    <!-- 相当于 -->
    <counter v-model='appCounter' />
```
- 绑定多个属性可以使用 `v-model:name='appName'` 自定义名称