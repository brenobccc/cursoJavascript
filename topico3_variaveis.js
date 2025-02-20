//1 - Criação de Variáveis
    /*As variáveis na programação, serve para realizar o ARMAZENAMENTO
    de valores que podem ser utilizados durante o funcionamento do programa*/

    //normalmente, é criada da seguinte forma:    nome_variavel = valor
    //O simbolo "=" é também chamado de atribuição ou "recebe"

    //Caso eu queira guardar um valor do tipo inteiro(um numero)
    variavel01 = 5;
    console.log(variavel);

    nome = "Breno";
    console.log(nome);

    //Consigo mostrar duas variaveis em uma "mensagem" só? sim. use concatenação.
    console.log(nome + " " + variavel01)
    //o resultado vai ser "Breno 5"


//2 - Leitura de Dados
    //Vamos supor, que ao invés de sempre ser um valor fixo, formos querer
    //informar um valor. podemos fazer isso

    //Não precisa entender esse código, só saiba como usálo
    const prompt = require ('prompt-sync') ({sigint: true});

    nome = prompt() //o usuário digitará no terminal, e a informação será armazenada na variavel
    console.log(nome)

    sobrenome = prompt("Digite o sobrenome");
    console.log(sobrenome);

    console.log("O nome é:" +  nome + "E o sobrenome é:" + sobrenome);

//3 - Conversão de Dados
/*Quando realizamos a leitura dos dados, a leitura é feita como um dado STRING/TEXTO, SEEEEEEEEEEEEEEEEEMPRE*/
/*Então se formos ler, e formos informar algum valor que deve ser number, devemos fazer a conversão*/

idade = parseInt(prompt("Digite um número"))
altura = parseFloat(prompt("Digite sua altura"))

/*Referências:
    1. https://www.w3schools.com/js/js_variables.asp
    2. https://pt.stackoverflow.com/questions/577004/comando-de-entrada-prompt-sync-no-node-js
    // 
*/