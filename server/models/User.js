module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        isTutor: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    User.associate = function(models) {
        // User.hasOne(models.Tutor, {
        //     onDelete: "cascade",
        //     foreignKey: "userId",
        //     sourceKey: "id"
        // })

        // User.hasOne(models.Student, {
        //     onDelete: "cascade",
        //     foreignKey: "userId",
        //     sourceKey: "id"
        // })
    }

    return User;
}