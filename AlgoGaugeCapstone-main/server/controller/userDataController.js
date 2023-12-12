const result = require("../models/result.js");
const queues = require("../models/queueModel.js");

exports.Add = (req, res) =>{
    result.create({userName: req.body.userName, algoName: req.body.algoName, otherData: req.body.otherData, viewResults: req.body.viewResults})
    .then((someResponseObject) => {
        console.log({someResponseObject});
        console.log("You have added a result entry");
    })
    .catch((err) => {
        console.log("You entry had issues")
    });
}

exports.GetUserResult = (req, res) =>{
    result.findOne({userName: req.body.userName, seed: req.body.seed})
    .then((someResponseObject) => {
        console.log(someResponseObject);
        res.json(someResponseObject);
    })
    .catch((err) => {
        console.log("Error finding user Results.");
    });

}
 // Function to pull all prior runs
exports.GetUserPriorResult = (req, res) =>{
    result.find({userName: req.body.userName})
    .then((someResponseObject) => {
        console.log(someResponseObject);
        res.json(someResponseObject);
    })
    .catch((err) => {
        console.log("Error finding user Results.");
    })

}

exports.GetPriorResults = (req, res) =>{
    console.log("inside the get prior results.")
    result.find({})
    .then((someResponseObject) => {
        console.log(someResponseObject);
        res.json(someResponseObject);
    })
    .catch((err) => {
        console.log("Error finding user Results.");
    })

}

exports.queueAdd = (req, res) => {
    console.log("In queue add");
    console.log(req.body.userName);
    queues.create({userName: req.body.userName, sortType1: req.body.sortType1, range1: req.body.range1, dataType1: req.body.dataType1, pivotGroup1: req.body.pivotGroup1, sortType2: req.body.sortType2, range2: req.body.range2, dataType2: req.body.dataType2, pivotGroup2: req.body.pivotGroup2, seed: req.body.seed})
    .then((someResponseObject) => {
        const temp = "User added with timestamp:" + someResponseObject.createdAt;
        console.log(temp);
        res.json({result: temp});

    })
    .catch((err) => {
        console.log("Your time stamp had issues")
        res.status(500).json({ error: "Internal Server Error couldn't add to queue!" });
    });
}

exports.getUserPosition = async (req, res) => {
    
    const userName = req.body.userName;
    console.log(userName);
    try {
        // Find all queue entries up to and including the user
        const allEntries = await queues.find({}).sort({createdAt: 1}).exec();
        let position = -1; // Default to -1, indicating not found
        for(let i = 0; i < allEntries.length; i++) {
            console.log("inside1");
            if(allEntries[i].userName === userName) {
                console.log("inside2")
                position = i + 1;  // 1-indexed position
                break;
            }
        }
        console.log(position);
        res.json({ position: position });
        
    } catch(err) {
        console.log("Error fetching user position:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
