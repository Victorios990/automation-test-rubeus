import { faker } from '../imports';

export default {
    gerarUsuarioDinamico: () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        const ddd = faker.number.int({ min: 11, max: 91 }).toString();
        const numTelefone = faker.string.numeric(9); 

        return {
            nomeCompleto: `${firstName} ${lastName}`,
            email: `${firstName}.${lastName}@teste.com.br`.toLowerCase().replace(/\s+/g, ''),
            telefone: `${ddd}${numTelefone}`,
            perfil: 'Usuário'
        };
    }
};