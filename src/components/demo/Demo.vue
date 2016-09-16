<template>
	<div>
		<hr>
		<h2>{{titulo}}</h2>
		<div class="siop-demo__descricao">
			<slot name="descricao"></slot>
		</div>
		<div>
			<slot></slot>
		</div>
		<pre class="siop-demo__codigo">
			<slot name="codigo"><slot>
		</pre>
	</div>
	
	
</template>
<script>
	export default {
		props: ['titulo']
	}
</script>

<style>
	.siop-demo__descricao {
		padding-top:0pt;
		padding:20pt;
	}
	.siop-demo__codigo {
		background-color: #F0F0F0;
		font-family: 'Courier';
		overflow:auto;
		height: 200px;
		border: 2pt solid #CECECE;
	}
</style>