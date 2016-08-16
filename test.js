'use strict';

describe('this spec', function() {
	var gmapProvider;
	
	beforeEach(function() {
		angular.module('testAssist', ['uiGmapgoogle-maps'])
		.config(function(uiGmapGoogleMapApiProvider) {
			gmapProvider = uiGmapGoogleMapApiProvider;
		});
		module('testAssist');
		inject();
	});
	
	it('tries to configure uiGmapGoogleMapApiProvider', function() {
		expect(gmapProvider.configure).toBeDefined();
	});
});
