<template>
	<table class="mdl-data-table mdl-js-data-table mdl-shadow--1dp">
		<thead>
			<th v-for="coluna in colunas">{{coluna}}</th>
		</thead>
		<tbody>
			<tr v-for="linha in linhas">
				<td v-for="celula in linha">{{celula}}</td>
			</tr>	
		</tbody>
	</table>
</template>

<script>
export default {
	props: ['colunas', 'linhas'],
	created: function() {
		console.log(this._props.colunas)
	}
}
</script>