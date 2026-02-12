# 📊 Painel de Análise Longitudinal - EMEF Dias Gomes

> **De Dados Estáticos para Inteligência Pedagógica.**

Este projeto é uma ferramenta de **Business Intelligence (BI)** desenvolvida para a coordenação pedagógica da EMEF Dias Gomes. O objetivo é substituir a análise tradicional de planilhas estáticas (PDFs) por uma **Análise de Coorte (Cohort Analysis)** dinâmica.

🔗 **Acesse o Painel Online:** [LINK_DO_SEU_GITHUB_PAGES_AQUI]

## 🎯 O Problema
As planilhas tradicionais da Prova São Paulo mostram apenas uma "foto" do momento atual. Elas comparam, por exemplo, o 5º ano de 2022 com o 5º ano de 2023.
* **A Falha:** Esses são alunos diferentes. Comparar turmas diferentes não mostra a evolução real do aprendizado.

## 💡 A Solução
Este sistema implementa um algoritmo de rastreamento de **Coorte**.
Ao selecionar uma turma (ex: "5º Ano em 2023"), o sistema automaticamente busca no banco de dados:
1.  Onde essa turma estava no passado (ex: 4º Ano em 2022).
2.  Onde essa turma está no presente/futuro (ex: 6º Ano em 2024).

Isso permite visualizar a **Trajetória Real de Aprendizado** daquele grupo específico de alunos.

## 🛠️ Funcionalidades

* **Filtros Dinâmicos:** Segmentação por Matéria (Português, Matemática, Ciências), Série e Ano de Referência.
* **Gráfico de Evolução:** Visualização clara da tendência de notas (crescimento ou queda) ao longo dos anos.
* **Análise de Proficiência:** Tabela detalhada com a distribuição dos alunos por nível (Abaixo do Básico, Básico, Adequado, Avançado) baseada nos dados mais recentes (2025).
* **Feedback Visual:** Cores indicativas de desempenho (Verde para notas altas, Vermelho para atenção).

## 🚀 Tecnologias Utilizadas

Seguindo os princípios do **Programador Pragmático**, a arquitetura foi desenhada para ser desacoplada e fácil de manter:

* **HTML5 / CSS3:** Interface limpa, responsiva e adaptada para uso em reuniões (projetores e telas).
* **JavaScript (Vanilla):** Lógica de filtros e algoritmo de coorte sem dependência de frameworks pesados.
* **Chart.js:** Biblioteca leve para renderização dos gráficos.
* **Arquitetura de Dados:**
    * `data.js`: Camada de Dados isolada (JSON). Fácil de atualizar ano a ano sem mexer no código.
    * `app.js`: Camada de Lógica. Processa os filtros e gera os gráficos.
    * `index.html`: Camada de Apresentação.

## 📂 Como Atualizar os Dados

Para inserir as notas do próximo ano, não é necessário ser programador.
1.  Abra o arquivo `data.js`.
2.  Insira o novo registro no formato padrão:
    ```javascript
    { year: 2026, grade: 6, value: 205.5 }
    ```
3.  Salve o arquivo. O sistema recalcula todos os gráficos automaticamente.

---

**Desenvolvido para a EMEF Dias Gomes - DRE Guaianases.**
*Baseado nos dados oficiais da Prova São Paulo.*
