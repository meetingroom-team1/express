let express = require('express');
let readline = require('readline-sync');
let app = express();
let BarcodeToZipcode = require('./BarcodeToZipcodeTranslater');
let http = require('http');

// http.get('http://localhost:3000/',function (res) {
//     console.log(res);
// })
// app.post("http://127.0.0.1:3000/",function (req,res) {
//     console.log("111111111");
//     res.send('123456');
// })
http.get("http://127.0.0.1:3000/", function(res) {
    console.log("Got response: " + res.statusCode);
});

