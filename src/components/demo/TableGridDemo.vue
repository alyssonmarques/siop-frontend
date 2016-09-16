<template>
    <siop-table-grid :colunas="colunas" :linhas="linhas">

    </siop-table-grid>
</template>

<script>
    import SiopTableGrid from './../tabela/TableGrid'
    export default {
        components: {
            SiopTableGrid
        },
        data() {
            return {
                colunas: ['Nome', 'Telefone'],
                linhas: [
                    ['Zaca', '61 91234-0001'],
                    ['Zeca', '61 91234-0002'],
                    ['Zica', '61 91234-0003'],
                    ['Zoca', '61 91234-0004']
                ]	
		    }
	    }
    }
</script>