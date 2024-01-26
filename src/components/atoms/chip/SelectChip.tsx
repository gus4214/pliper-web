import tw from 'twin.macro';

interface SelectChipProps {
	label: string;
	selected?: boolean;
	onClick?: () => void;
	rounded?: boolean;
	color?: 'primary' | 'secondary' | 'info';
	className?: string;
}

const SelectChip: React.FC<SelectChipProps> = ({ label, selected, onClick, color, rounded, className }) => {
	let selectedColor;

	if (selected) {
		switch (color) {
			case 'primary':
				selectedColor = tw`bg-teal-200`;
				break;
			case 'secondary':
				selectedColor = tw`bg-navy-900`;
				break;
			case 'info':
				selectedColor = tw`bg-slate-500`;
				break;
			default:
				selectedColor = tw`bg-neutral-600`;
		}
	}

	return (
		<>
			<div
				onClick={onClick}
				className={className}
				css={[
					tw`px-4 py-[9px] rounded border justify-center items-center flex cursor-pointer`,
					rounded && tw`rounded-[50px]`,
					selected ? selectedColor : tw`border-neutral-200`,
				]}
			>
				<span css={[tw`text-white text-sm font-normal leading-[14px]`, !selected && tw`text-neutral-400 font-normal`]}>{label}</span>
			</div>
		</>
	);
};

export default SelectChip;
