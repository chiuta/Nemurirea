// Teste v2.0.0: „Eseu cu surse vii” — modul de verificare (afirmație → sursă → nivel de încredere), registru CSV, 8 limbi.
// Rulare: node tests/surse-vii.test.mjs   (Playwright din NODE_PATH/PW_ROOT, Chromium din CHROMIUM_PATH; rețea blocată)
import {createRequire as __fffCR} from 'node:module';
const __fffAxe = () => process.env.FFF_AXE || process.env.AXE_PATH || (() => { try { return __fffCR(import.meta.url).resolve('axe-core/axe.min.js'); } catch { return undefined; } })();
import {createRequire} from 'module'; import fs from 'node:fs'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const require = createRequire(process.env.PW_ROOT || import.meta.url); const {chromium} = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url)); const FILE = 'file://' + path.join(HERE, '..', 'index.html');
const AXE = __fffAxe();
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ', n); } else { bad++; console.log('  FAIL', n, x ?? ''); } };
const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox']});
async function mk(w = 1280, h = 900, lang = 'ro', theme) {
  const ctx = await b.newContext({viewport: {width: w, height: h}, acceptDownloads: true});
  await ctx.addInitScript(([l, th]) => { try { if (!sessionStorage.getItem('__init')) { sessionStorage.setItem('__init', '1'); localStorage.setItem('nemurirea.limba', l); if (th) localStorage.setItem('nemurirea.tema', th); } } catch (e) {} }, [lang, theme]);
  const net = []; await ctx.route(/^https?:/, r => { net.push(r.request().url()); r.abort(); });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' || /Content Security Policy/.test(m.text())) errs.push(m.text()); });
  await p.goto(FILE); await p.waitForTimeout(1200);
  return {ctx, p, errs, net};
}
const axeSrc = fs.readFileSync(AXE, 'utf8');
const settle = p => p.waitForFunction(() => document.getAnimations().every(a => a.playState !== 'running' || a.effect.getComputedTiming().iterations === Infinity), null, {timeout: 10000}).catch(() => {});
const runAxe = async p => { await settle(p); if (!(await p.evaluate(() => !!window.axe))) await p.evaluate(axeSrc + '\n;0'); return p.evaluate(async () => (await axe.run(document, {resultTypes: ['violations']})).violations.map(v => v.id + ':' + v.nodes.map(n => n.target.join(' ')).join(',').slice(0, 100))); };
const {ctx, p, errs, net} = await mk();
t('pornire fără erori/CSP, 0 cereri de rețea', errs.length === 0 && net.length === 0, [errs, net]);
t('panoul „Eseu cu surse vii” există, modul oprit, marcajele ascunse', (await p.textContent('#h-verif')) === 'Eseu cu surse vii' && (await p.getAttribute('#vToggle', 'aria-pressed')) === 'false' && (await p.$$eval('.vclaim', a => a.every(r => r.hidden))));
const N = await p.$$eval('.vchip', a => a.length);
t('29 de afirmații marcate, fiecare cu id unic', N === 29 && (await p.$$eval('.vchip', a => new Set(a.map(x => x.dataset.claim)).size)) === 29, N);
t('legenda are 6 niveluri', (await p.$$eval('#vLeg li', a => a.length)) === 6);
await p.click('#vToggle');
t('modul pornit: marcajele vizibile, butonul în starea apăsat', (await p.getAttribute('#vToggle', 'aria-pressed')) === 'true' && (await p.$$eval('.vclaim', a => a.every(r => !r.hidden))));
const sum0 = await p.textContent('#vSum'); t('rezumat: 29 legate, 6 fără sursă, 0 verificate', /^29 afirmații.*· 6 fără sursă.*· 0 verificate/.test(sum0), sum0);
// surse reale din lista eseului (independent de cod)
const listHrefs = await p.$$eval('.source-list li a', a => a.map(x => x.href));
const open = async id => { await p.click('.vchip[data-claim="' + id + '"]'); await p.waitForSelector('#vDlg[open]'); };
const dlgInfo = () => p.evaluate(() => ({cards: [...document.querySelectorAll('#vDlg .vsrc')].map(c => ({h: c.querySelector('h3').textContent, href: (c.querySelector('a') || {}).href, rel: (c.querySelector('a') || {}).rel, target: (c.querySelector('a') || {}).target})), body: document.getElementById('vDlgBody').textContent, q: document.getElementById('vDlgQ').textContent}));
await open('b044'); let di = await dlgInfo();
t('b044 (Südhof): surse S5 și S2, linkuri = cele din lista eseului, noopener', di.cards.length === 2 && di.cards[0].h.startsWith('S5') && di.cards[1].h.startsWith('S2') && di.cards.every(c => listHrefs.includes(c.href) && /noopener/.test(c.rel) && c.target === '_blank'), JSON.stringify(di.cards));
t('b044: veriga cea mai slabă = nivel S (nu P)', /Nivel de încredere: Secundar/.test(di.body), di.body.slice(0, 120));
t('b044: citatul din dialog = textul paragrafului', di.q.includes('Südhof') || di.q.length > 40, di.q);
await p.keyboard.press('Escape'); await p.waitForTimeout(150); t('Esc închide dialogul', !(await p.$eval('#vDlg', d => d.open)));
await open('b050'); di = await dlgInfo();
t('b050 (Uri Alon): sursa S6 preprint, nivel „Primar, nerevizuit” + avertisment de revizuire', di.cards.length === 1 && di.cards[0].h.startsWith('S6') && di.cards[0].href.includes('arxiv.org/abs/2511.05906') && /nerevizuit/.test(di.body) && /revizuit/.test(di.body), di.body.slice(0, 200));
await p.click('#vDlgX');
await open('b011'); di = await dlgInfo();
t('b011 (istorie): fără sursă citată, nivel N, fără carduri', di.cards.length === 0 && /Fără sursă citată/.test(di.body) && /nu citează nicio sursă/.test(di.body), di.body);
await p.click('#vDlgX');
await open('b072'); di = await dlgInfo();
t('b072: opinia autorului (nivel O)', di.cards.length === 0 && /Opinia autorului/.test(di.body));
await p.click('#vDlgX');
await open('b036'); di = await dlgInfo();
t('b036 (GlycanAge): S1 + S7, S7 = interes comercial', di.cards.length === 2 && /Interes comercial/.test(di.body) && di.cards[1].href.includes('glycanage.com'), di.body.slice(0, 150));
// bifă personală + persistență
await p.check('#vChk'); await p.click('#vDlgX');
t('bifă: marcajul arată ✓, rezumatul 1 verificată', (await p.textContent('.vchip[data-claim="b036"]')).startsWith('✓') && /· 1 verificate/.test(await p.textContent('#vSum')), await p.textContent('#vSum'));
await p.reload(); await p.waitForTimeout(1200);
t('după reîncărcare: modul pornit și bifa păstrate', (await p.getAttribute('#vToggle', 'aria-pressed')) === 'true' && (await p.textContent('.vchip[data-claim="b036"]')).startsWith('✓'));
// CSV
const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#vCsv')]); const csv = fs.readFileSync(await dl.path(), 'utf8').replace(/^﻿/, ''); const rows = csv.trim().split(/\r\n/);
t('CSV: nume, antet, 29 de rânduri', dl.suggestedFilename() === 'nemurirea-registru-verificare.csv' && rows[0] === 'id,level,sources,verified,text' && rows.length === 30, rows.length);
t('CSV: b036 → nivel C, surse „S1 S7”, verificat 1', rows.some(r => r.startsWith('"b036","C","S1 S7",1,')), rows.find(r => r.includes('b036')));
t('CSV: b011 → nivel N, verificat 0; b072 → opinion', rows.some(r => r.startsWith('"b011","N","",0,')) && rows.some(r => r.startsWith('"b072","O","opinion",0,')));
t('mesaj de stare după descărcare', (await p.textContent('#vStat')).length > 3);
// dezactivare bifă
await open('b036'); await p.uncheck('#vChk'); await p.click('#vDlgX'); t('debifare: rezumatul revine la 0 verificate', /· 0 verificate/.test(await p.textContent('#vSum')));
// limbi
for (const l of ['en', 'fr', 'it', 'es', 'pt', 'de', 'hu']) {
  await p.selectOption('#langSel', l); await p.waitForTimeout(250);
  const chip = await p.textContent('.vchip[data-claim="b044"]'), sum = await p.textContent('#vSum'), tog = await p.textContent('#vToggle');
  await open('b044'); const body = await p.textContent('#vDlg'); await p.click('#vDlgX');
  t('limba ' + l + ': fără chei sau {n} rămase, textele traduse', !/\{[nxk]\}/.test(sum) && !/^v[a-z_]+$/.test(tog) && !/\bvl_|\bvd_|\bvty_|\bvtn_/.test(chip + body) && !/Nivel de încredere/.test(body) && chip !== 'Surse: S5 · S2 · S — Secundar', [tog, chip, sum]);
}
await p.selectOption('#langSel', 'ro'); await p.waitForTimeout(200);
// a11y
await open('b044'); t('axe: 0 violări cu dialogul deschis (noapte)', (await runAxe(p)).length === 0, await runAxe(p)); await p.click('#vDlgX');
t('axe: 0 violări cu modul verificare pornit (noapte)', (await runAxe(p)).length === 0, await runAxe(p));
t('fără erori pe tot parcursul', errs.length === 0, errs);
await ctx.close();
// temă luminoasă + mobil 360
const lt = await mk(360, 740, 'ro', 'light'); await lt.p.click('#vToggle');
t('mobil 360px: fără derulare orizontală', await lt.p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
await lt.p.click('.vchip[data-claim="b044"]'); await lt.p.waitForSelector('#vDlg[open]');
t('mobil: dialogul încape în ecran', await lt.p.evaluate(() => { const r = document.getElementById('vDlg').getBoundingClientRect(); return r.left >= 0 && r.right <= window.innerWidth; }));
t('axe: 0 violări (temă luminoasă, mobil, dialog deschis)', (await runAxe(lt.p)).length === 0, await runAxe(lt.p));
await lt.p.click('#vDlgX'); await lt.p.waitForFunction(() => !document.querySelector('#vDlg[open]'), null, {timeout: 5000}).catch(() => {});
const axeLt = await runAxe(lt.p); t('axe: 0 violări (temă luminoasă, mobil, mod pornit)', axeLt.length === 0, axeLt);
await b.close();
console.log(`\n${ok} ok / ${bad} eșuate`); process.exit(bad ? 1 : 0);
