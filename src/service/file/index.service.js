const connection = require('../../app/mysql2.js')

class fileService {
  async upload(filename, mimetype, size, user_id) {
    const statement = 'INSERT INTO t_avatar(filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);'

    const [result] = await connection.execute(statement, [filename, mimetype, size, user_id])

    return result
  }

  async show(user_id) {
    const statement = 'SELECT * FROM t_avatar WHERE user_id = ?;'

    const [result] = await connection.execute(statement, [user_id])

    return result.pop()
  }

  async storeAvatarUrl(avatar_url, user_id) {
    const statement = 'UPDATE t_user SET avatar_url = ? WHERE id = ?;'

    const [result] = await connection.execute(statement, [avatar_url, user_id])

    return result
  }
}

module.exports = new fileService()
