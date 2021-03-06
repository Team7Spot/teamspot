"use strict";

module.exports = {
  createComponent: (
    connection,
    component_name,
    project_id,
    comments
  ) => {
    let query = "INSERT INTO project_component(component_name, project_id, comments) VALUES(?, ?, ?)";
    return new Promise((res, rej) => {
      connection.query(
        query,
        [
          component_name,
          project_id,
          comments
        ],
        (err, rows, fields) => {
          if (err) {
            rej(err);
          } else {
            res(err);
          }
        }
      )
    });
  },
  getComponents: (connection) => {
    let query = "SELECT * FROM project_component;";
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
  getComponent: (connection, componentID) => {
    let query = "SELECT * FROM project_component WHERE id = ?;";
    return new Promise((res, rej) => {
      connection.query(query, [componentID], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  getComponentMilestones: (connection, componentID) => {
    let query = "SELECT * FROM milestone WHERE project_component_id = ?;";
    return new Promise((res, rej) => {
      connection.query(query, [componentID], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  updateComponent: (
    connection,
    component_name,
    id
  ) => {
    let query = "UPDATE project_component SET component_name = ? WHERE id = ?;";
    return new Promise((res, rej) => {
      connection.query(
        query,
        [
          component_name,
          id
        ],
        (err, rows, fields) => {
          if (err) {
            rej(err);
          } else {
            res(rows);
          }
        }
      )
    });
  },
  complete: (connection, id) => {
    let query = "UPDATE project_component SET completed = 1 where id = ?;";
    return new Promise((res, rej) => {
      connection.query(query, [id], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  delete: (connection, id) => {
    let query = "DELETE FROM project_component WHERE id = ?;";
    return new Promise((res, rej) => {
      connection.query(query, [id], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
    });
  },
  getComments: (connection, id) => {
    let query = "SELECT comments FROM project_component WHERE id = ?;";
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
  sendComment: (connection, id, comment) => {
    let query = "UPDATE project_component SET comments = CONCAT(comments, '?') WHERE id = ?;";
    return new Promise((res, rej) => {
      connection.query(query, [comment, id], (err, rows, fields) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      })
    });
  }
};
