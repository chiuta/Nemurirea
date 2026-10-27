// Teste v2.1.0: sursele noi (S8–S15) pentru afirmațiile istorice: linkuri, 8 limbi, acoperire parțială, fără rețea.
// Rulare: node tests/surse-noi.test.mjs  (PW_ROOT, CHROMIUM_PATH)
import {createRequire} from 'module'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const require = createRequire(process.env.PW_ROOT || import.meta.url); const {chromium} = require('playwright');
const FILE = 'file://' + path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'index.html');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ', n); } else { bad++; console.log('  FAIL', n, x ?? ''); } };
const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox']});
const ctx = await b.newContext({viewport: {width: 1280, height: 900}}); const net = []; await ctx.route(/^https?:/, r => { net.push(r.request().url()); r.abort(); });
await ctx.addInitScript(() => { try { if (!sessionStorage.getItem('i')) { sessionStorage.setItem('i', '1'); localStorage.setItem('nemurirea.limba', 'ro'); } } catch (e) {} });
const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(FILE); await p.waitForTimeout(1200);
const lis = await p.$$eval('li[data-s]', a => a.map(l => ({s: l.dataset.s, href: l.querySelector('a').href, rel: l.querySelector('a').rel, note: l.querySelector('span').textContent})));
t('8 surse noi S8..S15, https, noopener, fără trackere', lis.length === 8 && lis.every((l, i) => l.s === 'S' + (i + 8) && l.href.startsWith('https://') && /noopener/.test(l.rel)) && !lis.some(l => /utm_|fbclid/.test(l.href)), lis.length);
const CLAIMS = {b011: ['S10'], b014: ['S8', 'S9'], b017: ['S11'], b020: ['S12'], b023: ['S13', 'S14'], b026: ['S15']};
await p.click('#vToggle');
for (const [id, ss] of Object.entries(CLAIMS)) {
  await p.click('.vchip[data-claim="' + id + '"]'); await p.waitForSelector('#vDlg[open]');
  const hs = await p.$$eval('#vDlg .vsrc h3', a => a.map(x => x.textContent.split(' ·')[0])); const body = await p.textContent('#vDlg');
  const part = ['b014', 'b017', 'b023'].includes(id);
  t(id + ': surse ' + ss.join('+') + (part ? ', acoperire parțială semnalată' : ', fără semnal de acoperire parțială'), JSON.stringify(hs) === JSON.stringify(ss) && (/acoperă doar o parte/.test(body) === part), [hs, body.slice(0, 120)]);
  await p.click('#vDlgX');
}
t('rezumat: 0 afirmații fără sursă', /· 0 fără sursă/.test(await p.textContent('#vSum')));
t('nota „De completat” nu mai spune „6 dintre”, păstrează ce rămâne de verificat', !/^De completat: 6/.test(await p.textContent('[data-b="b110"]')) && /mercur/i.test(await p.textContent('[data-b="b110"]')));
for (const l of ['en', 'fr', 'it', 'es', 'pt', 'de', 'hu']) {
  await p.selectOption('#langSel', l); await p.waitForTimeout(250);
  const h = await p.textContent('[data-b="b111"]'), n = await p.textContent('[data-b="b113"]'), n0 = await p.textContent('[data-b="b110"]');
  await p.click('.vchip[data-claim="b014"]'); await p.waitForSelector('#vDlg[open]'); const body = await p.textContent('#vDlg'); await p.click('#vDlgX');
  t('limba ' + l + ': nota, titlul și dialogul traduse, fără chei', h !== 'Surse pentru afirmațiile istorice (verificate 27.10.2026)' && !/Verificat la 27\.10/.test(n) && !/Revizuire 27\.10/.test(n0) && !/\bvpart\w*|\bvty_\w+|\bvtn_\w+/.test(body) && (l === 'en' || /traduc|translat|übersetz|fordít|traduzione|traducción|traduction|tradução|machine|automat/i.test(h)), [h, n.slice(0, 50)]);
}
t('0 cereri de rețea, 0 erori', net.length === 0 && errs.length === 0, [net, errs]);
await b.close(); console.log(`\n${ok} ok / ${bad} eșuate`); process.exit(bad ? 1 : 0);
