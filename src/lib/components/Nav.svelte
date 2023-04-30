<script>
	import Logo from '$lib/assets/Logo.svg'
</script>

<header class="pb-8">
	<div class="flex justify-between items-center">
		<div class="flex flex-row items-center justify-center">
			<img src={Logo} alt="logo" />
			<h1 class="text-center font-medium">PyroPro</h1>
		</div>

		<nav>
			<li class="list-none flex flex-row">
				<ul class="px-2">
					<a href="/">Home</a>
				</ul>
				<ul class="px-2">
					<a href="/safety-tips">Safety Tips</a>
				</ul>
				<ul class="px-2">
					<a href="/features">Features</a>
				</ul>
				<ul class="px-2">
					<a href="/about-us">About Us</a>
				</ul>
				<ul class="px-2">
					<a href="/contact-us">Contact Us</a>
				</ul>
			</li>
		</nav>

		<div>
			<a href="/register" class='uppercase'>Register</a>
		</div>
	</div>
</header>
