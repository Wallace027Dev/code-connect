# Code Connect

Uma rede social para devs.

## Tecnologias Utilizadas

- **Node.js**: v20.05.0
- **Next.js**: v14.0.0
- **json-server**: v1.0.0-alpha.22

## Requisitos

- **Node.js**: Certifique-se de ter o Node.js na versão v20.05.0 instalada. Você pode baixar e instalar o Node.js [aqui](https://nodejs.org/).

## Instalação

1. Clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Mock com Servidor Falso

Na raiz do projeto, há um servidor falso em funcionamento usando o `json-server` na versão 1.0.0-alpha.22. Para iniciar o servidor, siga os passos abaixo:

1. Inicie o servidor falso:
    ```bash
    npm run mock
    ```

2. O servidor falso estará rodando em [http://localhost:3000](http://localhost:3000).

## Configuração de Variáveis de Ambiente

Para configurar a URL do servidor falso, crie um arquivo `.env.local` na raiz do projeto e adicione a seguinte linha:

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:3000
