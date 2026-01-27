const express = require('express') ;
const cookieParser = require('cookie-parser') ;
const authRoutes = required("./routes/auth.route") ;


const app = express() ;
app.use(cookieParser()) ;

app.get('/' , (req , res) => {
    res.send("app is runing ") ;
})
app.use('/api/auth' , authRoutes) ;

module.exports = app ;