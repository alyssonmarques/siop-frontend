<template>
    <div>
        <demo titulo="Botão">

            <mdl-tabs :selected.sync="selected">
                <mdl-tab tab="Descrição" :selected="true">
                    <div>
                        mdl-tabs e mdl-tab são componentes do plugin vue-mdl
                    </div>
                    <botao @click='metodoOnClick' label="Clique aqui!"></botao>
                </mdl-tab>

                <mdl-tab tab="Código">
                   <codigo>
                        < template>
                                < div>
                                    < botao @click='metodoOnClick' label="Clique aqui!"> < /botao >
                                < /div>
                            < /template>

                            < script>
                                import Botao from './../Botao';
                                export default {
                                    components: {
                                        'botao': Botao
                                    },
                                    methods: {
                                        metodoOnClick: function() {
                                            alert('Botao.metodoOnClick() invocado!');
                                        }
                                    }
                                }
                            < /script>
                    </codigo>
                </mdl-tab>
            </mdl-tabs>

        </demo>
    </div>
</template>

<script>
    import Demo from './Demo';
    import Codigo from './../Codigo';
    import Botao from './../Botao';
    import { MdlTabs, MdlTab } from 'vue-mdl'

    export default {
        components: { Demo, MdlTabs, MdlTab, Codigo, Botao },
        methods: {
            metodoOnClick: function() {
                alert('Botao.metodoOnClick() invocado!');
            }
        }
    }
</script>