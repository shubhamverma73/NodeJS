const http = require('http');
const fs = require('fs');
var requests = require('requests');

const indexFile = fs.readFileSync('index.html', 'utf-8');

const replaceVal = (file, val) => {
    let tempreature = file.replace('{%tempVal%}', val.main.temp);
    tempreature = tempreature.replace('{%cityVal%}', val.name);
    tempreature = tempreature.replace('{%countryVal%}', val.sys.country);
    tempreature = tempreature.replace('{%mainVal%}', val.weather[0].main);
    tempreature = tempreature.replace('{%forcastStatus%}', val.weather[0].main);
    tempreature = tempreature.replace('{%feelsLikeVal%}', val.main.feelslike);
    tempreature = tempreature.replace('{%minVal%}', val.main.temp_min);
    tempreature = tempreature.replace('{%maxVal%}', val.main.temp_max);
    tempreature = tempreature.replace('{%windVal%}', val.wind.speed);
    tempreature = tempreature.replace('{%humidityVal%}', val.main.humidity);
    return tempreature;
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        //res.end('Hello from dashboard');
        requests('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=<API KEY>&units=metric')
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                console.log(arrData);
                const realTimeData = arrData.map((val) => {
                    return replaceVal(indexFile, val);
                    //console.log(val.main);
                }).join('');
                res.write(realTimeData);
                //console.log(realTimeData);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                //console.log('end');
                res.end();
            });
    } else {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('404 Page not found');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listing to the port 8000');
});