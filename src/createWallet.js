// Importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definindo a Rede

//bitcoin - rede principal - mainnet
//testnet - rede de teste - testnet
const network = bitcoin.networks.testnet; 

// Criando o caminho de derivação de Carteiras
// Derivação de carteiras HD
const path = `m/49'/1'/0'/0`;

//Criando o mnemonic para a seed (Palavra de senha)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da Carteira HD
let root = bip32.fromSeed(seed,network);

// Criando uma conta - par pvt-pub keys
let account = root.derivePath(path);

//Gerando um nó que é uma conta nó a partir da raiz
let node = account.derive(0).derive(0);

// Gerando um endereço
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log('Carteira Gerada');
console.log('Endereço: ', btcAddress);
console.log('Chave Privada:', node.toWIF());
console.log('Seed:', mnemonic);