<template>
    <div>
        <div v-if="exibirCadastro" transition="slide" class="siop-table-grid-cadastro">
            <botao @click="voltar" label="Voltar"></botao>
            <div v-for="coluna in colunas">{{coluna}}: {{linhaSelecionada[$index]}}
            </div>
        </div>
        <siop-table v-if="exbirResultadoConsulta" :colunas="colunas" :linhas="linhas" :metodo-selecionar-linha="selecionarLinha" transition="slide" >
        </siop-table>
    </div>
</template>

<script>
    import SiopTable from './SiopTable'
    import Botao from './../Botao'

    export default {
        components: {
            SiopTable, Botao
        }, 
        props: ['colunas', 'linhas'],
        data() {
            return {
                exbirResultadoConsulta: true,
                exibirCadastro: false,
                linhaSelecionada: null
            }
        },
        methods: {
            selecionarLinha: function(linha) {
                this.exbirResultadoConsulta = false;
                this.exibirCadastro = true;
                this.linhaSelecionada = linha;
            },
            voltar: function() {
                this.exbirResultadoConsulta = true;
                this.exibirCadastro = false;
                this.linhaSelecionada = null;
            }
        }
    }
</script>

<style>
    .siop-table-grid-cadastro {
        background-color: #CECECE;
        width: 100%;
    }
</style>