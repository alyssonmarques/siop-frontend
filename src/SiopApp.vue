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
		padding: 0pt;
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

	/* -------- transições ------------*/
	
	.bounce-transition {
		display: inline-block;
		/* otherwise scale animation won't work */
	}
	
	.bounce-enter {
		animation: bounce-in .5s;
	}
	
	.bounce-leave {
		animation: bounce-out .5s;
	}
	
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		30% {
			transform: scale(0.4);
		}
		,
		60% {
			transform: scale(0.8);
		}
		,
		90% {
			transform: scale(1.2);
		}
		,
		100% {
			transform: scale(1);
		}
	}
	
	@keyframes bounce-out {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(0);
		}
	}

	/* -------- transição: SLIDE ------------*/
	
	.slide-transition {
		/* display: inline-block; */
		/* otherwise scale animation won't work */
		
	}
	
	.slide-enter {
		animation: slide-in 2s;
	}
	
	.slide-leave {
		animation: slide-out .6s;
	}
	
	@keyframes slide-in {
		0% {
			transform: translateX(10000px);
		}
		20% {
			transform: translateX(2000px);
		}
		,
		40% {
			transform: translateX(600px);
		}
		,
		60% {
			transform: translateX(300px);
		}
		,
		80% {
			transform: translateX(100px);
		},
		100% {
			transform: translateX(0px);
		}
	}
	
	@keyframes slide-out {
		0% {
			transform: translateX(0px);
		}
		100% {
			transform: translateX(-10000px);
		}
	}
</style>