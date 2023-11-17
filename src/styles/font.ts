import localFont from 'next/font/local';

export const pretendard = localFont({
	variable: '--font-pretendard',
	display: 'swap',
	src: [
		{
			path: 'fonts/pretendard/PretendardStd-Light.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: 'fonts/pretendard/PretendardStd-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: 'fonts/pretendard/PretendardStd-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: 'fonts/pretendard/PretendardStd-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: 'fonts/pretendard/PretendardStd-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],

});