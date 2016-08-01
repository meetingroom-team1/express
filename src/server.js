let express = require('express');
let ZipcodeToBarcode = require('./ZipcodeToBarcodeTranslater');
let BarcodeToZipcode = require('./BarcodeToZipcodeTranslater');
let app = express();
let path = require('path');

app.get('/', function (req, res) {
    res.sendfile(path.resolve('../webPage/BarcodeToZipcode.html'));
})

app.get('/result',function (req,res) {
    let barcode = new ZipcodeToBarcode().execute(req.query.code);
    let zipcode = new BarcodeToZipcode().execute(req.query.code);
    if(barcode.type){
        res.send("Barcode: " + barcode.text);
    }else if(zipcode.type){
        res.send("Zipcode: " + zipcode.text);
    }else{
        res.send("输入错误！请返回上一页面重新输入！");
    }
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})