<template>
	<h1>{{elementoOrcamentario}}</h1>
	<hr>
	<div class="mdl-grid siop-dashboard">
		<div class="mdl-cell mdl-cell--8-col mdl-card mdl-shadow--2dp">
			<div class="mdl-card__title siop-dashboard__cabecalho">
				<div class="siop-dashboard siop-dashboard__codigo">{{codigoElementoOrcamentario}}</div>
				<div class="siop-dashboard siop-dashboard__titulo">{{tituloElementoOrcamentario}}</div>
			</div>
			<div class="mdl-card__actions mdl-card--border">
				<div class="mdl-card__title siop-dashboard__elemento">
					<slot name="siop-dashboard-elemento-content"></slot>			
				</div>
			</div>
		</div>
		<slot></slot>	
	</div>
</template>

<script>
export default {
	props: ["elemento-orcamentario", "codigo-elemento-orcamentario", "titulo-elemento-orcamentario"],
	created: function() {
		console.log("criou Dashboard")
	}
}
</script>

<style>
.siop-dashboard__cabecalho {
}
.siop-dashboard__codigo {
	font-weight: bolder;
	font-size: 30pt;
	color: #444444;
}
.siop-dashboard__titulo {
	padding-left: 10pt;
	font-weight: lighter;
	font-size: 12pt;
	text-transform: uppercase;
	text-align: justify;
}
.siop-dashboard__elemento {
	display: table-row;
}
</style>