<template>
    <button class="btn"
            v-bind:class="classObject"
            v-on:click="click"
            :disabled="disabled">
        <template v-if="status == 'default'">{{text}}</template>
        <template v-if="status == 'loading'">{{text}}<i class="fa fa-circle-o-notch fa-spin pull-left"></i></template>
        <template v-if="status == 'success'">{{text}}<i class="fa fa-check pull-left"></i></template>
        <template v-if="status == 'failed'">{{text}}<i class="fa fa-times pull-left"></i></template>
    </button>
</template>
<style>

</style>
<script>
    export default {
        props:{
            type:{
                type:String,
                default:'default'
            },
            disabled:{
                type:Boolean,
                default:false
            },
            default_text:{
                type:String,
                default:''
            },
            loading_text:{
                type:String,
                default:''
            },
            success_text:{
                type:String,
                default:''
            },
            failed_text:{
                type:String,
                default:''
            },
            status:{
                type:String,
                default:'default'
            },
            size:{
                type:String,
                default:''
            },
            block:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            text(){
                if(this.status == "failed"){
                    return this.failed_text.length ? this.failed_text : this.default_text
                }
                if(this.status == "success"){
                    return this.success_text.length ? this.success_text : this.default_text
                }
                if(this.status == "loading"){
                    return this.loading_text.length ? this.loading_text : this.default_text
                }
                return this.default_text;
            },
            classObject(){
                return {
                    'btn-block':this.block,
                    'disabled':this.disabled,
                    'btn-default':this.type == "default" && this.status != 'success' && this.status != 'failed',
                    'btn-info':this.type == "info" && this.status != 'success' && this.status != 'failed',
                    'btn-primary':this.type == "primary" && this.status != 'success' && this.status != 'failed',
                    'btn-warning':this.type == "warning" && this.status != 'success' && this.status != 'failed',
                    'btn-success':this.type == "success" || this.status == 'success',
                    'btn-danger':this.type == "danger" || this.status == 'failed',
                    'btn-lg':this.size == "lg",
                    'btn-xl':this.size == "xl",
                    'btn-sm':this.size == "sm",
                    'btn-md':this.size == "md",
                    'btn-xs':this.size == "xs"
                }
            }
        },
        methods:{
            loading(){
                this.status = "loading";
                this.disabled = true;
            },
            success(seconds = 1000){
                this.status = "success";
                this.disabled = false;
                if(seconds){
                    window.setTimeout(this.reset, seconds);
                }
            },
            failed(seconds = 1000){
                this.status = "failed";
                this.disabled = false;
                if(seconds){
                    window.setTimeout(this.reset, seconds);
                }
            },
            reset(){
                this.status = "default";
                this.disabled = false;
            },
            click(){
                this.$dispatch('click');
            }
        }
    }
</script>