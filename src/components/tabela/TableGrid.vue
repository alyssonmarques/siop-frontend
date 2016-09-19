<template>
    <div>
  
        <!-- Cadastro -->
        <div 
            v-if="exibirCadastro" 
            transition="default" class="siop-table-grid-cadastro">
            <div>
                <slot name="formulario_cadastro"></slot>
            </div>
            <hr>
            <div>
                <botao label="Salvar" v-on:click="salvar"></botao>
                <botao label="Voltar" v-on:click="voltar"></botao>
            </div>
        </div>
        <!-- Resultado da Consulta -->
        <siop-table v-if="exbirResultadoConsulta"
            :colunas="colunas" :linhas="linhas" 
            :metodo-selecionar-linha="selecionarLinha" 
            selecionavel="true"
            transition="default" >
        </siop-table>

    </div>
</template>

<script>
    import SiopTable from './SiopTable'
    import Card from './../cards/Card'
    import Botao from './../Botao'

    export default {
        components: {
            SiopTable, Card, Botao
        }, 
        props: ['nome-entidade', 'colunas', 'linhas', 'selecionavel', 'metodo-salvar', 'metodo-selecionar-linha'],
        propsData: {
            selecionavel: true
        },
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
                this.$emit(this.metodoSelecionarLinha(this.linhaSelecionada));
            },
            voltar: function() {
                this.exbirResultadoConsulta = true;
                this.exibirCadastro = false;
                this.linhaSelecionada = null;
            },
            salvar: function() {
                this.$emit(this.metodoSalvar())
            }
        }
    }
</script>

<style>
    .siop-table-grid-cadastro {
        position: absolute; 
        display: block;
        width: 100%;
    }
</style>