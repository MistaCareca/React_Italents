import { GerenciarTarefas } from './module.js'; // aqui chamamos os exportados do module.js

const gerenciar = new GerenciarTarefas(); // iniciamos as tarefas

// estamos usando desse modo pois o professor avia dito sobre esse metodo que usaremos para react
// modo me refiro a gerneciar.funcionalidade();

// caso desejado altera os valores para mais testes
gerenciar.adicionarTarefa('Estudar JavaScript');
gerenciar.adicionarTarefa('Fazer exercícios físicos');
gerenciar.marcarConcluida(1);
gerenciar.removerTarefa(1);
