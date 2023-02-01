const mongoose = require("mongoose")

const schema = mongoose.Schema

let employee = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        firstName: { type: String },
        salary: { type: Number },
        department: { type: String },
        lastCompany: { type: String },
        lastSalary: { type:String },
        overallExp: { type:String },
        contactInfo: { type: String },
        gradStream: { type: String },

    },
    {collection:"Employees"}

)

module.exports = mongoose.model("Employees",employee)
