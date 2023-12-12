const mongoose = require("mongoose")

const QueueSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true
    }
}, 
{
    timestamps: true
});

const QueueTable = mongoose.model("queueList", QueueSchema);
module.exports = QueueTable