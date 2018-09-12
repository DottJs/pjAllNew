
const express = require('express');
const app = express();

app.get('/',function(req, res){
    res.send('하이');    
});



app.listen(3003,function(){
    console.log('웰컴')
})
