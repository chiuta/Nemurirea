# NEMURIREA — L'età che scrive il nostro destino biologico

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · **Italiano** · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versione:** 2.0.1 · **Ultimo aggiornamento:** 2026-10-27

**Stato:** stabile · **Offline:** completo per il saggio e il test; i link di «Fonti e letture» richiedono internet

Lingue dell'interfaccia: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Saggio interattivo sugli orologi biologici e sulla scienza della longevità, nella serie Nemurirea, Atlantykron 2026.

**App online:** https://chiuta.github.io/Nemurirea/

![Schermata](screenshot.it.png)

## Che cos'è

NEMURIREA è una pagina-saggio in un unico file HTML, firmata da Alexio, datata 14/07/2026 (circa 9 minuti di lettura). Parte dall'intervista realizzata da Elena Oceanu al prof. dott. Alberto Beretta, pubblicata su SmartLiving.ro, e dai dati presentati al Milan Longevity Summit 2026; il testo dichiara che le idee scientifiche appartengono a Beretta e ai ricercatori citati, mentre l'interpretazione e la struttura appartengono all'autore del saggio. Il saggio ha scopo informativo ed educativo e non costituisce un consiglio medico (precisazione presente nell'app).

## Funzionalità

- Saggio per sezioni: «Il vecchio sogno di diecimila anni» (cronologia da Gilgameš alla crionica), «Gli orologi veri» (orologio epigenetico, GlycanAge, orologi proteomici), «Tre scoperte dal Milan Longevity Summit 2026», «Il decennio decisivo», «Come distinguere la scienza dal marketing», «Metti alla prova il tuo istinto scientifico», «La vera immortalità», «Fonti e letture».
- Navigazione nell'intestazione: Articolo, Gli orologi, Il decennio, Il test, L'immortalità.
- Test dell'istinto scientifico: cinque domande scelte a caso da un insieme di dieci (risposta multipla, ordine delle risposte mescolato), con una nota esplicativa dopo ogni risposta («Domanda successiva», «Rifai il test»); alla fine, rimandi alle sezioni del saggio corrispondenti alle risposte sbagliate.
- Sottile barra di avanzamento della lettura in alto (nascosta in stampa).
- Pulsante «↑» per tornare all'inizio della pagina; gli elementi compaiono progressivamente durante lo scorrimento.
- Pulsante «Tema chiaro / Tema notte» nell'intestazione (il tema notte resta quello predefinito; la scelta viene conservata in `localStorage`, se il browser lo consente).
- Immagine di anteprima social (`nemurirea-og.png`) per la condivisione.

## Guida all'uso

1. Leggi il saggio scorrendo la pagina oppure usa i link nell'intestazione (Articolo, Gli orologi, Il decennio, Il test, L'immortalità).
2. Nella sezione «Metti alla prova il tuo istinto scientifico» scegli una risposta per ogni domanda; compare la nota esplicativa.
3. Premi «Domanda successiva» per continuare; alla fine premi «Rifai il test» per ricominciare.
4. La sezione «Fonti e letture» contiene i link alle fonti citate (SmartLiving.ro, Milan Longevity Summit, SoLongevity, Nobel Prize, arXiv, GlycanAge).
5. Il pulsante «↑» ti riporta in alto.

## Privacy e rete

- Locale: l'unico valore conservato in `localStorage` è la scelta del tema (chiave `nemurirea.tema`); non si usano `sessionStorage` né IndexedDB e il risultato del test non viene salvato.
- Rete: non ho trovato chiamate `fetch` né script o font esterni; la pagina si carica da un unico file (più l'immagine `nemurirea-og.png`, usata solo come anteprima social).
- I link esterni (smartliving.ro, milanlongevitysummit.org, solongevity.com, nobelprize.org, arxiv.org, glycanage.com, centrulstring.ro) si aprono solo se li clicchi. Il piè di pagina dichiara «File unico, offline, senza telemetria».

## Esecuzione locale / offline

Scarica `index.html` e aprilo in un browser; il saggio e il test funzionano senza internet. I link in «Fonti e letture» richiedono internet.

## Revisione delle fonti (27.10.2026)

Il saggio è stato scritto il 14 luglio 2026 e non è stato riscritto. La longevità è un campo in rapida evoluzione: quanto scritto qui può essere superato da nuovi studi. Di seguito le fonti che è stato effettivamente possibile verificare il 27 ottobre 2026 (data di questa revisione).

- [Milan Longevity Summit 2026 — programma (PDF)](https://www.cdi.it/wp-content/uploads/2026/05/Milan-Longevity-Summit-2026.pdf) — Verificato il 27.10.2026: 20–23 maggio 2026, Allianz MiCo, Milano; Alberto Beretta presiede il comitato scientifico ed è direttore scientifico della SoLongevity Foundation; Thomas Südhof tiene una relazione di apertura (22 maggio).
- [Dica33 — programma dell'edizione 2026](https://www.dica33.it/notizie/40014/longevity-summit-milano-quattro-giorni-per-ridisegnare.asp) — Verificato il 27.10.2026 (articolo del 22.04.2026): conferma le date 20–23 maggio 2026 e la presenza di Thomas Südhof, descritto come premio Nobel per la medicina 2013.
- [Pridham, Hayut, …, Alon — Dynamics of menopause from deconvolution of millions of lab tests](https://arxiv.org/abs/2511.05906) — Verificato il 27.10.2026: ~300 milioni di esami di laboratorio di oltre un milione di donne (Clalit/Israele e NHANES/USA). Secondo ScienceAlert (13.10.2026) lo studio è nel frattempo apparso su Nature Medicine (DOI 10.1038/s41591-026-04614-0) — da confermare sulla pagina della rivista; il livello «preprint» nella modalità di verifica non è stato ancora modificato.
- [Levine et al. (2018), Aging 10(4):573–591](https://doi.org/10.18632/aging.101414) — Lettura aggiuntiva su PhenoAge, citato nel saggio. Verificato il 27.10.2026 che l'articolo esiste (DOI 10.18632/aging.101414).
- [Horvath (2013), Genome Biology 14:R115](https://doi.org/10.1186/gb-2013-14-10-r115) — Lettura aggiuntiva sull'orologio epigenetico (metilazione del DNA). Verificato il 27.10.2026 che l'articolo esiste (DOI 10.1186/gb-2013-14-10-r115).

Non riaperti in questa revisione (l'accesso dall'ambiente di lavoro era limitato): l'intervista di SmartLiving.ro, il profilo su milanlongevitysummit.org, solongevity.com, glycanage.com e la scheda Nobel. Restano «da verificare dall'autore»; i loro link nell'elenco sopra non sono stati modificati.

Da completare: 6 delle 29 affermazioni segnalate (soprattutto nella parte storica: Gilgameš, il primo imperatore della Cina, gli alchimisti, Ponce de León, James Bedford) non hanno una fonte citata — vedi la modalità «Saggio a fonti vive».

## Cronologia / Changelog

### 1.2.4 — 2026-10-22

fff-kit 1.1.4: aree tattili e testo minimo. Aree tattili/testo corretti nell’app.

### 1.2.3 — 2026-10-22

fff-kit 1.1.2: PBKDF2 a 600.000 iterazioni, protezione anti-clickjacking.

### 1.2.2 — 2026-10-22
- Mobile: il testo è di almeno 12 px e pulsanti e campi hanno aree tattili più grandi sugli schermi stretti.
- Mobile: corretto lo sforamento orizzontale di 2 px dell'intestazione (il pulsante del tema non sporge più su schermi da 360 px); i link degli elenchi di riferimenti hanno aree tattili più grandi.

### 1.1.0 — 2026-10-14
- Backup ed etichettatura dei dati (fff-kit).

### 1.0.0 — 12 ottobre 2026
- La versione e la data dell'ultimo aggiornamento sono mostrate nell'app (piè di pagina).

### 11.10.2026 (terzo aggiornamento) — 11 ottobre 2026
- Tema chiaro facoltativo (pulsante nell'intestazione; contrasto verificato con axe in entrambi i temi, su desktop e mobile); il tema notte resta quello predefinito.
- CSP: `connect-src 'none'`.

### 11.10.2026 (secondo aggiornamento) — 11 ottobre 2026
- Test: l'insieme è stato esteso da 5 a 10 domande (tutte basate sul testo del saggio); ogni giro ne estrae 5 a caso, così rifare il test non ripete sempre le stesse domande; il risultato indica le sezioni da rileggere.
- Barra di avanzamento della lettura.

### 11.10.2026 — 11 ottobre 2026
- Il test: l'ordine delle opzioni di risposta viene mescolato a ogni domanda e a ogni ripetizione (la risposta corretta non è più quasi sempre la seconda opzione).
- Aggiunta una Content-Security-Policy rigorosa (script con hash, nessuna connessione di rete); verifica axe senza violazioni.

## Licenza

MIT — vedi il file `LICENSE`. Il piè di pagina dell'app indica: «© 2026 Centrul STRING · Testo e montaggio: Alexio».

## Autore

Alexio — Alexandru-Ionuț Chiuță, contatto: alexio@trom.tf. L'app cita il Centrul STRING (CSPCF) come editore della serie Nemurirea nell'ambito di Atlantykron 2026.

## Riepilogo
NEMURIREA è un saggio in lingua rumena, a file singolo, sugli orologi biologici dell'invecchiamento e sulla scienza della longevità (serie Nemurirea, Atlantykron 2026), con un breve quiz a risposta multipla. Si basa su un'intervista al prof. Alberto Beretta e sui dati del Milan Longevity Summit 2026. Non sono stati trovati né archiviazione nel browser né richieste esterne; contenuto informativo, non un consiglio medico.
