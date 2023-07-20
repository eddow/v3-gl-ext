<template>
	<i style="display=none;">ExtractOneChild</i>
</template>
<script setup lang="ts">
import { getCurrentInstance, onMounted, onUpdated, VNode } from "vue";
	const inst = getCurrentInstance();
	//defineProps(['child']);
	const
		emit = defineEmits<{
			(e: 'update:child', child?: VNode): void;
		}>();
	function extractChild() {
		const children = inst?.slots.default?.();
		console.assert(children && children.length <= 1, 'ExtractOneChild has at most one child');
		emit('update:child', children?.[0]);
	}
	onUpdated(extractChild);
	onMounted(extractChild);
</script>