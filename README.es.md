# NEMURIREA — La edad que escribe nuestro destino biológico

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · **Español** · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versión:** 2.1.0 · **Última actualización:** 2026-10-27

**Estado:** estable · **Sin conexión:** completo para el ensayo y el test; los enlaces de «Fuentes y lecturas» requieren internet

Idiomas de la interfaz: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Ensayo interactivo sobre los relojes biológicos y la ciencia de la longevidad, dentro de la serie Nemurirea, Atlantykron 2026.

**Aplicación en línea:** https://chiuta.github.io/Nemurirea/

![Captura de pantalla](screenshot.es.png)

## Qué es

NEMURIREA es una página-ensayo en un solo archivo HTML, firmada por Alexio, fechada el 14/07/2026 (unos 9 minutos de lectura). Parte de la entrevista realizada por Elena Oceanu al prof. dr. Alberto Beretta, publicada en SmartLiving.ro, y de los datos presentados en el Milan Longevity Summit 2026; el texto declara que las ideas científicas pertenecen a Beretta y a los investigadores citados, mientras que la interpretación y la estructura pertenecen al autor del ensayo. El ensayo tiene carácter informativo y educativo y no constituye consejo médico (precisión incluida en la aplicación).

## Funciones

- Ensayo en secciones: «El viejo sueño de diez mil años» (cronología de Gilgamesh a la criogenia), «Los relojes de verdad» (reloj epigenético, GlycanAge, relojes proteómicos), «Tres descubrimientos del Milan Longevity Summit 2026», «La década decisiva», «Cómo distinguir la ciencia del marketing», «Pon a prueba tu instinto científico», «La verdadera inmortalidad», «Fuentes y lecturas».
- Navegación en la cabecera: Artículo, Los relojes, La década, La prueba, La inmortalidad.
- Prueba de instinto científico: cinco preguntas elegidas al azar entre diez (opción múltiple, orden de las respuestas mezclado), con una nota explicativa tras cada respuesta («Siguiente pregunta», «Repetir la prueba»); al final, remisiones a las secciones del ensayo correspondientes a las respuestas erróneas.
- Fina barra de progreso de lectura en la parte superior (oculta al imprimir).
- Botón «↑» para volver al principio de la página; los elementos aparecen progresivamente al desplazarse.
- Botón «Tema claro / Tema nocturno» en la cabecera (el tema nocturno sigue siendo el predeterminado; la elección se conserva en `localStorage`, si el navegador lo permite).
- Imagen de vista previa social (`nemurirea-og.png`) para compartir.

## Guía de uso

1. Lee el ensayo desplazando la página o usa los enlaces de la cabecera (Artículo, Los relojes, La década, La prueba, La inmortalidad).
2. En la sección «Pon a prueba tu instinto científico» elige una respuesta para cada pregunta; aparece la nota explicativa.
3. Pulsa «Siguiente pregunta» para continuar; al final pulsa «Repetir la prueba» para empezar de nuevo.
4. La sección «Fuentes y lecturas» contiene los enlaces a las fuentes citadas (SmartLiving.ro, Milan Longevity Summit, SoLongevity, Nobel Prize, arXiv, GlycanAge).
5. El botón «↑» te devuelve arriba.

## Privacidad y red

- Local: el único valor guardado en `localStorage` es la elección del tema (clave `nemurirea.tema`); no se usan `sessionStorage` ni IndexedDB, y el resultado de la prueba no se guarda.
- Red: no encontré llamadas `fetch` ni scripts o fuentes externos; la página se carga desde un único archivo (más la imagen `nemurirea-og.png`, usada solo como vista previa social).
- Los enlaces externos (smartliving.ro, milanlongevitysummit.org, solongevity.com, nobelprize.org, arxiv.org, glycanage.com, centrulstring.ro) solo se abren si haces clic en ellos. El pie de página declara «Archivo único, offline, sin telemetría».

## Ejecución local / offline

Descarga `index.html` y ábrelo en un navegador; el ensayo y la prueba funcionan sin internet. Los enlaces de «Fuentes y lecturas» requieren internet.

## Revisión de las fuentes (27.10.2026)

El ensayo se escribió el 14 de julio de 2026 y no se ha reescrito. La longevidad es un campo que cambia rápido: lo que se dice aquí puede quedar superado por estudios nuevos. A continuación figuran las fuentes que pudieron comprobarse realmente el 27 de octubre de 2026 (fecha de esta revisión).

- [Milan Longevity Summit 2026 — programa (PDF)](https://www.cdi.it/wp-content/uploads/2026/05/Milan-Longevity-Summit-2026.pdf) — Comprobado el 27.10.2026: 20–23 de mayo de 2026, Allianz MiCo, Milán; Alberto Beretta preside el comité científico y es director científico de la SoLongevity Foundation; Thomas Südhof ofrece una conferencia inaugural (22 de mayo).
- [Dica33 — programa de la edición de 2026](https://www.dica33.it/notizie/40014/longevity-summit-milano-quattro-giorni-per-ridisegnare.asp) — Comprobado el 27.10.2026 (artículo del 22.04.2026): confirma las fechas 20–23 de mayo de 2026 y la presencia de Thomas Südhof, descrito como premio Nobel de Medicina 2013.
- [Pridham, Hayut, …, Alon — Dynamics of menopause from deconvolution of millions of lab tests](https://arxiv.org/abs/2511.05906) — Comprobado el 27.10.2026: ~300 millones de análisis de más de un millón de mujeres (Clalit/Israel y NHANES/EE. UU.). Según ScienceAlert (13.10.2026), el estudio se ha publicado entretanto en Nature Medicine (DOI 10.1038/s41591-026-04614-0) — por confirmar en la página de la revista; el nivel «preprint» del modo de verificación aún no se ha cambiado.
- [Levine et al. (2018), Aging 10(4):573–591](https://doi.org/10.18632/aging.101414) — Lectura complementaria sobre PhenoAge, mencionado en el ensayo. Comprobado el 27.10.2026 que el artículo existe (DOI 10.18632/aging.101414).
- [Horvath (2013), Genome Biology 14:R115](https://doi.org/10.1186/gb-2013-14-10-r115) — Lectura complementaria sobre el reloj epigenético (metilación del ADN). Comprobado el 27.10.2026 que el artículo existe (DOI 10.1186/gb-2013-14-10-r115).

No se reabrieron en esta revisión (el acceso desde el entorno de trabajo estaba restringido): la entrevista de SmartLiving.ro, el perfil en milanlongevitysummit.org, solongevity.com, glycanage.com y la ficha del Nobel. Siguen «por verificar por el autor»; sus enlaces en la lista anterior no se han modificado.

Por completar: 6 de las 29 afirmaciones marcadas (sobre todo en la parte histórica: Gilgamesh, el primer emperador de China, los alquimistas, Ponce de León, James Bedford) no tienen fuente citada — véase el modo «Ensayo con fuentes vivas».

## Verified sources for the historical claims (v2.1.0)

### 2.1.0 — 2026-10-27
- Verified sources for the 6 historical claims; 3 partly covered, flagged.


_(English only; not yet translated into this language. Machine translation intentionally not added to avoid errors in technical statements.)_

The 6 claims that had no source in the “Essay with living sources” mode now have secondary sources checked on the web on 27 Oct 2026 (Britannica, Smithsonian Magazine, New World Encyclopedia, Wikipedia, NIH Research Matters), listed in “Sources and reading” (8 languages; fr/it/es/pt/de/hu are machine translations, marked).

- Fully covered: Gilgamesh, Ponce de León, the organ-aging study (NIH).
- PARTLY covered (flagged in the dialog): mercury for the first emperor (the sources do not mention it), alchemists in Europe and the Arab world / origin of modern chemistry (the source covers the elixir and China), “−196 °C” for Bedford (the source says “theoretically”).
- The essay text was not changed. Secondary sources do not replace primary sources. New tests: `tests/surse-noi.test.mjs`.

## Historial / Changelog

### 1.2.4 — 2026-10-22

fff-kit 1.1.4: áreas táctiles y texto mínimo. Áreas táctiles/texto corregidos en la aplicación.

### 1.2.3 — 2026-10-22

fff-kit 1.1.2: PBKDF2 con 600.000 iteraciones, protección anti-clickjacking.

### 1.2.2 — 2026-10-22
- Móvil: el texto mide al menos 12 px y los botones y campos tienen áreas táctiles mayores en pantallas estrechas.
- Móvil: corregido el desbordamiento horizontal de 2 px de la cabecera (el botón de tema ya no sobresale en pantallas de 360 px); los enlaces de las listas de referencias tienen áreas táctiles mayores.

### 1.1.0 — 2026-10-14
- Copia de seguridad y etiquetado de datos (fff-kit).

### 1.0.0 — 12 de octubre de 2026
- La versión y la fecha de la última actualización se muestran en la aplicación (pie de página).

### 11.10.2026 (tercera actualización) — 11 de octubre de 2026
- Tema claro opcional (botón en la cabecera; contraste comprobado con axe en ambos temas, en escritorio y móvil); el tema nocturno sigue siendo el predeterminado.
- CSP: `connect-src 'none'`.

### 11.10.2026 (segunda actualización) — 11 de octubre de 2026
- Prueba: el conjunto se amplió de 5 a 10 preguntas (todas basadas en el texto del ensayo); cada ronda toma 5 al azar, de modo que repetir la prueba ya no repite siempre las mismas preguntas; el resultado indica las secciones que conviene releer.
- Barra de progreso de lectura.

### 11.10.2026 — 11 de octubre de 2026
- La prueba: el orden de las opciones de respuesta se mezcla en cada pregunta y en cada repetición (la respuesta correcta ya no es casi siempre la segunda opción).
- Añadida una Content-Security-Policy estricta (script con hash, sin conexiones de red); comprobación con axe sin infracciones.

## Licencia

MIT — véase el archivo `LICENSE`. El pie de página de la aplicación indica: «© 2026 Centrul STRING · Texto y montaje: Alexio».

## Autor

Alexio — Alexandru-Ionuț Chiuță, contacto: alexio@trom.tf. La aplicación menciona al Centrul STRING (CSPCF) como editor de la serie Nemurirea en el marco de Atlantykron 2026.

## Resumen

NEMURIREA es un ensayo en rumano, en un solo archivo, sobre los relojes biológicos del envejecimiento y la ciencia de la longevidad (serie Nemurirea, Atlantykron 2026), con un breve cuestionario de opción múltiple. Se basa en una entrevista con el prof. Alberto Beretta y en datos del Milan Longevity Summit 2026. No se encontró almacenamiento en el navegador ni peticiones externas; es informativo, no consejo médico.
