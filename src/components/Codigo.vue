<template>
    <pre class="siop-demo__codigo">
        <slot></slot>
	</pre>
</template>

<style>
    .siop-demo__codigo {
		background-color: #F0F0F0;
		font-family: 'Courier';
		overflow:auto;
		height: 200px;
		border: 2pt solid #CECECE;
	}
</style>