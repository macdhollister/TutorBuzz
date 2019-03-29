module.exports = function (sequelize, DataTypes) {
  var student = sequelize.define("student", {
    time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    student: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tutor: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  student.associate = function(models) {
    student.belongsTo(models.tutor, {
      // foreignKey: "email_id",
      onDelete: "cascade"
    });
  };

  return student;
};

