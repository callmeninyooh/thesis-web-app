<script>
	import { onMount } from 'svelte'

	let dateTime = new Date()
	$: date = dateTime.toLocaleDateString(undefined, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})

	$: time = dateTime.toLocaleTimeString(undefined, {
		hour: '2-digit',
		minute: '2-digit'
	})

	onMount(() => {
		const timerId = setInterval(() => {
			dateTime = new Date()
		}, 1000)
		return () => {
			clearInterval(timerId)
		}
	})
</script>

<div class="flex justify-start">
	<p class="tabular-nums">
		{date}, {time}
	</p>
</div>
