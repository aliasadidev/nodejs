'use strict';


// var Task = mongoose.model('Tasks');

exports.list_all_tasks = function (req, res) {
	res.json([{ name: 'ali', age: 100 }]);
};