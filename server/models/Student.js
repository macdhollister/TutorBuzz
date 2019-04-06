module.exports = function(sequelize, DataTypes) {
    const Student = sequelize.define("Student", {
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
    }, {
            freezeTableName: true
        });

    Student.associate = function (models) {
        Student.belongsToMany(models.Tutor, {through: 'StudentTutor', as: 'sessions',  foreignKey: 'sessionId'})

        Student.hasOne(models.User, {
            onDelete: "cascade",
            foreignKey: "studentId",
            sourceKey: "id"
        })




        Student.hasMany(models.Session, {
            onDelete: "cascade",
            foreignKey: "studentId",
            sourceKey: "id"
        })

    }

    return Student;
}

