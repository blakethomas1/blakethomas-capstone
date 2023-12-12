const mongoose = require("mongoose")

const QueueSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true
    }
    ,
    sortType1:{
        type: String,
        require: true
    },
    range1:{
        type: String,
        require: true
    },
    dataType1:{
        type: String,
        require: true
    },
    pivotGroup1:{
        type: String,
        require: true
    },
    sortType2:{
        type: String,
        require: true
    },
    range2:{
        type: String,
        require: true
    },
    dataType2:{
        type: String,
        require: true
    },
    pivotGroup2:{
        type: String,
        require: true
    },
    seed:{
        type: String,
        require: true
    }
}, 
{
    timestamps: true
});

const QueueTable = mongoose.model("queueList", QueueSchema);
module.exports = QueueTable