<template>
    <div id="{{id}}" class="mdl-tabs__panel">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: ['id'],
        ready: function() {
            var _tabs = this.$parent.$el.querySelectorAll('div .mdl-tabs__panel');
            if(_tabs.item(0).id == this.id) {
                _tabs.item(0).classList.push('is-active');
            }
        }
    }
</script>