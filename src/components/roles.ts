import type { LayoutConfig, ResolvedLayoutConfig } from "golden-layout";
import type { ComponentInternalInstance } from "vue";

export interface GlChild {
	path: string;
	config: LayoutConfig | ResolvedLayoutConfig;
}
export function glChild(inst: ComponentInternalInstance) {
	return {
		get path() {
			const i = inst;
			debugger;
			return 0;
		},
		get config() {
			const i = inst;
			debugger;
			return {};
		}
	};
}

export function glParent(inst: ComponentInternalInstance) {
	return {
	};
}

export function glLink(inst: ComponentInternalInstance) {
	return {
		...glParent(inst),
		...glChild(inst)
	};
}