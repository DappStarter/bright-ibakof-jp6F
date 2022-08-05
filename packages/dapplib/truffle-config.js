require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift regret maze coin hunt cover army genuine'; 
let testAccounts = [
"0x9c5fdc67d6bf32aa007c8125a9e3da7d865213be6a84fec1cc418e9458f22d60",
"0x8203a902b5fee36cd3ec5e0a77eb7df19b321e02b6400e6b823e5ef11d6cd957",
"0xc1de0fea2199f73b58b377ff4c9d1b470fbc06f4d556582855cf729b92eb9e4d",
"0x5ad543bf7abc3897c02dad256345145257703020ff7d3fb161f0598f6687d011",
"0x69d69cccaa20b05dfe85dfc45aca1f950b9f7d90ac0ea21f059d842d18176800",
"0xe0260348d2b5ca95efaa41e51ee6aa1918911802f2f6853c1248414d7e65ae12",
"0xa8af699451ed3817f6f8a61c860e4ff0c322f69de6ad03f8ba365257962a5a4c",
"0x09eef5ccdf40683b60ddc7fbacdc5159774b50eba50c5dd3e780a468174dc3d6",
"0xe23f5f25130cbc9faeee92dba3757d54c1b4c8b60eb70d2a06a23bb7738aebed",
"0x7ad1910dfe73b7510ab7c8a3747a9d3336ec2ae8b9b5ab81e1e7c1d6b32d75fa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

