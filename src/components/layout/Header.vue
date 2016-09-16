<template>

	<header class="mdl-layout__header siop-layout__header">
		<!-- Top row, always visible -->
		<div class="mdl-layout__header-row">
			<!-- Title -->
			<span class="mdl-layout-title">{{title}}</span>
			<div class="mdl-layout-spacer"></div>
			<!-- Expandable Textfield -->
			<form action="#">
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
					<label class="mdl-button mdl-js-button mdl-button--icon" for="sample6"> <i class="material-icons md-48">search</i> </label>
					<div class="mdl-textfield__expandable-holder">
						<input class="mdl-textfield__input" type="text" id="sample6">
						<label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
					</div>
				</div>
			</form>
			<!-- Navigation -->
			<nav class="mdl-navigation mdl-layout--large-screen-only">
				<a class="mdl-navigation__link" href="">Manuais</a>
				<a class="mdl-navigation__link" href="">Configurações</a>
				<div class="material-icons mdl-badge mdl-badge--overlap" data-badge="7">account_box</div>
				<a class="mdl-navigation__link" href="">Sair</a>
			</nav>
		</div>
	</header>
</template>

<script>
    export default {
    	props: ["title"],
        created: function() {
			console.log('Header.title = ' + this._props.title.raw)
		}
    }
</script>

<style>
.siop-layout__header {
	background-color: #FFFFFF;
}
</style>
