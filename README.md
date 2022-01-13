
# TECNOLOGIAS
## Node.js
## SQlite
## Docker
## Github

Obs.:
--> Migrations com Sequelize
--> CRUD para ambas as Tabelas


# Tabela `m2_equipes`
 - `idequipe` (int); PK
 - `nome` (char 150);
 - `ativo` (int);

 # Tabela `m2_usuarios`
 - `idusuario` (int); PK
 - `nome` (char 150);
 - `password` (char 150);
 - `login` (char 30);
 - `ativo` (int);
 - `idequipe` (int)  FK     

# CRUD DAS EQUIPES

# Criação das equipes

**RF** 
- [x] Deve ser possível cadastrar uma equipe

**RN**
- [x] Não deve ser possível realizar cadastro com nome já existente


# Listagem de uma equipe

**RF**
- [x] Deve ser possível listar todas as equipes existentes
- [x] Deve ser possível listar a equipe pelo ID

**RN**
- [x] Não deve ser possível listar uma equipe com id inexistente 


# Atualização da equipe

**RF**
- [x] Deve ser possível atualizar o nome da equipe

**RN**
- [x] Não deve ser possível atualizar uma equipe inexistente


# Exclusão da equipe

**RF**
- [x] Deve ser possível inativar uma equipe

**RN**
- [x] Ao inativar uma equipe todos os membros serão automaticamente inativados



# CRUD DOS USUÁRIOS

# Criação dos usuários

**RF** 
- [x] Deve ser possível cadastrar um usuário

**RN**
- [x] Não deve ser possível realizar cadastro com login já existente
- [x] O usuário só pode pertencer a uma equipe


# Listagem do usuário

**RF**
- [x] Deve ser possível buscar um usuário pelo ID
- [x] Deve ser possível listar todos os usuários ativos
- [x] Deve ser possível listar todos os usuários inativos
- [x] Deve ser possível listar todos os usuários de uma mesma equipe pelo ID da equipe

**RN**
- [x] Não deve ser possível listar um usuário inexistente


# Atualização do usuário

**RF**
- [x] Deve ser possível atualizar o nome do usuário
- [x] Deve ser possível atualizar o login do usuário
- [x] Deve ser possível atualizar a senha do usuário
- [x] Deve ser possível atualizar a equipe do usuário

**RN**
- [x] Não deve ser possível atualizar um usuário inexistente


# Exclusão do usuário

**RF**
- [x] Deve ser possível inativar um usuário

**RN**
- [x] Não deve ser possível inativar um usuário inexistente


