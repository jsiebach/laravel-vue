import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user:{

        },
        client:{

        },
        token:window.localStorage.getItem('jwt_token')
    },
    actions: {
        setToken: 'SET_TOKEN',
        fetchUser: 'FETCH_USER',
        logout: 'LOGOUT'
    },
    mutations: {
        SET_TOKEN (state, token){
            state.token = token;
            window.localStorage.setItem('jwt_token',token);

        },
        FETCH_USER (state, callback){
            Vue.http.get('/auth/user',function(response, status, xhr){
                state.user = response.user;
                state.client = response.client;
                callback();
            });
        },
        LOGOUT (state, vm){
            window.localStorage.setItem('jwt_token', '');
            state.token = '';
            vm.$route.router.go('/');
        }
    }
});