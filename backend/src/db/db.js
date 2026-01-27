const mongoose = require('mongoose') ;

function connectDb() {
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(() => {
        console.log("mongodb is connected") ;
    })
    .catch((err) => {
        console.log("mongodb connection error" ) ;
    });

}

module.exports = connectDb ;