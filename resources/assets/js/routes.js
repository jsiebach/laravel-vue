export default {
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