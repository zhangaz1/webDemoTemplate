'use strict';

module.exports = taskFactory;

function taskFactory(context) {
	var gulp = context.gulp;
	var nodeTests = context.config.srcs.tests.node;
	var mocha = context.plugins.mocha;

	return taskHandler;

	// return void(0);

	function taskHandler() {
		return gulp.src(nodeTests)
			.pipe(mocha());
	}
}
