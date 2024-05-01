<script lang="ts">
	import Select from './Select.svelte';
	import './style.css';
	import type { TableConfig, TableContent, SelectOptions } from './types.ts';

	export let tableConfig: TableConfig = {};
	export let tableContent: TableContent = [];
	export let footer: boolean = false;

	let pageSize = 20;
	let currentPage = 1;

	let sizeOptions: SelectOptions = [
		{ value: 10, title: '10' },
		{ value: 20, title: '20' },
		{ value: 50, title: '50' },
		{ value: 100, title: '100' }
	];

	let rows: TableContent = []; // Variable to hold the actually visible rows, without modifying the tableContent that is pased in

	// DEBUG/DEV
	tableConfig = { a: { title: 'Test1', type: 'string' }, b: { title: 'Test2', type: 'number' } };

	tableContent = [
		{ a: 'a', b: 1 },
		{ a: 'aaa', b: 1 },
		{ a: 'assss', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'azz', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 199 },
		{ a: 'ajfjfjfj', b: 13 },
		{ a: 'ajfjfjfj', b: 13 },
		{ a: 'ajfjfjfj', b: 13, c: 3 },
		{ a: 'a', b: 1 },
		{ a: 'azz', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 1 },
		{ a: 'a', b: 199 },
		{ a: 'ajfjfjfj', b: 13 },
		{ a: 'ajfjfjfj', b: 13 },
		{ a: 'ajfjfjfj', b: 13 }
	];

	function paginate() {
		rows = tableContent.slice(currentPage * pageSize - pageSize, pageSize * currentPage);
	}

	function nextPage() {
		currentPage =
			currentPage < Math.ceil(tableContent.length / pageSize) ? currentPage + 1 : currentPage;
		paginate();
	}

	function previousPage() {
		currentPage = currentPage <= 1 ? currentPage : currentPage - 1;
		paginate();
	}

	$: tableContent, paginate();
	$: pageSize, paginate();
</script>

<div class="flex flex-col">
	<table class="table-auto border-collapse w-full">
		<thead class="border-b border-gray">
			<tr>
				{#each Object.keys(tableConfig) as header_key}
					<th class="text-left pb-1.5 pl-2 text-sm">{tableConfig[header_key].title}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row, i}
				<tr class="border-b border-gray text-sm hover:bg-gray/15">
					{#each Object.keys(tableConfig) as key}
						<td class="py-1.5 pl-2">
							{#if $$slots.row}
								<slot name="row" />
							{:else}
								{row[key]}
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
		{#if footer}
			<tfoot class="bg-gray/30">
				<tr>
					{#each Object.keys(tableConfig) as key}
						<th class="text-left text-sm py-1 pl-2">
							{#if $$slots.footer}
								<slot class="py-1 pl-2" name="footer" />
							{:else}
								a
							{/if}
						</th>
					{/each}
				</tr>
			</tfoot>
		{/if}
	</table>

	<div class="relative w-full mt-3">
		<div class="absolute flex left-2 text-xs items-center">
			Rows per page: <Select class="ml-2" value={pageSize} options={sizeOptions} />
		</div>
		<div class="absolute flex right-2 flex-row text-xs items-center">
			<button on:click={previousPage}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M15 6l-6 6l6 6" />
				</svg>
			</button>
			<span>Page {currentPage} of {Math.ceil(tableContent.length / pageSize)}</span>
			<button on:click={nextPage}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" />
				</svg>
			</button>
		</div>
	</div>
</div>
