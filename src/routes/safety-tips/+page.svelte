<script>
	export let data
	const { contents } = data
</script>

<div class="text-center mx-8">
	<h1 class="font-medium text-2xl">
		Safety Starts with You: <br />
		Tips to Stay Alert and Stay Safe
	</h1>
</div>

<div>
	<ul class="pt-10">
		{#each contents as content}
			{#if content.id % 2}
				<li class="flex flex-row justify-evenly border-b py-10">
					<div class="w-80">
						<h1 class="text-xl font-medium">{content.title}</h1>
						<p class="pt-4 pb-10 font-light">{content.content}</p>
					</div>
					<div class="flex items-center">
						<img src={content.image} alt={content.title} width="150" height="150" />
					</div>
				</li>
			{:else}
				<li class="flex flex-row justify-evenly border-b py-10">
					<div class='flex items-center'>
						<img src={content.image} alt={content.title} width="150" height="150"/>
					</div>
					<div class="w-80">
						<h1 class="text-xl font-medium">{content.title}</h1>
						<p class="pt-4 pb-10 font-light">{content.content}</p>
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</div>
