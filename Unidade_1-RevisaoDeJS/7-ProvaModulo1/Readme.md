# Gerenciador de Tarefas
Neste projeto, foco principal é implementar funcionalidades básicas de gerenciamento de tarefas utilizando ES6. A aplicação não aborda o front-end detalhadamente, concentrando-se em funcionalidades essenciais e técnicas de JavaScript vistas nas aulas desse modulo.

## Tecnologias Utilizadas
- **ES6**: exportaçao e importaçao
- **Template Strings**: Para formatação de strings das saidas.
- **Classes**: Para a criação de objetos e organização do código.
- **Arrays**: Para armazenar e manipular tarefas.
- **Ternário**: Para condicional simplificada.
- **Arrow Functions**: Para as funções.

## Estrutura do Projeto

### module.js
Este módulo define duas classes principais:

- **Tarefa**: Representa uma tarefa com um ID, um título e um status de conclusão.
- **GerenciarTarefas**: Gerencia uma lista de tarefas com funcionalidades para adicionar, remover, listar e marcar tarefas como concluídas.

### app.js
Este arquivo contém a lógica para gerenciar tarefas. Ele importa a classe GerenciarTarefas e utiliza seus métodos para adicionar, marcar como concluída e remover tarefas.

### index.html
O arquivo HTML básico inclui um script JavaScript para executar o código e possibilitar visualizar pelo console do navegador.