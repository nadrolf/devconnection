const Sequelize = require('sequelize')
const sequelize = require('./index')

const SocialModel = sequelize.define('socials', {
  youtube: {
    type: Sequelize.STRING
  },
  twitter: {
    type: Sequelize.STRING
  },
  facebook: {
    type: Sequelize.STRING
  },
  linkedin: {
    type: Sequelize.STRING
  },
  instagram: {
    type: Sequelize.STRING
  }
})

// force: true will drop the table if it already exists
// SocialModel.sync().then(() => {
// Table created
//  return UserModel.create({
//    name: "John",
//    email: "dylan@gmail.com",
//    password: "123456",
//    avatar: ""
//  });
// })
module.exports = SocialModel
