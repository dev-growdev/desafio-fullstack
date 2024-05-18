const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('postgres')

const Mentor = sequelize.define(
  'Mentor',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a name',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter an email',
        },
        isEmail: {
          msg: 'Please enter a valid email',
        },
      },
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a CPF',
        },
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  {
    freezeTableName: true,
    tableName: 'mentors',
  }
)

module.exports = { Mentor }
