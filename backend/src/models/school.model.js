/**
 * Exercise: make School mongoose model
 */

const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    classrooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Classroom'
        }
    ]
}, {
    timestamps: true
});

module.exports = new mongoose.model('School', SchoolSchema, 'schools');


//  name:string;
//  city: string;
//  street: string;
//  zipcode: number;
//  classrooms?: string[];  // references for classroom entities