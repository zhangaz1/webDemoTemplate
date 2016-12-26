'use strict';


module.exports = function(context, name) {
	var gulp = context.gulp;
	var config = context.config;
	var cacheManager = context.cacheManager;

	var plugins = context.plugins;

	gulp.task(
		name,
		'watch client to build when change',
		addWatch
	);

	function addWatch(done) {
		if(cacheManager.get(name)) {
			console.log('had watched: %s', name);
		} else {
			watch();
			cacheManager.set(name, true);
			console.log('add watch: %s', name);
		}

		done(null);
	}

	function watch() {
		plugins.watch(
			config.files.allJs,
			function() {
				gulp.start(config.tasks.change);
				// gulp.start(config.tasks.hint);
				// gulp.start(config.tasks.test);
			}
		);
	}
};
