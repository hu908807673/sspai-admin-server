const Koa = require('koa')
const KoaRouter = require('koa-router')
const mongoose = require('mongoose')
// 创建服务器实例
const app = new Koa()
// 创建路由器实例
const router = new KoaRouter()
// 使用中间件
app.use(router.routes()).use(router.allowedMethods())

// 连接mongodb
mongoose.connect(
  'mongodb://localhost:27017/sspai',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  function (err) {
    err ? console.log('连接mongodb失败') : console.log('连接mongodb成功')
  }
)

// 引入模型对象
const keywordModel = require('./Schema/keywords')
// 测试路由
router.get('/test', async (ctx, next) => {
  // 根据模型对象查找 数据
  const result = await keywordModel.find({}, { _id: 0 })
  console.log(result)
  ctx.body = {
    code: 200,
    data: result[0].hot_keywords,
  }
})

// 监听
app.listen(3002, (err) => {
  console.log('http://localhost:3002启动监听.....')
})
