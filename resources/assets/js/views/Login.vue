<style>
    #app-inner:before{
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.4;
        /*background-image: url('/images/backgrounds/winter-wonderland.jpg');*/
        background-repeat: no-repeat;
        background-position: 50% 0;
        -ms-background-size: cover;
        -o-background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-size: cover;

    }
    #app-inner>div{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%)
    }
</style>

<template>
    <div id="app-inner" class="container-fluid" style="padding:0;min-height:100%;position:relative;">
        <div class="col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <div class="panel panel-primary">
                <!--<div class="panel-heading">
                    <h3 class="panel-title">Log-In To {{ client.dashboard_name }}</h3>
                </div>-->
                <div class="panel-body text-center">
                    <div class="alert alert-danger" v-if="error" transition="slideUp">{{error_message}}</div>
                    <form id="login" class="loginForm" v-on:submit.prevent="submitForm">
                        <div class='form-group' :class="{'has-error':error}">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user"></i> </span>
                                <input type='text' v-model="loginData.email" class="form-control" maxlength="50" placeholder="Username or Email" />
                            </div>
                        </div>
                        <div v-show="!forgot" transition="slideUp" class='form-group' :class="{'has-error':error}">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock"></i> </span>
                                <input type='password' class="form-control" v-model="loginData.password" maxlength="50" placeholder="Password" />
                            </div>
                        </div>
                        <!--<div class='form-group'>
                            <input type='checkbox' v-model="loginData.remember"/>
                            <label>Keep Me Logged In</label><br/>
                        </div>-->

                        <js-button
                                default_text="Log In"
                                loading_text="Logging In..."
                                success_text="Logged In"
                                failed_text="Login Failed"
                                v-show="!forgot"
                                :block="true"
                                type="primary"
                                size="lg"
                                v-ref:login-button></js-button>

                        <js-button
                                default_text="Reset Password"
                                loading_text="Resetting..."
                                success_text="Password Sent!"
                                failed_text="Reset Failed"
                                v-show="forgot"
                                :block="true"
                                type="warning"
                                size="lg"
                                v-ref:reset-button></js-button>

                        <br />
                        <a @click="swapForgot()"
                           style="cursor:pointer"
                        >{{forgot ? 'Return to login' : 'Forgot password'}}</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import AuthService from './../services/auth'
    export default {
        name:'Login',
        data() {
            return {
                loginData:{
                    email:'',
                    password:'',
                    remember:false
                },
                error:false,
                error_message:'',
                button_state:'default',
                forgot:false
            }
        },
        computed:{
            swapModeText(){
                if(this.mode = 'login'){
                    return 'Forgot password?';
                }
                return 'Return to Login';
            }
        },
        methods: {
            submitForm (e){
                this.error = false;
                this.$refs.loginButton.loading();
                AuthService.login(this.loginData)
                    .then(this.loginSuccess)
                    .catch(this.loginFailure);
            },
            loginSuccess(){
                this.$refs.loginButton.success();
                this.$route.router.go({
                    name:'Home'
                });
            },
            loginFailure(){
                this.error = true;
                this.error_message = "Could not log in using those credentials.";
                this.$refs.loginButton.reset();
            },
            swapForgot(){
                this.forgot = !this.forgot;
                this.error = false;
            }
        }
    }
</script>