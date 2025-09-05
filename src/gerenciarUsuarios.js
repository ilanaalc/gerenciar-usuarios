const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nome) { //é nome, porque você precisa de um nome para adicionar na lista, representação do nomeup -- não importa qual o nome da entrada, mas é a definição que você usa pra dizer o que você precisa.
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}