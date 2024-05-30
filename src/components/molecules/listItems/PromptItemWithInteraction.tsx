import PlipIcon from '@/src/components/atoms/icons/PlipIcon';
import PlipNoneIcon from '@/src/components/atoms/icons/PlipNoneIcon';
import PromptItem, { PromptItemProps } from '@/src/components/molecules/listItems/PromptItem';
import PlipAnimation, { usePlipAnimation } from '@/src/components/organisms/prompt/animation/PlipAnimation';
import { cancelClipPromptApi, clipPromptApi } from '@/src/fetchers/prompt/Interaction';
import { InteractionByPrompt } from '@/src/fetchers/prompt/types';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface PromptItemWithInteractionProps extends PromptItemProps {
	interaction?: InteractionByPrompt;
}

const PromptItemWithInteraction: React.FC<PromptItemWithInteractionProps> = ({ interaction, ...props }) => {
	const [plip, setPlip] = useState<boolean | undefined>(interaction?.isClip);

	const { active, disable, control } = usePlipAnimation();

	const handlePlipPrompt = (plip?: boolean) => {
		if (!interaction) return;
		if (plip) {
			active();
			clipPromptApi(interaction?.promptId);
			interaction.isClip = true;
		} else {
			disable();
			cancelClipPromptApi(interaction?.promptId);
			interaction.isClip = false;
		}
		setPlip(!!plip);
	};

	return (
		<>
			<PromptItem
				{...props}
				interaction={interaction}
				action={
					<div className='w-8 h-8 relative'>
						<div
							className={'hover:opacity-70 opacity-100 transition duration-300 ease-in-out'}
							onClick={(e) => {
								e.stopPropagation();
								handlePlipPrompt(!interaction?.isClip);
							}}
						>
							<motion.div
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: 'spring',
									stiffness: 400,
									damping: 10,
								}}
							>
								{plip ? <PlipIcon /> : <PlipNoneIcon />}
							</motion.div>
						</div>
					</div>
				}
			/>
			<PlipAnimation control={control} />
		</>
	);
};

export default PromptItemWithInteraction;
