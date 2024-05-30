import PencilSquareIcon from '@/src/components/atoms/icons/PencilSquareIcon';
import TrashOutlineIcon from '@/src/components/atoms/icons/TrashOutlineIcon';
import PromptItem, { PromptItemProps } from '@/src/components/molecules/listItems/PromptItem';
import { InteractionByPrompt } from '@/src/fetchers/prompt/types';
import React from 'react';
import { Toggle } from 'react-daisyui';

interface PromptItemWithActionsProps extends PromptItemProps {
	interaction?: InteractionByPrompt;
	show: boolean;
	onToggleClick?: () => void;
	onEditClick: () => void;
	onDeleteClick: () => void;
}

const PromptItemWithActions: React.FC<PromptItemWithActionsProps> = ({ interaction, show, onToggleClick, onEditClick, onDeleteClick, ...props }) => {
	const handleEditClick = (event: React.MouseEvent<SVGSVGElement>) => {
		event.stopPropagation();
		if (onEditClick) {
			onEditClick();
		}
	};

	const handleDeleteClick = (event: React.MouseEvent<SVGSVGElement>) => {
		event.stopPropagation();
		if (onDeleteClick) {
			onDeleteClick();
		}
	};

	const handleToggleClick = (event: React.MouseEvent<Element>) => {
		event.stopPropagation();
		if (onToggleClick) {
			onToggleClick();
		}
	};

	return (
		<>
			<PromptItem
				{...props}
				interaction={interaction}
				action={
					<div className='flex flex-col gap-11 items-end'>
						<Toggle color='accent' size='sm' checked={show} onClick={handleToggleClick} />
						<div className='flex justify-center gap-[10px]'>
							<PencilSquareIcon onClick={handleEditClick} />
							<TrashOutlineIcon onClick={handleDeleteClick} />
						</div>
					</div>
				}
			/>
		</>
	);
};

export default PromptItemWithActions;
