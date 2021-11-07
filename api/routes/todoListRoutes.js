'use strict';
module.exports = function (app) {
	var ctrl = require('../controllers/todoListController');

	// todoList Routes
	app.route('/tasks')
		.get(ctrl.list_all_tasks)
		.post(ctrl.create_tasks);
	//.put(...)
	//.delete(...)

};

