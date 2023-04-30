<script>
	import DateTimeDisplay from '$lib/components/DateTimeDisplay.svelte'
</script>

<div class="text-center">
	<DateTimeDisplay />
	<div class="flex justify-center items-center pt-10">
		<div class="flex justify-center items-center rounded-full bg-[#04B30B] h-64 w-64">
			<h1 class="text-[80px] text-white">30°C</h1>
		</div>
	</div>
	<h1 class="pt-8 text-2xl font-medium">STATUS</h1>

	<div class="flex flex-row justify-around pt-4">
		<div class="flex flex-row">
			<div class="w-5 h-5 rounded-full bg-[#04B20B]" />
			<p class="pl-4">Normal</p>
		</div>
		<div class="flex flex-row">
			<div class="w-5 h-5 rounded-full bg-[#FFF500]" />
			<p class="pl-4">Warning</p>
		</div>
		<div class="flex flex-row">
			<div class="w-5 h-5 rounded-full bg-[#FF0000]" />
			<p class="pl-4">Danger</p>
		</div>
	</div>

	<div class="pt-10">
		<button class="shadow-md transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 px-4 py-2 rounded-lg">Mark as Safe</button>
		<p class="pt-3">You marked yourself as SAFE</p>
	</div>
</div>
