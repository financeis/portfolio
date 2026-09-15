'use strict';
const screens = {
  comparison:{name:'보고서 비교',index:'01',alt:'삼성증권의 KB증권 보고서 두 건을 나란히 비교하는 실제 Research Desk 화면',caption:'같은 발행처의 두 보고서에서 목표주가·실적 추정·투자 논리 변화를 비교합니다.'},
  library:{name:'기업 라이브러리',index:'02',alt:'기업별 보고서 목록, 목표주가와 분석 상태를 확인하는 실제 라이브러리 화면',caption:'기업별 리포트를 모아 발행일·발행처·목표주가·분석 상태를 확인하고, 필요한 보고서만 골라 분석합니다.'},
  thesis:{name:'투자 논리',index:'03',alt:'두 보고서의 투자 논리와 점검 조건을 나란히 확인하는 실제 화면',caption:'정성적인 투자 논리와 촉매, 논리를 재검토할 조건까지 같은 화면에서 읽습니다.'},
  coverage:{name:'리서치 커버리지',index:'04',alt:'산업 제품별 발행 추이와 자주 다뤄진 기업 순위를 보여주는 실제 커버리지 화면',caption:'산업·제품별 발행 흐름과 자주 다뤄진 기업을 연결해, 쌓인 리서치의 분포를 탐색합니다.'}
};
const tabs=[...document.querySelectorAll('[data-screen]')];
const screenImage=document.querySelector('#screen-image');
function selectScreen(tab,focus=false){
  const key=tab.dataset.screen, info=screens[key], url=`assets/${key}.png`;
  for(const button of tabs){const selected=button===tab;button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;}
  document.querySelector('#screen-panel').setAttribute('aria-labelledby',tab.id);
  screenImage.src=url;screenImage.alt=info.alt;
  document.querySelector('#screen-location').textContent=`Research Desk / ${info.name}`;
  document.querySelector('#screen-index').textContent=`FIG. ${info.index}`;
  document.querySelector('#screen-description').textContent=info.caption;
  document.querySelector('#screen-original').href=url;
  const zoom=document.querySelector('.screen-zoom');zoom.dataset.zoom=url;zoom.dataset.caption=info.caption;zoom.setAttribute('aria-label',`${info.name} 화면 크게 보기`);
  if(focus)tab.focus();
}
tabs.forEach((tab,i)=>{
  tab.addEventListener('click',()=>selectScreen(tab));
  tab.addEventListener('keydown',event=>{
    let next;
    if(event.key==='ArrowRight')next=(i+1)%tabs.length;
    if(event.key==='ArrowLeft')next=(i-1+tabs.length)%tabs.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=tabs.length-1;
    if(next!==undefined){event.preventDefault();selectScreen(tabs[next],true);}
  });
});
const dialog=document.querySelector('#image-dialog'),zoomImage=document.querySelector('#zoom-image'),scroll=document.querySelector('.zoom-scroll'),size=document.querySelector('#zoom-size');
let trigger=null;
document.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{
  trigger=button;zoomImage.src=button.dataset.zoom;zoomImage.alt=button.dataset.caption;
  document.querySelector('#zoom-caption').textContent=button.dataset.caption;
  document.querySelector('#zoom-title').textContent=button.getAttribute('aria-label');
  scroll.classList.remove('is-original');size.setAttribute('aria-pressed','false');size.textContent='원본 크기';
  document.body.classList.add('zoom-open');dialog.showModal();scroll.scrollTop=0;scroll.scrollLeft=0;document.querySelector('#zoom-close').focus();
}));
size.addEventListener('click',()=>{const original=scroll.classList.toggle('is-original');size.setAttribute('aria-pressed',String(original));size.textContent=original?'화면에 맞춤':'원본 크기';});
document.querySelector('#zoom-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
dialog.addEventListener('close',()=>{document.body.classList.remove('zoom-open');trigger?.focus({preventScroll:true});});
