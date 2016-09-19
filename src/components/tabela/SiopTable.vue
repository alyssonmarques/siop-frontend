<template>
	<table class="mdl-data-table mdl-js-data-table mdl-shadow--1dp siop-table" v-bind:class="this.selecionavel ? 'mdl-data-table--selectable' : ''">
		<thead>
			<tr>
				<th v-for="coluna in colunas" 
					class="fullwidth"
					v-bind:class="coluna.numero ? '' : 'mdl-data-table__cell--non-numeric'">{{coluna.nome}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="linha in linhas">
				<td 
					v-for="celula in linha" 
					v-on:click="selecionar(linha)"
					v-bind:class="colunas[$index].numero ? '' : 'mdl-data-table__cell--non-numeric'">{{celula}}</td>
			</tr>	
		</tbody>
	</table>
</template>

<script>
export default {
	props: ['colunas', 'linhas', 'metodoSelecionarLinha', 'selecionavel'],
	methods: {
		selecionar: function(linha) {
			this.$emit(this.metodoSelecionarLinha(linha))
		}
	},
	created: function() {
		//alert(this.selecionavel);
	}
}
</script>

<style>
	.siop-table {
		width: 100%;
	}
</style>