# 💻 LabeSystem

### [Documentação da API](https://documenter.getpostman.com/view/20354712/UzBsHQFo)

## :dart: Requisitos do Projeto

Ele deve possuir, ao menos, as 3 entidades importantes:

### Estudantes

Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele.

### Docente

Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

### Turma

Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

O módulo pode assumir os valores de 1 a 7 ou undefined, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com -na-night.

## ⚙️ Funcionalidades

1. Estudante
    - Criar estudante;
    - Buscar estudante por nome;
    - Mudar estudante de turma.

2. Docente
    - Criar docente;
    - Buscar todos os docentes;
    - Mudar docente de turma.

3. Turma
    - Criar turma;
    - Buscar turmas ativas;
    - Mudar turma de módulo.
    
 ### :computer: Tecnologias
- Node.js
- Typescript
- MYSQL
- Express
- Knex
- bcryptjs
- uuid
- jsonwebtoken

## Desenvolvedores

| [<img src="https://avatars.githubusercontent.com/u/69327864?s=96&v=4" width=100><br><sub>Renan Alencar</sub>](https://github.com/Renan-Ma) | [<img src="https://avatars.githubusercontent.com/u/98921788?v=4" width=100><br><sub>Marcos Vinicius</sub>](https://github.com/Marcos-vvc) | [<img src="https://avatars.githubusercontent.com/u/99031516?v=4" width=100><br><sub>Matheus de Souza</sub>](https://github.com/matheus92as) |
| :---: | :---: | :---: |

