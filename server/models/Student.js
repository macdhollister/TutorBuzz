const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    tutors: {
        type: [Schema.Types.ObjectId],
        ref: "Tutor"
    },

    sessions: {
        type: [Schema.Types.ObjectId],
        ref: "Session"
    }
})

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;