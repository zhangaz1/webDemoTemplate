'use strict';

module.exports = taskFactory;

function taskFactory(context) {
	var sequence = context.plugins.sequence;
	var tasks = context.config.tasks;

	return sequence(
		tasks.nodeTest.name,
		tasks.karmaTest.name,
		tasks.protractorTest.name
	);
}
