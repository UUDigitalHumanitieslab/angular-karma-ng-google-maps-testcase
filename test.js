'use strict';

describe('this spec', function() {
	beforeEach(module('uiGmapgoogle-maps'));
	
	it('tries to configure uiGmapGoogleMapApiProvider', inject(function(uiGmapGoogleMapApiProvider) {
		expect(uiGmapGoogleMapApiProvider.configure).toBeDefined();
	}));
});
