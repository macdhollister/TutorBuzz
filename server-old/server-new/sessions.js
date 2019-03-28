module.exports = function(sequelize, DataTypes) {
  var session = sequelize.define("session", {
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    day: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      len: [1]
    },
    confirmed: {
      type: DataTypes.boolean,
      allowNull: false,
      len: [1]
    },
    student: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    tutor: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
    

  });

  // Creates associates
  session.associate = function(models) {
    session.belongsTo(models.tutor, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  // postItem.associate = function(models) {
  //   postItem.hasMany(models.offers, {
  //     onDelete: "cascade"
  //   });
  // };

  return session;
};