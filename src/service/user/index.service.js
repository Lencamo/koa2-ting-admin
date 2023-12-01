const connection = require('../../app/mysql2.js')

class userService {
  async create(user) {
    const { username, password } = user
    const statement = `INSERT INTO t_user(username, password) VALUES(?, ?)`

    const [result] = await connection.execute(statement, [username, password])

    return result
  }

  async findUserByName(username) {
    const statement = `SELECT * FROM t_user WHERE username = ?;`

    const [result] = await connection.execute(statement, [username])

    return result
  }

  async show(user_id) {
    const statement = `SELECT * FROM t_user WHERE id = ?;`

    const [result] = await connection.execute(statement, [user_id])

    return result
  }
}

module.exports = new userService()
