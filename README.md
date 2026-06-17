# Automação Fiscal Inteligente

Sistema de demonstração para emissão automatizada de notas fiscais.

## Sobre o Projeto

O Automação Fiscal Inteligente é um protótipo desenvolvido para demonstrar um fluxo completo de emissão de notas fiscais a partir da importação de planilhas Excel.

O objetivo é apresentar de forma visual e intuitiva como um processo manual pode ser automatizado, reduzindo tempo operacional e minimizando erros de digitação.

Este projeto foi desenvolvido utilizando apenas tecnologias front-end para fins de demonstração comercial.

## Funcionalidades

* Login automático para demonstração
* Dashboard de acesso rápido
* Importação automática de planilhas Excel
* Leitura de dados utilizando XLSX
* Visualização dos produtos importados
* Simulação de processamento automatizado
* Tela de revisão dos dados
* Geração de Nota Fiscal Eletrônica demonstrativa
* Exportação para PDF
* Interface moderna e responsiva

## Fluxo do Sistema

Login

↓

Dashboard

↓

Importação da Planilha

↓

Validação dos Dados

↓

Automação Fiscal

↓

Revisão da Emissão

↓

Geração da Nota Fiscal

↓

Exportação em PDF

## Tecnologias Utilizadas

### Front-End

* HTML5
* CSS3
* JavaScript

### Bibliotecas

* SheetJS (XLSX)
* jsPDF

## Estrutura do Projeto

```text
projeto/

├── assets/
│   ├── logo.png
│   └── Planilha.xlsx
│
├── css/
│   └── style.css
│
├── js/
│   ├── login.js
│   ├── dashboard.js
│   ├── excel.js
│   ├── dados.js
│   ├── automacao.js
│   ├── revisao.js
│   └── nota.js
│
├── index.html
├── dashboard.html
├── importar.html
├── dados.html
├── automacao.html
├── revisao.html
├── nota.html
└── README.md
```

## Demonstração

A demonstração realiza automaticamente:

* Carregamento da planilha
* Leitura dos produtos
* Processamento dos dados
* Simulação de validações fiscais
* Montagem da nota fiscal
* Geração de PDF

## Observação

Este sistema é apenas uma demonstração visual de conceito.

Os documentos gerados não possuem validade fiscal e não realizam integração com sistemas governamentais.

## Próximas Evoluções

* Integração com banco de dados
* API de emissão de NF-e
* Cadastro de clientes
* Cadastro de produtos
* Controle de usuários
* Histórico de emissões
* Dashboard analítico
* Integração com ERP
* Automação desenvolvida em Python

## Autor

Projeto desenvolvido para demonstração de solução de automação fiscal e emissão de documentos eletrônicos por Sinivy.
