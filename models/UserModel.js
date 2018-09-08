const Sequelize = require('sequelize')
const sequelize = require('./index')

const UserModel = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

// force: true will drop the table if it already exists
// UserModel.sync({ force: true }).then(() => {
// Table created
//  return UserModel.create({
//    name: "John",
//    email: "dylan@gmail.com",
//    password: "123456",
//    avatar: ""
//  });
// })

module.exports = UserModel
