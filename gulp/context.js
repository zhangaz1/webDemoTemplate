'use strict';


var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({});


// var exec = require('child_process').exec;
// var execCmd = require('./../common/cmd/execCmd.js');

var config = require('./config.js');
var cacheManager = require('./cacheManager.js');

gulp = plugins.help(gulp);

module.exports = {
	gulp: gulp,
	sequence: plugins.sequence.use(gulp),
	config: config,
	cacheManager: cacheManager,
	//exec: exec,
	// execCmd: execCmd,
	plugins: plugins
};
