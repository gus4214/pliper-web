export const arrayToString = (arr: string[]): string => {
	return arr.join(',');
};

export const stringToArray = (str: string): string[] => {
	return str.split(',');
};
