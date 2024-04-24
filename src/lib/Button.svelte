<script lang="ts">
	import './style.css';
	export let style: 'filled' | 'basic' | 'empty' = 'filled';
</script>

<button class="rounded py-1.5 px-2 hover:underline bg-slate-200 text-white">
	<slot />
</button>
