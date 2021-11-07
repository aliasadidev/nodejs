'use strict';


// var Task = mongoose.model('Tasks');
// Method Type: Get
// http://127.0.0.1:3000/tasks?email=aliasadi@gmail.com&name=MoHAmmad
exports.list_all_tasks = function (req, res) {
	//req request detail
	//res
	var email = req.query.email;
	var name = req.query.name.toLowerCase();
	// load data from database
	res.json([
		{ Name: name, Age: 100, Email: email },
		{ Name: "AliReza", Age: 33, Email: "test" }

	]);
};
// Method Type: Post
// http://127.0.0.1:3000/tasks
/*
 {
	"Name": "ali asadi",
	"Age": 29,
	"Email": "aliasadi@gmail.com"
  }
*/
exports.create_tasks = function (req, res) {
	//req request detail
	//res
	var email = req.body.Email;
	var name = req.body.Name.toLowerCase();
	var age = req.body.Age;
	// save in database

	/**
	const { Client } = require('pg')
	const client = new Client()
	await client.connect()
	const res = await client.query('SELECT $1::text as message', ['Hello world!'])
	console.log(res.rows[0].message) // Hello world!
	await client.end()
	 */


	res.json({ ok: true });
};