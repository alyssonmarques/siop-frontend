<template>
	<div class="mdl-card mdl-shadow--2dp siop-card">
		<div class="mdl-card__title siop-card__cabecalho">
			<h2 class="mdl-card__title-text">{{titulo}}</h2>
		</div>
		<div class="mdl-card__supporting-text siop-card__supporting-text">
			<slot></slot>
		</div>
		<div class="mdl-card__actions mdl-card--border siop-card__actions">
			<slot name="actions"></slot>
		</div>
		<div class="mdl-card__menu">
			<slot name="menu"></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: ['titulo']
}
	
</script>

<style>
.siop-card {
	/* table-cell; 
	display: table-cell;
	width: 100%;
	*/
}
.siop-card__cabecalho {

	/*
	background-color: rgb(2,85,122);
	color:#AADDFF;
	*/
}
.siop-card__supporting-text {

	/* background-color: #FFFFFF; */
}
</style>