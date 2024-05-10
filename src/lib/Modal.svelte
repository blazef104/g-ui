<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import './style.css';

	export let title: string = 'Modal Title';

	let dispatch = createEventDispatcher();
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
	<!-- Modal container -->
	<div class="bg-white p-4 rounded shadow-xl dark:text-white">
		<!-- Modal content -->
		<div>
			<!-- Modal header -->
			<div class="flex justify-between items-center mb-4 space-x-8">
				<h2 class="text-lg font-semibold">{title}</h2>
				<!-- Close button -->
				<button
					class="focus:outline-none"
					on:click={() => {
						dispatch('close');
					}}
				>
					<svg
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.2"
							d="M6 18L18 6M6 6l12 12"
						>
						</path>
					</svg>
				</button>
			</div>
			<!-- Modal body -->
			<div class="py-1">
				<slot name="content" />
			</div>
			<!-- Modal footer (optional) -->
			{#if $$slots.controls}
				<div class="mt-6 flex justify-end">
					<slot name="controls" />
				</div>
			{/if}
		</div>
	</div>
</div>
