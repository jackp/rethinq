<template>
	<div id="app">
		<navigation></navigation>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
	import Navigation from 'components/Navigation';
	import "normalize.css";
	import "styles/global.css";

	export default {
		name: 'App',
		components: {
			Navigation,
		},
	}
</script>

<style scoped>
	#app {
		height: 100%;
	}
</style>
