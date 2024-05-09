# 팀 소개
<img width="829" alt="스크린샷 2024-05-08 오전 4 36 06" src="https://github.com/sinbunsetak/pliper-web/assets/98795239/9e615096-409f-4e16-a175-061bce23ed9d">

<br>

# 서비스
- 프롬프트 플랫폼 : [pliper.kr](https://www.pliper.kr)
- 안내 가이드 : [노션 페이지](https://www.notion.so/pliper/PLIPER-AI-ec7a3dc929c74fd9a3eaf2f1db37ae02?pvs=4)
- 크롬 도구 : [chrome 웹 스토어 - Pliper](https://chromewebstore.google.com/detail/pliper-%EB%8B%B9%EC%8B%A0%EC%9D%98-ai-%ED%8C%8C%ED%8A%B8%EB%84%88/gbcbnablkikcookebdbadkgiblcakeff?hl=ko&utm_source=ext_sidebar)

<br>

# 서비스 기획의도 
> ### 배경
**AI로 인한 위협이 아닌 시너지를 낼 수 있는 환경이 필요**
- **시장 동향**
  - 2021년 ChatGPT의 출시 이후, 자연어 처리 및 AI 관련 산업이 급부상함에 따라 자금의 흐름이 집중되고 있습니다. 이는 예전의 인터넷 버블과 비트코인 초기 시장의 흐름과 유사합니다.
- **산업 내 반응**
  - RNN 기반의 빅테크 기업들은 AI 제품을 출시하여 시장 점유를 목표로 하고 있으며, 이에 따라 스타트업들은 AI를 비즈니스에 어떻게 적용할지에 대한 다양한 반응을 보이고 있습니다.
- **기술의 필요성**
  - ChatGPT와 같은 자연어 처리 기술은 대화형 인터페이스, 챗봇, 음성인식 등의 서비스 개발에 유용하며, 이를 통한 사람과 AI의 연결이 큰 과제로 부상하고 있습니다.
- **프로젝트의 출발점**
  - 유저가 AI 학습 지식 없이도 원하는 결과물을 적용할 수 있는 도구를 통해 사람과 AI, 기술과 기술 간의 상호작용을 통해 문제를 해결하고자 합니다.

> ### 문제 정의
1) **비즈니스의 문제**
- **기존 업무 프로세스의 한계와 정보 오버로드 문제**
  - 현대의 업무 환경에서는 정보의 양이 많아짐에 따라 개인의 기억력과 처리 능력의 한계로 인해 업무의 효율성과 정확성이 저하될 수 있습니다.
- **기록되는 지식&노하우 노후화 문제**
  - 다양한 플랫폼과 도구를 사용하며 얻은 정보와 데이터를 효과적으로 관리하고 접근하기 어렵습니다.(시간에 따른 기존 지식의 노후화)
- **접근성 문제**
  - 도구는 많아지고 있으나 그만큼 AI의 복잡성의 증가로 인해 많은 기업과 개인들은 자연어 처리 기술의 활용에 어려움을 겪고 있습니다.
2) **기술적인 문제**
- **인터페이스 문제**
  - 사람과 AI를 효과적으로 연결시키는 인터페이스의 필요성이 대두되고 있습니다.
- **프롬프트 검증 문제**
  - 프롬프트의 올바른 작성과 검증이 필요하며, 이를 위한 도구나 방법론이 부족합니다.

> ### 솔루션
**"하루를 더욱 생산적으로 만들어주는 AI 파트너 - PLIPER"**
- **"플립 기능" - 세컨드 브레인 제공"**
  - Pliper는 사용자의 업무 능력 향상을 위해 세컨드 브레인 역할을 수행합니다.
- **"템플릿 제공" - LLM 사전 학습 감소 및 최적화**
  - 사용자가 LLM의 사전 지식 없이도 필요한 프롬프트를 가져다 손쉽게 사용할 수 있습니다.
- **"정확도 기능" - 피드백 중심의 할루시네이션 최소화**
  - 사용자의 피드백을 통해 프롬프트의 할루시네이션을 최소화하며, 검증된 AI 프롬프트를 선별하는데 도움을 줍니다.

<br>

# 제품 개발 프로세스
<img width="1024" alt="스크린샷 2024-05-06 오후 3 44 00" src="https://github.com/sinbunsetak/pliper-web/assets/98795239/40ebddb7-a7c9-4491-b2ec-8541970ae83f">

- **개발 기간** : 2023.06 ~ 2023.11
- **개발 인원** : 프론트엔드 1명, 백엔드 1명, 디자이너 1명
- **개발 스택** 
  - 인프라 : AWS
  - 프론트엔드 : React.js, Next.js, TailwindCSS
  - 백엔드 : Golang, fiber f/w
  - 배포 : Github CI
  - 디자인 : Figma

<br>

# 주요 기능 GIF
### 메인 페이지
- 가장 많은 북마크로 저장된 프롬프트, 인기 검색어, 업무 카테고리 프롬프트, 일상 카테고리 프롬프트, AI 플랫폼 리스트
  
  ![메인페이지](https://github.com/sinbunsetak/pliper-web/assets/98795239/2e052056-818a-4781-8334-7813c19eb6ec)
<br>

### 인증/로그인
- 회원가입/로그인 : 소셜 로그인(구글, 네이버) 구현
- 유저 알림창 구현
  
  ![로그인](https://github.com/sinbunsetak/pliper-web/assets/98795239/785a5784-ce10-47ff-92f4-90b08d536c5f)
<br>

### 검색창
- 최근 검색어, 인기 검색어
- 프롬프트 목록 검색 기능

  ![검색창](https://github.com/sinbunsetak/pliper-web/assets/98795239/85d14290-dad9-43bf-b672-c1a119ff413c)
<br>

### 프롬프트 템플릿 생성 페이지
프롬프트 생성 기능은 핵심기능 중 하나입니다.
- 프롬프트의 제목, 페르소나, 카테고리, 플랫폼 선택

  ![템플릿 작성1](https://github.com/sinbunsetak/pliper-web/assets/98795239/37ca401c-6d6d-4548-91a1-49768b340328)

- 프롬프트 소개 및 템플릿 작성

  ![템플릿 작성2](https://github.com/sinbunsetak/pliper-web/assets/98795239/c79b80d2-a38d-45aa-8a6f-95ac498fc750)

- 작성된 프롬프트 미리보기
  
  ![템플릿 작성3](https://github.com/sinbunsetak/pliper-web/assets/98795239/057d406d-27e2-4048-96be-294ae3241986)

- 뒤로가기 클릭 시 작성한 템플릿 내용 저장 기능

  ![템플릿 작성4](https://github.com/sinbunsetak/pliper-web/assets/98795239/418b240e-15e6-4127-82d3-10364de712c4)
<br>

### 프롬프트 목록 페이지
- 프롬프트 클릭 시 북마크 기능
- 프롬프트 리스트 무한 스크롤

  ![프롬프트 목록](https://github.com/sinbunsetak/pliper-web/assets/98795239/dcba56cc-e0c5-49d7-a1f0-4303a39efbe8)

- 프롬프트 필터 및 검색 기능
  
  ![프롬프트 목록2](https://github.com/sinbunsetak/pliper-web/assets/98795239/ecd41326-de0b-4f77-8ce6-ffed84383e19)
<br>

### 프롬프트 상세 페이지
- 프롬프트 템플릿 뷰어 기능

  ![프롬프트 상세](https://github.com/sinbunsetak/pliper-web/assets/98795239/8616c3df-3a9e-4e29-9e36-2e150068d01e)
<br>

### 마이 페이지
- 북마크, 내가 작성한 프롬프트, 히스토리, 좋아요, 정확도 리스트

  ![마이페이지1](https://github.com/sinbunsetak/pliper-web/assets/98795239/f4417f0e-2db6-4153-a28d-7c0c398660fa)

- 내가 작성한 프롬프트 게시 여부, 수정, 삭제 기능

  ![마이페이지2](https://github.com/sinbunsetak/pliper-web/assets/98795239/a25d78ea-2ecf-4558-b468-a88421d11f62)

  


<br>

# 협업 방식
**협업 도구**
- 커뮤니케이션 : Slack, Conflunce, Jira
- 온라인 미팅 : 게더타운
- 코드 관리 : Github
  
Slack을 통해 주로 온라인 커뮤니케이션을 하고 문서나 작업 건은 Conflunce, Jira로 정리하였습니다.
<p align="center">
 <img src="https://github.com/sinbunsetak/pliper-web/assets/98795239/28399683-5bce-43e5-87eb-ab24aea66dcb" alt="animated" />
</p>
<p align="center">
 <img width="222" alt="스크린샷 2024-05-06 오후 4 33 44" src="https://github.com/sinbunsetak/pliper-web/assets/98795239/6e3869c0-0491-45d2-8f11-fbbb0a78af56">
</p>

게더타운을 통해 정기적으로 미팅 시간을 가졌고 항상 회의록을 남겨 목표를 공유했습니다.
<p align="center">
  <img align="center" width="219" alt="스크린샷 2024-05-06 오후 3 56 10" src="https://github.com/sinbunsetak/pliper-web/assets/98795239/4d409af3-07f3-4705-babd-b6642e065245">
</p>
