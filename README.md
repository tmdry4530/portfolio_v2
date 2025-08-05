# Portfolio V2

정승교의 포트폴리오 웹사이트입니다. Next.js, TypeScript, Tailwind CSS를 사용하여 구축되었습니다.

## 🚀 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: CSS Transitions

## 📁 프로젝트 구조

```
Portfolio_V2/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # 메인 페이지 (리팩토링됨)
├── components/
│   ├── sections/         # 섹션별 컴포넌트
│   │   ├── IntroSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── FooterSection.tsx
│   │   └── index.ts
│   ├── ui/              # shadcn/ui 컴포넌트
│   ├── navigation.tsx
│   ├── animated-background.tsx
│   └── theme-provider.tsx
├── data/                # JSON 데이터 파일들
│   ├── techStack.json
│   ├── projects.json
│   ├── experiences.json
│   ├── socialLinks.json
│   └── contactInfo.json
├── lib/
│   ├── data.ts          # 데이터 import 및 타입 정의
│   └── utils.ts
└── styles/
    └── globals.css
```

## 🎯 주요 기능

### 컴포넌트 구조 개선

- **모듈화**: 각 섹션을 독립적인 컴포넌트로 분리
- **재사용성**: Props를 통한 데이터 주입으로 재사용 가능
- **타입 안전성**: TypeScript 인터페이스로 타입 정의
- **데이터 분리**: JSON 파일로 데이터 관리

### 섹션별 컴포넌트

1. **IntroSection**: 타입라이터 효과가 있는 인트로 섹션
2. **TechStackSection**: 기술 스택 그리드 레이아웃
3. **ProjectsSection**: 프로젝트 카드 레이아웃
4. **ExperienceSection**: 타임라인 형태의 경력 섹션
5. **FooterSection**: 연락처 및 소셜 링크

## 🛠️ 개발 가이드

### 새로운 섹션 추가

1. `lib/data.ts`에 타입 정의 추가
2. `data/` 디렉토리에 해당 JSON 파일 생성
3. `components/sections/`에 새 컴포넌트 생성
4. `components/sections/index.ts`에 export 추가
5. `app/page.tsx`에서 컴포넌트 사용

### 데이터 수정

- **기술 스택**: `data/techStack.json` 수정
- **프로젝트**: `data/projects.json` 수정
- **경력**: `data/experiences.json` 수정
- **소셜 링크**: `data/socialLinks.json` 수정
- **연락처**: `data/contactInfo.json` 수정

### JSON 데이터 구조

```json
// techStack.json 예시
[
  {
    "name": "React",
    "icon": "⚛️",
    "description": "React 생태계에 대한 고급 숙련도"
  }
]

// projects.json 예시
[
  {
    "title": "프로젝트 제목",
    "description": "프로젝트 설명",
    "image": "/image.gif",
    "tech": ["React", "TypeScript"],
    "github": "https://github.com/...",
    "live": "https://..."
  }
]
```

## 🎨 스타일링

- Tailwind CSS를 사용한 유틸리티 클래스 기반 스타일링
- 다크/라이트 테마 지원
- 반응형 디자인
- CSS 트랜지션을 통한 부드러운 애니메이션

## 📱 반응형 디자인

- 모바일 우선 접근법
- 그리드 시스템을 활용한 레이아웃
- 브레이크포인트별 최적화된 UI

## 🔧 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## �� 라이센스

MIT License
