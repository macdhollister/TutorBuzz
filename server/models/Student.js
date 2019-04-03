module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true
          }
      },

      name: {
          type: DataTypes.STRING,
          allowNull: false
      },

      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      
      tutors: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: ""
      },
      
      sessions: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: ""
      }
  }, {
      freezeTableName: true
  });

  return Student;
}