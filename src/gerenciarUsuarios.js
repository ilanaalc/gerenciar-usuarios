//lista de usuário que contém nome e e-mail
const usuarios = // Olha JavaScripton isso é uma lista de objetos!!!!!!!!!!
    // E o kiko? O J
    [
        {
            nome: 'Matheus',
            email: 'matheus@email.com'
        },

        {
            nome: 'Marcos',
            email: 'marcos@email.com'
        },

        {
            nome: 'Lucas',
            email: 'lucas@email.com'
        },

        {
            nome: 'João',
            email: 'joao@email.com'
        }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) { //dentro da lista de usuário, coloque um usuário no final.
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}