---
layout: project
title:  "Retratos da Violência"
subtitle: "Um retrato da violência contra a mulher usando dados abertos"
date:   2014-09-05 17:49:49
categories: visualization
description: "Visualização utilizada para desenhar um retrato da violência contra a mulher no Rio Grande do Sul utilizando Dados Abertos do Governo. [Repositório aqui.](https://github.com/dataviz/retrato-da-violencia.org)"
authors: ["vitor_baptista", "leonardo_tartari", "thiago_bueno"]
thumb: "1_retrato_violencia_thumb.png"
technologies: "Ruby, JSON, Javascript, HTML, Css"
authors_tolltip: "Vitor Baptista <br> Leonardo Tartari <br> Thiago Bueno"
github: https://github.com/dataviz/retrato-da-violencia.org
final_version: http://retratodaviolencia.org/RS/
status: Lançado em 08/05/2013
raw_data: http://dados.rs.gov.br/
background: "1_retrato_violencia_1022x606.png"
---

##Contextualização do projeto

O escritório do [W3C no Brasil](http://www.w3c.br/Noticias/PremiacaoDecodersW3cRs), em parceria com o Governo do Estado do Rio Grande do Sul e a Companhia de Processamento de [Dados do RS (Procergs)](http://www.procergs.rs.gov.br/), realizou o 1o [“Decoders W3C”](http://www.decoders.w3c.br/), competição entre times pelo melhor aplicativo utilizando os [padrões do W3C (http://www.w3.org/wiki/Open_Web_Platform) para o fornecimento de serviços baseados em dados abertos disponíveis no [portal de acesso à](http://www.centraldocidadao.rs.gov.br)
informação do Estado. 

A maratona durou doze dias tendo onze equipes inscritas. Os três melhores projetos, entre eles o vencedor [“Retratos da Violência Contra a Mulher no RS”](http://retratodaviolencia.org/), foram premiados durante o 13o Fórum Internacional Software Livre (FISL) em julho de 2012.

O principal objetivo dessa competição foi tornar os dados públicos do Estado manipuláveis por qualquer cidadão que quisesse fazer uso desses dados, possibilitando mecanismos de controle social das informações públicas. O resultado foram várias possibilidades de extrair significados e padrões a partir do cruzamento e visualização desses dados.

Por exemplo, ao navegarmos pela visualização vencedora “Retratos da Violência Contra a Mulher no RS”, realizada por Vitor Baptista, Thiago Bueno e Leonardo Tartari, facilmente identificamos que a cidade com maior ocorrência de estupros no Rio Grande do Sul é Soledade, com 163 registros da violência sexual para cada 100 mil habitantes. Já a com menor índice é Pelotas, com 54 registros por 100 mil habitantes. Outro dado bastante interessante que salta aos nossos olhos é que a maioria dos estupros ocorrem dentro das próprias residências e não apenas em locais públicos como a mídia de massa comumente divulga.

Para Vitor Baptista, representante do projeto vencedor e membro da [Open Knowledge Foundation](http://br.okfn.org/), trabalhar nos [dados sobre violência sexual contra mulheres](http://dados.rs.gov.br/dataset/violencia-contra-mulher-estupros) foi uma ótima oportunidade de expor informações que possuem um sentido maior do que o puramente técnico. “O tipo de dados que analisamos é bem triste, e em alguns momentos foi difícil separar as linhas naquela tabela das mulheres que sofreram essa violência, especialmente quando encontrávamos extremos de idades - as mais novas tinham 1 ano, a mais velha, 92”.

O time que ficou em 2o lugar trabalhou com dados sobre gastos realizados pelo Poder Executivo para a população gaúcha e o que ficou em terceiro lugar dedicou­se aos dados sobre compras públicas do RS. Os jurados levaram em conta não só os aspectos técnicos da aplicação, mas principalmente critérios de criatividade, facilidade de uso e impacto na
sociedade. 

##Desafios envolvidos

O principal desafio não foi o técnico, mas o político, pois apesar dos dados disponibilizados estarem bem organizados, eles cobrem apenas o período de 2006 a 2012, isto é, falta uma periodicidade de atualizações, seja semestral ou anual. Além disso, a visualização seria mais rica se os mesmos dados fossem comparados com outros estados. “Quando terminamos esse projeto, enviamos um pedido para o Ministério da Justiça pedindo o mesmo tipo de informação só que para todas as cidades brasileiras. Infelizmente, o que eles disponibilizaram foi somente uma tabela com número de ocorrências, sem informações sobre o perfil da vítima e acusado, nem dados sobre o local de ocorrência da violência”, lamenta Vitor.

O desenvolvedor lembra ainda que os dados das cidades com menos de 100 mil habitantes em cada estado eram agregados em um único registro. “Na Paraíba, por exemplo, existem 223 municípios, mas só 5 têm mais que 100 mil habitantes. Assim, todos os outros 218 estão agregados em um único número, o que impossibilita diversas análises”.

Falta também um maior detalhamento dos dados disponibilizados pelo governo do Rio Grande do Sul. A especificação do bairro ou rua e não apenas cidade, bem como outros tipos de violência e não só estupro, possibilitaria análises mais ricas a partir do maior refinamento dos dados. 

##Linguagens e tecnologias utilizadas

Para a limpeza dos dados foi utilizado [Ruby](https://www.ruby-lang.org/en/). Foram criados pequenos programas que reformatavam os dados em [JSON](http://json.org/), e para a visualização, foram utilizados [HTML](http://dev.w3.org/html5/html-author/), [CSS](http://www.w3.org/Style/CSS/Overview.en.html) e [JavaScript](http://www.crockford.com/javascript/javascript.html).

