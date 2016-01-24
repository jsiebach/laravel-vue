# laravel-vue
A basic template for a single-page application using Laravel and Vue.js

## Installation
1. Run `git clone https://github.com/jsiebach/laravel-vue`
2. Navigate into the project and run `composer install`
3. Run `npm install`

## Laravel Set-up
1. Rename the `.env.example` file to `.env`
2. To generate an encryption key for your Laravel project, run `php artisan key:generate`
3. Config files
	1. In `config/app.php`
		1. Set your root url
		2. Set your timezone & locale

## Compiling JS/CSS
This project uses gulp to pre-compile css and js.  To compile, run `gulp`.  
Use `gulp --production` to minify the output.

