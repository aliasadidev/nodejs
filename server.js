var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors({
	"origin": "*",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 204
}))

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

// *************************************  Read this *****************************
// Create package.json
// https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

// Request -->  Route(todoListRoutes)--> Controller(todoListController) -> 
// npm run start

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
