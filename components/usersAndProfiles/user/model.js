// User's model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    email: {
        type: String,
        require: true
    },
    hash: {
        type: String,
        require: true
    },
    salt: {
        type: String,
        require: true
    },
    verification: {
        code: {
            type: String,
            required: true,
            default: null
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    isSuper: {
        type: Boolean,
        required: true,
        default: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    profile: {
        type: Schema.ObjectId,
        ref: 'Profile'
    },
}, { timestamps: true });

const model = mongoose.model('User', mySchema);
module.exports = model;