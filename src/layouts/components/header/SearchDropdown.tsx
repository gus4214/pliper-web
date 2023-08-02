import SearchIcon from '@/src/components/atoms/icons/SearchIcon';
import React from 'react';
import { Button } from 'react-daisyui';

const SearchDropdown: React.FC = () => {
	return (
		<>
			<Button size='sm' color='ghost' shape='circle'>
				<SearchIcon />
			</Button>
		</>
	);
};

export default SearchDropdown;
