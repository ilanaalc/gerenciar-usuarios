const { gerenciarUsuarios, adicionarNovoUsuario, retornarUsuarios } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe ('Testar as funções de Gestão de Usuários', function (){
    it('Validar que posso adicionar um novo nome de usuário na lista', function(){
        //1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario('Maria');

        //2. Retornar a lista de usuários na caixa lista de usuários
        const listaUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome estpa no fim da lista de usuários
        expect(listaUsuarios.at(-1)).to.equal('Maria');
    });
});