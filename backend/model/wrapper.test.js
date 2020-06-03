const mysql = require('mysql')
const connection = require("./connect")
const config = require("../config")
const wrapper = require("./wrapper")

/*const con = mysql.createConnection({
  host: config.databaseConfig.host,
  user: config.databaseConfig.username,
  password: config.databaseConfig.password,
  database: config.databaseConfig.schema
})

con.connect()

test('properly get all comments for a task', () => {
  expect(wrapper.getCommentsTask(con, 1)).toBe("{username: 'Nate', comment: 'Hello'}")
})

test('properly get all comments for a task with no comments', () => {
  expect(wrapper.getCommentsTask(con, 2)).toBe("")
})
*/
