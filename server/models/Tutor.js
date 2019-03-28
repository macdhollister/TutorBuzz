// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var TutorSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },

//   email: {
//     type: String,
//     required: true
//   },

//   unavailable: {
//     type: String,
//     required: true
//   },

//   students: {
//     type: [Schema.Types.ObjectId],
//     ref: "Students"
//   },

//   sessions: {
//     type: [Schema.Types.ObjectId],
//     ref: "Session"
//   }
// });

// const Tutor = mongoose.model("Tutor", TutorSchema);
// module.exports = Tutor;

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