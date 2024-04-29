<script lang="ts">
	import Select from './Select.svelte';
	import './style.css';
	import type { TableConfig, TableContent, SelectOptions } from './types.ts';

	export let tableConfig: TableConfig = {};
	export let tableContent: TableContent = [];

	let pageSize = 20;

	let sizeOptions: SelectOptions = [
		{ value: 10, title: '10' },
		{ value: 20, title: '20' },
		{ value: 50, title: '50' },
		{ value: 100, title: '100' }
	];

	// DEBUG/DEV
	tableConfig = { a: { title: 'Test1', type: 'string' }, b: { title: 'Test2', type: 'number' } };

	tableContent = [
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 }
	];
</script>

<div class="flex flex-col">
	<table class="table-auto border-collapse w-full">
		<thead class="border-b border-gray">
			<tr>
				{#each Object.keys(tableConfig) as header_key}
					<th class="text-left pb-1.5 pl-2">{tableConfig[header_key].title}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each tableContent as row, i}
				<tr class="border-b border-gray text-medium">
					{#each Object.keys(tableConfig) as key}
						{#if $$slots.row}
							<slot class="py-1.5 pl-2" name="row" />
						{:else}
							<td class="py-1.5 pl-2">{row[key]}</td>
						{/if}
						<!-- TODO: Allow for slotting in custom styling for the single row cells -->
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>

	<!-- TODO: Allow for pagination -->
	<div class="w-full mt-2">
		<div>
			Rows per page: <Select value={pageSize} options={sizeOptions} />
		</div>
	</div>
</div>
