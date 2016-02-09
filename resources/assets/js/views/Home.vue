<style lang="sass">
</style>
<template>
{{message}}
	<js-button></js-button>
</template>
<script>
console.log(require("./../components"));
export default {
	name: 'Home',
	data(){
		return {
			message:"Hello World!"
		}
	},
	components:require("./../components")

};

</script>