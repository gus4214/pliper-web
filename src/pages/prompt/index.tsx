import PromptTemplate from '@/src/components/templates/prompt/PromptTemplate';
import {NextPage} from 'next';
import {Seo} from "@/src/components/modules/@common/seo/Seo";

const PromptPage: NextPage = () => {
    return <>
        <Seo title={'프롬프트 템플릿 목록 검색'} />
        <PromptTemplate/>
    </>;
};

export default PromptPage;
