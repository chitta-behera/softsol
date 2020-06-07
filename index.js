const express = require('express');
var app = express();

app.get('/',function(req,res)
{
    res.send('Hello World from app1 !!!');
});

const port = 3000;
var server = app.listen(port,function() {
    console.log(`listening on port ${ port }`);
});
