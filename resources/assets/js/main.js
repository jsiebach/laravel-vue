var Vue = require("Vue");

Vue.use(require('vue-resource'));

var VueRouter = require("vue-router");

Vue.use(VueRouter);

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementByName('csrf_token').getAttribute('content')

var router = new VueRouter();

import routes from './routes';

router.map(routes);

router.start(Vue.extend({}), 'body');