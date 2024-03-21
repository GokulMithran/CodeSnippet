// models/CodeSnippet.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('db_name', 'username', 'password', {
  host: 'Hostname',
  dialect: 'mysql'
});

const CodeSnippet = sequelize.define('codesnippets', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stdin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  source: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true, // Enable createdAt and disable updatedAt
  createdAt: 'createdAt', // Rename createdAt column
  updatedAt: false // Disable updatedAt column
});

module.exports = CodeSnippet;
