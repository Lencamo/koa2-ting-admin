const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')
const { EXPIRES_IN } = require('../config/dotenv.js')

const jwt = require('jsonwebtoken')

const private_key_buffter = readFileSync(resolve(__dirname, './key/app_private_key.pem'))
const public_key_buffter = readFileSync(resolve(__dirname, './key/app_public_key.pem'))

const tokenSign = (payload) => {
  const token = jwt.sign(payload, private_key_buffter, {
    expiresIn: EXPIRES_IN, // 20 表示'20s'；'20'表示'20ms'；其他简写表示：'2h'、'2d'
    algorithm: 'RS256'
  })

  return token
}

const tokenVerify = (token) => {
  const payload = jwt.verify(token, public_key_buffter, {
    algorithms: ['RS256']
  })

  return payload
}

module.exports = {
  tokenSign,
  tokenVerify
}
