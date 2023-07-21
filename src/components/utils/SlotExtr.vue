<template>
	<i style="display: none;">Slots extraction</i>
</template>

<script setup lang="ts">
	import { getCurrentInstance, type Slots } from "vue";
	defineExpose({
		slots: <Slots>getCurrentInstance()?.slots
	});
</script>
