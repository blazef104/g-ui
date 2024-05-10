<script lang="ts">
	import './style.css';
	import type { SelectOptions } from './types.js';

	export let options: SelectOptions = [];
	export let value: string | number = '';
	export let placeholder: string | number | undefined = undefined;
</script>

<select
	class={`p-1.5 border border-gray rounded focus:outline-none focus:border-b-2 focus:border-b-primary transition duration-400 ease-linear ${$$props.class ? $$props.class : ''}`}
	{value}
>
	{#if placeholder}
		<option value="" disabled>{placeholder}</option>
	{/if}

	{#each options as option}
		<option value={option.value}>{option.title}</option>
	{/each}
</select>
