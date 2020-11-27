'use strict';
const {
  Model
} = require('sequelize');
const Bcrypt = require('../helper/bcrypt');

const bcrypt = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Email Required'
        }, 
        isEmail: {
          msg: 'Email Needs To Be Email'
        },
        
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password Required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance, options){
        instance.password = Bcrypt.hash(instance.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};