# CHANGELOG

Format: SemVer (MAJOR.MINOR.PATCH). Intrările mai vechi sunt copiate din README (secțiunea „History / Changelog”), neschimbate.

## 2.0.1 — 2026-10-27 (anterior: 2.0.0)

Revizuire a surselor (doar texte; eseul din 14.07.2026 nu a fost rescris):
- Bloc nou „Revizuirea surselor · 27 octombrie 2026” în secțiunea „Surse și lecturi” (8 limbi) și secțiune echivalentă în README (8 limbi), cu data revizuirii și cu sursele efectiv verificate pe web la această dată: programul Milan Longevity Summit 2026 (PDF) și dica33.it (Beretta, Südhof, 20–23 mai 2026, Milano); preprintul arXiv 2511.05906 (Pridham, Hayut, …, Alon) și semnalarea publicării în Nature Medicine (conform ScienceAlert, de confirmat pe pagina revistei); lecturi suplimentare Levine et al. 2018 (PhenoAge) și Horvath 2013 (ceasul epigenetic), verificate că există (DOI).
- Marcaje „de completat / de verificat de autor”: interviul SmartLiving.ro, profilul și site-urile Milan Longevity Summit / SoLongevity / GlycanAge și fișa Nobel nu au putut fi redeschise la această revizuire; 6 dintre cele 29 de afirmații nu au sursă citată.
- Adăugat „Stare: stabil” și „Offline” în README. Nu s-a schimbat nicio logică și niciun nivel de încredere din modul de verificare.

---

## Istoric anterior (din README.md)

#### 1.2.4 — 2026-10-22

fff-kit 1.1.4: touch targets and minimum text size. Touch targets/text fixed in the app.

#### 1.2.3 — 2026-10-22

fff-kit 1.1.2: PBKDF2 with 600,000 iterations, anti-clickjacking protection.

#### 1.2.2 — 2026-10-22
- Mobile: text is at least 12 px and buttons and fields have larger touch targets on narrow screens.
- Mobile: fixed the 2 px horizontal overflow of the header (the theme button no longer sticks out on 360 px screens); reference-list links have larger touch targets.

#### 1.1.0 — 2026-10-14
- Backup and data labelling (fff-kit).

#### 1.0.0 — 12 October 2026
- The version and the last-updated date are shown in the app (footer).

#### 11.10.2026 (third update) — 11 October 2026
- Optional light theme (button in the header; contrast checked with axe in both themes, on desktop and mobile); the night theme remains the default.
- CSP: `connect-src 'none'`.

#### 11.10.2026 (second update) — 11 October 2026
- Test: the set was extended from 5 to 10 questions (all based on the essay's text); each round draws 5 at random, so retaking no longer repeats the same questions; the result points to the sections to reread.
- Reading-progress bar.

#### 11.10.2026 — 11 October 2026
- The test: the order of the answer options is shuffled for every question and every retake (the correct answer is no longer almost always the second option).
- Added a strict Content-Security-Policy (script with hash, no network connections); axe check with no violations.
