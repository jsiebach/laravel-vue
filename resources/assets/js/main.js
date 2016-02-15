var Vue = require("vue");
Vue.use(require('vue-resource'));
var VueRouter = require("vue-router");
Vue.use(VueRouter);
var _ = window._ = require('underscore');
var $ = window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('bootstrap-growl');

var router = new VueRouter();

import store from './store';

Vue.http.options.root = '/api/v1';
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementById('csrf_token').getAttribute('content');
Vue.http.interceptors.push({
    response: function (response) {
        var headers = response.headers();
        /*if(response.status == 401){
            store.actions.logout(this);
            router.go('/');
        }*/
        if(headers.hasOwnProperty('authorization')){
            store.actions.setToken(headers.authorization.substr(7));
        }
        if(response.hasOwnProperty('notify')){
            $.notify(response.notify.body,{type:response.notify.hasOwnProperty('type')?response.notify.type:'info'})
        }
        return response;
    },
    request: function (request){
        var token = store.state.token || '';
        if(token.length > 0){
            request.headers['authorization'] = "Bearer: " + token;
        }
        return request;
    }
});


import components from './components';
_.each(components, function(value, key){
    Vue.component(key, value);
});
import transitions from './transitions';
_.each(transitions, function(value, key){
    Vue.transition(key, value);
});
import directives from './directives';
_.each(directives, function(value, key){
    Vue.directive(key, value);
});
import filters from './filters';
_.each(filters, function(value, key){
    Vue.filter(key, value);
});

import routes from './routes';

router.map(routes);

router.start(Vue.extend({}), 'body');