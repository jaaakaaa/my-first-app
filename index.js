//import library
const express =  require('express');

//create application
const app = express();

//some basic royute
app.get('/',(req,res) => {
    //
    res.json({message:'coucou'});
});

//start server
app.listen(80, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.info('Server started.')
});