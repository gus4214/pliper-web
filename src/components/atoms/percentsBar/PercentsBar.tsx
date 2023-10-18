import React, { FC } from 'react';

interface PercentsBarProps {
	percents: number;
}

const PercentsBar: FC<PercentsBarProps> = ({ percents }) => {
	const totalBars = 5;
	const filledBars = Math.round((percents / 100) * totalBars);

	const renderBars = () => {
		const bars = [];
		for (let i = 0; i < totalBars; i++) {
			if (i < filledBars) {
				bars.push(<div key={i} className={`h-2 w-[3px] ${getColor(i)} rounded`} />);
			} else {
				bars.push(<div key={i} className='h-2 w-[3px] bg-neutral-200 rounded' />);
			}
		}
		return bars;
	};

	const getColor = (index: number) => {
		const colors = ['bg-[#BEEFEF]', 'bg-[#84E4E4]', 'bg-[#58DBDB]', 'bg-[#34D3D3]', 'bg-teal-200'];
		return colors[index];
	};

	return <div className='flex gap-0.5'>{renderBars()}</div>;
};

export default PercentsBar;

// const PercentsBar: FC<PercentsBarProps> = ({ percents }) => {
// 	const colors = ['bg-[#BEEFEF]', 'bg-[#84E4E4]', 'bg-[#58DBDB]', 'bg-[#34D3D3]', 'bg-teal-200'];

// 	const calculateFilledDivs = (percents: number) => {
// 		return Math.floor(percents / 20);
// 	};

// 	const filledDivs = calculateFilledDivs(percents);

// 	return (
// 		<div className='flex gap-0.5'>
// 			{colors.map((color, index) => {
// 				if (index < filledDivs) {
// 					return <div key={index} className={`h-2 w-[3px] ${color} rounded`} />;
// 				} else {
// 					return <div key={index} className='h-2 w-[3px] bg-neutral-200 rounded' />;
// 				}
// 			})}
// 		</div>
// 	);
// };

// export default PercentsBar;
