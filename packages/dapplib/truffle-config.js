require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food shoulder riot machine hole coral light army gift'; 
let testAccounts = [
"0xfa6c09560588af3126cdf2dec007b645d3ce174c885bc2a7d57c46e31608c225",
"0xcf695d847fbb80f612627b5f3ed65f5ccbaf5d997c2b0a6c1c242453f2d66be4",
"0xb5d601a9b4e43425742c9fea336b84b6e184db82d94d6f4a7fd28f9ed4a938ee",
"0xf515ddaadf741e605b8da0d7a8e537403cc6a859cbc86880d2767225f3c32e57",
"0x7e108d88c73e99650ee6234d5605d754b364851d19e8d202abaf4c55bb1590dd",
"0xe9446804b0116f6e3f0f14cb99ab3ed325a75aafbec33ab7f0ffec65f68edcf7",
"0x513c5b87bc0341ca20cf3b57234455e7ae0df9cbf9ef7240d94af8bba505f351",
"0xc58ba9474b20831c6f8a5639f9dcc555bb1ec88c3fe99cdb763846dc7a604135",
"0x8ddecfc228e2878beb6a66d61412eedd064a6592c6bd4815a292af5844b7aa6a",
"0xb74f6b15edd3cb7e87c22317b64232c4199f26c7c15879db44eef3a817619548"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


