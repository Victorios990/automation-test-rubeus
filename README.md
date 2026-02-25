🚀 Projeto de Automação de Testes - Rubeus

Este ecossistema de testes foi desenvolvido para garantir a integridade funcional e a qualidade da experiência do usuário (UX) nas páginas de Certificação e Site Principal da plataforma Rubeus, utilizando o framework Cypress.

🛠️ Tecnologias e Arquitetura

Framework: Cypress para testes de ponta a ponta (E2E).

Massa de Dados: Integração com Faker via UsuarioFactory para geração de dados dinâmicos e realistas, evitando o vício de testes com dados estáticos.

Padrão de Projeto (Fixtures): Implementação de Separation of Concerns (Separação de Preocupações), onde todos os seletores CSS/IDs estão centralizados em arquivos JSON para facilitar a manutenção.

Arquitetura de Suporte: Centralização de imports e constantes de mensagens, garantindo um código limpo (Clean Code) e escalável.

💻 Como Executar
1. Instalar as dependências do projeto:

Bash
npm install
2. Abrir a interface interativa do Cypress:

Bash
npx cypress open
3. Executar os testes em modo headless (terminal):

Bash
npx cypress run
🐞 Bugs Identificados e Automatizados
Os scripts foram desenhados para capturar falhas críticas que impactam diretamente a conversão e a usabilidade:

🎓 Página de Certificação
Fluxo de Dados: Identificada a ausência de uma validação rígida de "Base Legal", o que gera inconsistência no bloqueio ou permissão de cadastros.

Erro Crítico de Redirecionamento: O botão principal "Quero me certificar" no rodapé está incorretamente apontando para o Google, desviando o lead do funil de vendas.

Inconsistência Social: O ícone do YouTube está erroneamente vinculado a um perfil do TikTok.

Débito Técnico em UI: Presença de elementos estáticos (setas e botões) que não possuem ação e utilizam IDs duplicados no DOM, violando boas práticas de desenvolvimento web.

🌐 Site Principal
Troca de Redirecionamento: O ícone do YouTube no menu superior redireciona para a rede social X (Twitter).

Identidade Visual Desatualizada: O rodapé ainda referencia a "Página do Twitter", apesar de o link já estar atualizado para o novo domínio "x.com".

URLs Genéricas: Múltiplos botões de eventos distintos (Vestibular, Palestras) convergem para a mesma URL de inscrição, prejudicando o rastreio de origem do interesse do aluno.

📂 Estrutura do Projeto
cypress/e2e/GUI/: Suítes de testes organizadas por domínio de negócio.

cypress/fixtures/pages/: Dicionário de seletores mapeados por ID, Classe e Atributos.

cypress/support/: Lógica de suporte, incluindo a Factory para criação de perfis de usuários e centralização de mensagens do sistema.
