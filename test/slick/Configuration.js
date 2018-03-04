(function(context){

var Configuration = context.Configuration = {};

Configuration.name = 'NWSAPI';

Configuration.presets = {
	'nwsapi': {
		sets: ['specs'],
		source: ['helpers', 'nwsapi']
	}
};

Configuration.defaultPresets = {
	browser: 'nwsapi',
	jstd: 'nwsapi'
};

Configuration.sets = {
	'specs': {
		path: 'specs/',
		files: [
			'unit', 'syntax', 'engine_bugs', 'html', 'html5',
			'select_nth-child', 'select_exhaustive', 'mock_template', 
			'isxml', 'xml',
			'match',
			'google_closure', 'prototype', 'jquery', 'dojo', 'yui'
		]
	}
	
};

Configuration.source = {
	'helpers': {
		path: '',
		files: [
			'assets/simple_request',
			'assets/JSSpecHelpers',
			'bootstrap/nwsapi.slickspec',
			'setup'
		]
	},
	
	'nwsapi': {
		path: '../../src/',
		files: [
			'nwsapi',
//			'modules/nwsapi-cache',
//			'modules/nwsapi-shortcuts'
		]
	}
};

})(typeof exports != 'undefined' ? exports : this);
