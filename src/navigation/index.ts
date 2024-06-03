export interface NavItem {
	title: string;
	path: string;
}

export const appGnbNavigation = (): NavItem[] => [
	{ title: '서비스 소개', path: '/about' },
	{ title: '프롬프트', path: '/prompt' },
];

export const appUserNavigation = (): NavItem[] => [
	{ title: '개인 스페이스', path: '/mypage/profile' },
	{ title: '마이 플립', path: '/mypage/plip' },
	{ title: '프롬프트 작성', path: '/prompt/register' },
];
