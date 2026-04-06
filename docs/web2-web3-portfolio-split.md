# Web2 / Web3 포트폴리오 분리 설계안

## 목적

하나의 포트폴리오 안에서 서로 다른 방문 목적을 가진 사용자를 명확하게 분리한다.

- `/` : Web2 포트폴리오
- `/web3` : Web3 포트폴리오
- `#intro`, `#projects` 등 해시는 각 페이지 내부 섹션 이동용으로만 사용

## 왜 `#/web3` 대신 `/web3` 인가

- Next.js App Router와 자연스럽게 맞는다.
- SEO, 공유 링크, 메타데이터 분리에 유리하다.
- URL이 더 깔끔하다.
- 해시 라우팅은 페이지 구분보다 섹션 이동 용도에 더 적합하다.

권장 예시:

- `https://chamdom.dev/`
- `https://chamdom.dev/web3`
- `https://chamdom.dev/web3#projects`

## 정보 구조(IA)

### `/` - Web2 포트폴리오

강조 포인트:

- Frontend / Full Stack 역량
- 제품 개발 경험
- 사용자 가치와 서비스 운영
- 생산성, 자동화, SaaS 성격의 프로젝트

### `/web3` - Web3 포트폴리오

강조 포인트:

- Blockchain / Smart Contract 역량
- 온체인 로직과 지갑 인증 경험
- 프로토콜 이해 및 해커톤 경험
- Solidity, Ethers, Foundry, Hardhat 중심 프로젝트

## 현재 레포 기준 추천 구조

```txt
app/
  layout.tsx
  page.tsx
  web3/
    page.tsx
  resume/
    page.tsx
  test/
    page.tsx

components/
  navigation.tsx
  portfolio/
    portfolio-page.tsx
    track-switch.tsx

components/sections/
  IntroSection.tsx
  TechStackSection.tsx
  ProjectsSection.tsx
  ExperienceSection.tsx
  FooterSection.tsx

lib/
  portfolio/
    types.ts
    web2.ts
    web3.ts
```

## 핵심 설계 원칙

### 1. 페이지는 2개로 분리

- `app/page.tsx` → Web2 엔트리
- `app/web3/page.tsx` → Web3 엔트리

두 페이지 모두 공통 조립 컴포넌트를 사용하고, 데이터만 다르게 주입한다.

### 2. 공통 레이아웃 + 트랙별 콘텐츠

공통 유지:

- `Navigation`
- `AnimatedBackground`
- 공통 섹션 구조
- 전반적인 브랜드 톤

트랙별 분리:

- Intro 문구
- Tech Stack 강조 순서
- Projects 목록
- Experience 강조 포인트
- 메타데이터

### 3. 경로와 해시의 역할 분리

- 경로(path): 트랙 구분
- 해시(hash): 섹션 이동

예시:

- `/#projects`
- `/web3#projects`

## 구현 방식

### 공통 페이지 조립기

`components/portfolio/portfolio-page.tsx`

역할:

- 현재 `app/page.tsx`의 조립 로직 이동
- 공통 UI 렌더링
- 트랙에 따라 서로 다른 데이터 표시

예상 props:

```ts
type PortfolioPageProps = {
  track: "web2" | "web3";
  content: PortfolioContent;
};
```

렌더링 대상:

- `AnimatedBackground`
- `Navigation`
- `IntroSection`
- `TechStackSection`
- `ProjectsSection`
- `ExperienceSection`
- `FooterSection`

### 트랙 전환 UI

`components/navigation.tsx`에 `Web2 | Web3` 전환을 추가한다.

권장 동작:

- `Web2` 클릭 → `/`
- `Web3` 클릭 → `/web3`
- 섹션 버튼 클릭 → 현재 페이지 내 scroll

복잡도를 낮추기 위해 전환 UI는 `components/portfolio/track-switch.tsx`로 분리하는 것을 권장한다.

## 데이터 구조 제안

### 추천안: 트랙별 데이터 파일 분리

```txt
lib/
  portfolio/
    types.ts
    web2.ts
    web3.ts
```

`types.ts` 예시:

```ts
import type { Metadata } from "next";
import type {
  ContactInfo,
  Experience,
  Project,
  SocialLink,
  TechStackCategory,
} from "@/lib/data";

export type PortfolioTrack = "web2" | "web3";

export interface PortfolioContent {
  track: PortfolioTrack;
  metadata: Metadata;
  contactInfo: ContactInfo;
  techStack: TechStackCategory;
  projects: Project[];
  experience: Experience[];
  socialLinks: SocialLink[];
}
```

### 빠른 1차 구현안

기존 JSON을 유지하면서 프로젝트만 필터링할 수도 있다.

- Web2: `Full Stack Project`
- Web3: `Blockchain Project`

장점:

- 빠르게 적용 가능
- 변경 범위 작음

단점:

- Intro, Experience, Metadata까지 분리하기엔 한계가 있음

### 권장 최종안

프로젝트뿐 아니라 소개 문구, 기술 스택, 경험 강조점, 메타데이터까지 달라질 수 있으므로 `web2.ts`, `web3.ts` 분리를 권장한다.

## 라우트별 페이지 책임

### `app/page.tsx`

```tsx
import PortfolioPage from "@/components/portfolio/portfolio-page";
import { web2Portfolio } from "@/lib/portfolio/web2";

export default function Page() {
  return <PortfolioPage track="web2" content={web2Portfolio} />;
}
```

### `app/web3/page.tsx`

```tsx
import PortfolioPage from "@/components/portfolio/portfolio-page";
import { web3Portfolio } from "@/lib/portfolio/web3";

export default function Page() {
  return <PortfolioPage track="web3" content={web3Portfolio} />;
}
```

## 메타데이터 전략

현재 루트 메타데이터는 블록체인 쪽으로 편향되어 있으므로, Web2/Web3 분리에 맞춰 재설계가 필요하다.

권장 방식:

- `app/layout.tsx` : 범용 기본 메타데이터
- `app/page.tsx` : Web2 메타데이터
- `app/web3/page.tsx` : Web3 메타데이터

예시 방향:

- `/` : Frontend / Full Stack 중심
- `/web3` : Blockchain / Smart Contract 중심

또한 `canonical`도 페이지별로 분리한다.

- `/` → `https://chamdom.dev`
- `/web3` → `https://chamdom.dev/web3`

## 네비게이션 UX 권장안

데스크톱 예시:

```txt
<Chamdom />   [Web2] [Web3]   01 Intro 02 Tech Stack 03 Projects 04 Experience
```

모바일 예시:

- Sheet 내부에 트랙 전환
- 그 아래 섹션 링크 목록

원칙:

- 트랙 전환은 페이지 이동
- 섹션 링크는 스크롤 이동

## 구현 순서

1. `components/portfolio/portfolio-page.tsx` 생성
2. `lib/portfolio/types.ts`, `web2.ts`, `web3.ts` 생성
3. `app/page.tsx`를 Web2 엔트리로 정리
4. `app/web3/page.tsx` 생성
5. `components/navigation.tsx`에 track switch 추가
6. 라우트별 metadata/canonical 분리
7. 아래 항목 검증

## 검증 체크리스트

- `/` 정상 렌더링
- `/web3` 정상 렌더링
- `/#projects` 섹션 이동
- `/web3#projects` 섹션 이동
- 모바일 메뉴에서 트랙 전환 가능
- 라우트별 title / description / canonical 확인

## 결론

이 레포에서는 다음 구조가 가장 현실적이다.

- 공통 페이지 조립기 1개
- 트랙 데이터 2개
- 라우트 2개 (`/`, `/web3`)

즉, **공통 UI는 유지하고 콘텐츠와 메타데이터만 트랙별로 분리하는 방식**이 가장 작은 변경으로 가장 큰 효과를 낸다.
