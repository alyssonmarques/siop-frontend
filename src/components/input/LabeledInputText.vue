<template>
    <!--
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <label class="mdl-textfield__input" for="{{id}}">{{ label }}:</label>
        <input class="mdl-textfield__label" type="text" id="{{id}}" :value="value">
    </div>
    -->
    <div class="siop-input">
        <label class="siop-input siop-input_label" for="{{id}}">{{ label }}:</label>
        <input class="siop-input siop-input_field" type="text" id="{{id}}" :value="value">
    </div>
</template>

<script>
    export default {
        props: ['id', 'label', 'value']
    }
</script>

<style>
    .siop-input {
        padding: 0px;
        border-bottom: 1px solid #ccc;
    }
    .siop-input * {
        padding:0px;
        border: none;
    }
    .siop-input_label {
        display: block;
        font-weight: bolder;
        color: #888;
    }
    .siop-input_field {
        width: 100%;
    }
</style>