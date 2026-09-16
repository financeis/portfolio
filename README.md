# 김용운 — Research portfolio

화이트와 그린을 사용한 학술 프로필 형태의 반응형 정적 페이지입니다. 소개·채권 운용·매크로 투자전략 관심 분야와 프로젝트 목록, 경력, 학력, AI 활용 도구, 연락처로 구성됩니다. 빌드 도구나 패키지 설치 없이 GitHub Pages에서 실행할 수 있습니다.

## 미리보기

프로젝트 루트에서 다음 명령을 실행하고 http://localhost:4173 에 접속합니다.

```sh
node server.mjs
```

`index.html`을 브라우저에서 직접 열어도 사용할 수 있습니다.

## 수정할 곳

- `index.html`: 소개, 이력, 학력, 연락처
- `projects.js`: 기존 프로젝트 원문과 목록에 표시할 연구 유형·요약·분류
- `styles.css`: 색상, 글꼴, 여백, 반응형 레이아웃
- `app.js`: 프로젝트 목록, 분류 필터, 상세 창
- `images/`: 기존 프로필과 프로젝트 원본 이미지

프로젝트를 추가하려면 `projects` 객체에 새 번호를 추가하세요. 필수 항목은 `date`, `title`, `desc`, `highlights`, `tags`입니다. 목록 표시 속성인 `typeLabel`(연구 유형), `abstract`(요약), `categories`(분류), `discipline`(상세 창 분야), `cardTags`(주요 주제)도 같은 항목 안에 넣을 수 있습니다.

전체 목록은 처음에 대표 프로젝트와 최신 일반 프로젝트 3개를 표시합니다. 하단 버튼으로 전체를 펼치거나 접을 수 있고, 분류 필터에서는 해당 항목을 모두 표시합니다. 필터를 바꾸고 전체로 돌아오면 다시 기본 목록으로 접힙니다. 카드의 설명·주제·링크와 상세 내용은 유지합니다.

- 분류: `strategy`, `data`, `award` (복수 지정 가능)
- `image`: 상세 창의 원본 이미지 경로 (선택)
- `github`: 프로젝트 저장소 URL (선택)

프로젝트는 제목, 연구 유형, 요약, 주요 주제, 상세 내용 및 코드 링크 순서로 표시됩니다. 프로젝트 상세 창에서는 기존 원본 자료를 제공합니다. NH투자증권 PrimeBrokerage본부 수탁솔루션부 인턴 경력(2026.06–2026.08)은 제공된 경력기술서를 바탕으로 요약했습니다. 학력과 그 외 기존 활동은 원본 내용을 바탕으로 유지합니다.

## Research Desk 대표 프로젝트

프로젝트 목록 첫 항목에서 `research-desk/index.html` 상세 페이지로 이동합니다. 실제 앱의 보고서 비교, 기업 라이브러리, 투자 논리, 커버리지 화면을 탭으로 전환하고 확대할 수 있습니다. 캡처는 정적 이미지이며 실제 앱의 API나 로그인 정보를 사용하지 않습니다.

- `research-desk/`: 소개 페이지와 실제 캡처 6장
- `research-desk-card.css`: 대표 프로젝트 목록 미리보기 스타일
- `projects.js`: 7번 항목. `featured`로 우선 표시, `caseStudy`로 상세 페이지 연결, `logo`로 목록 로고 지정

## Mini-Factory 투자전략 실험 파이프라인

`projects.js`의 9번 항목으로, 매크로·투자전략과 AI 활용·데이터 분석 분류에 표시합니다. 여러 투자전략 가설을 일관된 아키텍처에서 구현·백테스트하고 채택 여부를 판단하는 연구 기반으로 소개합니다. AI를 활용한 가설 구현은 프로젝트가 지원하려는 연구 흐름을 뜻하며, 저장소 자체에 AI가 전략을 생성하거나 자동 채택하는 기능이 있다는 의미는 아닙니다. 상세 창의 `research` 속성은 구성 요약(`facts`), 설계 설명 제목(`heading`), 공통 아키텍처·실험 흐름(`approaches`)을 담습니다. 이 속성이 없는 프로젝트는 기존 상세 구성을 사용합니다.

내용은 [원본 저장소](https://github.com/financeis/MiraeAsset_Dec_17)의 `master` 브랜치를 확인해 작성했습니다.

- 전략: `src/strategies/macro_rotation.py`, `src/strategies/momentum.py`
- 데이터 구조와 지표: `docs/schema.md`, `src/db/schema.py`, `src/db/store.py`, `src/features/build.py`
- 평가와 리포트: `src/backtest/engine.py`, `src/backtest/metrics.py`, `src/report/render_md.py`, `src/report/plots.py`
- 실행 구성과 기본값: `run.py`, `src/config.py`

검토 범위: 공개 코드를 읽고 설계·구현을 요약했으며 실제 백테스트를 실행하지 않았습니다. 저장소에는 실행 결과가 없고, `run.py`가 가져오는 `src/data/ingest.py`와 `src/data/quality.py`도 포함되어 있지 않습니다. 따라서 수집·품질 검사 전체의 실행 성공이나 수익률 성과를 주장하지 않습니다. 모멘텀의 3년 학습·다음 해 적용은 초기 기본값 구간 이후의 동작이며, 파라미터 선택에는 비용 차감 전 샤프를 사용합니다.

## 경기국면 기반 전술적 자산배분 연구

`projects.js`의 1번 항목은 논문 재구현의 범위, 미래 정보 유입을 줄이기 위한 설계, 검증의 한계를 함께 소개합니다. 목록 요약과 상세 창에 네 모형·배분 규칙 비교, 과거 공개본과 발표 지연, 48개월 학습 구간 내 전처리·국면 추정을 반영했습니다.

내용은 [원본 저장소 README](https://github.com/financeis/Seminar_final)와 [재구현 보고서](https://github.com/financeis/Seminar_final/blob/master/reports/reproduction/report/report.md)를 확인해 작성했습니다. 이번 소개 수정 과정에서 백테스트를 새로 실행하지는 않았습니다. 전체 기본실험의 저장 결과와 짧은 구간의 대조·민감도 검사를 구분하며, 실제 최초 발표 시각·원자료 차이·Ridge 내부 검증 가정·비용 0 가정·최신 코드 전체 재실행의 한계를 명시합니다.

## 배포

배포 주소: [김용운 Portfolio](https://financeis.github.io/portfolio/)

GitHub 저장소 `financeis/portfolio`의 **Settings → Pages → Deploy from a branch → main / (root)** 설정을 사용합니다. 변경 사항을 `main`에 커밋하고 푸시하면 GitHub Pages가 자동으로 배포합니다.

- 별도 빌드나 서버 설치가 필요 없는 HTML·CSS·JavaScript 정적 사이트입니다.
- 루트의 `.nojekyll`로 Jekyll 처리 없이 정적 파일을 제공합니다.
- 메인 페이지는 `index.html`, Research Desk 상세 페이지는 `research-desk/index.html`입니다.
- 이미지·스크립트·페이지 이동은 상대 경로를 사용해 `/portfolio/` 하위 경로에서도 동작합니다.
- `server.mjs`는 로컬 미리보기 전용이며, GitHub Pages에서 실행하지 않습니다.
- Google Fonts에 연결되지 않으면 시스템 글꼴을 사용합니다.

배포 상태는 저장소의 **Actions → pages build and deployment** 또는 **Settings → Pages**에서 확인합니다.
