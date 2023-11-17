import { Html, Head, Main, NextScript } from 'next/document';
import {pretendard} from "@/src/styles/font";

export default function Document() {
	return (
		<Html lang='ko' className={` ${pretendard.className}`} >
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
