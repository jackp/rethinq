<template>
	<article>
		<div class='hero'>
			<h1>We help companies develop people, streamline processes, and build scalable software.</h1>
			<a data-scroll href="#who-we-are" class='button'>Learn More</a>
		</div>

		<section id="who-we-are">
			<h2>Who we are</h2>
			<div class="container">
				<img src="../assets/network.svg">
				<h3>RETHINQ is a network of technologists, who love solving problems and mentoring others.</h3>
				<p>We pride ourselves on having a wide range or experiences, both professional and personal, which allow us to provide unique insights into your product and business.</p>
				<p>Depending on your needs, we'll put together a team expert in your current (or desired) technology stack, integrate with your organization to share knowledge while accomplishing short-term product goals, all while analyzing and preparing a long-term growth strategy.</p>
			</div>
			<a data-scroll href="#what-we-do" class="next"><img src="../assets/next.svg"></a>
		</section>

		<section id="what-we-do">
			<h2>What we love to do</h2>
			<div class="container">
				<p>Our projects are as varied as your business problems, but we incorporate the following philosophies into everything we do:</p>

				<div class="philosophy">
					<img src="../assets/simplify.svg">
					<h3>Simplify Everything</h3>
					<p>Development cycle moving slower than you'd like? Do small changes consistently grow into large, unmanageable issues? Ever feel like you are just "fighting the system"?</p>
					<p>You most likely have complexity problems.</p>
					<p>At RETHINQ, we are obsessed with the #1 rule of software development, Keep it Simple (Stupid)!</p>
					<p>We'll help critique your development process, analyze your codebase for refactoring opportunities, and focus on simplying your application so you can focus on adding the most value to your product.</p>
				</div>

				<div class="philosophy">
					<img src="../assets/simplify.svg">
					<h3>Invest in your team</h3>
					<p>Great companies succeed because of great people. Your product's long-term success depends upon the ability for your team to continuously be improving and being able to adapt to whatever gets thrown your way.</p>
				</div>
			</div>
		</section>

<!-- 		<section>

			<p>Our projects are as varied as your business problems, but we incorporate the following philosophies into everything we do:</p>
			<div class="philosophies">
				<div class="philosophy">
					<h3>Simplify Everything</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolores consequuntur neque tempore, molestias excepturi laborum voluptatum illo ipsa cupiditate dicta laboriosam maiores quam suscipit officia quisquam quasi amet repellendus.</p>
				</div>
				<div class="philosophy">
					<h3>Invest in your team, current and future</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nulla ullam excepturi quod maxime assumenda voluptas, esse eius temporibus atque, blanditiis saepe praesentium ipsam odit exercitationem veniam hic explicabo tempora.</p>
				</div>
				<div class="philosophy">
					<h3>Provide a path ready for growth</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa necessitatibus harum, doloremque nostrum, laboriosam facere eum consectetur aspernatur quia maiores id. Accusamus totam voluptatibus voluptatem accusantium hic in, distinctio minus?</p>
				</div>
			</div>
		</section>

		<section>
			<h2>How we can help</h2>

		</section> -->
	</article>
</template>

<script>
	import smoothScroll from 'smooth-scroll';

	export default {
		name: 'Home',
		mounted() {
			smoothScroll.init();
		},
	}
</script>

<style scoped>
	@import 'styles/variables.css';

	.hero {
		@apply --container;
		padding-bottom: var(--header-height);
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.button {
		background-color: transparent;
		border: 2px solid var(--brand-red);
		color: var(--brand-red);
		text-transform: uppercase;
		padding: 0.5rem 1rem;
		font-weight: 500;
		outline: none;
		cursor: pointer;
		text-decoration: none;
	}

	section {
		@apply --container;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		padding-top: var(--header-height);

		& h2 {
			text-align: center;
			text-transform: uppercase;

			&:before, &:after {
				font-size: 1.25em;
				color: var(--brand-red);
			}
			&:before {
				content: "\007B";
				padding-right: 0.25em;
			}
			&:after {
				content: "\007D";
				padding-left: 0.25em;
			}
		}

		& .container {
			display: flex;
			flex-direction: column;
			align-items: center;

			& img {
				width: 10em;
				height: 10em;
			}

			& p {
				font-size: 1.2em;
				width: 61.8%;
			}
		}

		& .next {
			margin-top: 2em;
			width: 2em;
			height: 2em;
		}

		& .philosophy {
			& img { float: left; }
		}
	}

</style>
