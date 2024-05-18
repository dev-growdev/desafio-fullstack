const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
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
    },
    {
      freezeTableName: true,
      tableName: 'mentors',
      timestamps: true,
      updatedAt: 'updateTimestamp',
    }
  )
}
