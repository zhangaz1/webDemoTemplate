/*global require*/
(function(require) {
	"use strict";
	var g = require("gulp"),
		karma = require("gulp-karma-runner");
	g.task("test", function() {
		g.src([
			"src/**/*.js",
			"test/**/*.js"
		], {
			"read": false
		}).pipe(
			karma.server({
				"singleRun": true,
				"frameworks": ["mocha", "chai"],
				"browsers": ["Chrome", "Firefox"]
			})
		);
	});
}(require));


'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;

	context.gulp
		.task(
			name,
			'test task',
			function(done) {
				context.sequence(
					tasks.nodeTest,
					tasks.karmaTest,
					tasks.protractorTest
				)(done);
			}
		);
};
