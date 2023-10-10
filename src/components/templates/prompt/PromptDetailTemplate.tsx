import PromptCategoryChip from '@/src/components/atoms/chip/PromptCategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import PromptDetailInfoHeader from '@/src/components/modules/prompt/detail/PromptDetailInfoHeader';
import PromptTemplateSection from '@/src/components/modules/prompt/detail/PromptTemplateSection';
import React from 'react';

const PromptDetailTemplate = () => {
	return (
		<div className='w-[1176px] px-6 flex flex-col items-center mx-auto pt-[57px] pb-[104px]'>
			<PromptDetailInfoHeader />
			<div className='mt-12' />
			<PromptTemplateSection />
		</div>
	);
};

export default PromptDetailTemplate;
