<template>
	<main class="mdl-layout__content siop-layout__content">
		<div class="container">
			<siop-bread-crumb></siop-bread-crumb>
			<router-view></router-view>
		</div>
	</main>
</template>
<script>
	import Inicio from './Inicio'
	import SiopBreadCrumb from './../BreadCrumb'
	export default {
		components: { Inicio, SiopBreadCrumb },
		created: function() {
			console.log('criou corpo')
		}
	}

</script>

<style>
.container {
	padding: 15pt;
}
.siop-layout__content {
	background-color: #FFFFFF;
}
</style>