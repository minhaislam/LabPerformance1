/*var fs = require('fs');
fs.writeFileSync('data.txt', 'hsdvfhsd sdfhsdgfs');
var data = fs.readFileSync('data.txt');
console.log(data.toString());*/

/*var path = require('path');
var bc = "C://windows/prog/ram_file//asdasd//sad\as\\asdasd/app.js";

console.log(path.dirname(bc));
console.log(path.extname(bc));
console.log(path.normalize(bc));*/

var http = require('http');
var fs = require('fs');

var requestHandler = function(request, response){

	//console.log(request.url);
	//console.log(request.method);
	/*response.writeHead(200, {'content-type': 'text/plain'});
	response.write('<h1>welcome to node http server!</h1>');
	response.end();*/

	if(request.url == "/Landing"){
		//response.write('welcome home!');
		var data = fs.readFileSync('Landing.html');
		response.write(data.toString());
		response.end();
	}else if(request.url == '/Login'){
		//response.write('Login page');
		//response.end();

		var data = fs.readFileSync('Login.html');
		response.write(data.toString());
		response.end();

	}
	else if(request.url == "/Registration"){
		//response.write('Login page');
		//response.end();

		var data = fs.readFileSync('Registration.html');
		response.write(data.toString());
		response.end();

	}
	else if(request.url == "/Home"){
		//response.write('Login page');
		//response.end();

		var data = fs.readFileSync('Home.html');
		response.write(data.toString());
		response.end();

	}else{
		response.write('Opps! Invalid request!');
		response.end();
	}
};

var server = http.createServer(requestHandler);
server.listen(3000);
console.log('server started at port 3000');






