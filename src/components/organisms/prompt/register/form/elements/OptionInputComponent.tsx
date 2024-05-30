import { stringToArray } from '@/src/utils/conversionUtils';
import { X } from 'heroicons-react';
import React, { useState } from 'react';
import { Button, Input } from 'react-daisyui';

interface OptionInputComponentProps {
	onValuesChange?: (values: string[]) => void;
	typeValues: string;
}

const OptionInputComponent: React.FC<OptionInputComponentProps> = ({ onValuesChange, typeValues }) => {
	const [options, setOptions] = useState<string[]>(stringToArray(typeValues) || ['옵션값1']);
	const [values, setValues] = useState<string[]>(stringToArray(typeValues) || []);

	const handleAddOption = () => {
		if (options.length < 10) {
			const nextOption = `옵션값${options.length + 1}`;
			setOptions((prevOptions) => [...prevOptions, nextOption]);
		}
	};

	const handleRemoveOption = (index: number) => {
		const newOptions = [...options];
		newOptions.splice(index, 1);

		// 옵션값 재정렬
		const reorderedOptions = newOptions.map((_, idx) => `옵션값${idx + 1}`);
		setOptions(reorderedOptions);

		const newValues = [...values];
		newValues.splice(index, 1);
		setValues(newValues);

		onValuesChange?.(newValues); // 부모 컴포넌트로 변경된 값을 전달
	};

	const handleInputChange = (index: number, value: string) => {
		const newValues = [...values];
		newValues[index] = value;
		setValues(newValues);

		onValuesChange?.(newValues); // 부모 컴포넌트로 변경된 값을 전달
	};

	return (
		<div className=' bg-neutral-50 rounded justify-start items-center flex w-full'>
			<div className='w-full flex gap-2 flex-wrap items-center'>
				{options.map((option, index) => (
					<div className='relative w-[137px]' key={index}>
						<Input
							className='w-[137px] h-[32px] pl-4 pr-8 py-2 text-sm font-normal bg-white rounded border border-neutral-200 focus:outline-none'
							placeholder={option}
							value={values[index] || ''}
							onChange={(e) => handleInputChange(index, e.target.value)}
						/>
						<X className='absolute top-[6px] right-3 w-5 h-5 text-neutral-400 cursor-pointer' onClick={() => handleRemoveOption(index)} />
					</div>
				))}
				{options.length < 10 && (
					<Button className='bg-neutral-200 rounded min-h-[32px] h-[32px]' onClick={handleAddOption}>
						추가
					</Button>
				)}
			</div>
		</div>
	);
};

export default OptionInputComponent;
