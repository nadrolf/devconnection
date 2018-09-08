const Sequelize = require('sequelize')
const sequelize = require('./index')

const ExperienceModel = sequelize.define('experience', {
  company: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  from: {
    type: Sequelize.DATE
  },
  to: {
    type: Sequelize.DATE
  }
})

// force: true will drop the table if it already exists
// ExperienceModel.sync().then(() => {
// Table created
//  return UserModel.create({
//    name: "John",
//    email: "dylan@gmail.com",
//    password: "123456",
//    avatar: ""
//  });
// })
module.exports = ExperienceModel
