"use strict";

module.exports = {
  createMilestone: (
    connection,
    milestone_name,
    project_component_id,
    priority,
    description,
    deadline,
    comments,
    completed
  ) => {
    let query = "INSERT INTO milestone(milestone_name, project_component_id, priority, description, deadline, comments, completed) VALUES(?, ?, ?, ?, ?, ?, ?)";
    return new Promise((res, rej) => {
      connection.query(query,
        [
          milestone_name,
          project_component_id,
          priority,
          description,
          deadline,
          comments,
          completed
        ],
        (err, rows, fields) => {
          if (err) {
            rej(err);
          } else {
            res(rows);
          }
        }
      );
    });
  },
  getMilestone: (connection, milestoneID) => {
    let query = "SELECT * FROM milestone WHERE id = ?;";
    return new Promise((res, rej) => {
      connection.query(query, [milestoneID], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  getMilestones: (connection) => {
    let query = "SELECT * FROM milestone;";
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
  getMilestoneTasks: (connection, milestoneID) => {
    let query = "SELECT * FROM task WHERE milestone_id = ?;";
    return new Promise((res, rej) => {
      connection.query(query, [milestoneID], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  updateMilestone: (
    connection,
    milestone_name,
    priority,
    description,
    deadline,
    id
  ) => {
    let query = "UPDATE milestone SET milestone_name = ?, priority = ?, description = ?, deadline = ? WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [
          milestone_name,
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
  checkStatus: (connection, id) => {
    let query = "SELECT completed FROM milestone WHERE id = ?;";
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
  complete: (connection, id, status) => {
    console.log(status);
    let query = "UPDATE milestone SET completed = ? where id = ?;";
    return new Promise((res, rej) => {
      connection.query(query,
      [
        status,
        id
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
    let query = `DELETE FROM milestone WHERE id = ${id};`;
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
  getComments: (connection, id) => {
    let query = `SELECT * FROM milestone_comments WHERE milestone_id = ${id};`;
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
    milestone_id,
    user_id,
    user_email,
    time_stamp,
    content
  ) => {
    let query = "INSERT INTO milestone_comments(milestone_id, user_id, user_email, time_stamp, content) VALUES(?, ?, ?, ?, ?);";
    return new Promise((res, rej) => {
      connection.query(query,
      [
        milestone_id,
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
    let query = `UPDATE milestone SET emoji = "${emojis}" WHERE id = ${id};`;
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
    let query = `SELECT emoji FROM milestone WHERE id = ${id}`;
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
