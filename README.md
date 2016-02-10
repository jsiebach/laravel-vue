# laravel-vue
A basic template for a single-page application using Laravel and Vue.js

## Installation
1. Run `git clone https://github.com/jsiebach/laravel-vue`
2. Navigate into the project and run `composer install`
3. Run `npm install`

## Laravel Set-up
1. Rename the `.env.example` file to `.env`
2. To generate an encryption key for your Laravel project, run `php artisan key:generate`
3. Set your database credentials in `.env`
4. There are many other useful app settings located in the `.env` file as well as throughout the `/config` directory that you should review.

## Compiling JS/CSS
This project uses gulp to pre-compile css and js.  To compile, run `gulp`.  
Use `gulp --production` to minify the output.
Use `gulp watch` to start hot-reloading. This will launch a server on `localhost:3000` unless you change the settings in `gulpfile.js`,

## Included Packages
This project comes pre-packaged with a few useful included packages:

### JS Packages
Bootstrap
Moment.js
Underscore.js

### Sass Includes
Bootstrap Sass
FontAwesome

### PHP Libraries
Guzzle