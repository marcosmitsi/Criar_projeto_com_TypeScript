## Requisitos

* Node.js 22 ou superior → Conferir a Versão: node -v

## Como rodar o projeto baixado

## Sequencia para criar o projeto

Criar o arquivo package.

´´´
npm init -y  → ele cria o arquivo de forma automatica sem nenhum tipo de confirmação.

´´´

Instalar o TypeScript como uma Dependência de desenvolvimento.


´´´
npm install -- save-dev typescript
´´´

Criar o arquivo tsconfig.json, executar quando o typescript foi instalado somente no projeto.

´´´
npx tsc --init   ☻→ gerenciador de dependenciaas typscript  criar o arquivo de configuração
´´´

compilar os arquivos TypeScript.
´´´
npx tsc
´´´

Executar o arquivo JavaScript compilado.
´´´
node dist/index.js
´´´