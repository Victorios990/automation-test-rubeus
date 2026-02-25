# Processo Seletivo Qualidade - Rubeus

Este repositório contém a resolução do teste prático para a vaga de QA na **Rubeus**. O projeto engloba a identificação de melhorias, reporte de bugs e a automação de testes E2E para as páginas de exemplo fornecidas.

## 🚀 Objetivo do Projeto
Analisar a qualidade das páginas propostas, classificando as ocorrências conforme as diretrizes do teste (Tipo, Classificação e Prioridade) e implementar testes automatizados para garantir a estabilidade das funcionalidades.

## 🛠️ Tecnologias Utilizadas
* **Framework de Automação:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript / TypeScript (escolha o que for usar)
* **Relatórios:** (Ex: Mochawesome ou o próprio GitHub Issues)

## 📋 Estrutura de Classificação
Seguindo as instruções do processo, as ocorrências foram reportadas baseadas em:
- **Tipo:** Correção, Nova Funcionalidade, Melhoria.
- **Classificação:** Utilidade, Usabilidade, Desejabilidade.
- **Prioridade:** Baixa, Média, Alta.

## 🏗️ Estrutura do Repositório
* `cypress/e2e/`: Scripts de teste automatizados.
* `cypress/fixtures/`: Massas de dados para os testes.
* `cypress/support/`: Comandos personalizados e configurações globais (Page Objects).
* `reports/`: (Opcional) Documentação técnica ou evidências de bugs encontrados.

## 🔧 Como Executar os Testes
1. Clone o repositório:
   ```bash
   git clone [https://github.com/Victorios990/automation-test-rubeus.git]