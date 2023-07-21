<template>
	<RouterView :route="givenRoute" />
</template>

<script setup lang="ts">
import { type PropType, watchEffect } from "vue";
import { RouterView, useRouter, type RouteLocation } from "vue-router";

const
	props = defineProps({
		route: {
			type: String,
			required: true
		}
	}),
	router = useRouter();
	let givenRoute: RouteLocation = router.resolve(props.route);
	watchEffect(()=> givenRoute = router.resolve(props.route));
</script>
