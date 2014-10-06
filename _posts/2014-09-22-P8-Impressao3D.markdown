---
layout: project
title:  "MetaPrint!"
subtitle: "Um experimento com impressão 3D e o seu browser"
date:   2013-09-12
categories: experiments
description: "Com esse projeto o cidadão pode verificar quais obras ou serviços estão sendo entregues em sua vizinhança durante o ano."
authors: ["juca_sanches"]
technologies: "MySQL, Qgis, JSON, Chroma.js, API do Google Maps, Require.js, Knockout"
authors_tolltip: "Felipe Sanches"
github: https://github.com/W3CBrasil/MetaPrint
final_version: https://github.com/W3CBrasil/MetaPrint
status: Lançado em 08/05/2013
background: "metaprint.png"
---

##Contextualização

Durante a [Conferência Web.br 2013](http://conferenciaweb.w3c.br/2013/#/page/1), o sócio fundador da [Metamáquina](http://metamaquina.com.br/) (fabricante brasileira de impressoras 3D de hardware livre), Felipe Sanches, apresentou as possibilidades de integração de impressão 3D nos navegadores por meio do uso de tecnologias livres como o [WebGL](http://pt.wikipedia.org/wiki/WebGL) para a visualização de modelos 3D nativamente no browser. 

O [experimento](https://github.com/W3CBrasil/MetaPrint) apresentado durante o evento demorou cerca de um mês para ser implementado. A ideia era apresentar uma prova de conceito do uso de tecnologias web na construção de interfaces com o usuário para a operação de impressoras 3d. “Em vez de trabalhar com o desenvolvimento de drivers para o sistema operacional, preferimos fazer um experimento de uso da tecnologia WebGL para permitir a visualização interativa de modelos 3D no browser e delegamos o processo de fatiamento e de comunicação com a impressora 3D aos programas já existentes para esses fins”, explica Felipe Sanches. 

O objetivo é que uma vez provado o conceito por meio do uso dos programas de impressão 3d já existentes rodando em um servidor web instalado localmente, pode-se futuramente reimplementar o mesmo sistema utilizando comunicação direta com a impressora sem o uso de um servidor. 

Devido ao seu envolvimento com o desenvolvimento de softwares livres como o [Inkscape](http://www.inkscape.org/pt/), que utiliza o padrão SVG do W3C para desenho vetorial, e de hardware e software livres para impressão 3D na Metamáquina, o W3C Brasil entrou em contato com o programador com o interesse na criação de uma prova de conceito para o uso de padrões web no controle e operação de uma impressora 3D diretamente a partir de um navegador. 

Ao longo da evolução dos dois modelos de impressoras 3D que Felipe Sanches desenvolveu na Metamáquina (entre outubro de 2011 e abril de 2013), o desenvolvimento dos softwares de controle das impressoras andou em paralelo ao projeto de hardware. Hoje em dia as impressoras 3D utilizam programas específicos que cumprem as funções de carregar um modelo 3D, processá-lo para a geração das rotas de fabricação digital da peça e enviar essas instruções para serem executadas pela impressora 3D. Esses programas são comumente chamados de "hosts" e "fatiadores" de impressão 3D. 

Comparando esse cenário um tanto experimental das impressoras 3D com as tecnologias bem estabelecidas das impressoras "2D", ou seja, aquelas que trabalham com tinta e papel, Felipe Sanches percebeu que muitas dessas tarefas são análogas entre esses dois tipos de equipamento. “As impressoras de papel também precisam executar tarefas de pré-processamento nas imagens enviadas para impressão. Também precisam conhecer o protocolo específico de cada modelo de impressora. Mas no caso das impressoras de papel, não é normal utilizarmos programas específicos do fabricante. Por exemplo, ninguém abre um programa da Hewlet Packard para carregar uma imagem e enviá-la para impressão. Pelo contrário, o sistema operacional provê suporte nativo para as impressoras de modo que qualquer programa possa enviar um trabalho para impressão”, esclarece o programador.

Logo, o caminho natural para as impressoras 3D é ter o mesmo tipo de suporte nativo nos sistemas operacionais, onde qualquer programa (inclusive o browser) possa enviar um modelo 3D para ser construído, sem a necessidade de uso de um software especial para tal. 

##Desafios Envolvidos

Felipe Sanches já conhecia em detalhes todas as etapas do processo de impressão 3D e cada uma das tecnologias usadas, devido ao seu contato profissional prévio. Entretanto, para a realização do projeto Impressão 3d na Web ele teve que aprimorar os seus conhecimentos em WebGL, API que não dominava tanto. 

Para o futuro de impressoras 3d nos sistemas operacionais, há notícias de um trabalho inicial nesse sentido no Windows 8.1, com alguns modelos de impressoras 3D já suportados. Para o MacOS e para os sistemas livres como as variantes de BSD e as distribuições de GNU com Linux, Felipe Sanches ressalta que esse trabalho precisará ser feito por meio da extensão da infraestrutura do projeto [CUPS](https://www.cups.org/) (Common UNIX Printing System), que já é amplamente utilizado para gerenciar jobs de impressão em papel e tinta. 

“As vantagens de se fazer isso é que uma ampla gama de aplicativos pode aproveitar-se das impressoras 3D. Podemos imaginar um futuro próximo onde será possível desenhar algo no Blender e com um simples ‘control-P’ abrir a janela de impressão, selecionar uma das impressoras 3D disponíveis na sua rede local, e ir tomar um café enquanto a máquina trabalha na fabricação do seu objeto. O mesmo poderá ser feito ao acessarmos um site que contenha mídias 3D em WebGL. Um mero clique com o botão direito do mouse sobre um canvas WebGL poderá ser suficiente para se enviar o modelo 3D para impressão”, conclui Felipe.

##Linguagens e tecnologias utilizadas 

Para se fazer o “fatiamento” dos modelos 3d e o calculo de rotas a serem executadas pela impressora foi adotado o programa [Slic3r](http://slic3r.org/). Para a comunicação com a impressora 3D por meio de uma conexão serial USB foi utilizado o framework [Printrun](http://reprap.org/wiki/Printrun), escrito em Python.

Também foi escolhido o framework [jQuery](http://jquery.com/) para o uso de técnicas de [AJAX](http://pt.wikipedia.org/wiki/AJAX_(programação)) para envio e recebimento de comandos assíncronos entre o browser e o servidor. Um dos comandos enviados ao servidor é o pedido de início de um job de impressão. Outro comando implementado foi a consulta de informações sobre a impressora. As respostas do servidor contém, por exemplo, as temperaturas da base de impressão e do bico extrusor do equipamento.


