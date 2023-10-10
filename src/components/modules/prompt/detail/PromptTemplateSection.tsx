import React from 'react';
import { Input, Textarea } from 'react-daisyui';

const PromptTemplateSection = () => {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex gap-4 w-full'>
				<div className='flex flex-col gap-4'>
					<h1 className='pl-2 text-black text-[13px] font-bold'>입력값</h1>
					<div className='flex flex-col gap-2 w-[556px]'>
						<div className='w-[556px] flex p-4 bg-neutral-100 rounded-lg gap-6'>
							<div className='flex items-center gap-8 w-full'>
								<div className='w-[80px] flex px-4 py-2'>
									<h1 className='text-black text-[13px] font-medium whitespace-nowrap'>카테고리</h1>
								</div>
								<Input className='w-full' />
							</div>
						</div>
						<div className='w-[556px] flex p-4 bg-neutral-100 rounded-lg gap-6'>
							<div className='flex items-center gap-8 w-full'>
								<div className='w-[80px] flex px-4 py-2'>
									<h1 className='text-black text-[13px] font-medium whitespace-nowrap'>보이스 톤</h1>
								</div>
								<Input className='w-full' />
							</div>
						</div>
						<div className='w-[556px] flex p-4 bg-neutral-100 rounded-lg gap-6'>
							<div className='flex items-center gap-8 w-full'>
								<div className='w-[80px] flex px-4 py-2'>
									<h1 className='text-black text-[13px] font-medium whitespace-nowrap'>보이스 톤</h1>
								</div>
								<Input className='w-full' />
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='pl-2 text-black text-[13px] font-bold'>프롬프트</h1>
					<Textarea
						className='w-[556px] h-72 border-8 border-neutral-100'
						bordered={false}
						placeholder='생성 버튼 누를 시 왼쪽 입력값 기반으로 해당 프롬프트가 작성됩니다.'
					/>
				</div>
			</div>
			<div className='w-full h-[72px] p-4 bg-sky-200 bg-opacity-10 rounded-lg justify-between items-center flex'>
				<div className='justify-end items-center flex'>
					<span className='text-neutral-400 text-xs font-normal'>좋아요</span>
				</div>
			</div>
		</div>
	);
};

export default PromptTemplateSection;
