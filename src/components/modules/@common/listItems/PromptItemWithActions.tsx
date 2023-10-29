import PencilSquareIcon from '@/src/components/atoms/icons/PencilSquareIcon';
import TrashOutlineIcon from '@/src/components/atoms/icons/TrashOutlineIcon';
import PromptItem, { PromptItemProps } from '@/src/components/modules/@common/listItems/PromptItem';
import { InteractionByPrompt } from '@/src/fetchers/prompt/types';
import React, { MouseEvent } from 'react';
import { Toggle } from 'react-daisyui';

interface PromptItemWithActionsProps extends PromptItemProps {
	interaction?: InteractionByPrompt;
	show: boolean;
	onToggleClick?: () => void;
	onEditClick: () => void;
}

const PromptItemWithActions: React.FC<PromptItemWithActionsProps> = ({ interaction, show, onToggleClick, onEditClick, ...props }) => {
	const handleEditClick = (event: React.MouseEvent<SVGSVGElement>) => {
		event.stopPropagation();
		if (onEditClick) {
			onEditClick();
		}
	};
	return (
		<>
			<PromptItem
				{...props}
				interaction={interaction}
				action={
					<div className='flex flex-col gap-11 items-end'>
						<Toggle color='accent' size='sm' checked={show} onChange={onToggleClick} />
						<div className='flex justify-center gap-[10px]'>
							<PencilSquareIcon onClick={handleEditClick} />
							<TrashOutlineIcon />
						</div>
					</div>
				}
			/>
		</>
	);
};

export default PromptItemWithActions;
