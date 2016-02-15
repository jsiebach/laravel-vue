<style lang="sass">

</style>
<template>
    <div>
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Laravue</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{user.name}} <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Billing</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#" @click="logout()">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div><!-- /.navbar-collapse -->
        </nav>
        <router-view></router-view>
    </div>
</template>
<script type="text/babel">
    import AuthService from './services/auth';
    import authenticated from './mixins/authenticated'

    export default {
        mixins:[authenticated],
        name:"App",
        computed:{
            user(){
                return AuthService.user();
            }
        },
        methods:{
            logout(){
                AuthService.logout()
                    .then(() => {
                        this.$route.router.go({
                            name: 'Login'
                        });
                    });
            }
        }
    }
</script>