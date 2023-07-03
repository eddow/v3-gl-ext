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
	<golden-layout :config="layoutConfig">
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

### TODOs

- [ ] Describe default layout config in the template
- [ ] Config watching through property
- [ ] Dynamic v-node manipulations through the template and no more `add-component` `remove-component`
- [ ] Router through tabs