<template>
	<card titulo="Execução Orçamentária">

    <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div class="mdl-tabs__tab-bar">
        <a href="#card_execucao_grafico" class="mdl-tabs__tab is-active">Gráfico</a>
        <a href="#card_execucao_tabela" class="mdl-tabs__tab">Tabela</a>
        <div class="mdl-layout-spacer"></div>
      </div>
      <div class="mdl-tabs__panel is-active" id="card_execucao_grafico"></div>
      <div class="mdl-tabs__panel" id="card_execucao_tabela">
        <siop-table :colunas="colunas" :linhas="linhas">
        </siop-table>
      </div>
    </div>

  </card>
</template>
<script>

import Card from './Card'
import SiopTable from './../tabela/SiopTable'
export default {
  components: { Card, SiopTable },
  props: ["colunas", "linhas"],
  methods: {
    
    drawChart: function() {
      var data = new google.visualization.DataTable();
      var col;
      for(col in this.colunas) {
        data.addColumn(col == 0 ? "string" : "number", this.colunas[col]);
      }
      data.addRows(this.linhas);
    
      var options = {
        chart: {
          title: 'Série Histórica da Execução Orçamentária',
          subtitle: 'em milhões de reais (R$)'
        },
        width: '70%',
        //height: 200
      };

      var chart = new google.charts.Line(document.getElementById('card_execucao_grafico'));
      chart.draw(data, options);
    },

    drawChart2: function() {
       var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

      var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

      var chart = new google.charts.AreaChart(document.getElementById('card_execucao_grafico'));
      chart.draw(data, options);
    }

  },

  created: function() {
      //google.charts.load('current', {'packages':['line']});      
      //google.charts.setOnLoadCallback(this.drawChart);
      google.charts.load('current', {'packages':['line', 'corechart']});
      google.charts.setOnLoadCallback(this.drawChart);

      console.log('criou CardExecucaoOrcamentaria');
  }
}
	
</script>