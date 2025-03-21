class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.sexo}.`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, sexo, disciplina) {
        super(nome, idade, sexo); // Chama o construtor da classe Pessoa
        this.disciplina = disciplina;
    }

    ensinar() {
        return `Estou ensinando ${this.disciplina}.`;
    }
}

// Exemplo de uso:
const professor = new Professor("Carlos", 40, "Masculino", "Matemática");
console.log(professor.apresentar());
console.log(professor.ensinar());
