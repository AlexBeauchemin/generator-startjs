var App;

(function () {
	requirejs.config({
		paths: {
			'jquery': [
				'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
				'./vendor/jquery/jquery.min'
			],
			'mootools': './vendor/mootools-core-1.4.5',
			'class.mutators': './vendor/Class.Mutators.jQuery'
		},
		shim: {
			'src/App': {
				deps: [
					'jquery'
				]
			},
			'class.mutators': {
				deps: [
					'mootools'
				],
				exports: 'classmutators'
			}
		},
		waitSeconds: 15
	});

	requirejs([
		'jquery',
		'./src/App'
	], function () {
		$(function () {
			App = new $.App($('#site'));
		});
	});

})();