'use strict';


var gulp = require('gulp');
var help = require('gulp-help');
var debug = require('gulp-debug');
var sequence = require('gulp-sequence');
var watch = require('gulp-watch');
//var exec = require('child_process').exec;
// var execCmd = require('./../common/cmd/execCmd.js');
var mocha = require('gulp-mocha');

var config = require('./config.js');
var cacheManager = require('./cacheManager.js');

gulp = help(gulp);

module.exports = {
	gulp: gulp,
	debug: debug,
	sequence: sequence.use(gulp),
	watch: watch,
	config: config,
	cacheManager: cacheManager,
	//exec: exec,
	// execCmd: execCmd,
	mocha: mocha,
};
