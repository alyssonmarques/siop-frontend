<template>
    <div>
        <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
            <div class="mdl-tabs__tab-bar">
                <a v-for="tab in tabs" href="#{{tab.id}}" class="mdl-tabs__tab" v-bind:class="$index == 0 ? 'is-active' : ''">{{tab.label}}</a>
                <div class="mdl-layout-spacer"></div>
            </div>
            <slot></slot>            
        </div>
    </div>
</template>

<script>
    export default {
        props: ['tabs'],
        created: function() {
        }
    }
</script>