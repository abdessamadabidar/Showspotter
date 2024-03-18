
function getMonths(locales : string | string[], format: "long" | "short" = "long") {
	const currentYear : number = new Date().getFullYear();
	const monthsIndexes : number[] = [...Array(12).keys()];
	const formatter = new Intl.DateTimeFormat(locales, {
		month: format
	})

	const getMonthName = (monthIndex: number) : string => formatter.format(new Date(currentYear, monthIndex))
	return monthsIndexes.map(getMonthName)
}

export const months : string[] = getMonths( "en");

