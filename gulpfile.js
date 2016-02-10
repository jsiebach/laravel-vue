var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');


var gutils = require('gulp-util');
var  b = elixir.config.js.browserify;

if(gutils.env._.indexOf('watch') > -1){
	b.plugins.push({
		name: "browserify-hmr",
		options : {}
	});
}


elixir(function(mix) {
	mix.browserify('main.js');

	mix.browserSync({
		proxy: 'laravue.dev',
		files: [
			elixir.config.appPath + '/**/*.php',
			elixir.config.get('public.css.outputFolder') + '/**/*.css',
			elixir.config.get('public.versioning.buildFolder') + '/rev-manifest.json',
			'resources/views/**/*.php'
		]
	});

	mix.scripts([
		'../../../public/js/main.js'
	],'public/js/master.js');
    mix.sass('app.scss','public/css/master.css');
    mix.version([
        'public/js/master.js',
        'public/css/master.css'
    ]);
});
