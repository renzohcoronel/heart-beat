var readline = require('readline');
var fs = require('fs'), sleep = require('sleep');
var request = require('request');


var myInterface = readline.createInterface({
    input: fs.createReadStream('MuestraLPM_marcelo.txt')
});

var datas = [];
var index = 0;

myInterface.on('line', function (line) {

    var lineparse = line.split(',');

    var sensorData = {
        sensorId: 0,
        time: lineparse[0],
        value: parseInt(lineparse[1])
    };

    datas.push(sensorData);

});

myInterface.on('close', function () {
    setInterval( ()=>{
        console.log(datas[index]);
        request({
            url: "http://localhost:3000/api/beats",
            method: "POST",
            json: true,  
            body: datas[index]
        }, function (error, response, body) {
            console.log(body);
        });
        index++;
        if(index> datas.length)
            index=0;
    
    },2500);
});

