<script lang="ts">
	import './style.css';

	export let type: string = 'text';
	export let value: string = '';
	export let placeholder: string = 'placeholder';
</script>

<input
	class="p-1 border border-gray rounded focus:outline-none focus:border-b-2 focus:border-b-primary transition duration-300 ease-linear"
	{type}
	{value}
	{placeholder}
/>
