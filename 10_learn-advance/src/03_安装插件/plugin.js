
const pluginFun = (app) => {
  console.log("function 被执行", app)
}

const pluginObject = {
  install: (app) =>  {
  console.log("对象被执行", app)
  }
}

export {
  pluginFun,
  pluginObject
}
