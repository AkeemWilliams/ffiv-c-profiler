const express = require('express');
const app = express();
const port = process.env.Port || 3000;
const path = require('path');
const { env } = require('process');
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

app.get('/sample', (req, res) => {  
  var options = {
    root: path.join(__dirname, '/src/app/')
  }
    return setTimeout(() => {
      res.sendFile('sample-char.json', options)
    }, 3001); 

});

app.get('/status', (req, res)=>{
  res.status(200).json({status: "up"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

