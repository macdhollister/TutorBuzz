module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
     email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      len: [1]
    }
  });

  // Creates associates
  user.associate = function(models) {
    user.belongsTo(models.index, {
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

  return user;
};