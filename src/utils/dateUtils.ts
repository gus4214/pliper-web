export const formatDateToKorean = (dateString: string): string => {
	const date = new Date(dateString);

	if (isNaN(date.getTime())) {
		return '날짜 형식이 잘못되었습니다';
	}

	const year = date.getFullYear();
	const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1 필요
	const day = date.getDate();

	return `${year}년 ${month}월 ${day}일`;
};
