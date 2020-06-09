"use strict";

const projectWrapper = require("./projectWrapper");
const componentWrapper = require("./componentWrapper");
const milestoneWrapper = require("./milestoneWrapper");
const taskWrapper = require("./taskWrapper");
const userWrapper = require("./userWrapper");
const teamWrapper = require("./teamWrapper");

module.exports = {
  executeSQL: (connection, sql, varList) => {
    return new Promise((res, rej) => {
      connection.query(sql, varList, function(err, rows, fields) {
        if (err) {
          rej(err);
        } else {
          res(rows, fields);
        }
      });
    });
  },
  //project functions
  createProject: (
    connection,
    project_name,
    deadline,
    project_description
  ) => {
    return projectWrapper.createProject(
      connection,
      project_name,
      deadline,
      project_description
    );
  },
  getProjects: (connection) => {
    return projectWrapper.getProjects(connection);
  },
  getProject: (connection, projectID) => {
    return projectWrapper.getProject(connection, projectID);
  },
  getProjectComponents: (connection, projectID) => {
    return projectWrapper.getProjectComponents(connection, projectID);
  },
  updateProject: (
    connection,
    project_name,
    deadline,
    project_description,
    id
  ) => {
    return projectWrapper.updateProject(
      connection,
      project_name,
      deadline,
      project_description,
      id
    );
  },
  completeProject: (connection, id) => {
    return projectWrapper.complete(connection, id);
  },
  deleteProject: (connection, id) => {
    return projectWrapper.delete(connection, id);
  },
  getCommentsProject: (connection, id) => {
    return projectWrapper.getComments(connection, id);
  },
  sendCommentProject: (connection, id) => {
    return projectWrapper.sendComment(connection, id);
  },
  //component functions
  createComponent: (
    connection,
    component_name,
    project_id,
  ) => {
    return componentWrapper.createComponent(
      connection,
      component_name,
      project_id,
    );
  },
  getComponents: (connection) => {
    return componentWrapper.getComponents(connection);
  },
  getComponent: (connection, componentID) => {
    return componentWrapper.getComponent(connection, componentID);
  },
  getComponentMilestones: (connection, componentID) => {
    return componentWrapper.getComponentMilestones(connection, componentID);
  },
  updateComponent: (
    connection,
    component_name,
    id
  ) => {
    return componentWrapper.updateComponent(
      connection,
      component_name,
      id
    );
  },
  deleteComponent: (connection, id) => {
    return componentWrapper.delete(connection, id);
  },
  getCommentsComponent: (connection, id) => {
    return componentWrapper.getComments(connection, id);
  },
  sendCommentComponent: (connection, id) => {
    return componentWrapper.sendComment(connection, id);
  },
  //milestone functions
  createMilestone: (
    connection,
    milestone_name,
    project_component_id,
    priority,
    description,
    deadline
  ) => {
    return milestoneWrapper.createMilestone(
      connection,
      milestone_name,
      project_component_id,
      priority,
      description,
      deadline
    );
  },
  getMilestones: (connection) => {
    return milestoneWrapper.getMilestones(connection);
  },
  getMilestone: (connection, milestoneID) => {
    return milestoneWrapper.getMilestone(connection, milestoneID);
  },
  getMilestoneTasks: (connection, milestoneID) => {
    return milestoneWrapper.getMilestoneTasks(connection, milestoneID);
  },
  updateMilestone: (
    connection,
    milestone_name,
    priority,
    description,
    deadline,
    id
  ) => {
    return milestoneWrapper.updateMilestone(
      connection,
      milestone_name,
      priority,
      description,
      deadline,
      id
    );
  },
  deleteMilestone: (connection, id) => {
    return milestoneWrapper.delete(connection, id);
  },
  checkMilestoneStatus: (connection, id) => {
    return milestoneWrapper.checkStatus(connection, id);
  },
  completeMilestone: (connection, id, status) => {
    return milestoneWrapper.complete(connection, id, status);
  },
  getComments: (connection, id) => {
    return milestoneWrapper.getComments(connection, id);
  },
  sendCommentMilestone: (
    connection,
    milestone_id,
    user_id,
    user_email,
    time_stamp,
    content
  ) => {
    return milestoneWrapper.sendComment(
      connection,
      milestone_id,
      user_id,
      user_email,
      time_stamp,
      content
    );
  },
  milestoneReaction: (connection, id, emojis) => {
    return milestoneWrapper.addReaction(connection, id, emojis);
  },
  getEmojisMilestone: (connection, id) => {
    return milestoneWrapper.getEmojis(connection, id);
  },
  //task functions
  createTask: (
    connection,
    task_name,
    milestone_id,
    priority,
    description,
    deadline
  ) => {
    return taskWrapper.createTask(
      connection,
      task_name,
      milestone_id,
      priority,
      description,
      deadline
    );
  },
  getTasks: (connection) => {
    return taskWrapper.getTasks(connection);
  },
  getTask: (connection, taskID) => {
    return taskWrapper.getTask(connection, taskID);
  },
  updateTask: (
    connection,
    task_name,
    priority,
    description,
    deadline,
    id
  ) => {
    return taskWrapper.updateTask(
      connection,
      task_name,
      priority,
      description,
      deadline,
      id
    );
  },
  assignTask: (connection, user_id, task_id) => {
    return taskWrapper.assign(connection, user_id, task_id);
  },
  completeTask: (connection, id, status) => {
    return taskWrapper.complete(connection, id, status);
  },
  deleteTask: (connection, id) => {
    return taskWrapper.delete(connection, id);
  },
  checkTaskStatus: (connection, id) => {
    return taskWrapper.checkStatus(connection, id);
  },
  getCommentsTask: (connection, id) => {
    return taskWrapper.getComments(connection, id);
  },
  sendCommentTask: (
    connection,
    task_id,
    user_id,
    user_email,
    time_stamp,
    content
  ) => {
    return taskWrapper.sendComment(
      connection,
      task_id,
      user_id,
      user_email,
      time_stamp,
      content
    );
  },
  taskReaction: (connection, id, emojis) => {
    return taskWrapper.addReaction(connection, id, emojis);
  },
  getEmojisTask: (connection, id) => {
    return taskWrapper.getEmojis(connection, id);
  },
  //user functions
  userExists: (connection, email) => {
    return userWrapper.userExists(connection, email);
  },
  createUser: (connection, uname, email, password) => {
    return userWrapper.createUser(connection, uname, email, password);
  },
  createGoogleAuthUser: (connection, uname, email) => {
    return userWrapper.createGoogleAuthUser(connection, uname, email);
  },
  getUsers: (connection) => {
    return userWrapper.getUsers(connection );
  },
  updateUser: (connection, email, fieldName, fieldValue) => {
    return userWrapper.updateUser(connection, email, fieldName, fieldValue);
  },
  checkCredentials: (connection, email, password) => {
    return userWrapper.checkCredentials(connection, email, password);
  },
  getUsername: (connection, email) => {
    return userWrapper.getUsername(connection, email);
  },
  getUserID: (connection, email) => {
    return userWrapper.getUserID(connection, id);
  },
  //teams function
  createTeam: (
    connection
  ) => {
    return teamWrapper.createTeam(
      connection
    );
  }
}
