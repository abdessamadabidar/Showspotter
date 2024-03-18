interface Year {
	label: string;
	value: number;
}

export const years: Year[] = [];

const currentYear: number = new Date().getFullYear();
for (let year = 1970; year <= currentYear; ++year) {
	years.push({label: `${year}`, value: year})
}

