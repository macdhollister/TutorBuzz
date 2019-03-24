const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    time: {
        type: String,
        required: true
    }, 
    day: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: true,
        default: false
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    tutor: {
        type: Schema.Types.ObjectId,
        ref: "Tutor",
        required: true
    }
})

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;