
## Instalação

Instale baixar o nodejs (16.16.0)
```bash
https://nodejs.org/pt/blog/release/v16.16.0
```
    
Comandos para verificar se está instalados certinho . O retorno deve ser o numero que indica as versão que foi instalados

```bash
node -v
```
```bash
npm -v
````

Depois precisará digitar o códigos padrões de nodejs para configuração do ambiente para que o essa aplicação funcione!

```bash
npm init -y
````

Instalar algumas independências para que o projeto funcione
```bash
npm install bip39 bip32@2.0.6 bitcoinjs-lib --save
```

Entrar na pasta
Projeto: BTC_WALLET ->  cd .\src\  

Para criar uma Wallet na rede do btc usando meu código
```bash
node .\createWallet.js
```
