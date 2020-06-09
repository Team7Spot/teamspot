"use strict";

module.exports = {
  createTask: (
    connection,
    task_name,
    milestone_id,
    priority,
    description,
    deadline,
    comments,
    completed
  ) => {
    let query = "INSERT INTO task(task_name, milestone_id, priority, description, deadline, comments, completed) VALUES(?, ?, ?, ?, ?, ?, ?)";
    return new Promise((resolve, reject) => {
      connection.query(query,
        [
          task_name,
          milestone_id,
          priority,
          description,
          deadline,
          comments,
          completed
        ],
        (err, rows, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  },
  getTask: (connection, taskID) => {
    let query = `SELECT * FROM task WHERE id = ${taskID};`;
    return new Promise((res, rej) => {
      connection.query(query, (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  getTasks: (connection) => {
    let query = "SELECT * FROM tasks";
    return new Promise((res, rej) => {
      connection.query(query, (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  updateTask: (
    connection,
    task_name,
    priority,
    description,
    deadline,
    id
  ) => {
    let query = "UPDATE task SET task_name = ?, priority = ?, description = ?, deadline = ? WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [
          task_name,
          priority,
          description,
          deadline,
          id
        ],
        (err, rows, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      )
    });
  },
  assign: (connection, user_id, task_id) => {
    let query = `INSERT INTO assigned(user_id, task_id) VALUES(${user_id}, ${task_id})`;
    return new Promise((res, rej) => {
      connection.query(query, (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  complete: (connection, id, status) => {
    let query = "UPDATE task SET completed = ? where id = ?";
    return new Promise((res, rej) => {
      connection.query(
        query,
        [
          status, id
        ],
        (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  delete: (connection, id) => {
    let query = `DELETE FROM task WHERE id = ${id};`;
    return new Promise((res, rej) => {
      connection.query(query, (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  checkStatus: (connection, id) => {
    let query = "SELECT completed FROM task WHERE id = ?;";
    return new Promise((res, rej) => {
      connection.query(query, [id], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      })
    });
  },
  getComments: (connection, id) => {
    let query = `SELECT * FROM task_comments WHERE task_id = ${id};`;
    return new Promise((res, rej) => {
      connection.query(query, [id], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      })
    });
  },
  sendComment: (
    connection,
    task_id,
    user_id,
    user_email,
    time_stamp,
    content
  ) => {
    let query = "INSERT INTO task_comments(task_id, user_id, user_email, time_stamp, content) VALUES(?, ?, ?, ?, ?);";
    return new Promise((res, rej) => {
      connection.query(query,
      [
        task_id,
        user_id,
        user_email,
        time_stamp,
        content
      ],
      (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      })
    });
  },
  addReaction: (connection, id, emojis) => {
    let query = `UPDATE task SET emoji = "${emojis}" WHERE id = ${id};`;
    return new Promise((res, rej) => {
      connection.query(query, (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      })
    });
  },
  getEmojis: (connection, id) => {
    let query = `SELECT emoji FROM task WHERE id = ${id}`;
    return new Promise((res, rej) => {
      connection.query(query, (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      })
    });
  }
};
