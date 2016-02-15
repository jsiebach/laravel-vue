import AuthService from './../services/auth'

export default {
    route:{
        canActivate(){
            return AuthService.isLoggedIn();
        }
    }
}