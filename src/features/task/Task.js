const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nome obrigatório!'],
    },
    description: { 
        type: String,
        required: [true, 'descriçao obrigatória!']
    },
    status: {
        type: String,
        enum: ['em andamento', 'concluida'],
        default: 'em andamento'
    },
    priority: {
        type: String,
        required: true,
        enum: ['baixa', 'alta']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

TaskSchema.pre('save', function (next) {
    let task = this;
    next();
})

module.exports = model('Task', TaskSchema);