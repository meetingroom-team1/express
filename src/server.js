let express = require('express');
let bodyParse = require('body-parser');
let ZipcodeToBarcode = require('./ZipcodeToBarcodeTranslater');
let BarcodeToZipcode = require('./BarcodeToZipcodeTranslater');
let app = express();
let path = require('path');

app.get('/', function (req, res) {
    res.sendfile(path.resolve('../webPage/BarcodeToZipcode.html'));
});

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

app.post('/result',function (req,res) {
    console.log(req.body.code);
    let barcode = new ZipcodeToBarcode().execute(req.body.code);
    let zipcode = new BarcodeToZipcode().execute(req.body.code);
    if(barcode.type){
        res.send("Barcode: " + barcode.text);
    }else if(zipcode.type){
        res.send("Zipcode: " + zipcode.text);
    }else{
        res.send("输入错误！请重新输入！");
    }
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})