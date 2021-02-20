# TO-DO API

Projeto de criação de API para aplicativo de to-do lists. Desenvolvida ao longo do terceiro módulo do curso de desenvolvimento web Full-Stack do bootcamp [Resilia Educação](https://www.resilia.work/).

### Inicializando o projeto 

O projeto foi desenvolvido utilizando *Node.js*, portanto, certifique-se de que sua máquina possui este software devidamente instalado. Várias dependências foram utilizadas, portanto, utilize o comando **npm install** via terminal para que as mesmas sejam instaladas e o projeto funcione sem problemas. Uma vez instaladas as dependências, inicialize o servidor com o comando **npm start** também via terminal. A mensagem "Server ON" aparecerá no mesmo para confirmar o funcionamento.

### Rotas implementadas

#### Usuários:

- Rota GET para listar usuários: http://localhost:3000/usuarios 
- Rota GET de busca de usuário por email: http://localhost:3000/usuarios/:email 
- Rota POST para inserir usuários no banco de dados: http://localhost:3000/usuarios 
- Rota PUT para alteração de dados de usuário: http://localhost:3000/usuarios/:email
- Rota DELETE para apagra um registro na tabela de usuários: http://localhost:3000/usuarios/:email

#### Tarefas: 

- Rota GET para listar tarefas de usuários: http://localhost:3000/tarefas
- Rota GET de busca de tarefas por título: http://localhost:3000/tarefas/:titulo
- Rota POST para inserir tarefas no banco de dados: http://localhost:3000/tarefas 
- Rota PUT para alteração de dados de tarefas: http://localhost:3000/tarefas/:titulo 
- Rota DELETE para apagar um registro na tabela de tarefas: http://localhost:3000/tarefas/:titulo


### Dependências do projeto

Dependências:
 - Express
 - Body-parser
 - SQLite
 - Cors
 - Supertest

 Dependências de desenvolvimento: 
 - Nodemon
 - Jest

### Testes automatizados

 Para executar os testes, é realizado o comando **npm test** no terminal. Este comando testa as cinco rotas implementadas (GET, GET para pesquisa específica, POST, PUT e DELETE) para cada funcionalidade (tarefas e usuários).

