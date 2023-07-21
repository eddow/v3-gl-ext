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
			title: "Init",
			header: { show: "top" },
			componentType: "Content1",
			width: 10,
			componentState: { abc: 'Yhea' },
		} as ComponentItemConfig, {
			type: ItemType.row,
			content: [{
				type: "component",
				title: "Title 1st",
				header: { show: "top" },
				isClosable: false,
				componentType: "Content1",
				width: 10,
				componentState: { abc: 123 },
			} as ComponentItemConfig, {
				type: "component",
				title: "I'm wide",
				header: { show: "top", popout: false },
				componentType: "Content2"
			} as ComponentItemConfig
		]}]
	}
};

export const prefinedLayouts = {
	miniRow: miniRowConfig,
}