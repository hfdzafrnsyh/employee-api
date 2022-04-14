const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
require('../database/db');

const EmployeeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    role: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String,
    },
    sallary: {
        type: String,
        default: null
    }
})


const Employee = new mongoose.model('Employees', EmployeeSchema);
module.exports = Employee;