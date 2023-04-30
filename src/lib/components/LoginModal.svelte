<script>
	import { isModalOpen } from '$lib/stores/ModalStore'
	import Logo from '$lib/assets/Logo.svg'
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm">
	<div class="shadow-lg p-10 bg-gray-100 rounded-xl relative max-w-lg opacity-95">
		<button
			class="absolute top-2 right-3 text-4xl hover:translate-y-0.5 transition-transform"
			on:click={() => isModalOpen.set(false)}>&times;</button
		>
		<div class="flex flex-row items-center justify-center">
			<img src={Logo} alt="logo" />
			<h1 class="text-center pt-4 font-medium">PyroPro</h1>
		</div>
		<div class="pt-8">
			<label class="text-xs" for="emailaddress">Email Address</label>
			<input
				type="text"
				name="emailaddress"
				placeholder="Email Address"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div class="pt-4">
			<label class="text-xs" for="password">Password</label>
			<input
				type="password"
				name="password"
				placeholder="••••••••"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>

		<div class="flex justify-end pr-4 pt-8 pb-4 text-sm">
			<a href="#">Forgot Password?</a>
		</div>

		<div class="flex justify-center">
			<button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border rounded-xl w-72"
				>Login</button
			>
		</div>

		<p class="text-center text-sm pt-8">
			Don't have an Account? <a
				class="hover:text-blue-700"
				href="/register"
				on:click={() => isModalOpen.set(false)}>Register Here</a
			>
		</p>
	</div>
</div>
