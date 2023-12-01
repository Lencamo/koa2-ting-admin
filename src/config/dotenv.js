const dotenv = require('dotenv')

const result = dotenv.config()
if (result.error) {
  throw result.error
}

const {
  APP_PORT,
  APP_HOST,
  EXPIRES_IN,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  UPLOAD_PATH
} = process.env

module.exports = {
  APP_PORT,
  APP_HOST,
  EXPIRES_IN,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  UPLOAD_PATH
}
