// Existing portfolio content. Add a numbered entry here to add a project.
const projects = {
            9: {
                date: '2025.12',
                title: 'Mini-Factory — 투자전략 실험을 위한 공통 파이프라인',
                github: 'https://github.com/polarbear091919/MiraeAsset_Dec_17',
                categories: ['strategy', 'data'],
                typeLabel: '투자전략 연구 · 공통 아키텍처 설계',
                discipline: 'Reusable architecture & strategy research',
                abstract: '여러 투자전략 가설을 일관된 데이터·백테스트·리포트 구조에서 구현하고 비교하기 위한 Mini-Factory. 공통 입출력과 실행 기록을 바탕으로 실험을 반복하고, 전략의 채택·보류·폐기 판단을 돕는 연구 기반 설계.',
                desc: '여러 투자전략을 일관된 아키텍처와 파이프라인 안에서 구현·검증하기 위한 연구 기반입니다. AI를 활용해 투자 가설을 코드로 옮긴 뒤, 공통 데이터와 평가 구조에서 빠르게 백테스트하고 전략의 채택·보류·폐기를 판단하는 연구 흐름을 목표로 설계했습니다. 데이터 처리와 평가·기록 구조를 재사용해 전략별로 기반 코드를 다시 만드는 부담을 줄이고, 가설 구현과 검증을 반복하는 데 집중할 수 있도록 구성했습니다.',
                research: {
                    heading: '가설 구현부터 비교·판단까지',
                    facts: [
                        { value: '공통 입출력', label: '전략을 연결하는 기준' },
                        { value: '반복 실행', label: '조건을 바꿔 가설 검증' },
                        { value: '비교·판단', label: '결과와 실행 근거 축적' }
                    ],
                    approaches: [
                        {
                            label: '01 / SHARED ARCHITECTURE',
                            title: '여러 전략이 공유하는 분석 구조',
                            description: '데이터 처리·지표 생성·전략 로직·평가를 분리하고, 각 전략이 공통 형식의 비중을 출력하도록 구성했습니다.',
                            points: [
                                '원천 데이터와 파생 지표를 SQLite 스키마·복합키로 관리해 전략 간 재사용',
                                '전략 ID·날짜·종목별 비중을 공통 출력으로 정의해 동일 백테스터에 연결',
                                '매크로 전환·ETF 모멘텀을 같은 평가·리포트 흐름에 연결한 적용 예제 구현'
                            ]
                        },
                        {
                            label: '02 / EXPERIMENT & REVIEW',
                            title: '빠른 실험과 근거 있는 전략 판단',
                            description: '실행 조건과 결과를 함께 남겨, 가설을 수정하고 다시 평가하는 반복 과정을 지원하도록 설계했습니다.',
                            points: [
                                'CLI에서 기간·전략·거래비용 등 조건을 지정해 공통 진입점으로 실행',
                                'runs/<run_id>/에 파라미터·로그·결과를 묶어 실험 이력과 실패 원인 추적',
                                '성과·위험·회전율을 같은 형식의 리포트로 정리해 전략 검토와 채택 판단 지원'
                            ]
                        }
                    ]
                },
                highlights: [
                    '데이터 운영 설계 — 데이터별 마지막 적재일을 이용한 증분 갱신 구조와, 중복키·결측·이상치 등을 지표 생성 전에 점검하는 품질 검증 흐름 설계',
                    '모듈 연결 — 원천 데이터 → 품질 검증 → 파생 지표 → 전략 비중 → 백테스트 → 리포트로 단계와 입출력 구분',
                    '전략 적용 예제 — 매크로 전환·ETF 모멘텀을 공통 구조에 연결하고, 신호 시차·워크포워드·거래비용을 반영하는 평가 코드 구현',
                    '리포트 자동화 — 누적수익률·연환산 수익률·샤프·최대낙폭·회전율과 차트를 Markdown 리포트로 정리하는 코드 구성'
                ],
                highlightsTitle: '반복 가능한 전략 실험을 위한 설계',
                tags: ['Python', 'pandas', 'NumPy', 'SQLite', 'Matplotlib', 'Walk-forward'],
                cardTags: ['Research Architecture', 'Strategy Prototyping', 'Reproducible Backtesting']
            },
            7: {
                date: '2026.05–09',
                title: 'Research Desk — 증권 리포트 분석 워크스페이스',
                github: 'https://github.com/polarbear091919/telegram_report',
                featured: true,
                caseStudy: 'research-desk/index.html',
                logo: 'research-desk/assets/research-desk-logo.png',
                image: 'research-desk/assets/comparison.png',
                categories: ['data'],
                typeLabel: '대표 프로젝트 · 투자 리서치',
                discipline: 'Investment research workspace',
                abstract: '텔레그램 증권 리포트를 기업별로 정리하고, 선택한 보고서의 금융 정보를 구조화하는 웹앱. 같은 기준의 실적 추정치와 원문 근거를 연결하여 보고서 간 전망 변화를 비교합니다.',
                desc: '텔레그램 PDF 수집부터 기업 분류, 선택한 리포트의 LLM 분석, 근거 검증과 보고서 비교까지 연결한 개인 리서치 워크스페이스입니다. 금융 정보 항목과 비교 기준을 설계하고, Claude Code와 Codex를 활용하여 React·FastAPI 웹앱으로 구현했습니다.',
                highlights: [
                    '기업별 라이브러리에서 보고서를 선택하여 분석·비교하는 작업 흐름',
                    '기간·단위·회계 기준·시나리오가 일치하는 실적 추정치만 수치 비교',
                    '동일 발행처의 전망 수정과 다른 발행처 간 견해 차이를 구분',
                    '목표주가·실적·투자 논리·밸류에이션에 원문 페이지와 근거 연결',
                    '기존 분석 재사용, 실패 건 재시도, PDF 수동 검토 및 커버리지 탐색'
                ],
                tags: ['Python', 'React', 'FastAPI', 'Supabase', 'LangGraph', 'OpenAI API'],
                cardTags: ['Investment Research', 'Financial Document Analysis', 'Report Comparison']
            },
            1: {
                icon: '📈',
                gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
                image: 'images/경기국면.png',
                date: '2025.10',
                title: '경기국면 탐지 기반 전술적 자산배분 전략 논문 구현',
                github: 'https://github.com/polarbear091919/Seminar_final',
                desc: 'FRED-MD 거시경제 데이터를 활용한 2단계 경기국면 분류 및 자산배분 전략. PCA 기반 차원 축소 후 K-means 클러스터링으로 국면을 탐지하고, Markov Chain 예측과 Ridge 회귀를 결합한 TAA 모델.',
                highlights: [
                    'Daniel Cunha Oliveira et al.(2025)의 연구 방법론 기반',
                    '32개년 128개의 FRED-MD 월별 거시지표 분석 및 PCA 차원 축소',
                    '2단계의 K-means 클러스터링(코사인 거리 -> 유클리드 거리)',
                    'Markov Transition Matrix 기반 국면 전이 예측',
                    'Ridge 회귀 기반의 수익률 예측 및 자산 배분 시스템'
                ],
                tags: ['Python', 'PCA', 'K-means', 'Markov Chain', 'Ridge Regression', 'Asset Allocation']
            },
            2: {
                icon: '📄',
                gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
                image: 'images/10k.webp',
                date: '2025.09',
                title: '10-K Report 기반 기업 유사도 분석 시스템',
                github: 'https://github.com/polarbear091919/10-K-Report-Similarity',
                desc: 'SEC 10-K 보고서의 Business(Item 1) 및 Risk Factors(Item 1A) 섹션을 추출하여 OpenAI 임베딩 모델을 통해 기업 간 유사도를 계산하는 NLP 시스템.',
                highlights: [
                    'SEC API를 통한 S&P 500 기업 10-K 보고서 자동 수집',
                    '텍스트 청킹(8000자, 500자 오버랩)을 통한 대용량 문서 처리',
                    'OpenAI text-embedding-3 모델 기반 임베딩 벡터 생성',
                    '코사인 유사도 매트릭스 및 k-NN 알고리즘으로 유사 기업 탐색'
                ],
                tags: ['Python', 'OpenAI API', 'SEC API', 'Embedding', 'Cosine Similarity', 'k-NN']
            },
            3: {
                icon: '📊',
                gradient: 'linear-gradient(135deg, #4a1942 0%, #8e2de2 100%)',
                date: '2025.07',
                title: '기술적 지표 결합 스크리닝 시스템',
                github: 'https://github.com/polarbear091919/Indicator_Combining',
                desc: 'KOSPI와 S&P500 주식을 대상으로 기술적 지표 스코어링과 구루의 양적 방법론을 통한 주식 스크리닝 시스템. 기술적 지표의 경우, 주가에 따라 지표 가중치를 동적으로 조절하여 지표 별 중요도를 실시간으로 반영하는 적응형 모델.',
                highlights: [
                    'RSI, MACD, MA, OBV, ADX 등 다중 기술적 지표 통합 스코어링',
                    'ADX 기반 시장 상태(횡보/추세) 분류 및 동적 가중치 시스템',
                    'Guru의 투자전략을 모방한 재무 데이터 기반 조건 스크리닝 (현금흐름, 유동비율, 순이익률 등)',
                    '스크리닝 결과에 따라 실전 투자까지 진행'
                ],
                tags: ['Python', 'Selenium', 'Technical Analysis', 'Stock Investment']
            },
            4: {
                icon: '💼',
                gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
                image: 'images/자산배분전략.jpg',
                date: '2025.05',
                title: '교내금융학회 - 자산배분전략 주제 세미나 발표',
                github: null,
                desc: '교내금융학회에서 자산배분전략을 주제로 발표한 세미나. 전략적 자산배분(SAA)과 전술적 자산배분(TAA), 주식·채권 등 자산군별 배분과 포트폴리오 구성 방법을 검토하고 Black-Litterman 모형을 구현.',
                highlights: [
                    '미래에셋자산운용의 자산배분 펀드의 설계 및 운용 전략 분석',
                    '평균-분산 최적화(MVO)의 추정오차 및 코너 해 문제 분석',
                    'Black-Litterman 모형의 원리 소개 및 Python 구현',
                    '미국/글로벌 주식, 채권, 리츠, 원자재 ETF 유니버스로 BL 포트폴리오 구성'
                ],
                tags: ['Python', 'Black-Litterman', 'MVO', 'Asset Allocation']
            },
            5: {
                icon: '🏆',
                gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%)',
                image: 'images/iqc.webp',
                date: '2025.05',
                title: 'WorldQuant IQC 한국 본선 진출',
                github: null,
                desc: '글로벌 투자 대회 WorldQuant International Quant Championship에서 한국 본선 진출 및 컨설턴트 자격 획득.',
                highlights: [
                    '한국 본선 진출 및 컨설턴트 자격 획득',
                    '옵션 시장 데이터, 기술적 데이터, 대체 데이터(Social Buzz) 활용',
                    '샤프지수 1.25 이상의 알파 전략 개발',
                    'WorldQuant Brain API 기반 무작위 알파 자동 생성 시스템 구축'
                ],
                tags: ['WorldQuant Brain', 'Alpha Factor', 'Option data', 'Alternative Data']
            },
            8: {
                date: '2025.05',
                title: '타임폴리오 Road to Fund Manager 투자 대회 상위 10%',
                github: null,
                categories: ['strategy', 'award'],
                typeLabel: '투자 대회 · 상위 10%',
                discipline: 'Investment competition',
                abstract: '타임폴리오 Road to Fund Manager 투자 대회 상위 10% 달성. 탑다운 관점의 산업 분석과 수급 동향 분석을 바탕으로 주도주를 선별하여 투자.',
                desc: '2025년 5월 타임폴리오 Road to Fund Manager 투자 대회에서 상위 10%를 달성했습니다. 탑다운 관점에서 산업을 분석하고 수급 동향을 함께 검토하여, 시장 주도주를 선별하고 투자했습니다.',
                highlights: [
                    '타임폴리오 Road to Fund Manager 투자 대회 상위 10% 달성',
                    '탑다운 관점의 산업 분석을 통해 투자 대상 산업 검토',
                    '수급 동향을 분석하고 산업 분석과 결합하여 주도주 선별·투자'
                ],
                tags: ['Top-down Analysis', 'Industry Analysis', 'Market Flows', 'Stock Selection'],
                cardTags: ['Top-down Analysis', 'Industry Analysis', 'Market Flows']
            },
            6: {
                icon: '🥈',
                gradient: '#ffffff',
                image: 'images/nexon.png',
                date: '2022.11',
                title: '2022 넥슨-GSOK 논문 공모전 우수상 (2위)',
                github: null,
                desc: '이중차분법(DID)을 이용하여 전통 스포츠 구단의 e스포츠 참여가 구단의 온라인 브랜드 인지도에 미치는 영향을 실증 분석한 연구.',
                highlights: [
                    '이중차분법(DID)을 활용한 인과관계 분석',
                    '데이터 전처리 및 분석 담당',
                    'Stata와 Python을 이용한 계량분석',
                    '데이터 분석 파트 논문 작성'
                ],
                tags: ['Python', 'Stata', 'DiD(이중차분법)', 'Econometrics']
            }
        };

// Display metadata emphasizes macro research and investment strategy.
const presentation = {
  1: { categories: ['strategy'], typeLabel: '경기국면·자산배분 연구', discipline: 'Macro research & asset allocation', abstract: 'FRED-MD 거시경제지표로 경기국면을 분류하고, 국면 전이와 기대수익률을 추정하여 경기 변화에 따른 전술적 자산배분 전략 구현.', cardTags: ['Macroeconomics', 'Business Cycles', 'Asset Allocation'] },
  2: { categories: ['data'], typeLabel: '기업 공시 분석', discipline: 'Corporate disclosure analysis', abstract: 'SEC 10-K 보고서의 사업 내용과 위험요인을 텍스트로 분석하여 기업 간 유사성을 비교하는 시스템 구현. 공시 자료의 수집·처리와 기업 비교 분석에 활용.', cardTags: ['Corporate Disclosures', 'Risk Factors', 'Text Analysis'] },
  3: { categories: ['strategy', 'data'], typeLabel: '주식시장 데이터 분석', discipline: 'Market data analysis', abstract: 'KOSPI와 S&P 500 주식의 기술적 지표 및 재무 조건을 활용한 종목 스크리닝 시스템 구현. 시장 상태에 따른 지표 가중치 조절 및 투자 대상 탐색.', cardTags: ['Market Indicators', 'Financial Screening', 'Investment Analysis'] },
  4: { categories: ['strategy'], typeLabel: '교내금융학회 활동 · 세미나 발표', discipline: 'Asset allocation seminar', abstract: '전략적·전술적 자산배분의 개념과 주식·채권 등 자산군별 포트폴리오 구성 방법 발표. 평균-분산 최적화의 한계를 검토하고 Black-Litterman 모형 구현.', cardTags: ['Asset Allocation', 'Portfolio Construction', 'Black-Litterman'] },
  5: { categories: ['strategy', 'award'], typeLabel: '투자 대회 · 한국 본선 진출', discipline: 'Investment competition', abstract: 'WorldQuant International Quant Championship 한국 본선 진출 및 컨설턴트 자격 획득. 옵션·기술적·대체 데이터를 활용한 투자전략 개발 및 평가.', cardTags: ['Investment Strategies', 'Market Data', 'Alternative Data'] },
  6: { categories: ['data', 'award'], typeLabel: '논문 공모전 · 우수상', discipline: 'Empirical analysis', abstract: '이중차분법(DiD)을 이용해 전통 스포츠 구단의 e스포츠 참여가 온라인 브랜드 인지도에 미치는 영향을 실증 분석. 데이터 전처리·계량분석 및 분석 파트 작성 담당.', cardTags: ['Difference-in-Differences', 'Stata', 'Python'] }
};
Object.entries(presentation).forEach(([id, details]) => Object.assign(projects[id], details));
