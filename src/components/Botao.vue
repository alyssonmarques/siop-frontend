<template>
	<button 
		class="mdl-button mdl-js-button mdl-button--colored mdl-button--raised mdl-js-ripple--effect" 
		@click="$emit(click)">
		{{label}}
	</button>
</template>
<script>
export default {
	props: ['controller', 'click', 'label']	
}
</script>