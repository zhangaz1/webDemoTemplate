'use strict';

module.exports = taskFactory;

function taskFactory(context) {
	var gulp = context.gulp;
	var mocha = context.plugins.mocha;

	return taskHandler;

	// return void(0);

	function taskHandler() {
		return gulp.src('test/node/**/*.test.js')
			.pipe(mocha());
	}
}
