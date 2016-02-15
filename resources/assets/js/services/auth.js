let LOGIN_ROUTE = '/auth/login';
let LOGOUT_ROUTE = '/auth/logout';
let RESET_PASSWORD_ROUTE = '/password/reset';

import Vue from 'vue';
import store from './../store';

export default {

    login(credentials){

        return Vue.http.post(LOGIN_ROUTE, credentials)

            .then((response) => {

                store.actions.setToken(response.data.token);
                store.actions.setUser(response.data.user);

            });

    },

    logout(){

        store.actions.setToken('');
        store.actions.setUser({});

        return Vue.http.post(LOGOUT_ROUTE, {})

            .then((response) => {



            })
            .catch((response) => {

                $.notify('failed to log out',{type:'warning'});

            });

    },

    resetPassword(email){

        return Vue.http.post(RESET_PASSWORD_ROUTE,{ email })

            .then((response) => {

                return true;

            })

            .catch((response) => {

                return false;

            });

    },

    isLoggedIn(){

        return store.state.token.length > 0;

    },

    user(){

        return store.state.user;

    }

}