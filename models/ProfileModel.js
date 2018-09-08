const Sequelize = require('sequelize')
const sequelize = require('./index')
const SocialModel = require('./SocialModel')
const ExperienceMode = require('./ExperienceModel')

const ProfileModel = sequelize.define('profiles', {
  user: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  handle: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  website: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  skills: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.STRING
  },
  githubusername: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.VIRTUAL
  }
})

// Association

SocialModel.belongsTo(ProfileModel, {
  foreignKey: 'profileId',
  targetKey: 'user'
})

ExperienceMode.belongsTo(ProfileModel, {
  foreignKey: 'experienceId',
  targetKey: 'user'
})

ProfileModel.hasOne(SocialModel, {
  foreignKey: 'profileId',
  targetKey: 'user'
})

ProfileModel.hasOne(ExperienceMode, {
  foreignKey: 'experienceId',
  targetKey: 'user'
})

// force: true will drop the table if it already exists
// ProfileModel.sync({ force: true }).then(() => {
// Table created
//  return UserModel.create({
//    name: "John",
//    email: "dylan@gmail.com",
//    password: "123456",
//    avatar: ""
//  });
// })

// SocialModel.sync({ force: true }).then(() => {
// Table created
//  return UserModel.create({
//    name: "John",
//    email: "dylan@gmail.com",
//    password: "123456",
//    avatar: ""
//  });
// })

// ExperienceMode.sync({ force: true }).then(() => {
// Table created
//  return UserModel.create({
//    name: "John",
//    email: "dylan@gmail.com",
//    password: "123456",
//    avatar: ""
//  });
// })

module.exports = ProfileModel
