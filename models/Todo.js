const { Schema, model } = require('mongoose')
const exphbs = require('express-handlebars')

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
})



module.exports = model('Todo', schema)