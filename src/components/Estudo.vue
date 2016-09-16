<template>
	<card titulo="Teste de botão">
		<botao label="Teste de Botão" @click="click"></botao>
	</card>
	
</template>
<script>
import Card from './cards/Card'
import Botao from './Botao'
export default {
	components: { Card, Botao },
	methods: {
		click : function() {
			alert('click() de Estudo')
		}
	}
}
</script>
