export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Interval {
	start: any,
	end: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
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

export enum Gender {
	UNSPECIFIED = "Unspecified",
	FEMALE = "Female",
	MALE = "Male",
	NONBINARY = "Nonbinary",
	TRANSGENDER_FEMALE = "Transgender Female",
	TRANSGENDER_MALE = "Transgender Male",
	OTHER = "Other",
	PREFER_NOT_TO_DISCLOSE = "Prefer Not to Disclose",
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export default interface HealthcareProfessional {
	landingPageUrl?: string,
	slug?: string,
	acceptingNewPatients?: boolean,
	address: Address,
	description?: string,
	hours?: Hours,
	name: string,
	c_cRating?: number,
	c_noOfVotes?: string,
	c_primaryCTA?: C_primaryCTA,
	c_secondaryCTA?: C_secondaryCTA,
	firstName?: string,
	gender?: Gender,
	headshot?: Image,
	insuranceAccepted?: string[],
	lastName?: string,
	mainPhone?: any,
	timezone?: any,
}
