export default {
    '/login':{
        component:require('./views/Login.vue'),
        name:'Login'
    },
    '/': {
        component: require('./App.vue'),
        subRoutes:{
            '/':{
                component:require('./views/Home.vue'),
                name:'Home'
            }

        }
    }
}