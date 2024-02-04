const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    videos: {
        type: String, // Change the type to String
        required: true
    },
    active: Boolean
});

module.exports = mongoose.model("courses", CourseSchema);
