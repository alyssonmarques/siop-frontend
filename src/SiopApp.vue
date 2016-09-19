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
	body {
		margin: 0;
		height: 100%;
	}
	
	* {
		font-size: 10pt;
	}
	
	h1,
	h2 {
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

	/* -------- transição: default ------------*/
	
	.default-transition {
	}
	
	.default-enter {
		animation: default-in 1s;
	}
	
	.default-leave {
		animation: default-out 1s;
	}
	
	@keyframes default-in {
		from {
			opacity: 0;
			}
   		to {
			opacity: 1;
		}  
	}
	
	@keyframes default-out {
		from {
			opacity: 1;
			}
   		to {
			opacity: 0;
		}   
	}
</style>