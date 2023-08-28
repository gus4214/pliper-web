import { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	console.log(error);
	return (
		<div>
			<h1>정보를 불러오는데 실패하였습니다</h1>
			<button onClick={resetErrorBoundary}>다시 시도</button>
		</div>
	);
}
