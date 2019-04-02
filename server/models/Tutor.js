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

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        students: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        
        sessions: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        }
    }, {
        freezeTableName: true
    });

    return Tutor;
}

//association for students and sessions
