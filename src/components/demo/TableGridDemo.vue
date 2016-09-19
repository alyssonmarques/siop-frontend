<template>
    <siop-table-grid 
        nome-entidade="Pessoa"
        :colunas="colunas" :linhas="linhas" 
        :metodo-selecionar-linha="selecionarLinha" 
        :metodo-salvar="salvar">
        <div slot="formulario_cadastro">
            <form>
                <labeled-input-text id="_nome" label="Nome" :value="registro.nome"></labeled-input-text>
                <br>
                <labeled-input-text id="_telefone" label="Telefone" :value="registro.telefone"></labeled-input-text>
                <br>
                <labeled-input-text id="_idade" label="Idade" :value="registro.idade"></labeled-input-text>
            </form>
        </div>
    </siop-table-grid>
</template>

<script>
    import SiopTableGrid from './../tabela/TableGrid'
    import LabeledInputText from './../input/LabeledInputText'

    export default {
        components: {
            SiopTableGrid, LabeledInputText
        },
        data() {
            return {
                colunas: //['Nome', 'Telefone'],
                [
                    {
                        nome: 'Nome',
                        numero: false
                    },
                    {
                        nome: 'Telefone',
                        numero: false
                    }, 
                    {
                        nome: 'Idade',
                        numero: true
                    }
                ]
                ,
                linhas: [
                    {
                        nome : 'Zeca',
                        telefone: '61 91234-0001',
                        idade: 35
                    },
                    {
                        nome : 'João',
                        telefone: '61 91234-0002',
                        idade: 40
                    },
                    {
                        nome : 'Albeneir',
                        telefone: '61 91234-0003',
                        idade: 37
                    },
                ],
                registro : null	
		    }
	    },
        methods: {
            salvar: function() {
                alert('tableGridDemo.salvar()')
                //console.log(SiopTableGrid.data());
            },
            selecionarLinha: function(linha) {
                this.registro = linha;
            }
        }
    }
</script>

<style>
</style>