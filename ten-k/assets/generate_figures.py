"""Recreate portfolio figures from the repository's published result tables.

Source commit: 9e7e39c76ce5633e6985a79ce97ab8a6b9f43e7d
reports/sp500_2024.md, section 2; reports/relations_sp500_2024.md, section 2.
This script plots stored results; it does not rerun the experiments.
"""
from pathlib import Path

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib import font_manager
from matplotlib.ticker import MultipleLocator, FormatStrFormatter

OUT = Path(__file__).parent
available = {font.name for font in font_manager.fontManager.ttflist}
font = next((name for name in ['Malgun Gothic', 'Noto Sans CJK KR', 'AppleGothic'] if name in available), 'DejaVu Sans')
plt.rcParams.update({'font.family': font, 'font.size': 12, 'axes.unicode_minus': False, 'svg.fonttype': 'path'})


def plot(name, rows, title, subtitle, height):
    fig, ax = plt.subplots(figsize=(11, height), dpi=100)
    fig.patch.set_facecolor('#ffffff')
    ax.set_facecolor('#ffffff')
    fig.subplots_adjust(left=.32, right=.88, top=.74, bottom=.18)
    fig.text(.045, .91, title, fontsize=19, weight='bold', color='#1b3029')
    fig.text(.045, .845, subtitle, fontsize=11, color='#56665d')
    for i, (label, mean, low, high, color) in enumerate(rows):
        ax.errorbar(mean, i, xerr=[[mean-low], [high-mean]], fmt='o', color=color,
                    markersize=8, capsize=5, elinewidth=2, zorder=3)
        ax.text(.405, i, f'{mean:.3f}', va='center', fontsize=12, color=color)
    ax.set_yticks(range(len(rows)), [row[0] for row in rows])
    ax.set_ylim(len(rows)-.4, -.6)
    ax.set_xlim(0, .40)
    ax.xaxis.set_major_locator(MultipleLocator(.1))
    ax.xaxis.set_major_formatter(FormatStrFormatter('%.1f'))
    ax.grid(axis='x', color='#e0e7df', linewidth=.8)
    ax.tick_params(axis='both', length=0, pad=12, labelcolor='#40554a')
    for spine in ax.spines.values():
        spine.set_visible(False)
    ax.set_xlabel('시장 영향을 제거한 일별 수익률의 상관', labelpad=16, fontsize=11, color='#56665d')
    fig.text(.045, .04, '2024년 제출 10-K → 2025년 수익률  /  점: 평균 · 선: 95% 신뢰구간', fontsize=10, color='#56665d')
    fig.savefig(OUT / name, metadata={'Date': None, 'Creator': 'Portfolio / Matplotlib'})
    plt.close(fig)


plot('peer-validation.svg', [
    ('TF-IDF + OpenAI', .318, .303, .333, '#235a45'),
    ('OpenAI · 짧은 입력', .307, .290, .322, '#688875'),
    ('TF-IDF', .305, .291, .320, '#688875'),
    ('MiniLM · Item 1 전체', .290, .275, .304, '#688875'),
    ('OpenAI · 긴 청크', .188, .174, .205, '#a17b55'),
    ('GICS 서브산업 전체¹', .359, .340, .380, '#6c7582'),
], '텍스트로 고른 이웃의 주가 동조성', '상위 5개 이웃의 평균 잔차상관  ·  ¹ 같은 서브산업 기업 전체 기준선', 6.5)

plot('relation-evidence.svg', [
    ('경쟁 · 502쌍', .241, .191, .296, '#235a45'),
    ('공급·협력 · 452쌍', .130, .099, .175, '#688875'),
    ('회사 언급 · 관계 아님', .097, .048, .155, '#a17b55'),
    ('모든 기업쌍', .005, .001, .010, '#6c7582'),
], '공시에서 확인한 관계와 주가 동조성', '관계 유형별 기업쌍 평균  ·  476개 기업 / 113,050쌍', 5.7)
