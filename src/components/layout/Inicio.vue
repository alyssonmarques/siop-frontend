<template>
	<div class="mdl-grid">
		<card v-for="modulo in modulos" 
			:titulo="modulo.titulo">
			{{modulo.chamada}}
			<slot name="actions">{{modulo.rotuloBotao}}</slot>
		</card>
		<estudo></estudo>
	</div>
</template>

<script>
import Card from './../cards/Card.vue'
import Estudo from './../Estudo'
export default {
	components : {
		Card, Estudo
	},
	created: function() {
		console.log('criou Inicio')
	},
	data() {
		return {
			modulos: [
				{
					titulo: 'Acompanhamento Orçamentário',
					chamada: 'Aqui vai um texto convidando o usuário a clicar no cartão',
					rotuloBotao: ' Saiba Mais'
				},
				{
					titulo: 'Receitas',
					chamada: 'Aqui vai um texto convidando o usuário a cliasdasdcar no cartão',
					rotuloBotao: ' Clique Aqui '
				}
			]			
		}
	}
}
</script>