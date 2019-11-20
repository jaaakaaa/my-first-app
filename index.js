//import library
const express =  require('express');

const PORT = process.env.PORT || 80;

//create application
const app = express();

//some basic royute
app.get('/',(req,res) => {
    //
    res.json({message:'coucou'});
});

//start server
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.info('Server started.')
});