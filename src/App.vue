<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/home">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
	</header>

	<div class="full-height">
		
		<div id="nav" style="height: 90px">
			<h1 style="margin: 0">Golden Layout Demo</h1>
			<button @click="onClickInitLayoutMinRow">Init Layout MinRow</button>
			<div style="width: 20px; display: inline-block"></div>
			<button @click="onClickAddGlComponent1">
				Add Simple Component
			</button>
			<button @click="onClickAddGlComponent2">
				Add Widest Component
			</button>
			<button @click="onClickAddGlComponent3">
				Add Highest Component
			</button>
			<div style="width: 20px; display: inline-block"></div>
			<button @click="onClickSaveLayout">Save Layout</button>
			<div style="width: 20px; display: inline-block"></div>
			<button @click="onClickLoadLayout">Load Layout</button>
		</div>
		<golden-layout
		:router="true"
			ref="GLayoutRoot"
			:config="prefinedLayouts.miniRow"
			style="width: 100%; height: calc(100% - 162px)"
		>
			<template #Content1="{ abc }">
				<div style="color: white">{{abc || 111}}</div>
			</template>
			<template #Content2>
				<div style="width: 100%; color: white; overflow: auto">
					111222333444555666777888999000111222333444555666777888999000111222333444555666777888999000111222333444555666777888999000111222333444555666777888999000111222333444555666777888999000111222333444555666777888999000111222333444555666777888999000111222333444555666777888999000
				</div>
			</template>
			<template #Content3>
				<c3 />
			</template>
		</golden-layout>
	</div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import { prefinedLayouts } from "@/ts/predefined-layouts";
import C3 from "@/components/Content3.vue";
import { GoldenLayout } from './components/index';

const GLayoutRoot = ref<null | typeof GoldenLayout>(null);
const onClickInitLayoutMinRow = () => {
	if (!GLayoutRoot.value) return;
	GLayoutRoot.value.loadGLLayout(prefinedLayouts.miniRow);
};

const onClickAddGlComponent1 = () => {
	if (!GLayoutRoot.value) return;
	GLayoutRoot.value.addGlComponent("Content1", "Title 1st");
};

const onClickAddGlComponent2 = () => {
	if (!GLayoutRoot.value) return;
	GLayoutRoot.value.addGlComponent("Content2", "I'm wide");
};

const onClickAddGlComponent3 = () => {
	if (!GLayoutRoot.value) return;
	GLayoutRoot.value.addGlComponent("Content3", "I'm high");
};

const onClickSaveLayout = () => {
	if (!GLayoutRoot.value) return;
	const config = GLayoutRoot.value.getLayoutConfig();
	localStorage.setItem("gl_config", JSON.stringify(config));
};

const onClickLoadLayout = () => {
	const str = localStorage.getItem("gl_config");
	if (!str) return;
	if (!GLayoutRoot.value) return;
	const config = JSON.parse(str as string);
	GLayoutRoot.value.loadGLLayout(config);
};
</script>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
./components