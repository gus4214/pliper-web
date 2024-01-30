import { Button } from 'react-daisyui';
import { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	console.log("🚀 ~ file: ErrorFallback.tsx:5 ~ ErrorFallback ~ error:", error)
	return (
		<div>
			<h1>정보를 불러오는데 실패하였습니다</h1>
			<Button onClick={resetErrorBoundary}>다시 시도</Button>
		</div>
	);
}
