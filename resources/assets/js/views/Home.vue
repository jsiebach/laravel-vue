<style lang="sass">
</style>
<template>
	<div>
		{{message}}
		<js-button :default_text="'button test'"></js-button>
	</div>
</template>
<script type="text/babel">
import authenticated from './../mixins/authenticated'

export default {
	mixins:[authenticated],
	name: 'HomeView',
	data(){
		return {
			message:"Hello World!"
		}
	}

};
</script>