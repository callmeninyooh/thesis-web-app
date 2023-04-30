<script>
	import LoginModal from '$lib/components/LoginModal.svelte'
	import { isModalOpen } from '$lib/stores/ModalStore'
	import Logo from '$lib/assets/Logo.svg'
</script>

<div class="shadow-lg p-8">
	<div class="flex flex-row items-center justify-center">
			<img src={Logo} alt="logo" />
			<h1 class="text-center pt-4 font-medium">PyroPro</h1>
		</div>
	<div class="pt-8">
		<h1 class="font-medium text-lg">Create an Account</h1>
		<p class="pl-4 text-sm">It's quick and easy</p>
	</div>

	<div class="pt-8 px-4 grid grid-cols-2 gap-x-10 gap-y-3">
		<div>
			<label class="text-xs" for="lastname">Last Name</label>
			<input
				type="text"
				name="lastname"
				placeholder="Last Name"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="id">ID No.</label>
			<input
				type="text"
				name="id"
				placeholder="ID No."
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="firstname">First Name</label>
			<input
				type="text"
				name="firstname"
				placeholder="First Name"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="emailaddress">Email Address</label>
			<input
				type="text"
				name="emailaddress"
				placeholder="Email Address"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="middleinitial">Middle Initial (optional)</label>
			<input
				type="text"
				name="middleinitial"
				placeholder="Middle Initial"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="guardiancontactnum">Guardian Contact No.</label>
			<input
				type="text"
				name="guardiancontactnum"
				placeholder="+639xxxxxxxxx"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="contactnum">Contact No.</label>
			<input
				type="text"
				name="contactnum"
				placeholder="+639xxxxxxxxx"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="password">Password</label>
			<input
				type="password"
				name="password"
				placeholder="••••••••"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="department">Department</label>
			<input
				type="text"
				name="department"
				placeholder="Department"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
		<div>
			<label class="text-xs" for="confirmpass">Confirm Password</label>
			<input
				type="password"
				name="confirmpass"
				placeholder="••••••••"
				class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
	</div>

	<p class="text-sm text-center py-10">
		People who use our service may have uploaded your contact information to FLAMPROTECT. By
		clicking Sign Up, you agree to our Terms and Privacy Policy. You may receive SMS Notifications
		from us.
	</p>

	<div class="flex justify-center">
		<button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border rounded-xl w-72"
			>Sign Up</button
		>
	</div>

	<p class="text-center text-sm pt-4">
		Already have an Account? <button
			class="hover:text-blue-700"
			on:click={() => {
				isModalOpen.set(true)
			}}>Login Here</button
		>
	</p>
</div>

{#if $isModalOpen}
	<LoginModal />
{/if}
