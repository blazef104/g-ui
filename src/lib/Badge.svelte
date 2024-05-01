<script lang="ts">
	import './style.css';
	export let size: 'small' | 'large' = 'small';
	export let text: string = '';
	export let severity: 'high' | 'medium' | 'low' | 'primary' = 'low';
</script>

<span
	class={`${$$props.class} font-semibold text-black rounded`}
	class:p-1={size == 'small'}
	class:px-2={size == 'small'}
	class:text-xs={size == 'small'}
	class:bg-success={severity == 'low'}
	class:bg-warning={severity == 'medium'}
	class:bg-danger={severity == 'high'}
	class:bg-primary={severity == 'primary'}
	class:text-white={severity == 'high' || severity == 'primary'}
>
	{text}
</span>
