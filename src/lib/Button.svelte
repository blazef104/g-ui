<script lang="ts">
	import './style.css';
	export let style: 'filled' | 'basic' | 'empty' = 'filled';
	export let severity: 'primary' | 'warning' | 'danger' | 'success' = 'primary';
</script>

<button
	class={`rounded py-1.5 px-3 hover:underline font-medium ${style == 'basic' ? (severity == 'primary' ? 'bg-primary/30' : severity == 'warning' ? 'bg-warning/30' : severity == 'danger' ? 'bg-danger/30' : severity == 'success' ? 'bg-success/30' : '') : ''}`}
	class:bg-primary={style == 'filled' && severity == 'primary'}
	class:bg-warning={style == 'filled' && severity == 'warning'}
	class:bg-danger={style == 'filled' && severity == 'danger'}
	class:bg-success={style == 'filled' && severity == 'success'}
	class:text-primary={style != 'filled' && severity == 'primary'}
	class:text-warning={style != 'filled' && severity == 'warning'}
	class:text-danger={style != 'filled' && severity == 'danger'}
	class:text-success={style != 'filled' && severity == 'success'}
>
	<slot />
</button>
