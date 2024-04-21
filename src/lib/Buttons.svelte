<script lang="ts">
	import './style.css';
	export let style: 'primary' | 'secondary' | 'empty' = 'primary';
</script>

<button class="rounded py-1.5 px-2 hover:underline bg-slate-600">
	<slot />
</button>
