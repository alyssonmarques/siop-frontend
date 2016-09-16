<template>
    <div>
        <demo titulo="Botão">
            <botao @click='metodoOnClick' label="Clique aqui!"></botao>
            <div slot="descricao">
                [Aqui vai a descrição do componente]
            </div>
            <code slot="codigo">
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
            </code>
        </demo>
    </div>
</template>

<script>
    import Demo from './Demo';
    import Botao from './../Botao';

    export default {
        components: {
            'demo': Demo,
            'botao': Botao
        },
        methods: {
            metodoOnClick: function() {
                alert('Botao.metodoOnClick() invocado!');
            }
        }
    }
</script>