module.exports = function (sequelize, DataTypes) {
  var session = sequelize.define("session", {
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

  session.associate = function(models) {
    session.belongsTo(models.Tutor, {
      // foreignKey: "email_id",
      onDelete: "cascade"
    });
  };

  return session;
};

