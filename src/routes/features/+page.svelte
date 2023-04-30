<script>
	import DateTimeDisplay from '$lib/components/DateTimeDisplay.svelte'
	import img from '$lib/assets/image-last.svg'
	export let data
	const { contents } = data
</script>

<DateTimeDisplay />

<h1 class="text-4xl text-center py-20 border-b">
	One individual is responsible for fire destruction. <br />
	Everyone is responsible for fire prevention.
</h1>

<div>
	<ul>
		{#each contents as content}
			{#if content.id % 2}
				<li class="flex flex-row item-center justify-around pt-14 text-sm">
					<div class="w-[400px]">
						<p class="py-10 font-light">{content.content}</p>
					</div>
					<div class="pr-8 flex">
						<img src={content.image} alt={content.alt} width="200" height="200" />
					</div>
				</li>
			{:else}
				<li class="flex flex-row item-center justify-around pt-14 text-sm">
					<div class="pl-8 flex">
						<img src={content.image} alt={content.alt} width="200" height="200" />
					</div>
					<div class="w-[400px]">
						<p class="py-10 font-light">{content.content}</p>
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</div>

<h2 class="text-center font-normal italic text-2xl pt-24 px-20">
	This website help you to keep safe wherever you are inside the University. BE SAFE UBIAN!
</h2>
<div class="flex justify-center pt-8">
	<img src={img} alt="img-10" width="700" height="400" />
</div>

<style>
	h1 {
		font-family: 'Zen Dots', cursive;
		background: conic-gradient(
			from 179.97deg at 50% 50%,
			#d82a54 -63.75deg,
			#f5d425 48.75deg,
			#d82a54 296.25deg,
			#f5d425 408.75deg
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;

		opacity: 0.9;
	}
</style>
