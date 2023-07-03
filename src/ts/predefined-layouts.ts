import {
	ComponentItemConfig,
	ItemType,
	LayoutConfig,
} from "golden-layout";

const miniRowConfig: LayoutConfig = {
	root: {
		type: ItemType.column,
		content: [{
			type: "component",
			title: "Welcome",
			header: { show: "top" },
			isClosable: false,
			reorderEnabled: false,
			componentType: "route",
			width: 10,
			componentState: {
				main: true,
				route: "/"
			},
		} as ComponentItemConfig, {
			type: ItemType.row,
			content: [
				{
					type: "component",
					title: "Title 1st",
					header: { show: "top" },
					isClosable: false,
					componentType: "Content1",
					width: 10,
					componentState: undefined,
				} as ComponentItemConfig,
				{
					type: "component",
					title: "I'm wide",
					header: { show: "top", popout: false },
					componentType: "Content2",
					componentState: { abc: 123 },
				} as ComponentItemConfig
			]
		}]
	}
};

export const prefinedLayouts = {
	miniRow: miniRowConfig,
}