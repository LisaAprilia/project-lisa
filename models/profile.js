const mongoose = require('mongoose')
const { Schema } = mongoose

const profileSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    isiProfile: String
}, { timestamps: true })

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile