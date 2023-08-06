import { SearchOutline } from 'heroicons-react';
import React from 'react';
import { Button } from 'react-daisyui';

const SearchDropdown: React.FC = () => {
	return (
		<>
			<Button size='sm' color='ghost' shape='circle'>
				<SearchOutline />
			</Button>
		</>
	);
};

export default SearchDropdown;
