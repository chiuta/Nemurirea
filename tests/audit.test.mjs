// Teste de regresie pentru audit (1.2.6): ținte tactile ≥ 44 px, limba salvată validată, fără rețea.
// Rulare: node tests/audit.test.mjs   (Playwright din /opt/node-tools, Chromium din /opt/pw-browsers; rețea blocată)
import {createRequire} from 'module'; import path from 'path'; import {fileURLToPath} from 'url';
const require = createRequire('/opt/node-tools/package.json'); const {chromium} = require('playwright');
const FILE = 'file://' + path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'index.html');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ' + n); } else { bad++; console.log('  FAIL ' + n + (x !== undefined ? ' :: ' + JSON.stringify(x) : '')); } };
const b = await chromium.launch({executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox']});
async function open(touch, lang) {
  const ctx = await b.newContext(touch ? {viewport: {width: 390, height: 800}, hasTouch: true, isMobile: true, locale: 'en-US'} : {viewport: {width: 1280, height: 800}, locale: 'en-US'});
  let net = 0; await ctx.route(/^https?:/, (r) => { net++; r.abort(); });
  if (lang) await ctx.addInitScript((l) => { try { localStorage.setItem('nemurirea.limba', l); } catch (e) {} }, lang);
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(FILE); await p.waitForTimeout(1200); return {ctx, p, errs, net: () => net};
}
{ const {ctx, p, errs, net} = await open(true);
  const small = await p.evaluate(() => Array.from(document.querySelectorAll('.lang-sel,.theme-btn,.source-list a,.site-footer li a')).map((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.height < 43.5 || r.width < 43.5) ? (e.className || e.tagName) + ':' + Math.round(r.width) + 'x' + Math.round(r.height) : null; }).filter(Boolean));
  t('ținte tactile ≥ 44 px (selector limbă, temă, liste de linkuri)', small.length === 0, small);
  t('fără depășire orizontală', await p.evaluate(() => document.documentElement.scrollWidth - innerWidth) <= 0);
  t('0 erori, 0 cereri de rețea', errs.length === 0 && net() === 0, errs); await ctx.close(); }
for (const l of ['constructor', 'toString', 'xx']) {
  const {ctx, p, errs} = await open(false, l);
  t(`limba salvată „${l}” respinsă (cade pe limba browserului)`, await p.evaluate(() => document.documentElement.lang) === 'en' && errs.length === 0, errs);
  await ctx.close();
}
await b.close(); console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);
