<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>

  <siop-table :colunas="execucaoOrcamentaria.colunas" :linhas="execucaoOrcamentaria.linhas">
  </siop-table>
  
</template>

<script>
import SiopTable from './tabela/SiopTable';
export default {
  components: {
    SiopTable
  },
  data () {  	
    return {
        msg:null,
        execucaoOrcamentaria: null
      }
  },
  created: function() {
  	this.$http.get('static/acao.json').then(
  		function(response) {
        console.log(response.data)
  			this.msg = response.data.acao
        this.execucaoOrcamentaria = response.data.execucaoOrcamentaria
  		},
  		function(response) {
        console.log('erro ao obter: ' + response.url)
  			this.msg = response.status	
  		});
  	console.log('criou Hello')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
