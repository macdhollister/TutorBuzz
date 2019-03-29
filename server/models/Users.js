module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Test", {
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

        // isStudent field? 
        // association to Tutor/Student model?
    }, {
        freezeTableName: true
    });

    return User;
}
