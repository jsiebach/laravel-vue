var Vue = require("vue");

Vue.use(require('vue-resource'));

var VueRouter = require("vue-router");

Vue.use(VueRouter);

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf_token')[0].getAttribute('content')

var router = new VueRouter();

import components from './components';
_.each(components, function(value, key){
    Vue.component(key, value);
});
import transitions from './transitions';
_.each(transitions, function(value, key){
    Vue.transition(key, value);
});
import filters from './filters';
_.each(filters, function(value, key){
    Vue.filter(key, value);
});

import routes from './routes';

router.map(routes);

router.start(Vue.extend({}), 'body');