import { KeyofPromptPersona, keyOfPersonaCategory, promptKoTextKeyOfPersona, promptKoTextOfPersona } from '@/src/configs/prompt';
import { Category, PersonaType, PromptCategories, Tool } from '@/src/fetchers/prompt/types';
import { FC, useState } from 'react';
import { Button, Checkbox } from 'react-daisyui';

interface MenuListProps {
	categories: PromptCategories;
	aiTools: Tool[];
}

const MenuList: FC<MenuListProps> = ({ categories, aiTools }) => {
	const sortOfCategoryPersona = Object.keys(categories).map((keyofCategory) =>
		keyofCategory.replace('Categories', '').toUpperCase()
	) as PersonaType[];

	const [personaTypes, setPersonaTypes] = useState<PersonaType | undefined>(undefined);
	const [category1Texts, setCategory1Texts] = useState<string[]>([]);
	const [category2Texts, setCategory2Texts] = useState<string[]>([]);
	const [llmModels, setLlmModels] = useState<string[]>([]);

	let currentCategories = [] as Category[];
	currentCategories = categories[keyOfPersonaCategory[personaTypes as PersonaType] as KeyofPromptPersona];

	const isAnythingSelected = () => {
		return personaTypes || !!category1Texts.length || !!category2Texts.length || !!llmModels.length;
	};

	const handlePersonaClick = (persona: PersonaType) => {
		setPersonaTypes(persona);
		resetCategory1Texts();
		resetCategory2Texts();
	};

	const handleCategoryDept1Click = (category1Text: string) => {
		if (category1Texts.includes(category1Text)) {
			setCategory1Texts((prev) => prev.filter((text) => text !== category1Text));
		} else {
			setCategory1Texts((prev) => [...prev, category1Text]);
		}
	};

	const handleCategoryDept2Click = (category2Text: string) => {
		if (category2Texts.includes(category2Text)) {
			setCategory2Texts((prev) => prev.filter((text) => text !== category2Text));
		} else {
			setCategory2Texts((prev) => [...prev, category2Text]);
		}
	};

	const handleAiToolClick = (llmModel: string) => {
		if (llmModels.includes(llmModel)) {
			setLlmModels((prev) => prev.filter((text) => text !== llmModel));
		} else {
			setLlmModels((prev) => [...prev, llmModel]);
		}
	};

	const handleReset = () => {
		setPersonaTypes(undefined);
		resetCategory1Texts();
		resetCategory2Texts();
		setLlmModels([]);
	};

	const resetCategory1Texts = () => {
		setCategory1Texts([]);
	};

	const resetCategory2Texts = () => {
		setCategory2Texts([]);
	};

	return (
		<div className='flex flex-col gap-8 px-4 w-44'>
			<div className='flex flex-col items-start justify-center gap-6'>
				<span className='text-xs font-bold text-center text-neutral-800'>페르소나</span>
				<ul className='flex flex-col items-start justify-center gap-2 pl-4 border-l border-neutral-200'>
					{sortOfCategoryPersona.map((persona) => (
						<li key={persona}>
							<Button onClick={() => handlePersonaClick(persona)}>{promptKoTextOfPersona[persona]}</Button>
						</li>
					))}
				</ul>
			</div>
			{personaTypes && (
				<div className='w-[140px] flex-col justify-start items-start gap-6 flex'>
					<span className='text-xs font-bold text-center text-neutral-800'>카테고리</span>
					<ul className='border-l border-neutral-200 flex-col gap-2.5 flex'>
						{currentCategories?.map((category) => (
							<li key={category.dept1.code} className='flex flex-col'>
								<Button onClick={() => handleCategoryDept1Click(category.dept1.text)}>{`${category.dept1.text}`}</Button>
								{category1Texts.includes(category.dept1.text) && (
									<ul className='flex flex-col gap-4 pb-2 pl-6'>
										{category.dept2.map((categoryDept2) => (
											<li
												key={categoryDept2.code}
												className='flex items-center gap-2 cursor-pointer'
												onClick={() => handleCategoryDept2Click(categoryDept2.text)}
											>
												<Checkbox
													readOnly
													checked={category2Texts.includes(categoryDept2.text)}
													size='sm'
													className='w-4 h-4 rounded'
													aria-label={categoryDept2.text}
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
						<li key={tool.name} className='flex items-center gap-2 cursor-pointer' onClick={() => handleAiToolClick(tool.name)}>
							<Checkbox readOnly checked={llmModels.includes(tool.name)} size='sm' className='w-4 h-4 rounded' aria-label={tool.name} />
							<span className='text-sm font-normal text-center text-neutral-700'>{tool.name}</span>
						</li>
					))}
				</ul>
			</div>
			<Button
				className='h-8 text-xs font-normal text-black bg-white border rounded w-36 min-h-8 border-neutral-200'
				onClick={handleReset}
				disabled={!isAnythingSelected()}
			>
				전체 해제
			</Button>
		</div>
	);
};

export default MenuList;
