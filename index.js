const express = require('express');
const app = express();

app.get('/',(req,res)=>{
res.send({Hi:'Sagnika How are you doing, happy to see you here'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);