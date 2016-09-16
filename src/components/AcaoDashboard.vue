<template>
	<div>
		<dashboard 
			elemento-orcamentario="Ação Orçamentária" 
			:codigo-elemento-orcamentario="acao.acao" 
			:titulo-elemento-orcamentario="acao.titulo">
				<div slot="siop-dashboard-elemento-content">
					<div>Unidade Orçamentária: {{acao.unidadeOrcamentaria.codigo}} - {{acao.unidadeOrcamentaria.descricao}}</div>
				</div>
				<card-execucao-orcamentaria :colunas="acao.execucaoOrcamentaria.colunas" :linhas="acao.execucaoOrcamentaria.linhas">
				</card-execucao-orcamentaria>
		</dashboard>
	</div>
</template>

<script>
import Dashboard from './Dashboard.vue'
import CardExecucaoOrcamentaria from './cards/CardExecucaoOrcamentaria'

export default {
	data() {
		return {
			acao: null
		}
	},
	created: function() {
		this.$http.get('static/acao.json').then(
  		function(response) {
	        //console.log(response.data)
	  		this.acao = response.data
  		},
  		function(response) {
        	//console.log('erro ao obter: ' + response.url)
  			this.msg = response.status	
  		});
		console.log("criou AcaoDashboard");
	},
	components: { Dashboard, CardExecucaoOrcamentaria }
}
</script>