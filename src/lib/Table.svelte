<script lang="ts">
	export let tableConfig = {}; // TODO: type this
	export let tableContent = []; //TODO: type this
</script>

<table>
	<thead>
		<tr>
			{#each Object.keys(tableConfig) as header_key}
				<th>{tableConfig[header_key].title}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each tableContent as row, i}
			<tr>
				{#each Object.keys(tableConfig) as key}
					<td>{row[key]}</td>
					<!-- TODO: Allow for slotting in custom styling for the single row cells -->
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<!-- TODO: Allow for pagination -->
