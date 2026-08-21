import fs from 'fs'; import path from 'path';
const LANGS=['de','fr','ja','zh','es','pt','ar','ko'];
const dirs=['src/lib/local-llms/articles','src/lib/prompt-engineering/articles','src/lib/power-local-llm/articles','src/lib/prompt-bites/articles','src/lib/smart-home/articles','src/lib/balcony-solar/articles'];
const VISIBLE=['numberedItems','tableFormat','faqs','contextTable'];
const SCHEMA=['itemListSchema','howToName'];
const FIELDS=[...VISIBLE,...SCHEMA];
const out=[];
for(const d of dirs){ if(!fs.existsSync(d))continue;
 for(const f of fs.readdirSync(d).filter(x=>x.endsWith('.ts'))){
  const src=fs.readFileSync(path.join(d,f),'utf8');
  const re=/^([ \t]*)(en|de|fr|ja|zh|es|pt|ar|ko):\s*\{/gm; let m; const byIndent={};
  while((m=re.exec(src))){ const ind=m[1].length; (byIndent[ind] ||= []).push({lang:m[2],idx:m.index}); }
  const best=Object.entries(byIndent).sort((a,b)=>new Set(b[1].map(x=>x.lang)).size-new Set(a[1].map(x=>x.lang)).size)[0];
  if(!best) continue; const marks=best[1].slice().sort((a,b)=>a.idx-b.idx);
  if(new Set(marks.map(x=>x.lang)).size<5) continue;
  const blocks={}; marks.forEach((mk,i)=>{blocks[mk.lang]=src.slice(mk.idx,i+1<marks.length?marks[i+1].idx:src.length);});
  if(!blocks.en) continue;
  const cnt=(s,fl)=>(s.match(new RegExp('\\b'+fl+'\\s*:','g'))||[]).length;
  const rec={cluster:d.split('/')[2],file:f,gaps:{},visMissing:0,schMissing:0,locales:new Set()};
  for(const fl of FIELDS){ const e=cnt(blocks.en,fl); if(!e)continue;
   for(const L of LANGS){ if(!blocks[L])continue; const c=cnt(blocks[L],fl);
    if(c<e){ const miss=e-c; (rec.gaps[fl] ||= []).push(`${L}(${c}/${e})`); rec.locales.add(L);
     if(VISIBLE.includes(fl)) rec.visMissing+=miss; else rec.schMissing+=miss; } } }
  if(rec.visMissing||rec.schMissing) out.push(rec); } }
out.sort((a,b)=>(b.visMissing+b.schMissing)-(a.visMissing+a.schMissing));
console.log('| # | cluster | file | visible | schema | locales | fields affected |');
console.log('|---|---|---|---|---|---|---|');
out.forEach((r,i)=>console.log(`| ${i+1} | ${r.cluster} | ${r.file.replace('.ts','')} | ${r.visMissing} | ${r.schMissing} | ${r.locales.size} | ${Object.entries(r.gaps).map(([k,v])=>k+': '+v.join(',')).join(' • ')} |`));
console.log('\nTOTALS  files:',out.length,' visible-content instances:',out.reduce((a,r)=>a+r.visMissing,0),' schema-only instances:',out.reduce((a,r)=>a+r.schMissing,0));
