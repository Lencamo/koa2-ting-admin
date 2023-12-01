const crypto = require('crypto')

const md5Password = (pwd) => {
  const md5 = crypto.createHash('md5')
  const pwd_md5 = md5.update(pwd).digest('hex')

  return pwd_md5
}

module.exports = {
  md5Password
}
