<template>
	<nav>
		<router-link to="/" v-on:click.native
		="scrollTop">
			<img class="logo" src="../assets/rethinq.svg">
		</router-link>
		<button class="callout">Let's Get Started</button>
	</nav>
</template>

<script>
	import smoothScroll from 'smooth-scroll';

	export default {
	  name: 'Navigation',
	  methods: {
	  	scrollTop() {
	  		smoothScroll.animateScroll(0);
	  	},
	  },
	};
</script>

<style scoped>
	@import 'styles/variables.css';

	nav {
		position: fixed;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		top: 0; left: 0; right: 0;
		height: var(--header-height);
		background-color: white;
	}

	.logo {
		width: 200px;
		height: 100%;
	}

	.callout {
		background-color: transparent;
		border: 2px solid var(--brand-red);
		color: var(--brand-red);
		text-transform: uppercase;
		font-weight: 500;
		padding: 1em;
		outline: none;
		cursor: pointer;

	}
</style>
