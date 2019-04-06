module.exports = function(sequelize, DataTypes) {
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
        Tutor.belongsToMany(models.Tutor, {through: 'StudentTutor', as: 'sessions',  foreignKey: 'sessionId'})
        Tutor.hasOne(models.User, {
            onDelete: "cascade",
            sourceKey: "id"
        })
    }

    return Tutor;
}





//association for students and sessions
