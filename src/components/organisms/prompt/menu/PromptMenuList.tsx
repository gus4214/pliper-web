import { useGetAiTools, useGetPromptCategory } from '@/src/fetchers/prompt';
import { Category } from '@/src/fetchers/prompt/types';
import { category1CodesAtom, category2CodesAtom, llmModelAtom, personaTypesAtom } from '@/src/stores/searchForm';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Button, Checkbox } from 'react-daisyui';
import tw from 'twin.macro';

const PromptMenuList = () => {
	const { data } = useGetPromptCategory();
	const { data: llmData } = useGetAiTools({ type: 'LLM' });

	const [personaType, setPersonaType] = useAtom(personaTypesAtom);
	const [categoryOpen, setCategoryOpen] = useAtom(category1CodesAtom);
	const [selectedCodes, setSelectedCodes] = useAtom(category2CodesAtom);
	const [selectedModel, setSelectedModel] = useAtom(llmModelAtom);

	let currentCategories = [] as Category[];
	if (personaType === 'DAILY' && data) {
		currentCategories = data.dailyCategories;
	} else if (personaType === 'JOB' && data) {
		currentCategories = data.jobCategories;
	}

	// 전체 해제 버튼 활성화 여부를 결정하는 함수
	const isAnythingSelected = () => {
		return personaType || categoryOpen.length > 0 || selectedCodes.length > 0 || selectedModel.length > 0;
	};

	// 전체 해제 함수
	const handleReset = () => {
		setPersonaType('');
		setCategoryOpen([]);
		setSelectedCodes([]);
		setSelectedModel([]);
	};

	const handleCategoryOpen = (text: string) => {
		if (categoryOpen.includes(text)) {
			setCategoryOpen((prev) => prev.filter((item) => item !== text));
		} else {
			setCategoryOpen((prev) => [...prev, text]);
		}
	};

	const handleCheckboxChange = (text: string) => {
		if (selectedCodes.includes(text)) {
			setSelectedCodes((prev) => prev.filter((item) => item !== text));
		} else {
			setSelectedCodes((prev) => [...prev, text]);
		}
	};

	const handleModelCheckboxChange = (model: string) => {
		if (selectedModel.includes(model)) {
			setSelectedModel((prev) => prev.filter((item) => item !== model));
		} else {
			setSelectedModel((prev) => [...prev, model]);
		}
	};

	useEffect(() => {
		return () => handleReset();
	}, []);

	return (
		<div className='flex flex-col gap-8 px-4 w-44'>
			<div className='flex flex-col items-start justify-center gap-6'>
				<span className='text-xs font-bold text-center text-neutral-800'>페르소나</span>
				<div className='flex flex-col items-start justify-center gap-2 pl-4 border-l border-neutral-200'>
					<Button
						className={`w-32 h-8 px-4 py-[9px] min-h-8 text-start ${
							personaType === 'DAILY'
								? 'text-teal-400 font-medium bg-neutral-50'
								: 'hover:text-teal-400 hover:font-medium hover:bg-neutral-50'
						}`}
						color='ghost'
						onClick={() => setPersonaType('DAILY')}
					>
						<span className='text-[15px] font-normal w-full'>일상</span>
					</Button>
					<Button
						className={`w-32 h-8 px-4 py-[9px] min-h-8 text-start ${
							personaType === 'JOB'
								? 'text-teal-400 font-medium bg-neutral-50'
								: 'hover:text-teal-400 hover:font-medium hover:bg-neutral-50'
						}`}
						color='ghost'
						onClick={() => setPersonaType('JOB')}
					>
						<span className='text-[15px] font-normal w-full'>업무</span>
					</Button>
				</div>
			</div>
			{personaType !== '' && (
				<div className='w-[140px] flex-col justify-start items-start gap-6 flex'>
					<h1 className='text-xs font-bold text-center text-neutral-800'>카테고리</h1>
					<div className='border-l border-neutral-200 flex-col gap-2.5 flex'>
						{currentCategories.map((category, i) => (
							<div
								css={[
									tw`flex flex-col gap-3 border-l`,
									categoryOpen.includes(category.dept1.code) ? tw`border-teal-200` : tw`border-neutral-300`,
								]}
								key={i}
							>
								<Button
									aria-label={`카테고리 ${category.dept1.text} 선택`}
									className='w-32 h-8 px-4 py-[9px] min-h-8 hover:text-teal-400 hover:font-medium hover:bg-neutral-50 text-start'
									color='ghost'
									onClick={() => handleCategoryOpen(category.dept1.text)} // code를 인자로 넘깁니다.
								>
									<span className='text-[15px] font-medium w-full'>{category.dept1.text}</span>
								</Button>
								{categoryOpen.includes(category.dept1.text) && ( // 현재 열린 카테고리의 code와 비교합니다.
									<div className='flex flex-col gap-4 pb-2 pl-6'>
										{category.dept2.map((category2, i) => (
											<div
												className='flex items-center gap-2 cursor-pointer'
												onClick={() => handleCheckboxChange(category2.text)}
												key={i}
											>
												<Checkbox
													size='sm'
													className='w-4 h-4 rounded'
													checked={selectedCodes.includes(category2.text)}
													aria-label={`하위 카테고리 ${category2.text} 선택`}
												/>
												<span className='text-sm font-normal text-center text-neutral-700'>{category2.text}</span>
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
			<div className='w-[140px] flex flex-col justify-start items-start gap-6'>
				<span className='text-xs font-bold text-center text-neutral-800'>플랫폼</span>
				<div className='flex flex-col gap-4 py-2 pl-4 border-l border-teal-200'>
					{llmData?.tools.map((tool, i) => (
						<div key={i} className='flex items-center gap-2 cursor-pointer' onClick={() => handleModelCheckboxChange(tool.name)}>
							<Checkbox
								size='sm'
								className='w-4 h-4 rounded'
								checked={selectedModel.includes(tool.name)}
								aria-label={`플랫폼 ${tool.name} 선택`}
							/>
							<span className='text-sm font-normal text-center text-neutral-700'>{tool.name}</span>
						</div>
					))}
				</div>
			</div>
			<Button
				className='h-8 text-xs font-normal text-black bg-white border rounded w-36 min-h-8 border-neutral-200'
				aria-label='모든 선택 해제'
				onClick={handleReset}
				disabled={!isAnythingSelected()}
			>
				전체 해제
			</Button>
		</div>
	);
};

export default PromptMenuList;
