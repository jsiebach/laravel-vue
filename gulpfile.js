var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir(function(mix) {
	mix.browserify('main.js');
	mix.scripts([
		'../../../public/js/main.js'
	],'public/js/master.js');
    mix.sass('app.scss','public/css/master.css');
	mix.version([
        'public/js/master.js',
        'public/css/master.css'
    ]);
});
