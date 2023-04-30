<script>
	import '../app.css'
	import Nav from '../lib/components/Nav.svelte'
</script>

<svelte:head>
	<title>Flamprotech</title>
</svelte:head>

<Nav />
<main class="mx-28 pt-8">
	<slot />
</main>
