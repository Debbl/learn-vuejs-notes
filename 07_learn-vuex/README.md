# 07_learn-vuex

## store
- 单一状态树
- mapState

## getters
> 某些属性我们可能需要经过变化后来使用，这个时候可以使用getters，类似 computed
- 参数
    - state
    - getters
- 返回值可以为一个函数
- mapGetters

## mutations
- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
- mutation 常量
- mutations 中必须执行的是同步的函数，避免 devtool 无法记录状态变化的快照

## actions
- Action 通常是异步的，网络请求等操作

## modules
- 命名空间
