# NEMURIREA — A kor, amely megírja biológiai sorsunkat

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · **Magyar**

**Verzió:** 2.0.1 · **Utolsó frissítés:** 2026-10-27

**Állapot:** stabil · **Offline:** teljes az esszéhez és a teszthez; a „Források és olvasnivalók” hivatkozásai internetet igényelnek

A felület nyelvei: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Interaktív esszé a biológiai órákról és a hosszú élet tudományáról, a Nemurirea sorozatban, Atlantykron 2026.

**Online alkalmazás:** https://chiuta.github.io/Nemurirea/

![Képernyőkép](screenshot.hu.png)

## Mi ez

A NEMURIREA egyetlen HTML-fájlból álló esszéoldal, Alexio jegyzi, kelte 2026. 07. 14. (kb. 9 perc olvasás). Kiindulópontja az Elena Oceanu által prof. dr. Alberto Berettával készített, a SmartLiving.ro oldalon megjelent interjú, valamint a Milan Longevity Summit 2026 rendezvényen bemutatott adatok; a szöveg kijelenti, hogy a tudományos gondolatok Berettát és az idézett kutatókat illetik, az értelmezés és a szerkezet pedig az esszé szerzőjét. Az esszé tájékoztató és oktató célú, nem minősül orvosi tanácsnak (az alkalmazásban szereplő pontosítás).

## Funkciók

- Szakaszokra tagolt esszé: „A tízezer éves régi álom” (idővonal Gilgamestől a krionikáig), „Az igazi órák” (epigenetikai óra, GlycanAge, proteomikai órák), „Három felfedezés a Milan Longevity Summit 2026-ról”, „A döntő évtized”, „Hogyan különböztessük meg a tudományt a marketingtől”, „Teszteld a tudományos ösztönödet”, „Az igazi halhatatlanság”, „Források és olvasnivalók”.
- Navigáció a fejlécben: Cikk, Az órák, Az évtized, A teszt, A halhatatlanság.
- Tudományosösztön-teszt: öt kérdés, véletlenszerűen kiválasztva tízből (feleletválasztós, a válaszok sorrendje összekeverve), minden válasz után magyarázó megjegyzéssel („Következő kérdés”, „Teszt újrakezdése”); a végén hivatkozások az esszé azon szakaszaira, amelyek a hibás válaszoknak felelnek meg.
- Vékony olvasási folyamatjelző sáv az oldal tetején (nyomtatáskor rejtett).
- „↑” gomb az oldal tetejére való visszatéréshez; az elemek görgetés közben fokozatosan jelennek meg.
- „Világos téma / Éjszakai téma” gomb a fejlécben (az éjszakai téma marad az alapértelmezett; a választás a `localStorage`-ban tárolódik, ha a böngésző engedi).
- Közösségi előnézeti kép (`nemurirea-og.png`) megosztáshoz.

## Használati útmutató

1. Olvasd el az esszét az oldal görgetésével, vagy használd a fejléc hivatkozásait (Cikk, Az órák, Az évtized, A teszt, A halhatatlanság).
2. A „Teszteld a tudományos ösztönödet” szakaszban válassz választ minden kérdésre; megjelenik a magyarázó megjegyzés.
3. A folytatáshoz nyomd meg a „Következő kérdés” gombot; a végén a „Teszt újrakezdése” gombbal kezdheted elölről.
4. A „Források és olvasnivalók” szakasz az idézett forrásokra mutató hivatkozásokat tartalmazza (SmartLiving.ro, Milan Longevity Summit, SoLongevity, Nobel Prize, arXiv, GlycanAge).
5. A „↑” gomb visszavisz az oldal tetejére.

## Adatvédelem és hálózat

- Helyi: az egyetlen, `localStorage`-ban tárolt érték a téma választása (kulcs: `nemurirea.tema`); `sessionStorage`-ot és IndexedDB-t nem használ, a teszt eredményét nem menti.
- Hálózat: nem találtam `fetch` hívást, sem külső szkriptet vagy betűtípust; az oldal egyetlen fájlból töltődik be (plusz a `nemurirea-og.png` kép, amelyet csak közösségi előnézetként használ).
- A külső hivatkozások (smartliving.ro, milanlongevitysummit.org, solongevity.com, nobelprize.org, arxiv.org, glycanage.com, centrulstring.ro) csak kattintásra nyílnak meg. A lábléc kijelenti: „Egyetlen fájl, offline, telemetria nélkül”.

## Helyi futtatás / offline

Töltsd le az `index.html` fájlt, és nyisd meg böngészőben; az esszé és a teszt internet nélkül is működik. A „Források és olvasnivalók” hivatkozásaihoz internet kell.

## Forrásellenőrzés (2026.10.27.)

Az esszé 2026. július 14-én készült, és nem íródott újra. A hosszú élet kutatása gyorsan változó terület: ami itt áll, azt új tanulmányok felülírhatják. Alább azok a források szerepelnek, amelyeket 2026. október 27-én (az ellenőrzés napján) ténylegesen sikerült megvizsgálni.

- [Milan Longevity Summit 2026 — program (PDF)](https://www.cdi.it/wp-content/uploads/2026/05/Milan-Longevity-Summit-2026.pdf) — Ellenőrizve 2026.10.27-én: 2026. május 20–23., Allianz MiCo, Milánó; Alberto Beretta a tudományos bizottság elnöke és a SoLongevity Foundation tudományos igazgatója; Thomas Südhof nyitóelőadást tart (május 22.).
- [Dica33 — a 2026-os kiadás programja](https://www.dica33.it/notizie/40014/longevity-summit-milano-quattro-giorni-per-ridisegnare.asp) — Ellenőrizve 2026.10.27-én (a cikk 2026.04.22-i): megerősíti a 2026. május 20–23-i időpontot és Thomas Südhof részvételét, akit 2013-as orvosi Nobel-díjasként említ.
- [Pridham, Hayut, …, Alon — Dynamics of menopause from deconvolution of millions of lab tests](https://arxiv.org/abs/2511.05906) — Ellenőrizve 2026.10.27-én: ~300 millió laborvizsgálat több mint egymillió nőtől (Clalit/Izrael és NHANES/USA). A ScienceAlert (2026.10.13.) szerint a tanulmány közben megjelent a Nature Medicine-ben (DOI 10.1038/s41591-026-04614-0) — a folyóirat oldalán megerősítendő; az ellenőrző mód „előnyomat” szintjét még nem módosítottuk.
- [Levine és mtsai (2018), Aging 10(4):573–591](https://doi.org/10.18632/aging.101414) — Kiegészítő olvasmány a PhenoAge-ről, amelyet az esszé említ. 2026.10.27-én ellenőrizve, hogy a cikk létezik (DOI 10.18632/aging.101414).
- [Horvath (2013), Genome Biology 14:R115](https://doi.org/10.1186/gb-2013-14-10-r115) — Kiegészítő olvasmány az epigenetikai óráról (DNS-metiláció). 2026.10.27-én ellenőrizve, hogy a cikk létezik (DOI 10.1186/gb-2013-14-10-r115).

Ennél az ellenőrzésnél nem nyitottuk meg újra (a munkakörnyezetből korlátozott volt az elérés): a SmartLiving.ro interjút, a milanlongevitysummit.org profilt, a solongevity.com-ot, a glycanage.com-ot és a Nobel-adatlapot. „A szerzőnek ellenőriznie kell” státuszban maradnak; hivatkozásaik a fenti listában nem változtak.

Kiegészítendő: a 29 megjelölt állítás közül 6-hoz (főleg a történeti részben: Gilgames, Kína első császára, az alkimisták, Ponce de León, James Bedford) nincs megadott forrás — lásd az „Élő forrásokkal ellátott esszé” módot.

## Előzmények / Changelog

### 1.2.4 — 2026-10-22

fff-kit 1.1.4: érintési célok és minimális szövegméret. Érintési célok/szöveg javítva az alkalmazásban.

### 1.2.3 — 2026-10-22

fff-kit 1.1.2: PBKDF2 600 000 iterációval, clickjacking elleni védelem.

### 1.2.2 — 2026-10-22
- Mobil: a szöveg legalább 12 px, a gombok és mezők érintési felülete pedig nagyobb keskeny képernyőn.
- Mobil: javítva a fejléc 2 px-es vízszintes túlcsordulása (a téma gomb 360 px-es képernyőn már nem lóg ki); a hivatkozáslisták linkjeinek érintési felülete nagyobb.

### 1.1.0 — 2026-10-14
- Adatmentés és adatcímkézés (fff-kit).

### 1.0.0 — 2026. október 12.
- A verzió és az utolsó frissítés dátuma megjelenik az alkalmazásban (lábléc).

### 11.10.2026 (harmadik frissítés) — 2026. október 11.
- Opcionális világos téma (gomb a fejlécben; a kontrasztot axe-szel ellenőriztük mindkét témában, asztali gépen és mobilon); az éjszakai téma marad az alapértelmezett.
- CSP: `connect-src 'none'`.

### 11.10.2026 (második frissítés) — 2026. október 11.
- Teszt: a készlet 5-ről 10 kérdésre bővült (mind az esszé szövegén alapul); minden kör véletlenszerűen 5-öt húz, így az újrakezdés már nem ismétli mindig ugyanazokat a kérdéseket; az eredmény jelzi az újraolvasandó szakaszokat.
- Olvasási folyamatjelző sáv.

### 11.10.2026 — 2026. október 11.
- A teszt: a válaszlehetőségek sorrendje minden kérdésnél és minden újrakezdéskor összekeveredik (a helyes válasz már nem szinte mindig a második lehetőség).
- Szigorú Content-Security-Policy hozzáadva (szkript hash-sel, hálózati kapcsolatok nélkül); axe-ellenőrzés szabálysértés nélkül.

## Licenc

MIT — lásd a `LICENSE` fájlt. Az alkalmazás lábléce ezt jelzi: „© 2026 Centrul STRING · Szöveg és szerkesztés: Alexio”.

## Szerző

Alexio — Alexandru-Ionuț Chiuță, kapcsolat: alexio@trom.tf. Az alkalmazás a Centrul STRING-et (CSPCF) említi a Nemurirea sorozat kiadójaként az Atlantykron 2026 keretében.

## Összefoglaló
A NEMURIREA egyetlen fájlból álló, román nyelvű esszé a biológiai öregedési órákról és a hosszú élet tudományáról (a Nemurirea sorozat része, Atlantykron 2026), rövid feleletválasztós kvízzel. Prof. Alberto Beretta interjúján és a Milan Longevity Summit 2026 adatain alapul. Böngészőtárolást és külső kéréseket nem találtunk; tájékoztató jellegű, nem orvosi tanács.
