import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const code = req.query.code;
	// Handle the code, get the token, etc.
	// ...

	// After handling, redirect to the desired client-side page:
	res.redirect('/');
};
