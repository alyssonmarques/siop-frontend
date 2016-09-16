<template>
	<div class="siop-breadcrumb">
		Você está em: Início <span v-for="caminho in $route.breadCrumb">> {{caminho}} </span>
	</div>
</template>
<script>
	export default {
		created: function() {
		}
	}
</script>

<style>
.siop-breadcrumb {
	font-size: 10pt;
	font-weight: 300;
	color: #555555;
}
</style>