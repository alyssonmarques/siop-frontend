<template>
	<div id="siop-app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<siop-layout-header title="SIOP"></siop-layout-header>
		<siop-layout-menu-vertical></siop-layout-menu-vertical>
		<siop-layout-content></siop-layout-content>
		<siop-layout-footer></siop-layout-footer>
	</div>
</template>

<script>
	
	import SiopLayoutHeader from './components/layout/Header'
	import SiopLayoutMenuVertical from './components/layout/MenuVertical'
	import SiopLayoutContent from './components/layout/Content'
	import SiopLayoutFooter from './components/layout/Footer'

	export default {
		components: {
			SiopLayoutHeader, SiopLayoutContent, SiopLayoutFooter, SiopLayoutMenuVertical
		}
	}

</script> 

<style>
	* {
		padding: 0pt;
	  font-size: 10pt;
	}
	h1, h2 {
		font-variant-caps: all-petite-caps;
		font-weight: bolder;
	}
	h1 {
	  font-size: 20pt;
	}
	h2 {
	  font-size: 18pt;
	}
	h3 {
	  font-size: 16pt;
	}
</style>