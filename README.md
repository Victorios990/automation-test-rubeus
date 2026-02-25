Projeto de Automação de Testes - Rubeus

Este projeto contém a automação de testes funcionais e de interface para as páginas de Certificação e Site Principal da Rubeus, utilizando Cypress.

Tecnologias e Arquitetura
Framework: Cypress

Massa de Dados: Faker para geração de dados dinâmicos (Nomes, E-mails e Telefones).

Padrão de Projeto: Fixtures para mapeamento de elementos (Separation of Concerns).

Arquitetura: Centralização de imports e mensagens para facilitar a manutenção.

Como Executar
Instalar dependências:

Bash
npm install
Abrir o Cypress:

Bash
npx cypress open
Executar em modo Headless:

Bash
npx cypress run
Bugs Identificados e Automatizados
Abaixo estão listados os problemas críticos detectados pelos scripts durante a execução:

Página de Certificação
Fluxo de Dados: Ausência de validação de "Base Legal" permitindo ou bloqueando cadastros de forma inconsistente.

Redirecionamento Crítico: O botão "Quero me certificar" localizado no rodapé redireciona o usuário para o Google.

Redirecionamento Social: O ícone do YouTube está configurado para abrir o perfil do TikTok.

UX/UI: Elementos como "Saiba mais" e setas de navegação são estáticos (sem ação) e possuem IDs duplicados no DOM.

Site Principal
Redirecionamento Social: O ícone do YouTube no menu superior está configurado para redirecionar para o X (Twitter).

Conteúdo Desatualizado: O rodapé exibe o texto "Página do Twitter", enquanto o link já aponta para o domínio "x.com".

Inconsistência de Redirecionamento: Botões de "Inscreva-se agora" em diferentes eventos levam para a mesma URL genérica.

Estrutura do Projeto
cypress/e2e/GUI/: Scripts de teste divididos por domínio de negócio.

cypress/fixtures/pages/: Arquivos JSON contendo o mapeamento de seletores (IDs e Classes).

cypress/support/: Factories para geração de massa de dados e comandos personalizados.
cypress/support/: Factories para geração de massa de dados e comandos personalizados.
