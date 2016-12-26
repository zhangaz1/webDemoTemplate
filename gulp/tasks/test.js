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
