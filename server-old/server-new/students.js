module.exports = function(sequelize, DataTypes) {
  var session = sequelize.define("session", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tutor: {
      type: DataTypes.STRING,
      len: [1]
    },
    session: {
      type: DataTypes.boolean,
      allowNull: false,
      len: [1]
    }

  });

  // Creates associates
  students.associate = function(models) {
    students.belongsTo(models.sessions, {
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

  return students;
};


