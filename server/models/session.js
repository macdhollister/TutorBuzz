module.exports = function (sequelize, DataTypes) {
  var Session = sequelize.define("Session", {
    time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1,2]
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Session.associate = function(models) {
    Session.belongsTo(models.Tutor, {
      foreignKey: "sessionId",
      onDelete: "cascade"
    });

    Session.belongsTo(models.Student, {
      foreignKey: "sessionId",
      onDelete: "cascade"
    })
  };

  return Session;
};

