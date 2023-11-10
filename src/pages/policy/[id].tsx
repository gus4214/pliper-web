import React, { FC } from 'react';
import 'react-notion-x/src/styles.css';
import { useRouter } from 'next/router';
import { NotionRenderer } from 'react-notion-x';
import { NotionAPI } from 'notion-client';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Modal } from 'react-notion-x/build/third-party/modal';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { ExtendedRecordMap } from 'notion-types';

const notion = new NotionAPI();

interface PolicyProps {
	recordMap: ExtendedRecordMap;
}

const Policy: FC<PolicyProps> = ({ recordMap }) => {
	const router = useRouter();
	const { id } = router.query; // notion 공개용 ID

	return (
		<div>
			<NotionRenderer
				disableHeader // notion 헤더 안보이도록
				components={{
					Collection,
					Modal,
					nextImage: Image, // Next 이미지 (optimization) 사용하고 싶을 경우 해당 컴포넌트 전달
				}} // 사용할 컴포넌트들
				recordMap={recordMap}
				fullPage={true} // 전체 페이지 설정
				mapPageUrl={(pageId) => `/policy/${pageId}`} // 중첩 포스트 컬렉션들 클릭시 해당 url로 이동 되도록 설정
				rootPageId={id as string} // 첫 root 페이지 ID
			/>
		</div>
	);
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<PolicyProps> = async (context) => {
	const pageId = (context.params?.id as string) || 'ec7a3dc929c74fd9a3eaf2f1db37ae02';
	const recordMap = await notion.getPage(pageId);

	return {
		props: {
			recordMap,
		},
	};
};

export default Policy;
