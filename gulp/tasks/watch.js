'use strict';

module.exports = taskFactory;

function taskFactory(context) {
	var gulp = context.gulp;
	var watch = context.plugins.watch;

	return taskHandler;

	// return void(0);

	function taskHandler(done) {
		if(cacheManager.get(name)) {
			console.log('had watched: %s', name);
		} else {
			doWatch();
			cacheManager.set(name, true);
			console.log('add watch: %s', name);
		}

		done(null);
	}

	function doWatch() {
		watch(
			config.files.allJs,
			function() {
				gulp.start(config.tasks.change);
				// gulp.start(config.tasks.hint);
				// gulp.start(config.tasks.test);
			}
		);
	}
}
