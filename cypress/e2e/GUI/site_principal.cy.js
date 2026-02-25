import { mensagens, UsuarioFactory } from '../../support/imports';

describe('Validação Funcional e UI - Site Principal', () => {
    
    beforeEach(function () {
        cy.fixture('pages/sitePage').as('mapa');
        const dadosUsuario = UsuarioFactory.gerarUsuarioDinamico();
        cy.wrap(dadosUsuario).as('dados');

        Cypress.on('uncaught:exception', () => false);
        cy.visit('https://qualidade.apprbs.com.br/site');
    });

    it('CT01 - Deve validar redirecionamento inconsistente no Menu Superior (YouTube -> X)', function () {
        const { youtubeIconMenuSuperior } = this.mapa.site;
        
        cy.get(youtubeIconMenuSuperior)
            .should('be.visible')
            .parent('a')
            .should('have.attr', 'href')
            .and('include', 'x.com'); 
    });

    it('CT02 - Deve validar carrossel de banners', function () {
        const { bannerDot2, bannerDot3 } = this.mapa.site;

        cy.get(bannerDot2).click();
        cy.get(bannerDot2).should('have.class', 'active');
        
        cy.get(bannerDot3).click();
        cy.get(bannerDot3).should('have.class', 'active');
    });

    it('CT03 - Deve validar links de inscrição em eventos', function () {
        const { vestibular2022, palestraDezFev } = this.mapa.site;

        cy.get(vestibular2022)
            .should('have.attr', 'href')
            .and('include', 'cursos.rubeus.com.br');

        cy.get(palestraDezFev)
            .should('have.attr', 'href')
            .and('include', 'cursos.rubeus.com.br');
    });

it('CT04 - Deve validar formulário "Não fique de fora" com dados dinâmicos', function () {
        const { campoNome, campoEmail, campoTelefone, botaoConcluir } = this.mapa.site;
        
        const nomeParaDigitar = this.dados.nome || this.dados.nomeCompleto;
        const emailParaDigitar = this.dados.email;
        const telefoneParaDigitar = this.dados.telefone || this.dados.celular;

        cy.get(campoNome).type(nomeParaDigitar);
        cy.get(campoEmail).type(emailParaDigitar);
        cy.get(campoTelefone).type(telefoneParaDigitar);
        cy.get(botaoConcluir).should('be.visible');
    });

    it('CT05 - Deve validar texto desatualizado e link do Twitter no rodapé', function () {
        const { iconeTwitterTexto, linkXFooter } = this.mapa.site;

        cy.scrollTo('bottom');
        
        cy.get(iconeTwitterTexto).should('contain', 'página do Twitter');
        
        cy.get(linkXFooter)
            .should('have.attr', 'href')
            .and('include', 'x.com');
    });
});