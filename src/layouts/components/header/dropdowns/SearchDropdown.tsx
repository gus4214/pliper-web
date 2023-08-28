import { SearchOutline } from 'heroicons-react';
import React from 'react';
import { Button } from 'react-daisyui';

interface SearchDropdownProps {
	onClick: () => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ onClick }) => {
	return (
		<>
			<Button size='sm' color='ghost' shape='circle' onClick={onClick}>
				<SearchOutline />
			</Button>
		</>
	);
};

export default SearchDropdown;
