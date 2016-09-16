<template>
	<div>
		<hr>
		<h2>{{titulo}}</h2>
		<div>
			<slot></slot>
		</div>
		<code>
			<slot name='code'></slot>
		</code>
	</div>
	
	
</template>
<script>
	import Codigo from './../Codigo'

	export default {
		components: {
			Codigo
		},
		props: ['titulo']
	}
</script>

<style>
	.siop-demo__descricao {
		padding-top:0pt;
		padding:20pt;
	}
</style>