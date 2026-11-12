/* Celebrate: level-complete reward overlay (ribbon, sunburst, count-up, confetti, CLAIM -> fly-to-pill). Self-contained, no assets. */
const Celebrate=(()=>{const RM=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
 const css=`.cel{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;background:rgba(10,8,40,.9);overflow:hidden;font-family:system-ui,sans-serif;animation:celIn .25s ease-out}
.cel *{box-sizing:border-box}.cel canvas.celCf{background:none!important;border-radius:0!important;position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.celPill{position:absolute;top:12px;right:12px;display:flex;align-items:center;gap:6px;background:linear-gradient(#3b2a7a,#241a55);border:3px solid #ffd54a;border-radius:999px;padding:4px 14px 4px 6px;color:#fff;font:900 20px system-ui;box-shadow:0 3px 0 #0006;z-index:3}
.celPill i{font-style:normal;font-size:24px}.celPill.bump{animation:celBump .3s}
.celBox{position:relative;width:min(92vw,380px);display:flex;flex-direction:column;align-items:center;text-align:center;color:#fff;z-index:2}
.celRib{position:relative;margin:0 auto 6px;padding:10px 26px;font:900 clamp(20px,7vw,30px)/1.1 system-ui;letter-spacing:1px;color:#fff;text-shadow:0 3px 0 rgba(0,0,0,.35);background:linear-gradient(var(--c1),var(--c2));border-radius:10px;box-shadow:0 5px 0 var(--c3),0 8px 18px #0007;transform:rotate(-2deg);animation:celPop .5s cubic-bezier(.3,1.6,.5,1) both;max-width:100%}
.celRib:before,.celRib:after{content:'';position:absolute;top:12px;width:28px;height:100%;background:var(--c3);z-index:-1}.celRib:before{left:-18px;clip-path:polygon(0 0,100% 0,100% 100%,0 100%,40% 50%)}.celRib:after{right:-18px;clip-path:polygon(0 0,100% 0,60% 50%,100% 100%,0 100%)}
.celStars{font-size:clamp(34px,11vw,48px);margin:4px 0;letter-spacing:4px}.celStars span{display:inline-block;animation:celPop .45s cubic-bezier(.3,1.7,.5,1) both}.celStars .off{filter:grayscale(1) brightness(.6);opacity:.5}
.celSub{font:900 22px system-ui;color:#fff;text-shadow:0 2px 0 #0008;margin-top:4px}.celGame{font-size:14px;opacity:.85}
.celRew{position:relative;width:min(80vw,300px);height:min(56vw,210px);display:flex;align-items:center;justify-content:center}
.celRays{position:absolute;left:50%;top:50%;width:min(130vw,520px);height:min(130vw,520px);margin:calc(min(130vw,520px)/-2) 0 0 calc(min(130vw,520px)/-2);border-radius:50%;background:repeating-conic-gradient(from 0deg,rgba(255,240,170,.55) 0 10deg,rgba(255,240,170,0) 10deg 22.5deg);-webkit-mask:radial-gradient(circle,#000 18%,transparent 68%);mask:radial-gradient(circle,#000 18%,transparent 68%);animation:celSpin 9s linear infinite;pointer-events:none}
.celGlow{position:absolute;inset:20%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,220,.9),rgba(255,230,120,0) 70%)}
.celNum{position:relative;display:flex;align-items:center;gap:8px;font:900 clamp(44px,15vw,66px) system-ui;color:#fff;-webkit-text-stroke:2px var(--c3);text-shadow:0 4px 0 var(--c3),0 6px 14px #0008}
.celNum i{font-style:normal;font-size:.85em;-webkit-text-stroke:0;filter:drop-shadow(0 4px 4px #0006);animation:celWob 1.6s ease-in-out infinite}
.celClaim{margin-top:10px;min-width:200px;padding:14px 34px;border:0;border-radius:18px;font:900 26px system-ui;letter-spacing:2px;color:#fff;text-shadow:0 2px 0 #a34500;background:linear-gradient(#ffd27a,#ff9a1f 45%,#f07400);box-shadow:inset 0 3px 0 #fff8,0 6px 0 #a34a00,0 10px 18px #0007;cursor:pointer;animation:celPulse 1.2s ease-in-out infinite}
.celClaim:active{transform:translateY(4px);box-shadow:inset 0 3px 0 #fff8,0 2px 0 #a34a00}.celClaim:disabled{filter:saturate(.6);animation:none}
.celLink{margin-top:10px;background:none;border:0;color:#fff;opacity:.85;text-decoration:underline;font-size:15px;cursor:pointer}
.celFly{position:fixed;z-index:70;font-size:28px;pointer-events:none;transition:transform .7s cubic-bezier(.5,-.3,.7,1),opacity .7s}
@keyframes celSpin{to{transform:rotate(360deg)}}@keyframes celPop{0%{transform:scale(0) rotate(-8deg)}100%{transform:scale(1) rotate(-2deg)}}
@keyframes celPulse{50%{transform:scale(1.06)}}@keyframes celWob{50%{transform:rotate(-10deg) scale(1.08)}}@keyframes celBump{50%{transform:scale(1.25)}}@keyframes celIn{from{opacity:0}}
@media (prefers-reduced-motion: reduce){.cel,.cel *{animation:none!important}.celFly{transition:none}}`;
 const PAL=[['#ff6fae','#e8337f','#a3165a'],['#5ee0ff','#1e9be8','#0d5a9c'],['#8dff7a','#2cc84a','#137a2a'],['#ffd84d','#ff9f1a','#b35c00'],['#c99bff','#8a4dff','#4f1fb0'],['#ff8f6b','#ff4d3d','#a3221a'],['#6effd6','#14c4a0','#0a7560']];
 const hash=s=>[...String(s)].reduce((h,c)=>(h*31+c.charCodeAt(0))>>>0,7);
 const emo=s=>(String(s||'').match(/\p{Extended_Pictographic}(\uFE0F|\u200D\p{Extended_Pictographic}\uFE0F?)*/gu)||[]);
 let cur=null;
 function tone(f,d,t,mute,at=0){if(mute)return;try{const A=Celebrate.AC=Celebrate.AC||new(window.AudioContext||window.webkitAudioContext)();if(A.state==='suspended')A.resume();const o=A.createOscillator(),g=A.createGain(),t0=A.currentTime+at;o.type=t||'triangle';o.frequency.value=f;g.gain.setValueAtTime(.0001,t0);g.gain.exponentialRampToValueAtTime(.13,t0+.02);g.gain.exponentialRampToValueAtTime(.001,t0+d);o.connect(g);g.connect(A.destination);o.start(t0);o.stop(t0+d+.05)}catch(e){}}
 function fanfare(stars,mute){const n=[523,659,784,1046,1318];const k=2+stars;for(let i=0;i<k;i++)tone(n[i],.18,'triangle',mute,i*.11);tone(n[k-1],.6,'square',mute,k*.11);tone(n[k-1]*1.5,.6,'sine',mute,k*.11)}
 function confetti(cv,emojis,pal){const ctx=cv.getContext('2d');let W,H;const fit=()=>{const r=cv.getBoundingClientRect(),d=devicePixelRatio||1;W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0)};fit();
  const cols=[...pal,'#fff36b','#ffffff','#6bf0ff'];const P=[];const add=(n,burst)=>{for(let i=0;i<n;i++){const e=Math.random()<.45&&emojis.length;P.push({x:burst?W/2:Math.random()*W,y:burst?H*.38:-20-Math.random()*H*.5,vx:burst?(Math.random()-.5)*12:(Math.random()-.5)*1.5,vy:burst?-Math.random()*11-3:Math.random()*2+1,r:Math.random()*6.28,vr:(Math.random()-.5)*.3,s:e?18+Math.random()*12:6+Math.random()*6,e:e?emojis[i%emojis.length]:null,c:cols[i%cols.length],sh:i%3})}};
  add(90,1);add(60,0);let run=true,t=0;const step=()=>{if(!run)return;t++;ctx.clearRect(0,0,W,H);for(const p of P){p.vy=Math.min(p.vy+.18,3.2);p.vx*=.985;p.x+=p.vx+Math.sin((t+p.s*9)/20)*.6;p.y+=p.vy;p.r+=p.vr;if(p.y>H+30&&t<420){p.y=-20;p.x=Math.random()*W;p.vy=1+Math.random()*2;p.vx=0}
   ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);if(p.e){ctx.font=p.s+'px serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(p.e,0,0)}else{ctx.fillStyle=p.c;if(p.sh===0)ctx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);else if(p.sh===1){ctx.beginPath();ctx.arc(0,0,p.s/2.4,0,7);ctx.fill()}else{ctx.beginPath();ctx.moveTo(0,-p.s/2);ctx.lineTo(p.s/2,p.s/2);ctx.lineTo(-p.s/2,p.s/2);ctx.fill()}}ctx.restore()}
   if(P.every(p=>p.y>H+30))run=false;else requestAnimationFrame(step)};requestAnimationFrame(step);return()=>{run=false}}
 function count(el,from,to,ms,done){if(RM()||ms<=0){el.textContent=to;done&&done();return}const t0=performance.now();const f=now=>{const k=Math.min(1,(now-t0)/ms),e=1-Math.pow(1-k,3);el.textContent=Math.round(from+(to-from)*e);if(k<1)requestAnimationFrame(f);else done&&done()};requestAnimationFrame(f)}
 /* opts: {reward, stars(1-3), bank, key(theme seed), emojis(string|array), title, phrase, claimText, mute, onClaim(newBank), details:{text,fn}} */
 function show(o){close();if(!document.getElementById('celCss')){const s=document.createElement('style');s.id='celCss';s.textContent=css;document.head.appendChild(s)}
  const pal=PAL[hash(o.key||'x')%PAL.length];const st=Math.max(1,Math.min(3,o.stars|0||1));
  const ph=o.phrase||[['LEVEL COMPLETE','WELL DONE!','NICE ONE!'],['AWESOME!','GREAT JOB!','FANTASTIC!'],['SUPERSTAR!','PERFECT!','LEGENDARY!']][st-1][hash((o.key||'')+o.reward)%3];
  const em=[...new Set(Array.isArray(o.emojis)?o.emojis:emo(o.emojis))].slice(0,8);if(!em.length)em.push('⭐');em.push('⭐','🌟');
  const el=document.createElement('div');el.className='cel';el.id='celebrate';el.setAttribute('role','dialog');el.setAttribute('aria-label',ph);el.style.cssText=`--c1:${pal[0]};--c2:${pal[1]};--c3:${pal[2]}`;
  el.innerHTML=`<canvas class="celCf"></canvas><div class="celPill" aria-label="Total stars"><i>🌟</i><b class="celBank">${o.bank|0}</b></div>
  <div class="celBox"><div class="celRib">${ph}</div><div class="celStars">${[0,1,2].map(i=>`<span class="${i<st?'':'off'}" style="animation-delay:${.35+i*.18}s">⭐</span>`).join('')}</div>
  <div class="celSub">${o.title||'YOUR REWARD'}</div>${o.sub?`<div class="celGame">${o.sub}</div>`:''}
  <div class="celRew"><div class="celRays"></div><div class="celGlow"></div><div class="celNum"><i class="celIc">⭐</i><b class="celAmt">0</b></div></div>
  <button class="celClaim">${o.claimText||'CLAIM'}</button>${o.details?`<button class="celLink">${o.details.text}</button>`:''}</div>`;
  document.body.appendChild(el);const stop=RM()?()=>{}:confetti(el.querySelector('canvas'),em,pal);fanfare(st,o.mute);
  setTimeout(()=>count(el.querySelector('.celAmt'),0,o.reward|0,900),RM()?0:450);
  cur={el,stop};const claim=el.querySelector('.celClaim');let claimed=false;
  claim.onclick=()=>{if(claimed)return;claimed=true;claim.disabled=true;const pill=el.querySelector('.celPill'),bankEl=el.querySelector('.celBank'),src=el.querySelector('.celIc').getBoundingClientRect(),dst=pill.getBoundingClientRect();
   const nb=(o.bank|0)+(o.reward|0);const fin=()=>{count(bankEl,o.bank|0,nb,RM()?0:500,()=>{pill.classList.add('bump');setTimeout(()=>{const cb=o.onClaim;close();cb&&cb(nb)},RM()?150:550)})};
   if(RM()){fin();return}const N=Math.min(10,3+st*2);for(let i=0;i<N;i++){const f=document.createElement('div');f.className='celFly';f.textContent='⭐';f.style.left=(src.left+src.width/2-14+(Math.random()-.5)*60)+'px';f.style.top=(src.top+src.height/2-14+(Math.random()-.5)*40)+'px';document.body.appendChild(f);
    setTimeout(()=>{f.style.transform=`translate(${dst.left+16-parseFloat(f.style.left)}px,${dst.top+4-parseFloat(f.style.top)}px) scale(.6)`;f.style.opacity='.4';tone(900+i*60,.06,'sine',o.mute)},40+i*60);setTimeout(()=>f.remove(),900+i*60)}setTimeout(fin,650+N*60)};
  if(o.details)el.querySelector('.celLink').onclick=()=>{close();o.details.fn&&o.details.fn()};return el}
 function close(){if(cur){cur.stop();cur.el.remove();cur=null}document.querySelectorAll('.celFly').forEach(f=>f.remove())}
 return{show,close,on:()=>!!cur,PAL,emo}})();
