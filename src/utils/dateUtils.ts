export const formatDateToKorean = (date: Date): string => {
	if (isNaN(date.getTime())) {
		return '날짜 형식이 잘못되었습니다';
	}

	const year = date.getFullYear();
	const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1 필요
	const day = date.getDate();

	return `${year}년 ${month}월 ${day}일`;
};

export const timeAgo = (dateString: string): string => {
	const now = new Date();
	const date = new Date(dateString);
	const diff = now.getTime() - date.getTime();

	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	if (seconds < 60) {
		return '방금전';
	} else if (minutes < 60) {
		return `${minutes}분전`;
	} else if (hours < 24) {
		return `${hours}시간전`;
	} else if (hours < 48) {
		return '하루전';
	} else {
		return formatDateToKorean(date);
	}
};
