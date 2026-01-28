const mongoose = require('mongoose') ;

function connectDb() {
    mongoose.connect(process.env.MONGODB_URL) 
    .then(() => {
        console.log("mongodb is connected") ;
    })
    .catch((err) => {
        console.log("mongodb connection error" ) ;
    });

}

module.exports = connectDb ;