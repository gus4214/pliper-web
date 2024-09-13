// pages/api/chat.js

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Only POST requests allowed' });
	}

	const { userInput } = req.body;

	if (!userInput) {
		return res.status(400).json({ message: 'User input is required' });
	}

	// GPTs의 기본 프롬프트 구조를 유저 입력을 바탕으로 구성
	const promptTemplate = `
    당신은 프롬프트 생성기입니다. 사용자가 입력한 정보를 바탕으로 프롬프트를 생성합니다.
    입력된 정보: "${userInput}"
  
    결과:
    - 역할(Role): 사용자가 요청한 역할을 설명합니다.
    - 지시사항(Instructions): 사용자가 달성하고자 하는 목표에 따라 적절한 단계를 제공합니다.
    - 출력값(Output): 예상되는 출력값을 설명합니다.
    `;

	try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // API Key는 .env 파일에 저장하세요
			},
			body: JSON.stringify({
				model: 'gpt-4o-mini', // 사용할 모델
				messages: [{ role: 'system', content: promptTemplate }], // 사용자 입력 기반의 프롬프트 전달
			}),
		});

		const data = await response.json();

		if (response.ok) {
			res.status(200).json({ result: data.choices[0].message.content });
		} else {
			res.status(500).json({ message: data.error.message });
		}
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
	}
}
