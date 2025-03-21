class Aluno{
    constructor(nome, disciplina){
        nome = this.nome
    }

    mostrarNome(){
        console.log(this.nome)
    }

    mostrarDisciplina(){
        console.log(this.disciplina)
    }
}

//criando objetos
// variavel = new Classe(atributos...)

aluno01 = new Aluno('Breno','Redes')
