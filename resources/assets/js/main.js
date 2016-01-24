var Vue = require("Vue");

var VueRouter = require("vue-router");

Vue.use(VueRouter);

var router = new VueRouter();

import routes from './routes';

router.map(routes);

router.start(Vue.extend({}), 'body');