# NEMURIREA — Vârsta care ne scrie destinul biologic

[English](README.md) · **Română** · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versiune:** 2.1.0 · **Ultima actualizare:** 2026-10-27

**Stare:** stabil · **Offline:** complet pentru eseu și test; legăturile din „Surse și lecturi” cer internet

Limbile interfeței: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Eseu interactiv despre ceasurile biologice și știința longevității, în seria Nemurirea, Atlantykron 2026.

**Live:** https://chiuta.github.io/Nemurirea/

![Captura de ecran](screenshot.ro.png)

## Ce este

NEMURIREA este o pagină-eseu dintr-un singur fișier HTML, semnată Alexio, datată 14/07/2026 (aproximativ 9 minute de citit). Pornește de la interviul realizat de Elena Oceanu cu prof. dr. Alberto Beretta, publicat în SmartLiving.ro, și de la datele prezentate la Milan Longevity Summit 2026; textul declară că ideile științifice aparțin lui Beretta și cercetătorilor citați, iar interpretarea și structura aparțin autorului eseului. Eseul are scop informativ și educațional și nu constituie sfat medical (precizare din aplicație).

## Funcții

- **Eseu cu surse vii (v2.0.0):** „Mod verificare” — 29 de afirmații din eseu sunt legate de sursele din lista eseului, cu nivel de încredere după tipul sursei (primar/oficial, preprint nerevizuit, secundar, interes comercial, fără sursă citată, opinia autorului); dialog cu ce poți și ce nu poți deduce din sursă, bifă personală „am verificat”, registru CSV. Legăturile reflectă atribuirea eseului, nu o verificare independentă; nu e sfat medical.
- Eseu în secțiuni: „Visul vechi de zece mii de ani" (cronologie de la Ghilgameș la criogenie), „Ceasurile adevărate" (ceasul epigenetic, GlycanAge, ceasurile proteomice), „Trei descoperiri de la Milan Longevity Summit 2026", „Deceniul decisiv", „Cum deosebești știința de marketing", „Testează-ți instinctul științific", „Nemurirea adevărată", „Surse și lecturi".
- Navigare în antet: Articol, Ceasurile, Deceniul, Testul, Nemurirea.
- Test de instinct științific: cinci întrebări alese la întâmplare dintr-un set de zece (variante multiple, ordinea variantelor amestecată), cu notă explicativă după fiecare răspuns („Următoarea întrebare”, „Ia testul de la capăt”); la final, trimiteri către secțiunile eseului corespunzătoare răspunsurilor greșite.
- Bară subțire de progres al lecturii în partea de sus (ascunsă la tipărire).
- Buton „↑" de întoarcere la începutul paginii; elementele apar progresiv la derulare.
- Buton „Temă luminoasă / Temă de noapte” în antet (implicit rămâne tema de noapte; alegerea se păstrează în `localStorage`, dacă browserul permite).
- Imagine de previzualizare socială (`nemurirea-og.png`) pentru partajare.

## Manual de utilizare

1. Citește eseul derulând pagina sau folosește linkurile din antet (Articol, Ceasurile, Deceniul, Testul, Nemurirea).
2. În secțiunea „Testează-ți instinctul științific" alege un răspuns pentru fiecare întrebare; apare nota explicativă.
3. Apasă „Următoarea întrebare" pentru a continua; la final apasă „Ia testul de la capăt" pentru a relua.
4. Secțiunea „Surse și lecturi" conține linkurile către sursele citate (SmartLiving.ro, Milan Longevity Summit, SoLongevity, Nobel Prize, arXiv, GlycanAge).
5. Butonul „↑" te readuce sus.

## Confidențialitate și rețea

- Local: singura valoare păstrată în `localStorage` este alegerea temei (cheia `nemurirea.tema`); nu se folosesc `sessionStorage` sau IndexedDB, iar rezultatul testului nu se salvează.
- Rețea: nu am găsit apeluri `fetch`, scripturi sau fonturi externe; pagina se încarcă dintr-un singur fișier (plus imaginea `nemurirea-og.png`, folosită doar ca previzualizare socială).
- Linkurile externe (smartliving.ro, milanlongevitysummit.org, solongevity.com, nobelprize.org, arxiv.org, glycanage.com, centrulstring.ro) se deschid doar dacă le apeși. Subsolul declară „Fișier unic, offline, fără telemetrie".

## Rulare locală / offline

Descarcă `index.html` și deschide-l în browser; eseul și testul funcționează fără internet. Linkurile din „Surse și lecturi" necesită internet.

## Revizuirea surselor (27.10.2026)

Eseul a fost scris la 14 iulie 2026 și nu a fost rescris. Longevitatea e un domeniu care se schimbă rapid: ce scrie aici poate fi depășit de studii noi. Mai jos sunt sursele pe care le-am putut verifica efectiv la 27 octombrie 2026 (data acestei revizuiri).

- [Milan Longevity Summit 2026 — program (PDF)](https://www.cdi.it/wp-content/uploads/2026/05/Milan-Longevity-Summit-2026.pdf) — Verificat la 27.10.2026: 20–23 mai 2026, Allianz MiCo, Milano; Alberto Beretta prezidează comitetul științific și este director științific al SoLongevity Foundation; Thomas Südhof ține o conferință-cheie (22 mai).
- [Dica33 — programul ediției 2026](https://www.dica33.it/notizie/40014/longevity-summit-milano-quattro-giorni-per-ridisegnare.asp) — Verificat la 27.10.2026 (articol din 22.04.2026): confirmă datele 20–23 mai 2026 și prezența lui Thomas Südhof, descris ca laureat Nobel 2013 pentru medicină.
- [Pridham, Hayut, …, Alon — Dynamics of menopause from deconvolution of millions of lab tests](https://arxiv.org/abs/2511.05906) — Verificat la 27.10.2026: ~300 de milioane de analize de la peste un milion de femei (Clalit/Israel și NHANES/SUA). Conform ScienceAlert (13.10.2026), studiul a apărut între timp în Nature Medicine (DOI 10.1038/s41591-026-04614-0) — de confirmat pe pagina revistei; nivelul „preprint” din modul de verificare nu a fost schimbat încă.
- [Levine și colab. (2018), Aging 10(4):573–591](https://doi.org/10.18632/aging.101414) — Lectură suplimentară despre PhenoAge, menționat în eseu. Verificat la 27.10.2026 că articolul există (DOI 10.18632/aging.101414).
- [Horvath (2013), Genome Biology 14:R115](https://doi.org/10.1186/gb-2013-14-10-r115) — Lectură suplimentară despre ceasul epigenetic (metilarea ADN). Verificat la 27.10.2026 că articolul există (DOI 10.1186/gb-2013-14-10-r115).

Neredeschise la această revizuire (accesul din mediul de lucru a fost restrâns): interviul SmartLiving.ro, profilul de pe milanlongevitysummit.org, solongevity.com, glycanage.com și fișa Nobel. Rămân „de verificat de autor”; legăturile lor din lista de mai sus nu au fost schimbate.

De completat: 6 dintre cele 29 de afirmații marcate (mai ales în partea istorică: Ghilgameș, primul împărat al Chinei, alchimiști, Ponce de León, James Bedford) nu au sursă citată — vezi modul „Eseu cu surse vii”.

## Surse verificate pentru afirmațiile istorice (v2.1.0)

### 2.1.0 — 2026-10-27
- Surse verificate pentru cele 6 afirmații istorice; 3 cu acoperire parțială, semnalată.


Cele 6 afirmații fără sursă din modul „Eseu cu surse vii” au acum surse secundare verificate pe web la 27.10.2026 (Britannica, Smithsonian Magazine, New World Encyclopedia, Wikipedia, NIH Research Matters), listate în „Surse și lecturi” (8 limbi; fr/it/es/pt/de/hu = traducere automată, marcată).

- Acoperire completă: Ghilgameș, Ponce de León, studiul organelor (NIH).
- Acoperire PARȚIALĂ (semnalată în dialog): mercurul la primul împărat (sursele nu îl menționează), alchimiștii din Europa și lumea arabă / originea chimiei moderne (sursa acoperă elixirul și China), „−196 °C” pentru Bedford (sursa spune „teoretic”).
- Textul eseului nu s-a modificat. Sursele secundare nu înlocuiesc sursele primare. Teste noi: `tests/surse-noi.test.mjs`.

## Istoric / Changelog

### 1.2.4 — 2026-10-22

fff-kit 1.1.4: ținte tactile și text minim. Ținte tactile/text corectate în aplicație.

### 1.2.3 — 2026-10-22

fff-kit 1.1.2: PBKDF2 600 000 iterații, protecție anti-clickjacking.

### 1.2.2 — 2026-10-22
- Mobil: textul are cel puțin 12 px, iar butoanele și câmpurile au ținte tactile mai mari pe ecrane înguste.
- Mobil: corectat depășirea orizontală de 2 px a antetului (butonul de temă nu mai iese din ecran la 360 px); linkurile din listele de referințe au ținte tactile mai mari.

### 1.1.0 — 2026-10-14
- Copie de rezervă și etichetare date (fff-kit).

### 1.0.0 — 12 octombrie 2026
- Versiunea și data ultimei actualizări sunt afișate în aplicație (subsol).

### 11.10.2026 (a treia actualizare) — 11 octombrie 2026
- Temă luminoasă opțională (buton în antet; contrast verificat cu axe în ambele teme, pe desktop și mobil); tema de noapte rămâne implicită.
- CSP: `connect-src 'none'`.

### 11.10.2026 (a doua actualizare) — 11 octombrie 2026
- Test: set extins de la 5 la 10 întrebări (toate pe baza textului eseului); fiecare rundă ia 5 la întâmplare, deci reluarea nu mai repetă mereu aceleași întrebări; rezultatul indică secțiunile de recitit.
- Bară de progres al lecturii.

### 11.10.2026 — 11 octombrie 2026
- Testul: ordinea variantelor de răspuns se amestecă la fiecare întrebare și la fiecare reluare (răspunsul corect nu mai e aproape mereu a doua opțiune).
- Adăugat Content-Security-Policy strict (script cu hash, fără conexiuni de rețea); verificare axe fără încălcări.

## Licență

MIT — vezi fișierul `LICENSE`. Subsolul aplicației indică: „© 2026 Centrul STRING · Text și montaj: Alexio".

## Autor

Alexio — Alexandru-Ionuț Chiuță, contact: alexio@trom.tf. Aplicația menționează Centrul STRING (CSPCF) ca editor al seriei Nemurirea în cadrul Atlantykron 2026.

## Rezumat

NEMURIREA este un eseu într-un singur fișier, în limba română, despre ceasurile biologice ale îmbătrânirii și știința longevității (parte a seriei Nemurirea, Atlantykron 2026), cu un scurt test cu variante multiple. Se bazează pe un interviu cu prof. Alberto Beretta și pe date de la Milan Longevity Summit 2026. Nu s-a găsit stocare în browser și nici cereri externe; are caracter informativ, nu constituie sfat medical.
