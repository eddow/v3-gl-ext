# v3-gl-ext

Vue3 golden layout and extensions - successor of [vue-golden-layout](https://github.com/emedware/vue-golden-layout)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Usage

```html
<template>
	<golden-layout :router="true" :config="layoutConfig">
		<template #myTemplate>
			...
		</template>
	</golden-layout>
</template>
<script lang="ts">
	import { GoldenLayout } from "v3-gl-ext";
	const layoutconfig = {
		root: {
			type: "component",
			title: "One tab",
			header: { show: "top" },
			isClosable: false,
			componentType: "myTemplate"
		}
	};
</script>
```

### Properties

If `router` is true, every route change will either open a new tab or select the good one if already opened. Also, the url changes with tab change.

## TODOs

- [ ] Config watching through property
- [ ] Route sub-components
- [ ] Route whole config (adds in the column/row instead of the stack)