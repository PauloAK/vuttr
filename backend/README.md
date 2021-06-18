<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# VUTTR

Projeto com o intuito de disponibilizar uma API para gerenciando de links de ferramentas úteis, também conhecido com **VUTTR** *(Very Useful Tools To Remember)*

## Linguagem e Tecnologias
- Laravel 8
- PHP 8
- PostgreSQL 13
- Docker (Laravel Sail)
- JWT

## Ferramentas
- VSCode
- API Blueprint

## API
### Visão Geral
A API possui dois grupos de rotas, as autenticadas e as não autenticadas.
- Não autenticadas
  - **Login/Registro** - Rotas livres de autenticação para registro de usuários novos e login de usuários.
- Autenticadas
  - Todas as demais rotas, como as rotas das ferramentas (`/tools`) são autenticadas, requerendo o envio do token de autenticação via headers: `Authorization: Bearer ...`

Para maiores detalhes das rotas, parâmetros e respostas, veja o item *Documentação*.

Caso a aplicação seja colocada online, utilizando o Laravel Sail, a aplicação ficará disponível na porta `3000`.

### Documentação
Para um melhor entendimento da API do projeto, foi criado um documento para registrar todas as rotas da aplicação e suas respectivas formas de utilizacão. Esse documento foi criado utilizando o formato [API Blueprint](https://apiblueprint.org/).

Para acessar a documentação, acesse o arquivo [api-docs.md](./api-docs.md)

## Instalação

### Requisitos
- Docker
  - Se for Windows 10, é necessário ter o WSL2 ativo e integrado ao docker.
- PHP >= 7.3
  - Requisito do laravel, caso queria executar o projeto sem docker (Laravel Sail)
## Passo a Passo
- Clone o projeto `git clone https://github.com/PauloAK/vuttr.git`
- Acesse a pasta do backend `cd vuttr/backend/`
- Instale as dependências do Laravel `composer install`
- Copie o `.env.example` para `.env`: `cp .env.example .env`
- Caso necessário, edite o arquivo `.env` que você acabou de copiar para definir conexões com o banco e etc (Caso utilize o Laravel Sail, já está configurado)
- Inicie o laravel Sail: `./vendor/bin/sail up -d` (Talvez demore um pouco para iniciar a primeira vez, por precisar rodar o build dos containers)
- Após o comando do sail finalizar, podemos executar comandos:
  - Gerar a Chave da aplicação: `./vendor/bin/sail artisan key:generate`
  - Gerar a Chave do JWT>: `./vendor/bin/sail artisan jwt:secret`
  - Migrations: `./vendor/bin/sail artisan migrate`
- Pronto! API está disponibilizada em `http://127.0.0.1:3000`