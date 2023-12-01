const { MYSQL_HOST, MYSQL_USER, MYSQL_DATABASE, MYSQL_PASSWORD } = require('../config/dotenv')
const mysql = require('mysql2')

const pool = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  database: MYSQL_DATABASE,
  password: MYSQL_PASSWORD,

  connectionLimit: 5
})

// 先进行连接测试
pool.getConnection((err, connection) => {
  // 获取connect
  if (err) {
    console.log('获取连接失败~~~')
  }

  // 与数据库建立连接
  connection.connect((err) => {
    if (err) {
      console.log('数据库连接失败~~~', err)
    } else {
      console.log('数据库连接成功!!!')
    }
  })
})

const connection = pool.promise()

module.exports = connection
