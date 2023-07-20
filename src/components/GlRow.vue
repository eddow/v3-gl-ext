<template>
	<slot></slot>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { glLink } from "./roles";
defineExpose(glLink(getCurrentInstance()!));
</script>