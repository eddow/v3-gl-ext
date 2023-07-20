<template>
	<i style="display: none;">GlComponent {{props.id}}</i>
</template>

<script setup lang="ts">
import { getCurrentInstance, inject } from "vue";
import { glChild } from "./roles";
import { layoutKey } from "./consts";
const slotRef = getCurrentInstance()?.slots.default;
const props = defineProps({
	id: String
});
const layout = inject(layoutKey)
layout
defineExpose(glChild(getCurrentInstance()!));
</script>