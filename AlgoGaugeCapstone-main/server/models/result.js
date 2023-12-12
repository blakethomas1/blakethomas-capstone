const mongoose = require("mongoose")

const ResultSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true
    },
    algoName:{
        type: String,
        require: true
    },
    otherData:{
        type: String,
        require: true
    },
    viewResults:{
        type: String,
        require: true
    },
    seed:{
        type: String,
        require: true
    },
})

const ResultTable = mongoose.model("resultList", ResultSchema);
module.exports = ResultTable