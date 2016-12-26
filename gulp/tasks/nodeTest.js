'use strict';


module.exports = function(context, name) {
	var mocha = context.plugins.mocha;

	context.gulp
		.task(
			name,
			'run node test task',
			function(done) {
				context.gulp
					.src('test/node/**/*.test.js')
					.pipe(mocha())
					// .pipe(context.jasmine())
					.on('error', function() {
						console.log(arguments);
					})
					.on('end', function(err) {
						if(err) {
							console.log(err);
						}
						done(null);
					});
			}
		);
};
