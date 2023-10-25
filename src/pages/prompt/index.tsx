import PromptTemplate from '@/src/components/templates/prompt/PromptTemplate';
import {NextPage} from 'next';
import {Seo} from "@/src/components/modules/@common/seo/Seo";

const PromptPage: NextPage = () => {
    return <>
        <Seo/>
        <PromptTemplate/>
    </>;
};

export default PromptPage;
