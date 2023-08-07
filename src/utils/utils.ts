const extractTextPattern = /(<([^>]+)>|&nbsp;)/gi;

export function removeAllHtmlTag(html: string) {
	return html.replace(extractTextPattern, '');
}

export const checkUrlForm = (strUrl: string): boolean => {
	const expUrl = /^http[s]?:\/\//i;
	return expUrl.test(strUrl);
};

export const isEmpty = (s: string | undefined): boolean => {
	if (!s) {
		return true;
	}
	return s.length === 0;
};

export const insertCommas = (number: number | string): string => {
	number = number || 0;
	return number.toLocaleString('en-US');
};

export const sleep = (sec: number) => {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

export const createFormData = <T extends object>(datas: T, form?: FormData) => {
	form = form || new FormData();

	for (const [key, value] of Object.entries(datas)) {
		if (value === undefined || value === null) {
			continue;
		}
		form.append(key, value);
	}
	return form;
};

export const receiveCallback = <T>(callbackTarget: string) => {
	return new Promise<T>((resolve, reject) => {
		function receiveMessage(event: any) {
			console.log('receive check', event);
			if (event.data.target !== callbackTarget) {
				return;
			}
			resolve({ ...event.data }); // works just fine
			/* Removes the listeners */
			window.removeEventListener('message', receiveMessage);
		}

		window.addEventListener('message', receiveMessage);
	});
};

/**
 * byte 용량을 환산하여 반환
 * 용량의 크기에 따라 MB, KB, byte 단위로 환산함
 * @param fileSize  byte 값
 * @param fixed     환산된 용량의 소수점 자릿수
 * @returns {String}
 */
export const toByte = (fileSize: number, fixed = 2) => {
	let str;

	//MB 단위 이상일때 MB 단위로 환산
	if (fileSize >= 1024 * 1024) {
		const customFileSize = (fileSize / (1024 * 1024)).toFixed(fixed);
		str = customFileSize + ' MB';
	}
	//KB 단위 이상일때 KB 단위로 환산
	else if (fileSize >= 1024) {
		const customFileSize = (fileSize / 1024).toFixed(fixed);
		str = customFileSize + ' KB';
	}
	//KB 단위보다 작을때 byte 단위로 환산
	else {
		const customFileSize = fileSize.toFixed(fixed);
		str = customFileSize + ' byte';
	}
	return str;
};

export const toQueryString = <T extends Record<string, unknown>>(payload: T): string => {
	return (
		'?' +
		Object.entries(payload)
			.filter(([key, value]) => !!value)
			.map((e) => e.join('='))
			.join('&')
	);
};

export const urlToFile = async (url: string) => {
	console.log(url);
	const res = await fetch(url, { mode: 'cors' });
	const blob = await res.blob();
	const parts = url.split('/');
	const filename = parts[parts.length - 1];
	const ext = filename.split('.').pop();

	let mimeType;

	// 확장자에 따라 MIME 타입을 결정
	switch (ext) {
		case 'jpg':
		case 'jpeg':
			mimeType = 'image/jpeg';
			break;
		case 'png':
			mimeType = 'image/png';
			break;
		case 'gif':
			mimeType = 'image/gif';
			break;
		default:
			mimeType = blob.type;
			break;
	}

	// 파일과 비슷한 Blob 객체를 반환합니다.
	return new File([blob], filename, { type: mimeType });
};

export const getFileNameFromUrl = (url: string) => url.split('/').pop();
