import { promptLLMCategory } from '@/src/configs/prompt';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { category1CodesAtom, category2CodesAtom, lmModelAtom, searchFilterAtom } from '@/src/stores/searchForm';
import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { Button, Checkbox, Menu } from 'react-daisyui';
import tw from 'twin.macro';

const PromptMenuList = () => {
	const { data } = useGetPromptCategory();

	const [categoryOpen, setCategoryOpen] = useAtom(category1CodesAtom);
	const [selectedCodes, setSelectedCodes] = useAtom(category2CodesAtom);
	const [selectedModel, setSelectedModel] = useAtom(lmModelAtom);

	const handleCategoryOpen = (code: string) => {
		if (categoryOpen.includes(code)) {
			setCategoryOpen((prev) => prev.filter((item) => item !== code));
		} else {
			setCategoryOpen((prev) => [...prev, code]);
		}
	};

	const handleCheckboxChange = (code: string) => {
		if (selectedCodes.includes(code)) {
			setSelectedCodes((prev) => prev.filter((item) => item !== code));
		} else {
			setSelectedCodes((prev) => [...prev, code]);
		}
	};

	const handleModelCheckboxChange = (model: string) => {
		if (selectedModel.includes(model)) {
			setSelectedModel((prev) => prev.filter((item) => item !== model));
		} else {
			setSelectedModel((prev) => [...prev, model]);
		}
	};

	return (
		<div className='w-44 px-4 flex-col gap-8 flex'>
			<div className='flex-col justify-center items-start gap-6 flex'>
				<h1 className='text-center text-neutral-800 text-xs font-bold'>페르소나</h1>
				<div className='pl-4 border-l border-neutral-200 flex-col justify-center items-start gap-2 flex'>
					<Button
						className='w-32 h-8 px-4 py-[9px] min-h-8 hover:text-teal-400 hover:font-medium hover:bg-neutral-50 text-start'
						color='ghost'
					>
						<span className='text-[15px] font-normal w-full'>일상</span>
					</Button>
					<Button
						className='w-32 h-8 px-4 py-[9px] min-h-8 hover:text-teal-400 hover:font-medium hover:bg-neutral-50 text-start'
						color='ghost'
					>
						<span className='text-[15px] font-normal w-full'>업무</span>
					</Button>
				</div>
			</div>
			<div className='w-[140px] flex-col justify-start items-start gap-6 flex'>
				<h1 className='text-center text-neutral-800 text-xs font-bold'>카테고리</h1>
				<div className='border-l border-neutral-200 flex-col gap-2.5 flex'>
					{data?.categories.map((category) => (
						<div
							css={[
								tw`flex flex-col border-l gap-3`,
								categoryOpen.includes(category.dept1.code) ? tw`border-teal-200` : tw`border-neutral-300`,
							]}
							key={category.dept1.code}
						>
							<Button
								className='w-32 h-8 px-4 py-[9px] min-h-8 hover:text-teal-400 hover:font-medium hover:bg-neutral-50 text-start'
								color='ghost'
								onClick={() => handleCategoryOpen(category.dept1.code)} // code를 인자로 넘깁니다.
							>
								<span className='text-[15px] font-medium w-full'>{category.dept1.text}</span>
							</Button>
							{categoryOpen.includes(category.dept1.code) && ( // 현재 열린 카테고리의 code와 비교합니다.
								<div className='pl-6 pb-2 flex-col gap-4 flex'>
									{category.dept2.map((category2) => (
										<div className='items-center gap-2 flex' key={category2.code}>
											<Checkbox
												size='sm'
												className='w-4 h-4 rounded'
												onChange={() => handleCheckboxChange(category2.code)}
												checked={selectedCodes.includes(category2.code)}
											/>
											<span className='text-center text-neutral-700 text-sm font-normal'>{category2.text}</span>
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className='w-[140px] flex flex-col justify-start items-start gap-6'>
				<h1 className='text-center text-neutral-800 text-xs font-bold'>플랫폼</h1>
				<div className='pl-4 py-2 flex-col gap-4 flex border-l border-teal-200'>
					{Object.entries(promptLLMCategory).map(([key, value]) => (
						<div className='items-center gap-2 flex'>
							<Checkbox
								size='sm'
								className='w-4 h-4 rounded'
								onChange={() => handleModelCheckboxChange(key)}
								checked={selectedModel.includes(key)}
							/>
							<span className='text-center text-neutral-700 text-sm font-normal'>{value}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PromptMenuList;
