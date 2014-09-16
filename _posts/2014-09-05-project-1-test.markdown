---
layout: project
title:  "Project 1"
subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamsit e nonummy nibh euismod tincidunt ut laoreet magna aliquam."
date:   2014-09-05 17:49:49
categories: app
description: "Descrição do projeto no thumbnail com mouse over consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore lorem ipsum sit dolor amet [hiperlink](http://codeminer42.com){:target=\"_blank\"} aliquam erat volutpat. Ut wisi enim ad minim veniam, veniam, quis nostrud exerci tation aliquip ex ea commodo consequat."
authors: ["lionelmessi", "cristianoronaldo", "frankribery"]
thumb: "project-1.png"
technologies: "Ruby, Rails, Javascript"
authors_tolltip: "Kent <br> Martin <br> Robert"
github: "[acesse o github](https://github.com/codeminer42){:target=\"_blank\"}"
---

##Contextualização do projeto

O escritório do W3C no Brasil, em parceria com o Governo do Estado do Rio Grande do
Sul e a Companhia de Processamento de Dados do RS (Procergs), realizou o 1o “Decoders
W3C”, competição entre times pelo melhor aplicativo utilizando os padrões do W3C para o
fornecimento de serviços baseados em dados abertos disponíveis no portal de acesso à
informação do Estado.

A maratona durou doze dias tendo onze equipes inscritas. Os três melhores projetos, entre
eles o vencedor “Retratos da Violência Contra a Mulher no RS”, foram premiados durante o
13o Fórum Internacional Software Livre (FISL) em julho de 2012.

O principal objetivo dessa competição foi tornar os dados públicos do Estado manipuláveis
por qualquer cidadão que quisesse fazer uso desses dados, possibilitando mecanismos de
controle social das informações públicas. O resultado foram várias possibilidades de
extrair significados e padrões a partir do cruzamento e visualização desses dados.

Por exemplo, ao navegarmos pela visualização vencedora “Retratos da Violência Contra a
Mulher no RS”, realizada por Vitor Baptista, Thiago Bueno e Leonardo Tartari, facilmente
identificamos que a cidade com maior ocorrência de estupros no Rio Grande do Sul é
Soledade, com 163 registros da violência sexual para cada 100 mil habitantes. Já a com
menor índice é Pelotas, com 54 registros por 100 mil habitantes. Outro dado bastante
interessante que salta aos nossos olhos é que a maioria dos estupros ocorrem dentro das
próprias residências e não apenas em locais públicos como a mídia de massa comumente
divulga.

Para Vitor Baptista, representante do projeto vencedor e membro da Open Knowledge
Foundation, trabalhar nos dados sobre violência sexual contra mulheres foi uma ótima
oportunidade de expor informações que possuem um sentido maior do que o puramente
técnico. “O tipo de dados que analisamos é bem triste, e em alguns momentos foi difícil
separar as linhas naquela tabela das mulheres que sofreram essa violência, especialmente
quando encontrávamos extremos de idades ­ as mais novas tinham 1 ano, a mais velha, 92”.

O time que ficou em 2o lugar trabalhou com dados sobre gastos realizados pelo Poder
Executivo para a população gaúcha e o que ficou em terceiro lugar dedicou­se aos dados
sobre compras públicas do RS. Os jurados levaram em conta não só os aspectos técnicos da
aplicação, mas principalmente critérios de criatividade, facilidade de uso e impacto na
sociedade.

##Desafios envolvidos

Apesar dos dados estarem bem organizados, o principal desafio não foi o técnico, mas o
político. Os dados disponibilizados cobrem apenas o período de 2006 a 2012, isto é, falta
uma periodicidade de atualizações, seja semestral ou anual. Além disso, a visualização seria
mais rica se os mesmos dados fossem comparados com outros estados. “Quando
terminamos esse projeto, enviamos um pedido para o Ministério da Justiça pedindo o
mesmo tipo de informação só que para todas as cidades brasileiras. Infelizmente, o que eles
disponibilizaram foi somente uma tabela com número de ocorrências, sem informações
sobre o perfil da vítima e acusado, nem dados sobre o local de ocorrência da violência”,
lamenta Vitor.

O desenvolvedor lembra ainda que os dados das cidades com menos de 100 mil habitantes
em cada estado eram agregados em um único registro. “Na Paraíba, por exemplo, existem
223 municípios, mas só 5 têm mais que 100 mil habitantes. Assim, todos os outros 218
estão agregados em um único número, o que impossibilita diversas análises”.

Falta também uma maior granularidade dos dados disponibilizados pelo governo do Rio
Grande do Sul. A especificação do bairro ou rua e não apenas cidade, bem como outros
tipos de violência e não só estupro, possibilitaria análises mais ricas a partir do maior
detalhamento dos dados.

##Principais linguagens e tecnologias utilizadas

Para a limpeza dos dados foi utilizado Ruby. Foram criados pequenos programas que
reformatavam os dados em JSON, e para a visualização, foram utilizados HTML, CSS e
JavaScript. A hospedagem da aplicação está no GitHub Pages.
