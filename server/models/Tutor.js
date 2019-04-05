module.exports = (sequelize, DataTypes) => {
    const Tutor = sequelize.define("Tutor", {
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
        
        unavailable: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
    }, {
        freezeTableName: true
    });

    Tutor.associate = function(models) {
        Tutor.hasOne(models.User, {
            onDelete: "cascade",
            foreignKey: "tutorId",
            sourceKey: "id"
        })
    }

    return Tutor;
}

//association for students and sessions
