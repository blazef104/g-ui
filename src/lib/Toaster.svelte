<script lang="ts">
	import Toast from './Toast.svelte';
	import type { ToastStack } from './types.ts';

	export let toasts: ToastStack = [
		{ severity: 'error', message: 'Error' },
		{ severity: 'info', message: 'Info' },
		{ severity: 'success', message: 'Success' },
		{ severity: 'warning', message: 'Warning' }
	]; // Convert to use a store
</script>

<div class="absolute right-2 bottom-2 space-y-2">
	{#each toasts as toast}
		<Toast type={toast.severity} message={toast.message}></Toast>
	{/each}
</div>
