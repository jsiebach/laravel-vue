<style lang="sass">
</style>
<template>
{{message}}
	<js-button :default_text="'button test'"></js-button>
</template>
<script>
export default {
	name: 'Home',
	data(){
		return {
			message:"Hello World!"
		}
	}

};

</script>