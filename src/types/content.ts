export interface Markdown {
	markdown: string,
}

export interface RichTextV2 {
	json: Record<string, any>,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Ce_content {
	bodyV2?: Markdown,
	landingPageUrl?: string,
	richTextDescriptionV2?: RichTextV2,
	name: string,
	c_primaryCTA?: C_primaryCTA,
	c_secondaryCTA?: C_secondaryCTA,
	c_subtitle?: string,
	id: string,
}
