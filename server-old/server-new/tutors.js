module.exports = function(sequelize, DataTypes) {
  var tutors = sequelize.define("tutors", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    unavailable: {
      type: DataTypes.STRING,
      len: [1]
    },
    student: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    students: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    sessions: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
    

  });

  // Creates associates
  tutors.associate = function(models) {
    tutors.belongsTo(models.students, {
      foreignKey: {
        allowNull: false
      }
    });
  };
 

  return tutors;
};





