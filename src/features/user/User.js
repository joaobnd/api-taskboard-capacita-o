const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email obrigatório!'],
        validate: [isEmail, 'Email inválido!'],
        lowercase: true
    },
    password: { 
        type: String,
        required: [true, 'Senha obrigatória!']
    },
    token: {
        type: String
    },
    name: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function (next) {
    let user = this;
    next();
})

module.exports = model('User', UserSchema);