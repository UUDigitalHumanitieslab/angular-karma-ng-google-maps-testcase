module.exports = function(config){
	config.set({

		basePath : '',

		files : [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/lodash/lodash.js',
			'bower_components/angular-simple-logger/dist/angular-simple-logger.js',
			'bower_components/angular-google-maps/dist/angular-google-maps.js',
			'*.js'
		],
		
		autoWatch : true,

		frameworks: ['jasmine'],

		browsers : [
			'Chrome',
			'Firefox'
		],

		plugins : [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine'
		],

	});
};
