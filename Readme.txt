
# Projeto de Loja Virtual

Este projeto é uma aplicação backend que simula uma loja virtual. Ele conecta-se a um banco de dados e realiza operações CRUD completas.

## Tecnologias Utilizadas

- Express: Framework para Node.js que facilita a criação de servidores e APIs.
- dotenv: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.
- jsonwebtoken: Biblioteca para gerar e verificar tokens JWT, que são utilizados para autenticação e autorização.
- mysql: Driver para conectar e interagir com um banco de dados MySQL.
- sequelize: ORM (Object-Relational Mapping) para Node.js que facilita a interação com bancos de dados SQL.
- nodemon: Ferramenta para monitorar mudanças no código e reiniciar automaticamente o servidor durante o desenvolvimento.


## Estrutura do Projeto

```
projectgt-back-end/
├── controllers/               # Controladores para manipulação da lógica das rotas
│   ├── categoryController.js
│   ├── orderController.js
│   ├── productsController.js
│   └── userController.js
├── DataBase/                  # Configuração da conexão com o banco de dados
│   └── connection.js
├── Middlewares/               # Middlewares para autenticação e validação
│   └── authGuard.js
├── Model/                     # Modelos e scripts para criação das tabelas
│   ├── categoryModel.js
│   ├── createTablesModel.js
│   ├── orderModel.js
│   ├── productsModel.js
│   └── userModel.js
├── node_modules/              # Dependências do projeto
├── Routes/                    # Definição das rotas da API
│   ├── categoryRouter.js
│   ├── orderRouter.js
│   ├── productsRouter.js
│   ├── routers.js
│   └── usersRoutes.js
├── .env                       # Arquivo de configuração de variáveis de ambiente
├── BD_PROJETO-BACKEND          # Script SQL para a criação do banco de dados
├── package-lock.json          # Arquivo de lock do npm
├── package.json               # Arquivo de configuração do npm
├── server.js                  # Arquivo principal que inicializa o servidor
└── README.md                  # Este arquivo

```

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/kailanesarah/projectGT-back-end.git
    ```

2. Navegue até o diretório do projeto e execute:

    ```bash
    cd projectGT-back-end
    ``

3. Instale as dependências principais do projeto:

    ```bash
    npm install express dotenv jsonwebtoken mysql2 sequelize
    
    ```
2. Configure o banco de dados:

    - O script SQL para criar o banco de dados está localizado na raiz do projeto. Execute este script no seu servidor MySQL para configurar o banco de dados.


## Executando o Projeto

Para iniciar a aplicação, execute:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Rotas Disponíveis

- Usuários:
  - CRUD: `http://localhost:3000/users`

    "/" - findAll
    "/:id"-findById | delete | update (Dependendo do método utilizado)
    "/", - add

- Produtos:
  - CRUD: `http://localhost:3000/product`

    "/" - findAll
    "/:id"-findById | delete | update (Dependendo do método utilizado)
    "/", - add

- Categorias:
  - CRUD: `http://localhost:3000/category`

    "/" - findAll
    "/:id"-findById | delete | update (Dependendo do método utilizado)
    "/", - add

- Pedidos:
  - CRUD: `http://localhost:3000/order`

    "/" - findAll
    "/:id"-findById | delete | update (Dependendo do método utilizado)
    "/", - add

## Testes

Os testes das rotas foram realizados usando o Insomnia(https://insomnia.rest/). 

## Contribuintes

- Alex dos Santos ([GitHub](https://github.com/alexsmagalhaes))
- Kailane Sarah ([GitHub](https://github.com/kailanesarah))


