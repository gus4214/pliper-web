import React, { FormEvent, useState } from 'react';

const PrototypePage = () => {
	const [userInput, setUserInput] = useState('');
	const [chatResponse, setChatResponse] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ userInput }),
			});

			const data = await response.json();
			console.log('🚀 ~ handleSubmit ~ data:', data);
			if (response.ok) {
				setChatResponse(data.result);
			} else {
				setChatResponse('Error: ' + data.message);
			}
		} catch (error) {
			setChatResponse('Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Ask something...' required />
				<button type='submit'>Send</button>
			</form>

			{loading ? <p>Loading...</p> : <p>{chatResponse}</p>}
		</div>
	);
};

export default PrototypePage;
