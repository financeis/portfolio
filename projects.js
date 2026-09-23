// Existing portfolio content. Add a numbered entry here to add a project.
const projects = {
            9: {
                date: '2025.12',
                title: 'Mini-Factory — 다양한 투자전략 백테스팅을 위한 공통 파이프라인',
                github: 'https://github.com/financeis/MiraeAsset_Dec_17',
                categories: ['strategy', 'data'],
                typeLabel: '투자전략 연구 · 공통 아키텍처 설계',
                discipline: 'Reusable architecture & strategy research',
                abstract: '여러 투자전략을 같은 데이터로 백테스트하고, 결과를 같은 형식으로 저장하는 공통 파이프라인입니다. 전략마다 데이터 처리나 성과 계산을 따로 만들지 않아도, 다양한 전략의 성과를 한 기준에서 일관되게 비교할 수 있도록 설계했습니다.',
                desc: '전략마다 데이터를 따로 받고 수익률을 따로 계산하면, 결과가 달라도 전략의 차이인지 데이터나 계산 방식의 차이인지 구분하기 어렵습니다. 그래서 가격과 매크로 지표를 하나의 데이터베이스에 쌓고, 모든 전략이 같은 데이터에서 같은 형식의 비중을 내보내도록 만들었습니다. 같은 백테스터가 거래비용까지 반영해 성과를 계산하고, 실행 조건과 결과는 실행마다 같은 구조로 저장됩니다. 새 전략을 추가해도 데이터 처리와 평가 코드를 다시 만들 필요 없이, 기존 전략들과 같은 기준에서 성과를 비교할 수 있습니다.',
                research: {
                    heading: '같은 데이터, 같은 계산, 같은 비교',
                    facts: [
                        { value: '공통 데이터', label: '모든 전략이 같은 DB의 가격·지표를 사용' },
                        { value: '실행별 결과 저장', label: '조건·로그·성과를 같은 구조로 보관' },
                        { value: '같은 기준 비교', label: '전략별 성과를 한 비교표로' }
                    ],
                    approaches: [
                        {
                            label: '01 / SHARED DATA',
                            title: '모든 전략이 같은 데이터와 출력 형식을 공유',
                            description: '데이터 처리·지표 생성·전략 로직·평가를 분리하고, 각 전략이 공통 형식의 비중을 출력하도록 구성했습니다.',
                            points: [
                                '가격·매크로 원천 데이터와 파생 지표를 SQLite 테이블(복합키)로 관리해 모든 전략이 같은 데이터를 사용',
                                '전략 ID·날짜·종목별 비중을 공통 출력으로 정의해 동일 백테스터에 연결',
                                '매크로 전환·ETF 모멘텀을 같은 평가·리포트 흐름에 연결한 적용 예제 구현'
                            ]
                        },
                        {
                            label: '02 / CONSISTENT RESULTS',
                            title: '일관된 결과 저장과 성과 비교',
                            description: '실행할 때마다 조건과 결과를 같은 구조로 남겨, 전략 간 성과를 같은 기준으로 비교할 수 있게 했습니다.',
                            points: [
                                'CLI에서 기간·전략·거래비용 등 조건을 지정해 공통 진입점으로 실행',
                                'runs/<run_id>/에 파라미터·로그·전략별 백테스트 결과를 같은 구조로 저장',
                                '누적·연환산 수익률, 샤프, 최대낙폭, 회전율, 비용을 한 비교표와 겹친 차트로 정리'
                            ]
                        }
                    ]
                },
                highlights: [
                    '데이터 운영 설계 — 데이터별 마지막 적재일을 이용한 증분 갱신 구조와, 중복키·결측·이상치 등을 지표 생성 전에 점검하는 품질 검증 흐름 설계',
                    '모듈 연결 — 원천 데이터 → 품질 검증 → 파생 지표 → 전략 비중 → 백테스트 → 리포트로 단계와 입출력 구분',
                    '전략 적용 예제 — 매크로 전환·ETF 모멘텀을 공통 구조에 연결하고, 신호 시차·워크포워드·거래비용을 반영하는 평가 코드 구현',
                    '리포트 자동화 — 실행마다 전략별 누적수익률·연환산 수익률·샤프·최대낙폭·회전율을 한 비교표와 차트로 정리한 Markdown 리포트를 자동 생성'
                ],
                highlightsTitle: '일관된 백테스트를 위한 설계',
                tags: ['Python', 'pandas', 'NumPy', 'SQLite', 'Matplotlib', 'Walk-forward'],
                cardTags: ['Research Architecture', 'Strategy Comparison', 'Reproducible Backtesting']
            },
            7: {
                date: '2026.05',
                title: 'Research Desk — 증권 리포트 분석 워크스페이스',
                github: 'https://github.com/financeis/telegram_report',
                featured: true,
                caseStudy: 'research-desk/index.html',
                logo: 'research-desk/assets/research-desk-logo.png',
                image: 'research-desk/assets/comparison.png',
                categories: ['data'],
                typeLabel: '대표 프로젝트 · 투자 리서치',
                discipline: 'Investment research workspace',
                abstract: '텔레그램 채널에 올라오는 증권사 리포트를 자동으로 모아 기업별로 정리하는 개인 리서치 웹앱입니다. 고른 리포트에서 목표주가·실적 추정·투자 논리를 뽑아, 같은 증권사의 전망이 어떻게 바뀌었는지와 증권사 간 시각이 어떻게 다른지를 원문 근거와 함께 비교합니다.',
                desc: '리서치 리포트는 발행 순서대로 쌓이기 때문에, 한 기업을 따라가려면 지난 리포트를 다시 찾고 증권사마다 형식이 다른 목표주가와 실적 추정을 직접 맞춰 읽어야 했습니다. 이 수고를 줄이려고 PDF 수집, 리포트 분류와 기업 매핑, LLM 분석, 근거 확인, 리포트 비교를 하나로 잇는 웹앱을 만들었습니다. 어떤 숫자끼리 비교할 수 있는지와 어떤 내용을 원문에서 확인해야 하는지는 직접 설계했고, 구현은 Claude Code와 Codex를 활용해 React·FastAPI 웹앱으로 완성했습니다.',
                highlightsTitle: '설계에서 신경 쓴 점',
                highlights: [
                    '비교할 수 있는 숫자만 비교 — 기간·단위·회계 기준(연결/별도)·시나리오가 모두 같은 실적 추정치끼리만 차이를 계산합니다. 조건이 다르면 숫자를 억지로 맞추지 않고 비워 둡니다.',
                    '전망 수정과 견해 차이를 구분 — 같은 증권사의 시점별 변화는 전망 수정으로, 증권사 간 차이는 견해 차이로 나눠 보여줍니다.',
                    '숫자에서 원문으로 — 추출한 목표주가·실적·밸류에이션마다 근거 문구와 PDF 페이지를 연결하고, 원문에서 확인되지 않는 수치는 화면에 띄우지 않습니다.',
                    'LLM은 필요한 곳에만 — 사용자가 고른 리포트만 분석하고, 이미 분석한 결과는 재사용하며 실패한 건만 다시 시도합니다. 자동 분류가 어려운 리포트는 PDF를 보며 직접 승인·제외·재분류합니다(Human-in-the-loop).',
                    '검증과 범위 — 파이썬 테스트 373개와 실제 PDF·DB·브라우저 동작으로 확인했습니다. 현재는 국내 주식 리포트 중심의 로컬 웹앱이며, 이미지로 된 PDF는 별도 검토로 넘깁니다.'
                ],
                tags: ['Python', 'Telethon', 'LangGraph', 'OpenAI API', 'PyMuPDF', 'Supabase', 'FastAPI', 'React'],
                cardTags: ['Investment Research', 'Financial Document Analysis', 'Report Comparison']
            },
            1: {
                icon: '📈',
                gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
                image: 'images/경기국면.png',
                date: '2025.10',
                title: '경기국면 탐지 기반 전술적 자산배분 — 논문 재구현·검증',
                github: 'https://github.com/financeis/Seminar_final',
                desc: '거시지표로 경기국면을 판별해 섹터 ETF 비중을 정하는 논문(Oliveira et al., 2025)을 파이썬으로 구현했습니다. 미국 경제지표 약 100개로 매달 국면을 나누고, 다음 달 국면을 예측해 SPY와 9개 섹터 ETF의 비중을 정합니다. 구현하면서 논문이 사후에 개정된 경제지표로 과거를 평가하고 있다는 점을 발견했습니다. 경제지표는 한두 달 늦게 발표되고 이후에도 수정되기 때문에, 매달 그 시점에 실제로 발표돼 있던 자료만 쓰도록 바꿔 다시 검증했습니다. 2025년 가을 학회 세미나에서 처음 구현했고, 2026년 9월 코드 전체를 다시 설계해 검증을 보강했습니다.',
                research: {
                    heading: '구현한 것과 바로잡은 것',
                    facts: [
                        { value: '239개월', label: '2003–2022 월별 리밸런싱' },
                        { value: '50개 전략', label: '모형 4개 × 배분 방식 12개 + 벤치마크 2개' },
                        { value: '0.72 → 0.53', label: 'Ridge Sharpe: 개정 지표 → 당시 공개 지표' }
                    ],
                    approaches: [
                        {
                            label: '01 / REPLICATION',
                            title: '국면 판별 → 다음 달 예측 → ETF 비중',
                            description: '논문의 수식을 단계별로 옮기고, 모든 전략을 같은 자료와 같은 회계 기준으로 비교했습니다.',
                            points: [
                                '경제지표 약 100개를 PCA로 압축한 뒤, 2단계 k-means로 이상치 국면 1개와 일반 국면 5개로 분류',
                                '국면 소속 확률과 전이행렬(마르코프 체인)로 다음 달 국면 확률을 예측',
                                'Naive·Ridge·Black–Litterman·MVO로 ETF별 기대 성과를 추정하고, 보유 2·3·4개와 롱온리·롱숏 등 배분 방식을 조합해 SPY·균등비중과 비교',
                                '1959–2023년 전체 표본으로 국면을 사후 해석 — 논문이 위기 국면으로 본 R0는 2020년 4월 한 달뿐'
                            ]
                        },
                        {
                            label: '02 / LOOK-AHEAD BIAS',
                            title: '투자 시점에 알 수 있던 정보만 사용',
                            description: '매달의 투자 결정에 그 시점까지 공개된 정보만 들어가도록 데이터의 시간 순서를 다시 짰습니다.',
                            points: [
                                'FRED-MD 월별 과거 공개본(vintage) 300여 개를 받아, 결정 시점에 실제로 발표돼 있던 자료만 사용(발표 지연 2개월 가정)',
                                '변수 선택·결측 처리·표준화·PCA·국면 분류를 매달 직전 48개월 자료로만 다시 수행',
                                '학습에는 결정 시점에 이미 확정된 수익률만 쓰고, 변동성 조정도 과거 수익률로만 계산',
                                '같은 규칙에서 지표만 개정본과 당시 공개본으로 바꿔 두 결과를 비교'
                            ]
                        }
                    ]
                },
                backtest: {
                    image: 'images/backtest-vintage-lagged.png',
                    title: '당시 공개 지표 기준 백테스트 (2003.02–2022.12)',
                    caption: '50개 전략의 누적 자산가치(로그 눈금)입니다. 위는 기본 전략, 아래는 과거 36개월 변동성으로 연 10%를 목표해 비중을 조정한 결과입니다. 진한 선은 모형별 대표 전략(점수 상위 2개 ETF 롱온리)과 SPY·균등비중이며, 거래비용은 0으로 가정했습니다.',
                    source: 'https://github.com/financeis/Seminar_final/blob/master/reports/reproduction/report/run01_vintage_lagged_curves.png'
                },
                highlightsTitle: '결과와 배운 점',
                highlights: [
                    '자료 시점이 결과를 바꿨습니다 — 같은 규칙에서 지표만 당시 공개본으로 바꾸자, 개정 지표로는 SPY를 앞섰던 Ridge 전략(상위 2개 롱온리)의 Sharpe가 0.72에서 0.53으로 떨어져 SPY(0.65)보다 낮아졌습니다. 경제지표를 쓰지 않는 MVO는 두 결과가 같아, 차이가 지표의 시점에서 나왔음을 확인했습니다.',
                    '당시 공개 지표 기준 성과 — 국면별 과거 성과만 쓰는 Naive 전략이 Sharpe 0.91로 50개 중 가장 높았고, BL·MVO는 최대낙폭이 −38~−39%로 SPY(−53%)보다 작았습니다(모두 상위 2개 롱온리 기준).',
                    '배운 점 — 논문을 구현하며 금융시장을 데이터로 바라보고, 투자 이론과 논리를 데이터로 검증하고 분석하는 법을 배웠습니다. 특히 같은 전략이 어떤 자료를 쓰느냐에 따라 SPY를 이기기도 하고 지기도 하는 것을 보며, 좋은 분석은 데이터의 품질과 검증에서 시작된다는 것을 깨달았습니다.'
                ],
                tags: ['Python', 'FRED-MD', 'Real-time Vintage', 'PCA', 'K-means', 'Markov Chain', 'Ridge', 'Black–Litterman', 'MVO', 'Rolling Backtest']
            },
            2: {
                icon: '📄',
                gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
                image: 'images/10k.webp',
                date: '2025.09',
                title: '10-K Report 기반 기업 유사도 분석 시스템',
                github: 'https://github.com/financeis/10-K-Report-Similarity',
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
                github: 'https://github.com/financeis/Indicator_Combining',
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
  1: { categories: ['strategy'], typeLabel: '논문 재구현 · 거시경제 기반 투자전략 연구', discipline: 'Regime-based allocation & empirical validation', abstract: '거시지표로 경기국면을 판별해 섹터 ETF 비중을 정하는 논문을 구현하고 검증했습니다. 논문이 사후에 개정된 경제지표로 과거를 평가한다는 점을 발견해 당시 실제로 발표돼 있던 자료만 쓰도록 바꿨고, 그러자 논문에서 가장 좋았던 Ridge 모형의 우위가 사라졌습니다.', cardTags: ['Regime Detection', 'Asset Allocation', 'Look-ahead Bias'] },
  2: { categories: ['data'], typeLabel: '기업 공시 분석', discipline: 'Corporate disclosure analysis', abstract: 'SEC 10-K 보고서의 사업 내용과 위험요인을 텍스트로 분석하여 기업 간 유사성을 비교하는 시스템 구현. 공시 자료의 수집·처리와 기업 비교 분석에 활용.', cardTags: ['Corporate Disclosures', 'Risk Factors', 'Text Analysis'] },
  3: { categories: ['strategy', 'data'], typeLabel: '주식시장 데이터 분석', discipline: 'Market data analysis', abstract: 'KOSPI와 S&P 500 주식의 기술적 지표 및 재무 조건을 활용한 종목 스크리닝 시스템 구현. 시장 상태에 따른 지표 가중치 조절 및 투자 대상 탐색.', cardTags: ['Market Indicators', 'Financial Screening', 'Investment Analysis'] },
  4: { categories: ['strategy'], typeLabel: '교내금융학회 활동 · 세미나 발표', discipline: 'Asset allocation seminar', abstract: '전략적·전술적 자산배분의 개념과 주식·채권 등 자산군별 포트폴리오 구성 방법 발표. 평균-분산 최적화의 한계를 검토하고 Black-Litterman 모형 구현.', cardTags: ['Asset Allocation', 'Portfolio Construction', 'Black-Litterman'] },
  5: { categories: ['strategy', 'award'], typeLabel: '투자 대회 · 한국 본선 진출', discipline: 'Investment competition', abstract: 'WorldQuant International Quant Championship 한국 본선 진출 및 컨설턴트 자격 획득. 옵션·기술적·대체 데이터를 활용한 투자전략 개발 및 평가.', cardTags: ['Investment Strategies', 'Market Data', 'Alternative Data'] },
  6: { categories: ['data', 'award'], typeLabel: '논문 공모전 · 우수상', discipline: 'Empirical analysis', abstract: '이중차분법(DiD)을 이용해 전통 스포츠 구단의 e스포츠 참여가 온라인 브랜드 인지도에 미치는 영향을 실증 분석. 데이터 전처리·계량분석 및 분석 파트 작성 담당.', cardTags: ['Difference-in-Differences', 'Stata', 'Python'] }
};
Object.entries(presentation).forEach(([id, details]) => Object.assign(projects[id], details));
