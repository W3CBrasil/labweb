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

## Staging

  http://mighty-lake-7649.herokuapp.com/

## Staging deploy

  git push heroku master (or the remote name you created.) If you need access to
  the heroku repo, ping @matiasleidemer
