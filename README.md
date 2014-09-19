# W3C LabWeb

Descrição do site (...)

### Dependências

* Ruby (1.9.3 ou maior)
* Git
* Bundler

O W3C-LabWeb utiliza a ferramenta [Jekyll](http://jekyllrb.com/) para gerar conteúdo estático. O Jekyll é uma [rubygem](https://rubygems.org/gems/jekyll) e sua instalação necessita que o [Ruby](https://www.ruby-lang.org/en/) esteja instalado e configurado na máquina local. Também é utilizado o [Bundler](http://bundler.io/) para gerenciar as dependência do Ruby. O [Git](http://git-scm.com/) é utilizado para clonar o projeto na máquina local.

### Instalação

Com as ferramentas instaladas, faça o clone do projeto:
```bash
$ git clone https://github.com/Codeminer42/W3C-LabWeb.git
```

Acesse a pasta do clone (W3C-LabWeb caso você tenha usado o comando acima) e rode o comando `bundle` para instalar as dependências:

```bash
$ cd W3C-LabWeb
$ bundle
```

Após a instalação das dependências é hora de iniciar o Jekyll. Ainda dentro da mesma pasta, rode o comando:

```bash
$ jekyll serve -w
```

Isto irá iniciar um servidor local na porta 4000. Para acessar site, basta abrir o seu navegador de preferência e ir até o endereço: `http://localhost:4000`.

### Criando projetos

O Jekyll funciona como uma espécie de blog, em que você pode escrever novos posts utilizando [Markdown](https://help.github.com/articles/markdown-basics). Uma vez que um post foi escrito, ele fica disponível no site e pode ser acessado. A atual estrutura faz com que cada _post_ escrito seja um projeto, com autores, categoria e outras configurações.

Para criar um novo projeto, primeiramente é necessário criar um arquivo novo dentro da pasta `_posts`. Este arquivo deve, preferencialmente, conter o seguinte estrutura no seu nome: `ano-mes-dia-titulo-do-projeto.markdown`. Por exemplo:

`2014-05-08-projeto-exemplo.markdown`

Com o arquivo do projeto criado, é necessário definir quais são as suas propriedades. Para isso, deve-se preencher os atributos do projeto:

* **layout**: project _(layout da página de projeto, deixar "project")_
* **title**:  Projeto exemplo  _(título do projeto)_
* **subtitle**: Subtítulo do projeto _(subtítulo do projeto)_
* **date**: 2014-09-05 17:49:49 _(data de criação do projeto no formato aaaa-mm-dd hh:mm:ss)_
* **categories**: app _(categoria do projeto, podendo ser app, experiment ou visualization)_
* **description**: Descrição do projeto que será exibida na listagem de projetos e no cabeçalho de detalhamento do projeto. Aqui, caso necessário, é permitido usar markdown
* **authors**: ["matias", "lucas", "vinicius"] _(lista com os autores envolvidos no projeto, mais informações na seção abaixo, é necessário deixar a listagem na mesma estrutura apresentada neste exemplo)_
* **thumb**: projecto-exemplo.png _(imagem da listagem do projeto, o sistema irá procurar uma imagem com este nome dentro de images/project-thumbs/)_
* **technologies**: Ruby, Rails, Javascript _(tecnologias utilizadas no projeto)_
* **authors_tolltip**: Kent \<br> Martin \<br> Robert _(nome dos autores que serão exibidos quando o mouse passar por cima do ícone de autores na listagem, separar os autores com a tag \<br> para quebra de linha)_
* **github**: https://www.github.com/codeminer42 _(endereço github do projeto)_
* **final_version**: https://www.google.com _(endereço da versão final do projeto)_
* **status**: Lançado em 08/05/2014 _(status do projeto)_
* **raw_data**: http://dados.rs.gov.br/ _(endereço dos dados utilizados pelo projeto)
* **background**: "bg-highlight.png" _(imagem de background que é exibida na página do projeto. a imagem deve ficar em '/images/projects/backgrounds/bg-highlight.png')
_

Estas variáveis precisam ser definidas dentro do escopo do [Front Matter](http://jekyllrb.com/docs/frontmatter/), no cabeçalho do arquivo de projeto:

```
---
variavel: valor
---
```

Exemplo de arquivo de projeto:

```
---
layout: project
title: Projeto Exemplo
subtitle: Subtítulo do projeto
date: 2014-09-05 17:49:49
categories: app
description: Descrição do projeto no thumbnail (...)
authors: ["lionelmessi", "cristianoronaldo", "frankribery"]
thumb: project-1.png
technologies: Ruby, Rails, Javascript
authors_tolltip: Kent <br> Martin <br> Robert
github: https://www.github.com/codeminer42
final_version: https://www.google.com
status: Lançado em 08/05/2014
raw_data: http://dados.rs.gov.br/
background: "bg-highlight.png"
---

## Projecto Exemplo

O escritório do W3C no Brasil, em parceria com o Governo do Estado do Rio Grande do Sul (...)
```

### Autores

Os autores de cada projeto precisam ser lançados dentro do arquivo `_data/authors.yml`. Uma vez que eles estiverem cadastrados neste arquivo, suas referências podem ser utilizadas dentro dos projetos.

Este arquivo possui uma estrutura específica que precisa ser respeitada para que funcione corretamente. Segue um exemplo contendo dois autores:

```yml
matiasleidemer:
  name: Matias Leidemer
  email: matiasleidemer@servidor.com
  site: http://leidemer.com
  avatar: https://avatars1.githubusercontent.com/u/10559?v=2&s=460
lucasrenan:
  name: Lucas Renan
  email: lucasrenan@servidor.com
  site: http://lucasrenan.com
  avatar: https://avatars3.githubusercontent.com/u/114986?v=2&s=460
```

As configurações são as seguintes:

* **name**: Matias Leidemer _(nome do autor)_
* **email**: matiasleidemer@servidor.com _(email de contato do autor)_
* **site**: http://leidemer.com _(site do autor)_
* **avatar**: https://avatars1.githubusercontent.com/u/10559?v=2&s=460 _(endereço da foto do autor)_

É importante observar a indentação do arquivo. Ela deverá ser respeitada para que o arquivo funcione corretamente.

Uma vez cadastrados, os autores poderão ser referenciados dentro dos projetos através das suas identificações (neste exemplo `matiasleidemer` e `lucasrenan`):

```
---
authors: ["matiasleidemer", "lucasrenan"]
---
```

## Staging

  http://mighty-lake-7649.herokuapp.com/

## Staging deploy

  git push heroku master (or the remote name you created.) If you need access to
  the heroku repo, ping @matiasleidemer
