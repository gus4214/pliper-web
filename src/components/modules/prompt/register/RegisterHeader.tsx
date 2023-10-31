import React from 'react';

const RegisterHeader = () => {
	return (
		<div className='px-4 flex flex-col gap-4 justify-start'>
			<h1 className='text-black text-xl font-bold'>프롬프트 생성</h1>
			<h2 className='text-black text-sm font-normal'>
				아래 프롬프트 템플릿은 기획 초안에 작성 가능한 템플릿 입니다.
				<br />
				아래 영역에서 본인이 기획 하고자 하는 내용 content와 tone user 부분을 입력해서 사용해주세요
			</h2>
		</div>
	);
};

export default RegisterHeader;
