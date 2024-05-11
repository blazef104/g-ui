<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type: 'danger' | 'warning' | 'success' | 'primary' | undefined = 'primary';
	export let title: string = 'Title';
	export let message: string = 'Content';

	let dispatch = createEventDispatcher();
</script>

<div class="relative">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<aside
		class="flex flex-col rounded bg-white py-2 px-3 {$$props.class} shadow"
		class:border-t-2={type != undefined}
		class:border-danger={type == 'danger'}
		class:border-warning={type == 'warning'}
		class:border-success={type == 'success'}
		class:border-primary={type == 'primary'}
		on:click={() => {
			dispatch('close');
		}}
	>
		<div class="rounded space-x-2 flex flex-row">
			<slot name="icon" />

			<h2 class="font-semibold">{title}</h2>
		</div>
		<span>{message}</span>
	</aside>
</div>
