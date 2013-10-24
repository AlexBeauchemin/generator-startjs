define([
	'mootools',
	'class.mutators'
], function () {
	var className = 'View';

	$[className] = new Class({
		jQuery: className,
		Implements: [Options, Events],
		options: {},

		initialize: function (el, options) {
			var self = this;

			self.el = $(el);

			self.setOptions(options);
			self.init();
		},

		//-- Vars
		//--------------------------------------------------------------

		//-- Init
		//--------------------------------------------------------------
		init: function () {
			var self = this;

			self.bindEvents();
		},

		//-- Hooks
		//--------------------------------------------------------------


		//-- Functions
		//--------------------------------------------------------------
		bindEvents: function () {
			var self = this;
		},

		empty: null
	});

	return $[className];
});