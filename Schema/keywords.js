const mongoose = require('mongoose')
// 一个表对应一个Schema
const keywordSchema = new mongoose.Schema({
  // 查询的字段和字段类型
  hot_keywords: Array,
})
// 根据Schema 创建相应Model
const keywordModel = mongoose.model('keywords', keywordSchema)
// 暴露
module.exports = keywordModel
