# NEMURIREA — L'âge qui écrit notre destin biologique

[English](README.md) · [Română](README.ro.md) · **Français** · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Version :** 2.0.1 · **Dernière mise à jour :** 2026-10-27

**État :** stable · **Hors ligne :** complet pour l'essai et le test ; les liens de « Sources et lectures » demandent internet

Langues de l'interface : **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Essai interactif sur les horloges biologiques et la science de la longévité, dans la série Nemurirea, Atlantykron 2026.

**Application en ligne :** https://chiuta.github.io/Nemurirea/

![Capture d'écran](screenshot.fr.png)

## Présentation

NEMURIREA est une page-essai dans un seul fichier HTML, signée Alexio, datée du 14/07/2026 (environ 9 minutes de lecture). Elle part de l'entretien réalisé par Elena Oceanu avec le prof. dr Alberto Beretta, publié sur SmartLiving.ro, et des données présentées au Milan Longevity Summit 2026 ; le texte déclare que les idées scientifiques appartiennent à Beretta et aux chercheurs cités, tandis que l'interprétation et la structure appartiennent à l'auteur de l'essai. L'essai a une visée informative et éducative et ne constitue pas un avis médical (précision figurant dans l'application).

## Fonctionnalités

- Essai en sections : « Le vieux rêve de dix mille ans » (chronologie de Gilgamesh à la cryogénie), « Les vraies horloges » (horloge épigénétique, GlycanAge, horloges protéomiques), « Trois découvertes du Milan Longevity Summit 2026 », « La décennie décisive », « Comment distinguer la science du marketing », « Testez votre instinct scientifique », « La véritable immortalité », « Sources et lectures ».
- Navigation dans l'en-tête : Article, Les horloges, La décennie, Le test, L'immortalité.
- Test d'instinct scientifique : cinq questions tirées au hasard parmi dix (choix multiples, ordre des réponses mélangé), avec une note explicative après chaque réponse (« Question suivante », « Refaire le test ») ; à la fin, renvois vers les sections de l'essai correspondant aux mauvaises réponses.
- Fine barre de progression de lecture en haut de page (masquée à l'impression).
- Bouton « ↑ » de retour en haut de la page ; les éléments apparaissent progressivement au défilement.
- Bouton « Thème clair / Thème nuit » dans l'en-tête (le thème nuit reste le thème par défaut ; le choix est conservé dans `localStorage`, si le navigateur le permet).
- Image d'aperçu social (`nemurirea-og.png`) pour le partage.

## Mode d'emploi

1. Lisez l'essai en faisant défiler la page ou utilisez les liens de l'en-tête (Article, Les horloges, La décennie, Le test, L'immortalité).
2. Dans la section « Testez votre instinct scientifique », choisissez une réponse pour chaque question ; la note explicative apparaît.
3. Appuyez sur « Question suivante » pour continuer ; à la fin, appuyez sur « Refaire le test » pour recommencer.
4. La section « Sources et lectures » contient les liens vers les sources citées (SmartLiving.ro, Milan Longevity Summit, SoLongevity, Nobel Prize, arXiv, GlycanAge).
5. Le bouton « ↑ » vous ramène en haut.

## Confidentialité et réseau

- Local : la seule valeur conservée dans `localStorage` est le choix du thème (clé `nemurirea.tema`) ; `sessionStorage` et IndexedDB ne sont pas utilisés, et le résultat du test n'est pas enregistré.
- Réseau : je n'ai trouvé aucun appel `fetch`, ni script ou police externe ; la page se charge à partir d'un seul fichier (plus l'image `nemurirea-og.png`, utilisée uniquement comme aperçu social).
- Les liens externes (smartliving.ro, milanlongevitysummit.org, solongevity.com, nobelprize.org, arxiv.org, glycanage.com, centrulstring.ro) ne s'ouvrent que si vous cliquez dessus. Le pied de page déclare « Fichier unique, hors ligne, sans télémétrie ».

## Exécution locale / hors ligne

Téléchargez `index.html` et ouvrez-le dans un navigateur ; l'essai et le test fonctionnent sans internet. Les liens de « Sources et lectures » nécessitent internet.

## Révision des sources (27.10.2026)

L'essai a été écrit le 14 juillet 2026 et n'a pas été réécrit. La longévité est un domaine qui évolue vite : ce qui est écrit ici peut être dépassé par de nouvelles études. Voici les sources qui ont pu être réellement vérifiées le 27 octobre 2026 (date de cette révision).

- [Milan Longevity Summit 2026 — programme (PDF)](https://www.cdi.it/wp-content/uploads/2026/05/Milan-Longevity-Summit-2026.pdf) — Vérifié le 27.10.2026 : 20–23 mai 2026, Allianz MiCo, Milan ; Alberto Beretta préside le comité scientifique et dirige scientifiquement la SoLongevity Foundation ; Thomas Südhof donne une conférence d'ouverture (22 mai).
- [Dica33 — programme de l'édition 2026](https://www.dica33.it/notizie/40014/longevity-summit-milano-quattro-giorni-per-ridisegnare.asp) — Vérifié le 27.10.2026 (article du 22.04.2026) : confirme les dates 20–23 mai 2026 et la présence de Thomas Südhof, décrit comme prix Nobel de médecine 2013.
- [Pridham, Hayut, …, Alon — Dynamics of menopause from deconvolution of millions of lab tests](https://arxiv.org/abs/2511.05906) — Vérifié le 27.10.2026 : ~300 millions d'analyses de plus d'un million de femmes (Clalit/Israël et NHANES/États-Unis). Selon ScienceAlert (13.10.2026), l'étude a depuis paru dans Nature Medicine (DOI 10.1038/s41591-026-04614-0) — à confirmer sur la page de la revue ; le niveau « prépublication » du mode de vérification n'a pas encore été modifié.
- [Levine et al. (2018), Aging 10(4):573–591](https://doi.org/10.18632/aging.101414) — Lecture complémentaire sur PhenoAge, mentionné dans l'essai. Vérifié le 27.10.2026 que l'article existe (DOI 10.18632/aging.101414).
- [Horvath (2013), Genome Biology 14:R115](https://doi.org/10.1186/gb-2013-14-10-r115) — Lecture complémentaire sur l'horloge épigénétique (méthylation de l'ADN). Vérifié le 27.10.2026 que l'article existe (DOI 10.1186/gb-2013-14-10-r115).

Non rouverts lors de cette révision (l'accès depuis l'environnement de travail était restreint) : l'entretien SmartLiving.ro, le profil sur milanlongevitysummit.org, solongevity.com, glycanage.com et la fiche Nobel. Ils restent « à vérifier par l'auteur » ; leurs liens dans la liste ci-dessus n'ont pas été modifiés.

À compléter : 6 des 29 affirmations marquées (surtout dans la partie historique : Gilgamesh, le premier empereur de Chine, les alchimistes, Ponce de León, James Bedford) n'ont pas de source citée — voir le mode « Essai à sources vivantes ».

## Historique / Changelog

### 1.2.4 — 2026-10-22

fff-kit 1.1.4 : cibles tactiles et taille de texte minimale. Cibles tactiles/texte corrigés dans l’application.

### 1.2.3 — 2026-10-22

fff-kit 1.1.2 : PBKDF2 600 000 itérations, protection anti-clickjacking.

### 1.2.2 — 2026-10-22
- Mobile : le texte fait au moins 12 px et les boutons et champs ont des cibles tactiles plus grandes sur les écrans étroits.
- Mobile : correction du débordement horizontal de 2 px de l'en-tête (le bouton de thème ne dépasse plus sur les écrans de 360 px) ; les liens des listes de références ont des cibles tactiles plus grandes.

### 1.1.0 — 2026-10-14
- Sauvegarde et étiquetage des données (fff-kit).

### 1.0.0 — 12 octobre 2026
- La version et la date de dernière mise à jour sont affichées dans l'application (pied de page).

### 11.10.2026 (troisième mise à jour) — 11 octobre 2026
- Thème clair facultatif (bouton dans l'en-tête ; contraste vérifié avec axe dans les deux thèmes, sur ordinateur et mobile) ; le thème nuit reste le thème par défaut.
- CSP : `connect-src 'none'`.

### 11.10.2026 (deuxième mise à jour) — 11 octobre 2026
- Test : l'ensemble est passé de 5 à 10 questions (toutes fondées sur le texte de l'essai) ; chaque série en tire 5 au hasard, de sorte que refaire le test ne répète plus toujours les mêmes questions ; le résultat indique les sections à relire.
- Barre de progression de lecture.

### 11.10.2026 — 11 octobre 2026
- Le test : l'ordre des choix de réponse est mélangé à chaque question et à chaque reprise (la bonne réponse n'est plus presque toujours la deuxième option).
- Ajout d'une Content-Security-Policy stricte (script avec hachage, aucune connexion réseau) ; vérification axe sans violation.

## Licence

MIT — voir le fichier `LICENSE`. Le pied de page de l'application indique : « © 2026 Centrul STRING · Texte et montage : Alexio ».

## Auteur

Alexio — Alexandru-Ionuț Chiuță, contact : alexio@trom.tf. L'application mentionne le Centrul STRING (CSPCF) comme éditeur de la série Nemurirea dans le cadre d'Atlantykron 2026.

## Résumé
NEMURIREA est un essai en roumain, en un seul fichier, sur les horloges biologiques du vieillissement et la science de la longévité (série Nemurirea, Atlantykron 2026), avec un court quiz à choix multiples. Il s'appuie sur un entretien avec le prof. Alberto Beretta et sur les données du Milan Longevity Summit 2026. Aucun stockage navigateur ni requête externe n'ont été trouvés ; contenu informatif, pas un avis médical.
