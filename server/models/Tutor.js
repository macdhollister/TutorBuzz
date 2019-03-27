var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tutorSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  unavailable: {
    type: String,
    required: true
  },

  students: {
    type: [Schema.Types.ObjectId],
    ref: "Students"
},

sessions: {
  type: [Schema.Types.ObjectId],
  ref: "Session"
}

}
});

const Tutor = mongoose.model("Tutor", TutorSchema);
module.exports = Tutor;

