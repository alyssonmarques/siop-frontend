<template>
	<table class="mdl-data-table mdl-js-data-table mdl-shadow--1dp siop-table">
		<thead>
			<th v-for="coluna in colunas">{{coluna}}</th>
		</thead>
		<tbody>
			<tr v-for="linha in linhas">
				<td v-for="celula in linha" v-on:click="selecionar(linha)">{{celula}}</td>
			</tr>	
		</tbody>
	</table>
</template>

<script>
export default {
	props: ['colunas', 'linhas', 'metodoSelecionarLinha'],
	methods: {
		selecionar: function(linha) {
			this.$emit(this.metodoSelecionarLinha(linha))
		}
	},
	created: function() {
		console.log(this._props.colunas)
	}
}
</script>

<style>
	.siop-table {
		width: 100%;
	}
</style>