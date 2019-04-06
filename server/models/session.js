module.exports = function (sequelize, DataTypes) {
  var Session = sequelize.define("Session", {
    startTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endTime: {
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
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return Session;
};

