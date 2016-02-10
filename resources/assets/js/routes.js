export default {
    '/': {
        component: require('./views/MainWrapper.vue'),
        subRoutes:{
            '/':{
                component:require('./views/Home.vue'),
                name:'Home'
            }
        }
    }
}