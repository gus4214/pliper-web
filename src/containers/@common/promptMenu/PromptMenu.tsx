import { KeyofPromptPersona, keyOfPersonaCategory, promptKoTextOfPersona } from '@/src/configs/prompt';
import { Category, PersonaType, PromptCategories, Tool } from '@/src/fetchers/prompt/types';
import { usePromptMenu } from '@/src/hooks-jotai/usePromptMenu.jotai';
import { FC } from 'react';
import { Button, Checkbox } from 'react-daisyui';
import { twJoin, twMerge } from 'tailwind-merge';

interface PromptMenuProps {
	categories: PromptCategories;
	aiTools: Tool[];
}

const PromptMenu: FC<PromptMenuProps> = ({ categories, aiTools }) => {
	const {
		selectedMenus: { personaTypes, category1Texts, category2Texts, llmModel },
		setSelectedMenu: { handlePersona, handleCategoryDept1, handleCategoryDept2, handleAiTools },
		resetMenu,
		isMenuSelected,
	} = usePromptMenu();

	const personas = Object.keys(categories).map((keyofCategory) => keyofCategory.replace('Categories', '').toUpperCase()) as PersonaType[];

	let currentCategories = [] as Category[];
	currentCategories = categories[keyOfPersonaCategory[personaTypes as PersonaType] as KeyofPromptPersona];

	return (
		<div className='flex flex-col gap-8 px-4 w-44'>
			<div className='flex flex-col items-start justify-center gap-6'>
				<span className='text-xs font-bold text-center text-neutral-800'>페르소나</span>
				<ul className='flex flex-col items-start justify-center gap-2 pl-4 border-l border-neutral-200'>
					{personas.map((persona) => (
						<li key={persona}>
							<Button
								className={twJoin(
									`w-32 h-8 px-4 py-[9px] min-h-8 text-start hover:text-teal-400 hover:font-medium hover:bg-neutral-50`,
									personaTypes?.includes(persona) && 'text-teal-400 font-medium bg-neutral-50'
								)}
								color='ghost'
								onClick={() => handlePersona(persona)}
							>
								<span className='text-[15px] font-normal w-full'>{promptKoTextOfPersona[persona]}</span>
							</Button>
						</li>
					))}
				</ul>
			</div>
			{personaTypes && (
				<div className='w-[140px] flex-col justify-start items-start gap-6 flex'>
					<span className='text-xs font-bold text-center text-neutral-800'>카테고리</span>
					<ul className='border-l border-neutral-200 flex flex-col gap-2.5'>
						{currentCategories?.map((category) => (
							<li
								key={category.dept1.code}
								className={twMerge(
									`flex flex-col gap-3`,
									category1Texts.includes(category.dept1.text) && `border-l border-teal-200 ml-[-1px]`
								)}
							>
								<Button
									className='w-32 h-8 px-4 py-[9px] min-h-8 text-start hover:text-teal-400 hover:font-medium hover:bg-neutral-50'
									color='ghost'
									onClick={() => handleCategoryDept1(category.dept1.text)}
								>
									<span className='text-[15px] font-medium w-full'>{`${category.dept1.text}`}</span>
								</Button>
								{category1Texts.includes(category.dept1.text) && (
									<ul className='flex flex-col gap-4 pb-2 pl-6'>
										{category.dept2.map((categoryDept2) => (
											<li
												key={categoryDept2.code}
												className='flex items-center gap-2 cursor-pointer'
												onClick={() => handleCategoryDept2(categoryDept2.text)}
											>
												<Checkbox
													readOnly
													checked={category2Texts.includes(categoryDept2.text)}
													size='sm'
													className='w-4 h-4 rounded'
													aria-label={`하위 카테고리 ${categoryDept2.text} 선택`}
												/>
												<span className='text-sm font-normal text-center text-neutral-700'>{categoryDept2.text}</span>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			)}
			<div className='w-[140px] flex flex-col justify-start items-start gap-6'>
				<span className='text-xs font-bold text-center text-neutral-800'>플랫폼</span>
				<ul className='flex flex-col gap-4 py-2 pl-4 border-l border-teal-200'>
					{aiTools.map((tool, i) => (
						<li key={tool.name} className='flex items-center gap-2 cursor-pointer' onClick={() => handleAiTools(tool.name)}>
							<Checkbox
								readOnly
								checked={llmModel.includes(tool.name)}
								size='sm'
								className='w-4 h-4 rounded'
								aria-label={`플랫폼 ${tool.name} 선택`}
							/>
							<span className='text-sm font-normal text-center text-neutral-700'>{tool.name}</span>
						</li>
					))}
				</ul>
			</div>
			<Button
				aria-label='모든 선택 해제'
				className='h-8 text-xs font-normal text-black bg-white border rounded w-36 min-h-8 border-neutral-200'
				onClick={resetMenu}
				disabled={!isMenuSelected}
			>
				전체 해제
			</Button>
		</div>
	);
};

export default PromptMenu;
