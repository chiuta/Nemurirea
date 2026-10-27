# NEMURIREA — A idade que escreve o nosso destino biológico

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · **Português** · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versão:** 2.1.0 · **Última atualização:** 2026-10-27

**Estado:** estável · **Offline:** completo para o ensaio e o teste; as ligações de «Fontes e leituras» precisam de internet

Idiomas da interface: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Ensaio interativo sobre os relógios biológicos e a ciência da longevidade, na série Nemurirea, Atlantykron 2026.

**Aplicação online:** https://chiuta.github.io/Nemurirea/

![Captura de ecrã](screenshot.pt.png)

## O que é

NEMURIREA é uma página-ensaio num único ficheiro HTML, assinada por Alexio, datada de 14/07/2026 (cerca de 9 minutos de leitura). Parte da entrevista realizada por Elena Oceanu ao prof. dr. Alberto Beretta, publicada no SmartLiving.ro, e dos dados apresentados na Milan Longevity Summit 2026; o texto declara que as ideias científicas pertencem a Beretta e aos investigadores citados, ao passo que a interpretação e a estrutura pertencem ao autor do ensaio. O ensaio tem fins informativos e educativos e não constitui aconselhamento médico (precisão constante da aplicação).

## Funcionalidades

- Ensaio em secções: «O velho sonho de dez mil anos» (cronologia de Gilgámesh à criogenia), «Os relógios verdadeiros» (relógio epigenético, GlycanAge, relógios proteómicos), «Três descobertas da Milan Longevity Summit 2026», «A década decisiva», «Como distinguir a ciência do marketing», «Teste o seu instinto científico», «A verdadeira imortalidade», «Fontes e leituras».
- Navegação no cabeçalho: Artigo, Os relógios, A década, O teste, A imortalidade.
- Teste de instinto científico: cinco perguntas escolhidas ao acaso de um conjunto de dez (escolha múltipla, ordem das respostas misturada), com uma nota explicativa após cada resposta («Pergunta seguinte», «Refazer o teste»); no fim, remissões para as secções do ensaio correspondentes às respostas erradas.
- Barra fina de progresso da leitura no topo (oculta na impressão).
- Botão «↑» para voltar ao início da página; os elementos surgem progressivamente ao deslocar.
- Botão «Tema claro / Tema noturno» no cabeçalho (o tema noturno continua a ser o predefinido; a escolha é guardada em `localStorage`, se o navegador o permitir).
- Imagem de pré-visualização social (`nemurirea-og.png`) para partilha.

## Manual de utilização

1. Leia o ensaio deslocando a página ou use as ligações do cabeçalho (Artigo, Os relógios, A década, O teste, A imortalidade).
2. Na secção «Teste o seu instinto científico», escolha uma resposta para cada pergunta; aparece a nota explicativa.
3. Prima «Pergunta seguinte» para continuar; no fim, prima «Refazer o teste» para recomeçar.
4. A secção «Fontes e leituras» contém as ligações para as fontes citadas (SmartLiving.ro, Milan Longevity Summit, SoLongevity, Nobel Prize, arXiv, GlycanAge).
5. O botão «↑» leva-o de volta ao topo.

## Privacidade e rede

- Local: o único valor guardado em `localStorage` é a escolha do tema (chave `nemurirea.tema`); não são usados `sessionStorage` nem IndexedDB, e o resultado do teste não é guardado.
- Rede: não encontrei chamadas `fetch` nem scripts ou tipos de letra externos; a página carrega a partir de um único ficheiro (mais a imagem `nemurirea-og.png`, usada apenas como pré-visualização social).
- As ligações externas (smartliving.ro, milanlongevitysummit.org, solongevity.com, nobelprize.org, arxiv.org, glycanage.com, centrulstring.ro) só se abrem se clicar nelas. O rodapé declara «Ficheiro único, offline, sem telemetria».

## Execução local / offline

Transfira `index.html` e abra-o num navegador; o ensaio e o teste funcionam sem internet. As ligações de «Fontes e leituras» exigem internet.

## Revisão das fontes (27.10.2026)

O ensaio foi escrito a 14 de julho de 2026 e não foi reescrito. A longevidade é uma área que muda depressa: o que aqui se escreve pode ser ultrapassado por novos estudos. Seguem-se as fontes que foi efetivamente possível verificar a 27 de outubro de 2026 (data desta revisão).

- [Milan Longevity Summit 2026 — programa (PDF)](https://www.cdi.it/wp-content/uploads/2026/05/Milan-Longevity-Summit-2026.pdf) — Verificado a 27.10.2026: 20–23 de maio de 2026, Allianz MiCo, Milão; Alberto Beretta preside ao comité científico e é diretor científico da SoLongevity Foundation; Thomas Südhof faz uma conferência de abertura (22 de maio).
- [Dica33 — programa da edição de 2026](https://www.dica33.it/notizie/40014/longevity-summit-milano-quattro-giorni-per-ridisegnare.asp) — Verificado a 27.10.2026 (artigo de 22.04.2026): confirma as datas 20–23 de maio de 2026 e a presença de Thomas Südhof, descrito como Nobel da Medicina 2013.
- [Pridham, Hayut, …, Alon — Dynamics of menopause from deconvolution of millions of lab tests](https://arxiv.org/abs/2511.05906) — Verificado a 27.10.2026: ~300 milhões de análises de mais de um milhão de mulheres (Clalit/Israel e NHANES/EUA). Segundo a ScienceAlert (13.10.2026), o estudo foi entretanto publicado na Nature Medicine (DOI 10.1038/s41591-026-04614-0) — a confirmar na página da revista; o nível «pré-publicação» do modo de verificação ainda não foi alterado.
- [Levine et al. (2018), Aging 10(4):573–591](https://doi.org/10.18632/aging.101414) — Leitura complementar sobre o PhenoAge, mencionado no ensaio. Verificado a 27.10.2026 que o artigo existe (DOI 10.18632/aging.101414).
- [Horvath (2013), Genome Biology 14:R115](https://doi.org/10.1186/gb-2013-14-10-r115) — Leitura complementar sobre o relógio epigenético (metilação do ADN). Verificado a 27.10.2026 que o artigo existe (DOI 10.1186/gb-2013-14-10-r115).

Não reabertos nesta revisão (o acesso a partir do ambiente de trabalho estava restringido): a entrevista da SmartLiving.ro, o perfil em milanlongevitysummit.org, solongevity.com, glycanage.com e a ficha do Nobel. Continuam «a verificar pelo autor»; as suas ligações na lista acima não foram alteradas.

A completar: 6 das 29 afirmações assinaladas (sobretudo na parte histórica: Gilgamés, o primeiro imperador da China, os alquimistas, Ponce de León, James Bedford) não têm fonte citada — ver o modo «Ensaio com fontes vivas».

## Verified sources for the historical claims (v2.1.0)

### 2.1.0 — 2026-10-27
- Verified sources for the 6 historical claims; 3 partly covered, flagged.


_(English only; not yet translated into this language. Machine translation intentionally not added to avoid errors in technical statements.)_

The 6 claims that had no source in the “Essay with living sources” mode now have secondary sources checked on the web on 27 Oct 2026 (Britannica, Smithsonian Magazine, New World Encyclopedia, Wikipedia, NIH Research Matters), listed in “Sources and reading” (8 languages; fr/it/es/pt/de/hu are machine translations, marked).

- Fully covered: Gilgamesh, Ponce de León, the organ-aging study (NIH).
- PARTLY covered (flagged in the dialog): mercury for the first emperor (the sources do not mention it), alchemists in Europe and the Arab world / origin of modern chemistry (the source covers the elixir and China), “−196 °C” for Bedford (the source says “theoretically”).
- The essay text was not changed. Secondary sources do not replace primary sources. New tests: `tests/surse-noi.test.mjs`.

## Histórico / Changelog

### 1.2.4 — 2026-10-22

fff-kit 1.1.4: áreas de toque e texto mínimo. Áreas de toque/texto corrigidos na aplicação.

### 1.2.3 — 2026-10-22

fff-kit 1.1.2: PBKDF2 com 600.000 iterações, proteção anti-clickjacking.

### 1.2.2 — 2026-10-22
- Móvel: o texto tem pelo menos 12 px e os botões e campos têm áreas táteis maiores em ecrãs estreitos.
- Móvel: corrigido o excesso horizontal de 2 px do cabeçalho (o botão de tema já não sobressai em ecrãs de 360 px); as ligações das listas de referências têm áreas táteis maiores.

### 1.1.0 — 2026-10-14
- Cópia de segurança e etiquetagem de dados (fff-kit).

### 1.0.0 — 12 de outubro de 2026
- A versão e a data da última atualização são apresentadas na aplicação (rodapé).

### 11.10.2026 (terceira atualização) — 11 de outubro de 2026
- Tema claro opcional (botão no cabeçalho; contraste verificado com axe nos dois temas, em computador e telemóvel); o tema noturno continua a ser o predefinido.
- CSP: `connect-src 'none'`.

### 11.10.2026 (segunda atualização) — 11 de outubro de 2026
- Teste: o conjunto foi alargado de 5 para 10 perguntas (todas baseadas no texto do ensaio); cada ronda sorteia 5, pelo que refazer o teste já não repete sempre as mesmas perguntas; o resultado indica as secções a reler.
- Barra de progresso da leitura.

### 11.10.2026 — 11 de outubro de 2026
- O teste: a ordem das opções de resposta é misturada em cada pergunta e em cada repetição (a resposta correta já não é quase sempre a segunda opção).
- Adicionada uma Content-Security-Policy rigorosa (script com hash, sem ligações de rede); verificação axe sem violações.

## Licença

MIT — veja o ficheiro `LICENSE`. O rodapé da aplicação indica: «© 2026 Centrul STRING · Texto e montagem: Alexio».

## Autor

Alexio — Alexandru-Ionuț Chiuță, contacto: alexio@trom.tf. A aplicação menciona o Centrul STRING (CSPCF) como editor da série Nemurirea no âmbito da Atlantykron 2026.

## Resumo
NEMURIREA é um ensaio em romeno, num único ficheiro, sobre os relógios biológicos do envelhecimento e a ciência da longevidade (série Nemurirea, Atlantykron 2026), com um breve questionário de escolha múltipla. Baseia-se numa entrevista com o prof. Alberto Beretta e em dados da Milan Longevity Summit 2026. Não foram encontrados armazenamento no navegador nem pedidos externos; é informativo, não aconselhamento médico.
