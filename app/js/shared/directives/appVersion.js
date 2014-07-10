'use strict';

module.exports = [ /* require the 'app.service' module */
    'version', function(version) {
		return function(scope, elm, attrs) {
			return elm.text(version);
		};
	}
];