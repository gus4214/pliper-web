import { X } from 'heroicons-react';
import React, { useState } from 'react';
import { Button, Input } from 'react-daisyui';

interface OptionInputComponentProps {
	onValuesChange?: (values: string[]) => void;
}

const OptionInputComponent: React.FC<OptionInputComponentProps> = ({ onValuesChange }) => {
	const [options, setOptions] = useState<string[]>(['옵션값1']); // 초기 상태를 ['옵션값1']로 변경합니다.
	const [values, setValues] = useState<string[]>([]);

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
		<div className=' bg-neutral-100 rounded justify-start items-center flex w-[442px]'>
			<div className='w-[442px] flex gap-2 overflow-x-auto overflow-y-hidden'>
				{options.map((option, index) => (
					<div className='relative w-[112px]' key={index}>
						<Input
							className='w-[112px] pl-4 pr-8 py-2 bg-white rounded border border-neutral-200 focus:outline-none'
							placeholder={option}
							value={values[index] || ''}
							onChange={(e) => handleInputChange(index, e.target.value)}
						/>
						<X
							className='absolute top-[15px] right-3 w-5 h-5 text-neutral-400 cursor-pointer'
							onClick={() => handleRemoveOption(index)}
						/>
					</div>
				))}
				{options.length < 10 && (
					<Button className='bg-neutral-200' onClick={handleAddOption}>
						추가
					</Button>
				)}
			</div>
		</div>
	);
};

export default OptionInputComponent;
