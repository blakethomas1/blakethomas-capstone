const express = require("express");
var session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);
const cors = require("cors");
const bodyParser = require("body-parser");
const configureDatabase = require("./db/db.js");
const app = express();
const ResultSchema = require("../server/models/result.js");
const QueueTable = require("../server/models/queueModel.js");





app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

// Connect to session MongoDB
var store = new MongoDBStore({
    uri: "mongodb+srv://capstone:capstone@algogauge.ppwphl9.mongodb.net/",
    databaseName: "algoTest",
    collection: "algoSessions",

});

app.post("/testing", (req, res) => {
    console.log("check if works");
    user = req.body.username;
    console.log(user);
    res.json("it works");
});

// var store = new MongoDBStore({
//     uri: "mongodb+srv://montanojaren4:montanojaren4@algogauge.ppwphl9.mongodb.net/",
//     databaseName: "AlgoGauge",
//     collection: "AlgoSessions",
// });


app.get('/fullQueue', async (req, res) => {
    try {
        const queueData = await QueueTable.find({}).sort({ 'createdAt': 1 }); // Corrected to use QueueTable
        res.json(queueData);
    } catch (error) {
        res.status(500).send("Error fetching the full queue");
    }
});


// Using setInterval to periodically check and delete the oldest entry in the queue
setInterval(async () => {
    
    try {
        const oldestEntry = await QueueTable.findOne().sort({ 'createdAt': 1 });
        
        if (oldestEntry && new Date() - new Date(oldestEntry.createdAt) > 30000) { // 30 seconds
            //this is to show which one in the queue got removed.
            console.log(oldestEntry.userName + "   ----------- Inside -------");
            
            await QueueTable.deleteOne({ _id: oldestEntry._id });
            addtoResults(oldestEntry);

        }
    } catch (error) {
        console.error("Error deleting the oldest queue entry", error);
    }
    //this will add the username with fake data to the results database.
   
    

    
}, 10000); // Checks every 10 seconds

// checkPosition endpoint checks the user's position in the queue
app.get('/checkPosition', async (req, res) => {
    try {
        const { userName } = req.query;
        const userPosition = await QueueTable.findOne({ userName: userName });
        res.json({ position: userPosition ? userPosition.createdAt : null });
    } catch (error) {
        res.status(500).send("Error checking queue position");
    }
});


configureDatabase();


const { Add, queueAdd, getUserPosition, GetUserResult, GetUserPriorResult, GetPriorResults } = require('./controller/userDataController.js');


app.post("/addtoqueue", queueAdd);

app.listen(4000, () => console.log("Server started on http://localhost:4000"));

app.post("/getuserposition", getUserPosition);

app.post("/getuserresults", GetUserResult);

app.post("/getUserPriorResults", GetUserPriorResult); // Added to get prior runs

app.post("/getPriorResults", GetPriorResults);


//this is the function to add the bs data to results.
function addtoResults(queueEntery){
   
    console.log(queueEntery.userName + "This is inside the addtoResults function");
    ResultSchema.create({userName: queueEntery.userName, 
        algoName: queueEntery.sortType1, 
        otherData: "Range: " + queueEntery.range1 + "Data type: " + queueEntery.dataType1
        + " Pivot Group: " + queueEntery.pivotGroup1, 
        viewResults: "Testing, we do not have any code executing.",
        seed: queueEntery.seed})
    .then((someResponseObject) => {
        console.log({someResponseObject});
        console.log("You have added a result entry");
    })
    .catch((err) => {
        console.log("You entry had issues");
    });

}


