// vamos exportar a class Tarefa e GerenciarTarefas para organizar melhor os dieretorios

export class Tarefa { // estrutura dos objetos
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
        this.concluida = false; // Inicializa como false para alterar depois na funçao de marcarConcluida
    }
}

export class GerenciarTarefas {
    constructor() {
        this.tarefas = []; // Guarda as tarefas
        this.proxId = 1; // Inicializa o ID
    }
    // essa funçao serve para exibir a tarefa no terminal em base desse molde pelo template string
    listarTarefas() {
        this.tarefas.forEach(tarefa => {
            const status = tarefa.concluida ? "Concluída" : "Pendente";
            console.log(`[ID: ${tarefa.id}] ${tarefa.titulo} - ${status}`);
        });
    }
    // adiciona uma tarefa no array de tarefas pelo titulo e pelo id que é autoencrementado similiar oq SQL
    adicionarTarefa(titulo) {
        const novaTarefa = new Tarefa(this.proxId++, titulo);
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa "${titulo}" adicionada...`);
        this.listarTarefas();
    }
    //busca em base do id uma tarefa e a removo usandoo o filter de pois lista as tarefas
    removerTarefa(id) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
        console.log(`Tarefa com ID ${id} removida`);
        this.listarTarefas();
    }
    // como nome indica essa funçao seve para buscar nas tarefas por um id e informar caso a tarefa esteja completa
    // e logo depois listar
    marcarConcluida(id) {
        const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
        tarefa
            ? (tarefa.concluida = true, console.log(`Tarefa ${id} (${tarefa.titulo}) foi concluída, muito bem!`))
            : console.log(`Tarefa com ID ${id} não encontrada!`);
        this.listarTarefas();

    }    
}
