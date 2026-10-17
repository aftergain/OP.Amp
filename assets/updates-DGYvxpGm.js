import{u as p,r,j as e,d as g,g as m,c as f,f as b,R as k,L as v}from"./styles-qI1LVKTk.js";const w=[{id:"v0.2.29",status:"published",kind:"feature",summary:{ko:"AutoEQ 헤드폰 보정",en:"AutoEQ headphone EQ"},version:"0.2.29",publishedAt:"2026-10-17T17:11:26Z",releaseURL:"https://github.com/aftergain/OP.Amp/releases/tag/v0.2.29",locales:{ko:{title:"내 헤드폰에 맞는 EQ 찾기",html:`<p>헤드폰 모델을 검색하고, 측정값을 바탕으로 만든 EQ를 골라 보세요<br />AutoEQ의 권장 보정값 6,033개가 앱에 들어 있어 인터넷 연결 없이 찾아 쓸 수 있어요</p>
<figure><a href="/assets/updates/v0.2.29-autoeq-browser-cb4dc8b8036d.webp" target="_blank" rel="noopener noreferrer" aria-label="캡처 원본 보기"><img src="/assets/updates/v0.2.29-autoeq-browser-cb4dc8b8036d.webp" width="1600" height="1140" alt="Sennheiser HD 650을 검색한 OP!Amp AutoEQ 화면 — 기종 목록, 측정 출처, EQ 곡선과 Preamp 값" loading="lazy" decoding="async" /></a><figcaption><span>모델을 고르면 적용하기 전에 측정 출처와 보정 곡선을 확인할 수 있어요</span><a href="/assets/updates/v0.2.29-autoeq-browser-cb4dc8b8036d.webp" target="_blank" rel="noopener noreferrer">캡처 원본 보기</a></figcaption></figure>
<h3>검색하고, 확인한 뒤 적용하세요</h3>
<ol>
<li><strong>Presets → Find Headphone EQ…</strong> 메뉴에서 모델명이나 제조사를 검색하세요</li>
<li>이어패드나 ANC 설정까지 내 제품과 맞는 항목을 골라요<br />목록을 둘러보는 동안에는 소리가 바뀌지 않아요</li>
<li><strong>Save &amp; Apply</strong>를 누르면 새 프리셋으로 저장하고 Parametric EQ에서 바로 열어요</li>
</ol>
<h3>불러온 뒤에도 내 취향대로</h3>
<p>주파수, Gain, Q는 직접 바꿀 수 있어요<br />기존 프리셋은 덮어쓰지 않고, 저장하지 않은 작업도 별도 프리셋으로 남겨 둬요</p>
<p>이미 가지고 있는 AutoEQ의 ParametricEQ 텍스트 파일은 <strong>Import EQ File…</strong> 메뉴로 불러오면 돼요</p>
<blockquote>
<p>보정값은 기존 EQ 위에 더하지 않고 새 설정으로 적용해요<br />톤은 초기화하고 컴프레서·리미터는 끈 상태에서 시작해요<br />Auto Headroom은 켜둔 채로 시작해요</p>
</blockquote>
<h3>원할 때만 업데이트 확인</h3>
<p><strong>OP!Amp → Settings…에서</strong> 자동 확인을 켜면, 앱을 쓰는 동안 하루 또는 일주일 간격으로 새 버전이 있는지 확인해요<br />기본은 꺼져 있고, <strong>Check for Updates… → Check Once</strong>로 이번 한 번만 확인할 수도 있어요<br />확인할 때 GitHub Pages에 접속하며 IP 주소, 앱 버전, 업데이트 도구인 Sparkle의 버전이 전달돼요<br />오디오나 프리셋, 사용 통계는 보내지 않아요</p>
<p>새 버전이 있어도 다운로드와 설치는 직접 선택해야 진행돼요<br />설치할 때는 앱이 재시작되며 오디오 처리가 잠시 멈춰요<br />이미 설치한 Virtual Output도 필요하면 이어서 갱신해요<br />macOS에서 관리자 승인을 요청할 수 있고, 취소했다면 <strong>Finish Update</strong>로 다시 진행할 수 있어요</p>
<p>0.2.28과 그 이전 버전에는 업데이트 확인 기능이 없어요<br />이번 0.2.29는 DMG나 Homebrew로 한 번 설치해 주세요</p>
`},en:{title:"Find the EQ for your headphones",html:`<p>Search for your headphones and choose an EQ based on measured results.
OP!Amp includes 6,033 recommended AutoEQ corrections, ready to use without an internet connection.</p>
<figure><a href="/assets/updates/v0.2.29-autoeq-browser-cb4dc8b8036d.webp" target="_blank" rel="noopener noreferrer" aria-label="View full-size screenshot"><img src="/assets/updates/v0.2.29-autoeq-browser-cb4dc8b8036d.webp" width="1600" height="1140" alt="OP!Amp AutoEQ search for Sennheiser HD 650, showing model variants, measurement source, EQ curve, and Preamp" loading="lazy" decoding="async" /></a><figcaption><span>Choose a model to see its measurement source and correction curve before applying it.</span><a href="/assets/updates/v0.2.29-autoeq-browser-cb4dc8b8036d.webp" target="_blank" rel="noopener noreferrer">View full-size screenshot</a></figcaption></figure>
<h3>Search, preview, then apply</h3>
<ol>
<li>Open <strong>Presets → Find Headphone EQ…</strong> and search for a model or manufacturer.</li>
<li>Pick the entry that matches your headphones, including the ear pads or ANC setting. Browsing does not change your sound.</li>
<li>Choose <strong>Save &amp; Apply</strong> to save a new preset and open it in Parametric EQ.</li>
</ol>
<h3>Make it your own</h3>
<p>You can adjust Frequency, Gain, and Q afterward. Your existing presets are not overwritten, and any unsaved work is saved as a separate preset first.</p>
<p>Already have an AutoEQ ParametricEQ text file? Load it with <strong>Import EQ File…</strong>.</p>
<blockquote>
<p>The correction replaces your working EQ rather than stacking on top of it. Tone is reset, and the compressor and limiter start off. Auto Headroom stays on.</p>
</blockquote>
<h3>Update checks, only if you want them</h3>
<p>In <strong>OP!Amp → Settings…</strong>, enable automatic checks to look for new versions daily or weekly while the app is running. Checking is off by default. <strong>Check for Updates… → Check Once</strong> checks just once without turning automatic checks on.</p>
<p>Checks connect to GitHub Pages and include your IP address, app version and Sparkle version. No audio, presets or usage analytics are sent.</p>
<p>You still choose whether to download and install an update. Installation restarts the app and briefly interrupts audio processing. If Virtual Output is already installed, OP!Amp updates it when needed after relaunch. macOS may request administrator authorization. If you cancel, choose <strong>Finish Update</strong> to try again.</p>
<p>Version 0.2.28 and earlier do not have in-app update checks. Install 0.2.29 once using the DMG or Homebrew.</p>
`}}},{id:"v0.2.28",status:"published",kind:"fix",summary:{ko:"수치 입력 오류 수정",en:"Numeric input fixes"},version:"0.2.28",publishedAt:"2026-10-03T04:21:04Z",releaseURL:"https://github.com/aftergain/OP.Amp/releases/tag/v0.2.28",locales:{ko:{title:"수치 입력 오류 수정",html:`<ul>
<li>값을 입력하고 <strong>Done</strong>이나 <strong>Return</strong>을 눌러도 이전 값으로 돌아가던 문제를 고쳤어요</li>
<li>주파수·Gain·Q의 소수점 자릿수를 줄였다가 다시 늘려도, 입력한 값이 그대로 반영돼요</li>
</ul>
`},en:{title:"Exact values, correctly applied",html:`<ul>
<li><strong>Done</strong> and <strong>Return</strong> now apply the value you entered instead of reverting to the previous value.</li>
<li>Frequency, Gain, and Q retain your entered precision, including when you add decimal places again after a less precise edit.</li>
</ul>
`}}},{id:"v0.2.27",status:"published",kind:"improvement",summary:{ko:"헤드룸 전환 시 음량 유지",en:"Safer Headroom switching"},version:"0.2.27",publishedAt:"2026-10-03T00:38:36Z",releaseURL:"https://github.com/aftergain/OP.Amp/releases/tag/v0.2.27",locales:{ko:{title:"헤드룸 전환 시 음량 유지",html:`<ul>
<li><strong>Auto → Manual</strong>로 바꿀 때 0 dB로 초기화하지 않고, Auto에서 적용 중이던 감쇄량을 이어받아요</li>
<li><strong>Off</strong>로 바꾸기 전에는 소리가 갑자기 커지거나 왜곡될 수 있다는 확인 창이 나와요</li>
</ul>
`},en:{title:"Safer Headroom switching",html:`<ul>
<li>Switching from <strong>Auto to Manual</strong> keeps the attenuation currently applied by the engine instead of resetting it to 0 dB.</li>
<li>Turning Headroom <strong>Off</strong> asks for confirmation first, since the output may become louder or clip.</li>
</ul>
`}}}],x={feature:"새로운 기능",improvement:"개선",fix:"수정"};function j({entry:a}){const{language:o,t}=p(),s=a.locales[o],i=a.status==="draft";return e.jsxs("article",{className:`update-entry update-entry--${a.kind}`,id:a.id,"aria-labelledby":`${a.id}-title`,children:[e.jsxs("div",{className:"update-meta",children:[e.jsx("a",{className:"update-version",href:`#${a.id}`,"aria-label":`${t("이 릴리즈 노트 링크")}: ${a.version??s.title}`,children:i?t("다음 업데이트"):`v${a.version}`}),a.publishedAt&&e.jsx("time",{dateTime:a.publishedAt,children:m(a.publishedAt,o)}),e.jsx("span",{className:"update-kind",children:t(x[a.kind])})]}),e.jsxs("div",{className:"update-content",children:[e.jsx("h2",{id:`${a.id}-title`,children:s.title}),e.jsx("div",{className:"update-prose",dangerouslySetInnerHTML:{__html:s.html}}),a.releaseURL&&e.jsx("a",{className:"update-release-link",href:a.releaseURL,target:"_blank",rel:"noopener noreferrer",children:t("GitHub 릴리즈")})]})]})}function y(){const{language:a,chooseLanguage:o,t}=p(),s=!1,[i,A]=r.useState([]),[u,E]=r.useState(!1);r.useEffect(()=>{},[s]);const l=r.useMemo(()=>[...i,...w],[i]);return r.useEffect(()=>{const n=()=>{var d;try{const c=decodeURIComponent(window.location.hash.slice(1));c&&((d=document.getElementById(c))==null||d.scrollIntoView({block:"start",behavior:"instant"}))}catch{}},h=requestAnimationFrame(n);return window.addEventListener("hashchange",n),()=>{cancelAnimationFrame(h),window.removeEventListener("hashchange",n)}},[l]),e.jsxs("div",{className:"updates-page",children:[e.jsx("a",{className:"skip-link",href:"#updates-main",children:t("본문으로 건너뛰기")}),e.jsxs("header",{className:"release-notes-header",children:[e.jsxs("a",{className:"release-notes-home",href:"/","aria-label":t("OP!Amp로 돌아가기"),children:[e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"m14 6-6 6 6 6"})}),e.jsx("img",{src:"/assets/opamp-vortex-gray-96.webp",width:"28",height:"28",alt:""}),e.jsx("span",{className:"release-notes-wordmark",children:"OP!Amp"}),e.jsx("span",{className:"release-notes-home-label","aria-hidden":"true",children:t("돌아가기")})]}),e.jsx("button",{className:"release-notes-language",type:"button",onClick:()=>o(a==="ko"?"en":"ko"),"aria-label":a==="ko"?"Switch to English":"한국어로 변경",lang:a==="ko"?"en":"ko",children:a==="ko"?"English":"한국어"})]}),e.jsxs("main",{id:"updates-main",className:"updates-main",tabIndex:-1,children:[e.jsxs("div",{className:"updates-intro",children:[e.jsx("p",{className:"updates-eyebrow",children:"OP!Amp"}),e.jsx("h1",{children:t("릴리즈 노트")}),e.jsx("p",{children:t("새로운 기능과 사용에 영향을 주는 변경사항을 모았어요")})]}),u&&e.jsx("p",{role:"alert",children:t("릴리즈 노트를 불러오지 못했어요 페이지를 새로고침해 주세요")}),l.map(n=>e.jsx(j,{entry:n},n.id)),l.length===0&&e.jsx("p",{className:"updates-empty",children:t("새로운 소식이 생기면 이곳에 전할게요")}),e.jsxs("div",{className:"updates-ending",children:[e.jsx("a",{href:"/",children:t("OP!Amp 살펴보기")}),e.jsx("a",{href:"https://github.com/aftergain/OP.Amp/releases",target:"_blank",rel:"noopener noreferrer",children:t("GitHub 릴리즈")})]})]}),e.jsxs("footer",{id:"page-footer",children:[e.jsx("img",{className:"footer-brand",src:g,width:"144",height:"28",alt:"Aftergain"}),e.jsxs("div",{className:"footer-info",children:[e.jsx("span",{children:"OP!Amp"}),e.jsx("span",{children:t("macOS용 시스템 이퀄라이저")}),e.jsx("a",{href:"/updates/","aria-current":"page",children:t("릴리즈 노트")})]})]})]})}f.initialize();b.createRoot(document.getElementById("root")).render(e.jsx(k.StrictMode,{children:e.jsx(v,{page:"updates",children:e.jsx(y,{})})}));
