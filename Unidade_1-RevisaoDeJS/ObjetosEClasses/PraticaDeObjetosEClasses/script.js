// objetos

function objeto(){
    // objeto carro
    const carro = {
        marca: 'fiat',
        modelo: 'Uno',
        cor: 'Branco'
    } 
    
    // acessando valores de objetos
    
    console.log(`O ${carro.modelo} ${carro.marca} de cor ${carro.cor}(a)`); // acessando cada propriedade
    console.log(carro["cor"]); // acesso por colchetes
    
    // objeto pessoa
    
    const pessoa = {
        nome: 'Brenno',
        sobrenome: 'Cartaxo',
        fullname: function () {
            return this.nome + ' ' + this.sobrenome; // this serve para acessar uma chave dentro do escopo do objeto
        }
    }
    
    console.log(pessoa.fullname()); // para acessar a funçao dependemos do acesso do objeto para assim usar a propriedade
    
    const pessoa2 =  new Object;
    pessoa2.nome = 'Cartaxo';
    pessoa2.sobrenome = 'Brenno';
    pessoa2.fullname = function () {
        return this.nome + ' ' + this.sobrenome;
    }
    console.log(pessoa2.nome);
    console.log(pessoa2.sobrenome);
    console.log(pessoa2.fullname());
}

// class

function classe(){
    class Pessoa{
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }     
        saudacao() {
            console.log(`Oii, me chamo ${this.nome} e tenho ${this.idade} anos`);
        }
    }
    const pessoa1 = new Pessoa('Brenno', 19);
    const pessoa2 = new Pessoa('ze', 2);

    pessoa1.saudacao();
    pessoa2.saudacao();


    class Aluno extends Pessoa{
        constructor(nome, idade, anoEscolar){
            super(nome, idade);
            this.anoEscolar = anoEscolar
        }
        saudacao(){
            console.log(`Oii, me chamo ${this.nome} e tenho ${this.idade} anos e estou no ${this.anoEscolar}° ano`);
        }
    }

    const Aluno2 = new Aluno('jammes', 2, 1);
    Aluno2.saudacao();
}