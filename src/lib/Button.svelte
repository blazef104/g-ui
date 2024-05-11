<script lang="ts">
	import './style.css';
	export let style: 'filled' | 'basic' | 'empty' = 'filled';
	export let severity: 'primary' | 'warning' | 'danger' | 'success' = 'primary';
</script>

<button
	class="rounded py-1.5 px-4 hover:underline font-medium"
	class:filled={style == 'filled'}
	class:text-white={style == 'filled' && (severity == 'primary' || severity == 'danger')}
	class:empty={style == 'empty'}
	class:setColors={style == 'basic'}
	on:click
	data-type={severity}
>
	<slot />
</button>

<style>
	@supports (color: color-mix(in oklch, red 0%, white)) {
		.setColorsDark {
			background: color-mix(in oklch, var(--color) 50%, oklch(0% 0 0 / 50%));
			color: color-mix(in oklch, var(--color) 50%, oklch(100% 0 0));
		}
		.setColors {
			background: color-mix(in oklch, var(--color) 25%, oklch(100% 0 0 / 50%));
			color: color-mix(in oklch, var(--color) 100%, oklch(100% 0 0));
		}
	}

	/* @supports (color: rgb(from white r g b)) {
		.setColorsDark1 {
			border-color: oklch(from var(--color) l c h / 0.25);
			background: oklch(from var(--color) calc(l * 0.75) c h / 0.5);
			color: oklch(from var(--color) calc(l * 1.5) c h);
		}

		.setColors1 {
			border-color: oklch(from var(--color) l c h / 25%);
			background: oklch(from var(--color) calc(l * 1) c h / 20%);
			color: oklch(from var(--color) calc(l * 1) c h);
		}
	} */

	.empty {
		color: var(--color);
	}

	.filled {
		background-color: var(--color);
	}

	[data-type='primary'] {
		--color: oklch(56.01% 0.157 249.803);
	}
	[data-type='danger'] {
		--color: oklch(52.04% 0.187 28.92);
	}
	[data-type='warning'] {
		--color: oklch(85.1% 0.171 87.01);
	}
	[data-type='success'] {
		--color: oklch(72.44% 0.126 186.864);
	}
</style>
