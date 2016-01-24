var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix.browserify('main.js');
	mix.scripts([
		'../../../public/js/main.js∏'
	],'public/js/master.js');
    mix.sass('app.scss','public/css/master.css');
	mix.version([
        'public/js/master.js',
        'public/css/master.css'
    ]);
});
