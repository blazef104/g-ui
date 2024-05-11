<script>
	import Input from '$lib/Input.svelte';
	import Select from '$lib/Select.svelte';
	import Table from '$lib/Table.svelte';
	import Button from '../lib/Button.svelte';
	import Badge from '../lib/Badge.svelte';
	import Modal from '$lib/Modal.svelte';
	import Toaster from '$lib/Toaster.svelte';

	let modalVisible = false;

	let toasts = [];

	function addToast(message, severity) {
		toasts.push({ message: message, severity: severity });
		console.log(toasts);
		toasts = toasts;
	}
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<!-- TEST -->
<div style="margin-left: 0.2rem;">
	<Button severity="primary" on:click={() => (modalVisible = true)}>Modal</Button>
	<Button
		severity="warning"
		on:click={() => {
			addToast('test', 'warning');
			addToast('test', 'danger');
			addToast('test', 'success');
			addToast('test', 'primary');
		}}
	>
		Add Toast
	</Button>
	<Button severity="danger">Test</Button>
	<Button severity="success">Test</Button>
	<Button style="basic" severity="primary">Test</Button>
	<Button style="basic" severity="warning">Test</Button>
	<Button style="basic" severity="danger">Test</Button>
	<Button style="basic" severity="success">Test</Button>
	<Button style="empty">Test</Button>
	<Input></Input>
	<Select placeholder="Select an option"></Select>
	<Badge text="Low"></Badge>
	<Badge text="Medium" severity="medium"></Badge>
	<Badge text="High" severity="high"></Badge>
	<Badge text="Primary" severity="primary"></Badge>
	<Badge text="High" severity="high"></Badge>
</div>
<Table footer={true}></Table>

{#if modalVisible}
	<Modal on:close={() => (modalVisible = false)}>
		<div slot="content">Test content</div>
		<div slot="controls">
			<Button severity="primary">Test</Button>
		</div>
	</Modal>
{/if}

<Toaster {toasts}></Toaster>
