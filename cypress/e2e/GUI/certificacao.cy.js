import { mensagens, UsuarioFactory } from '../../support/imports';

describe('Validação Funcional - Página de Certificação', () => {

    beforeEach(() => {
        cy.fixture('pages/certificacaoPage').as('mapa');
        const dadosUsuario = UsuarioFactory.gerarUsuarioDinamico();
        cy.wrap(dadosUsuario).as('dados');
        const url = Cypress.env('certUrl') || 'https://qualidade.apprbs.com.br/certificacao';
        Cypress.on('uncaught:exception', () => false);
        cy.visit(url);
    });

    it('CT01 - Deve validar bloqueio de fluxo por falta de Base Legal', function () {
        const { campoNome, campoTelefone, campoEmail, botaoAvancar } = this.mapa.certificacao;

        cy.get(campoNome).should('be.visible').type(this.dados.nomeCompleto);
        cy.get(campoEmail).should('be.visible').type(this.dados.email);
        cy.get(campoTelefone).should('be.visible').type(this.dados.telefone, { delay: 50 });
        cy.get(botaoAvancar)
            .contains('Avançar')
            .click({ force: true });
        cy.contains(mensagens.alertas.baseLegal)
            .should('be.visible');
    });

    it('CT02 - Deve validar elementos visuais que não possuem ação (Botões Mortos)', function () {
        const { saibaMais, setaEsquerda, setaMeio, setaDireita } = this.mapa.certificacao;

        cy.get(saibaMais).should('be.visible');
        cy.get(setaEsquerda).scrollIntoView().should('be.visible');
        cy.get(`img[id="${setaMeio.replace('#', '')}"]`)
            .first()
            .should('be.visible');
        cy.get(setaDireita).should('be.visible');
        cy.get(`${setaEsquerda}, ${setaMeio}, ${setaDireita}`).each(($img) => {
            cy.wrap($img).parent().should('not.have.attr', 'href');
        });
    });

    it('CT03 - Deve identificar erro de redirecionamento social (YouTube -> TikTok)', function () {
        const { youtubeIcon } = this.mapa.certificacao;

        cy.get(youtubeIcon).parent('a')
            .should('have.attr', 'href')
            .and('include', 'tiktok.com');
    });

    it('CT04 - Deve validar link com redirecionamento inconsistente (Certificacao -> Google)', function () {
        const { linkCertificarRodape } = this.mapa.certificacao;

        cy.scrollTo('bottom', { duration: 1000 });
        cy.get(linkCertificarRodape)
            .should('exist') 
            .scrollIntoView()
            .should('be.visible')
            .and('have.attr', 'href', 'https://google.com.br/');
    });
});