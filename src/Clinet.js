let readline = require('readline-sync');
let request = require('request');
function input() {
    let code = readline.question("请输入code:");
    transfer(code);
}
function transfer(code) {
    let option = {
        url: "http://localhost:3000/result",
        method: "post",
        json: true,
        body: {'code': code}
    }

    request(option, function (error, response, body) {
        console.log(body);
        input();
    })
}
input();


// let app = express();
// let BarcodeToZipcode = require('./BarcodeToZipcodeTranslater');
// let http = require('http');
//
// // http.get('http://localhost:3000/',function (res) {
// //     console.log(res);
// // })
// // app.post("http://127.0.0.1:3000/",function (req,res) {
// //     console.log("111111111");
// //     res.send('123456');
// // })
// http.get("http://127.0.0.1:3000/", function(res) {
//     console.log("Got response: " + res.statusCode);
// });

