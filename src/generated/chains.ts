// ===========================================================================
// DO NOT EDIT THIS FILE MANUALLY!
//
// The contents have been added automatically.
// See: scripts/generate-chains.ts for more information
// ===========================================================================

import { Chain } from '../types';

export const CHAINS: Chain[] = [
  {
    alias: 'arbitrum-nova',
    blockTimeMs: 815,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-nova.arbiscan.io/api' },
      browserUrl: 'https://nova.arbiscan.io/',
    },
    id: '42170',
    name: 'Arbitrum Nova',
    providers: [{ alias: 'default', rpcUrl: 'https://nova.arbitrum.io/rpc' }],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'arbitrum-sepolia-testnet',
    blockTimeMs: 252,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'arbitrumSepolia', required: true },
        url: 'https://api-sepolia.arbiscan.io/api',
      },
      browserUrl: 'https://sepolia.arbiscan.io/',
    },
    id: '421614',
    name: 'Arbitrum Sepolia testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc' },
      { alias: 'publicnode', rpcUrl: 'https://arbitrum-sepolia-rpc.publicnode.com' },
    ],
    skipProviderCheck: false,
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'arbitrum',
    blockTimeMs: 251,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'arbitrumOne', required: true }, url: 'https://api.arbiscan.io/api' },
      browserUrl: 'https://arbiscan.io/',
    },
    id: '42161',
    name: 'Arbitrum One',
    providers: [
      { alias: 'default', rpcUrl: 'https://arb1.arbitrum.io/rpc' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'aurora-testnet',
    blockTimeMs: 1296,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'auroraTestnet', required: false },
        url: 'https://explorer.testnet.aurora.dev/api',
      },
      browserUrl: 'https://explorer.testnet.aurora.dev/',
    },
    id: '1313161555',
    name: 'Aurora testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://testnet.aurora.dev/' }],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'aurora',
    blockTimeMs: 1276,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'aurora', required: false },
        url: 'https://explorer.mainnet.aurora.dev/api',
      },
      browserUrl: 'https://explorer.aurora.dev/',
    },
    id: '1313161554',
    name: 'Aurora',
    providers: [{ alias: 'default', rpcUrl: 'https://mainnet.aurora.dev/' }],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'avalanche-testnet',
    blockTimeMs: 2887,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'avalancheFujiTestnet', required: true },
        url: 'https://api.routescan.io/v2/network/testnet/evm/43113/etherscan/api',
      },
      browserUrl: 'https://testnet.snowtrace.io/',
    },
    id: '43113',
    name: 'Avalanche testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc' },
      { alias: 'publicnode', rpcUrl: 'https://avalanche-fuji-c-chain-rpc.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'AVAX',
    testnet: true,
  },
  {
    alias: 'avalanche',
    blockTimeMs: 2066,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'avalanche', required: true },
        url: 'https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api',
      },
      browserUrl: 'https://snowtrace.io/',
    },
    id: '43114',
    name: 'Avalanche',
    providers: [
      { alias: 'default', rpcUrl: 'https://api.avax.network/ext/bc/C/rpc' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'AVAX',
    testnet: false,
  },
  {
    alias: 'base-sepolia-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-sepolia.basescan.org/api' },
      browserUrl: 'https://sepolia.basescan.org/',
    },
    id: '84532',
    name: 'Base Sepolia testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://sepolia.base.org' },
      { alias: 'publicnode', rpcUrl: 'https://base-sepolia-rpc.publicnode.com' },
    ],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'base',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api.basescan.org/api' },
      browserUrl: 'https://basescan.org/',
    },
    id: '8453',
    name: 'Base',
    providers: [
      { alias: 'default', rpcUrl: 'https://mainnet.base.org' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'blast-sepolia-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-sepolia.blastscan.io/api' },
      browserUrl: 'https://sepolia.blastscan.io/',
    },
    id: '168587773',
    name: 'Blast Sepolia Testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://sepolia.blast.io' },
      {
        alias: 'drpc-freemium',
        rpcUrl: 'https://lb.drpc.org/ogrpc?network=blast-sepolia&dkey=AiPHJac9aUX2s7ELd131NuwSeHqkUW8R7oQiFnomaLKw',
      },
    ],
    skipProviderCheck: false,
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'blast',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api.blastscan.io/api' },
      browserUrl: 'https://blastscan.io/',
    },
    id: '81457',
    name: 'Blast',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.blast.io' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    skipProviderCheck: false,
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'boba-bnb',
    blockTimeMs: 4300,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://blockexplorer.bnb.boba.network/api' },
      browserUrl: 'https://blockexplorer.bnb.boba.network/',
    },
    id: '56288',
    name: 'Boba/BNB',
    providers: [{ alias: 'default', rpcUrl: 'https://replica.bnb.boba.network/' }],
    symbol: 'BOBA',
    testnet: false,
  },
  {
    alias: 'boba-ethereum',
    blockTimeMs: 133773,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api.bobascan.com/api' },
      browserUrl: 'https://bobascan.com/',
    },
    id: '288',
    name: 'Boba/Ethereum',
    providers: [{ alias: 'default', rpcUrl: 'https://lightning-replica.boba.network/' }],
    symbol: 'BOBA',
    testnet: false,
  },
  {
    alias: 'bsc-testnet',
    blockTimeMs: 3001,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'bscTestnet', required: true }, url: 'https://api-testnet.bscscan.com/api' },
      browserUrl: 'https://testnet.bscscan.com/',
    },
    id: '97',
    name: 'BNB Smart Chain testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://data-seed-prebsc-1-s3.binance.org:8545/' },
      { alias: 'publicnode', rpcUrl: 'https://bsc-testnet-rpc.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'BNB',
    testnet: true,
  },
  {
    alias: 'bsc',
    blockTimeMs: 3006,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'bsc', required: true }, url: 'https://api.bscscan.com/api' },
      browserUrl: 'https://bscscan.com/',
    },
    id: '56',
    name: 'BNB Smart Chain',
    providers: [
      { alias: 'default', rpcUrl: 'https://bsc-dataseed1.binance.org/' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'BNB',
    testnet: false,
  },
  {
    alias: 'cronos-testnet',
    blockTimeMs: 2605,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://cronos.org/explorer/testnet3/api' },
      browserUrl: 'https://cronos.org/explorer/testnet3/',
    },
    id: '338',
    name: 'Cronos testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://evm-t3.cronos.org' }],
    symbol: 'CRO',
    testnet: true,
  },
  {
    alias: 'ethereum-holesky-testnet',
    blockTimeMs: 12973,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'holesky', required: true }, url: 'https://api-holesky.etherscan.io/api' },
      browserUrl: 'https://holesky.etherscan.io/',
    },
    id: '17000',
    name: 'Ethereum Holesky testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://ethereum-holesky-rpc.publicnode.com' }],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'ethereum-sepolia-testnet',
    blockTimeMs: 12679,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'sepolia', required: true }, url: 'https://api-sepolia.etherscan.io/api' },
      browserUrl: 'https://sepolia.etherscan.io/',
    },
    id: '11155111',
    name: 'Ethereum Sepolia testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://sepolia.gateway.tenderly.co' },
      { alias: 'publicnode', rpcUrl: 'https://ethereum-sepolia-rpc.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'ethereum',
    blockTimeMs: 12129,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'mainnet', required: true }, url: 'https://api.etherscan.io/api' },
      browserUrl: 'https://etherscan.io/',
    },
    id: '1',
    name: 'Ethereum',
    providers: [
      { alias: 'default', rpcUrl: 'https://cloudflare-eth.com' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'fantom-testnet',
    blockTimeMs: 4590,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'ftmTestnet', required: true }, url: 'https://api-testnet.ftmscan.com/api' },
      browserUrl: 'https://testnet.ftmscan.com/',
    },
    id: '4002',
    name: 'Fantom testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.testnet.fantom.network' },
      { alias: 'publicnode', rpcUrl: 'https://fantom-testnet-rpc.publicnode.com' },
    ],
    symbol: 'FTM',
    testnet: true,
  },
  {
    alias: 'fantom',
    blockTimeMs: 1361,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'opera', required: true }, url: 'https://api.ftmscan.com/api' },
      browserUrl: 'https://ftmscan.com/',
    },
    id: '250',
    name: 'Fantom',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpcapi.fantom.network/' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'FTM',
    testnet: false,
  },
  {
    alias: 'fraxtal-holesky-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://api-holesky.fraxscan.com/api/' },
      browserUrl: 'https://holesky.fraxscan.com/',
    },
    id: '2522',
    name: 'Fraxtal Holesky testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc.testnet.frax.com' }],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'fraxtal',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api.fraxscan.com/api/' },
      browserUrl: 'https://fraxscan.com/',
    },
    id: '252',
    name: 'Fraxtal',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.frax.com' },
      { alias: 'tenderly', homepageUrl: 'https://tenderly.co/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'gnosis-testnet',
    blockTimeMs: 5008,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'chiado', required: false },
        url: 'https://gnosis-chiado.blockscout.com/api',
      },
      browserUrl: 'https://gnosis-chiado.blockscout.com/',
    },
    id: '10200',
    name: 'Gnosis Chain testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.chiadochain.net' },
      { alias: 'publicnode', rpcUrl: 'https://gnosis-chiado-rpc.publicnode.com' },
    ],
    symbol: 'xDAI',
    testnet: true,
  },
  {
    alias: 'gnosis',
    blockTimeMs: 5227,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'gnosis', required: true }, url: 'https://api.gnosisscan.io/api' },
      browserUrl: 'https://gnosisscan.io/',
    },
    id: '100',
    name: 'Gnosis Chain',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.gnosischain.com' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'xDAI',
    testnet: false,
  },
  {
    alias: 'godwoken-testnet',
    blockTimeMs: 8058,
    decimals: 18,
    explorer: { browserUrl: 'https://v1.testnet.gwscan.com/' },
    id: '71401',
    name: 'Godwoken testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://v1.testnet.godwoken.io/rpc' }],
    symbol: 'pCKB',
    testnet: true,
  },
  {
    alias: 'godwoken',
    blockTimeMs: 36112,
    decimals: 18,
    explorer: { browserUrl: 'https://v1.gwscan.com/' },
    id: '71402',
    name: 'Godwoken',
    providers: [{ alias: 'default', rpcUrl: 'https://v1.mainnet.godwoken.io/rpc' }],
    symbol: 'pCKB',
    testnet: false,
  },
  {
    alias: 'kava-testnet',
    blockTimeMs: 5194,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://testnet.kavascan.com/api' },
      browserUrl: 'https://testnet.kavascan.com/',
    },
    id: '2221',
    name: 'Kava testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://evm.testnet.kava.io/' },
      {
        alias: 'drpc-freemium',
        rpcUrl: 'https://lb.drpc.org/ogrpc?network=kava-testnet&dkey=AiPHJac9aUX2s7ELd131NuwSeHqkUW8R7oQiFnomaLKw',
      },
    ],
    symbol: 'KAVA',
    testnet: true,
  },
  {
    alias: 'kava',
    blockTimeMs: 6213,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://kavascan.com/api' },
      browserUrl: 'https://kavascan.com/',
    },
    id: '2222',
    name: 'Kava',
    providers: [
      { alias: 'default', rpcUrl: 'https://evm.kava.io/' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
      { alias: 'nodies', homepageUrl: 'https://nodies.app/' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'KAVA',
    testnet: false,
  },
  {
    alias: 'lightlink',
    blockTimeMs: 503,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://phoenix.lightlink.io/api' },
      browserUrl: 'https://phoenix.lightlink.io/',
    },
    id: '1890',
    name: 'LightLink',
    providers: [{ alias: 'default', rpcUrl: 'https://replicator.phoenix.lightlink.io/rpc/v1' }],
    skipProviderCheck: true,
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'linea-sepolia-testnet',
    blockTimeMs: 17936,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-sepolia.lineascan.build/api/' },
      browserUrl: 'https://sepolia.lineascan.build/',
    },
    id: '59141',
    name: 'Linea Sepolia testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc.sepolia.linea.build' }],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'linea',
    blockTimeMs: 4003,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api.lineascan.build/api' },
      browserUrl: 'https://lineascan.build/',
    },
    id: '59144',
    name: 'Linea',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.linea.build' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'mantle-sepolia-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer.sepolia.mantle.xyz/api' },
      browserUrl: 'https://explorer.sepolia.mantle.xyz/',
    },
    id: '5003',
    name: 'Mantle Sepolia testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.sepolia.mantle.xyz' },
      {
        alias: 'drpc-freemium',
        rpcUrl: 'https://lb.drpc.org/ogrpc?network=mantle-sepolia&dkey=AiPHJac9aUX2s7ELd131NuwSeHqkUW8R7oQiFnomaLKw',
      },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'MNT',
    testnet: true,
  },
  {
    alias: 'mantle',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer.mantle.xyz/api' },
      browserUrl: 'https://explorer.mantle.xyz/',
    },
    id: '5000',
    name: 'Mantle',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.mantle.xyz' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'MNT',
    testnet: false,
  },
  {
    alias: 'merlin-testnet',
    blockTimeMs: 3154,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://testnet-scan.merlinchain.io/api' },
      browserUrl: 'https://testnet-scan.merlinchain.io/',
    },
    id: '686868',
    name: 'Merlin testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://testnet-rpc.merlinchain.io' }],
    symbol: 'BTC',
    testnet: true,
  },
  {
    alias: 'merlin',
    blockTimeMs: 1033,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://scan.merlinchain.io/api' },
      browserUrl: 'https://scan.merlinchain.io/',
    },
    id: '4200',
    name: 'Merlin',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc.merlinchain.io' }],
    symbol: 'BTC',
    testnet: false,
  },
  {
    alias: 'metis-sepolia-testnet',
    blockTimeMs: 2951,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://sepolia-explorer-api.metisdevops.link/api' },
      browserUrl: 'https://sepolia-explorer.metisdevops.link/',
    },
    id: '59902',
    name: 'Metis Sepolia testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://sepolia.metisdevops.link' }],
    skipProviderCheck: false,
    symbol: 'tMetis',
    testnet: true,
  },
  {
    alias: 'metis',
    blockTimeMs: 2149,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://andromeda-explorer.metis.io/api' },
      browserUrl: 'https://andromeda-explorer.metis.io/',
    },
    id: '1088',
    name: 'Metis',
    providers: [{ alias: 'default', rpcUrl: 'https://andromeda.metis.io/?owner=1088' }],
    symbol: 'METIS',
    testnet: false,
  },
  {
    alias: 'milkomeda-c1-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api' },
      browserUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/',
    },
    id: '200101',
    name: 'Milkomeda C1 testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc-devnet-cardano-evm.c1.milkomeda.com' }],
    symbol: 'ADA',
    testnet: true,
  },
  {
    alias: 'milkomeda-c1',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api' },
      browserUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/',
    },
    id: '2001',
    name: 'Milkomeda C1',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com' }],
    symbol: 'ADA',
    testnet: false,
  },
  {
    alias: 'mode-sepolia-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://sepolia.explorer.mode.network/api/' },
      browserUrl: 'https://sepolia.explorer.mode.network/',
    },
    id: '919',
    name: 'Mode Sepolia testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://sepolia.mode.network' }],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'mode',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer.mode.network/api/' },
      browserUrl: 'https://explorer.mode.network/',
    },
    id: '34443',
    name: 'Mode',
    providers: [
      { alias: 'default', rpcUrl: 'https://mainnet.mode.network' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'moonbeam-testnet',
    blockTimeMs: 8448,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'moonbaseAlpha', required: true },
        url: 'https://api-moonbase.moonscan.io/api',
      },
      browserUrl: 'https://moonbase.moonscan.io/',
    },
    id: '1287',
    name: 'Moonbeam testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.api.moonbase.moonbeam.network' },
      {
        alias: 'drpc-freemium',
        rpcUrl: 'https://lb.drpc.org/ogrpc?network=moonbase-alpha&dkey=AiPHJac9aUX2s7ELd131NuwSeHqkUW8R7oQiFnomaLKw',
      },
    ],
    symbol: 'GLMR',
    testnet: true,
  },
  {
    alias: 'moonbeam',
    blockTimeMs: 12230,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'moonbeam', required: true }, url: 'https://api-moonbeam.moonscan.io/api' },
      browserUrl: 'https://moonscan.io/',
    },
    id: '1284',
    name: 'Moonbeam',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.api.moonbeam.network' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'GLMR',
    testnet: false,
  },
  {
    alias: 'moonriver',
    blockTimeMs: 12983,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'moonriver', required: true },
        url: 'https://api-moonriver.moonscan.io/api',
      },
      browserUrl: 'https://moonriver.moonscan.io/',
    },
    id: '1285',
    name: 'Moonriver',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.api.moonriver.moonbeam.network' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'MOVR',
    testnet: false,
  },
  {
    alias: 'oev-network-sepolia-testnet',
    blockTimeMs: 1686780,
    decimals: 18,
    explorer: {
      api: {
        key: { required: false },
        url: 'https://oev-network-sepolia-testnet-agg-blockscout.eu-north-2.gateway.fm/api/',
      },
      browserUrl: 'https://oev-network-sepolia-testnet-agg-blockscout.eu-north-2.gateway.fm/',
    },
    id: '879490799',
    name: 'OEV Network Sepolia testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://oev-network-sepolia-testnet-agg-rpc.eu-north-2.gateway.fm' }],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'opbnb-testnet',
    blockTimeMs: 1000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-opbnb-testnet.bscscan.com/api' },
      browserUrl: 'https://opbnb-testnet.bscscan.com/',
    },
    id: '5611',
    name: 'opBNB testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://opbnb-testnet-rpc.bnbchain.org/' }],
    symbol: 'BNB',
    testnet: true,
  },
  {
    alias: 'opbnb',
    blockTimeMs: 1000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-opbnb.bscscan.com/api' },
      browserUrl: 'https://opbnb.bscscan.com/',
    },
    id: '204',
    name: 'opBNB',
    providers: [{ alias: 'default', rpcUrl: 'https://opbnb-mainnet-rpc.bnbchain.org' }],
    symbol: 'BNB',
    testnet: false,
  },
  {
    alias: 'optimism-sepolia-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-sepolia-optimism.etherscan.io/api' },
      browserUrl: 'https://sepolia-optimism.etherscan.io/',
    },
    id: '11155420',
    name: 'Optimism Sepolia testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://sepolia.optimism.io' },
      { alias: 'publicnode', rpcUrl: 'https://optimism-sepolia-rpc.publicnode.com' },
    ],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'optimism',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'optimisticEthereum', required: true },
        url: 'https://api-optimistic.etherscan.io/api',
      },
      browserUrl: 'https://optimistic.etherscan.io/',
    },
    id: '10',
    name: 'Optimism',
    providers: [
      { alias: 'default', rpcUrl: 'https://mainnet.optimism.io' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'polygon-zkevm-sepolia-testnet',
    blockTimeMs: 3005,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-cardona-zkevm.polygonscan.com/api' },
      browserUrl: 'https://cardona-zkevm.polygonscan.com/',
    },
    id: '2442',
    name: 'Polygon zkEVM Sepolia testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc.cardona.zkevm-rpc.com' }],
    skipProviderCheck: false,
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'polygon-zkevm',
    blockTimeMs: 3171,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-zkevm.polygonscan.com/api' },
      browserUrl: 'https://zkevm.polygonscan.com/',
    },
    id: '1101',
    name: 'Polygon zkEVM',
    providers: [
      { alias: 'default', rpcUrl: 'https://zkevm-rpc.com' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'polygon',
    blockTimeMs: 2327,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'polygon', required: true }, url: 'https://api.polygonscan.com/api' },
      browserUrl: 'https://polygonscan.com/',
    },
    id: '137',
    name: 'Polygon',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc-mainnet.maticvigil.com' },
      { alias: 'blastapi', homepageUrl: 'https://blastapi.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'MATIC',
    testnet: false,
  },
  {
    alias: 'rsk-testnet',
    blockTimeMs: 25184,
    decimals: 18,
    explorer: { browserUrl: 'https://explorer.testnet.rsk.co/' },
    id: '31',
    name: 'Rootstock testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://public-node.testnet.rsk.co' }],
    symbol: 'RBTC',
    testnet: true,
  },
  {
    alias: 'rsk',
    blockTimeMs: 29541,
    decimals: 18,
    explorer: { browserUrl: 'https://explorer.rsk.co/' },
    id: '30',
    name: 'Rootstock',
    providers: [
      { alias: 'default', rpcUrl: 'https://public-node.rsk.co' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'RBTC',
    testnet: false,
  },
  {
    alias: 'sx-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer.toronto.sx.technology/api' },
      browserUrl: 'https://explorer.toronto.sx.technology/',
    },
    id: '647',
    name: 'SX Network testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc.toronto.sx.technology' }],
    symbol: 'SX',
    testnet: true,
  },
  {
    alias: 'sx',
    blockTimeMs: 2008,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer.sx.technology/api' },
      browserUrl: 'https://explorer.sx.technology/',
    },
    id: '416',
    name: 'SX Network',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc.sx.technology' }],
    symbol: 'SX',
    testnet: false,
  },
  {
    alias: 'x-layer-sepolia-testnet',
    blockTimeMs: 2435,
    decimals: 18,
    explorer: { browserUrl: 'https://www.okx.com/explorer/xlayer-test' },
    id: '195',
    name: 'X Layer Sepolia testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://testrpc.xlayer.tech/' },
      { alias: 'okx', rpcUrl: 'https://xlayertestrpc.okx.com/' },
    ],
    symbol: 'OKB',
    testnet: true,
  },
  {
    alias: 'x-layer',
    blockTimeMs: 2999,
    decimals: 18,
    explorer: { browserUrl: 'https://www.okx.com/explorer/xlayer' },
    id: '196',
    name: 'X Layer',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.xlayer.tech/' },
      { alias: 'okx', rpcUrl: 'https://xlayerrpc.okx.com/' },
    ],
    symbol: 'OKB',
    testnet: false,
  },
  {
    alias: 'zircuit-sepolia-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://explorer.zircuit.com/api/contractVerifyHardhat' },
      browserUrl: 'https://explorer.zircuit.com',
    },
    id: '48899',
    name: 'Zircuit Sepolia testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://zircuit1.p2pify.com/' }],
    symbol: 'ETH',
    testnet: true,
  },
  {
    alias: 'zksync',
    blockTimeMs: 1055,
    decimals: 18,
    explorer: { browserUrl: 'https://explorer.zksync.io/' },
    hardhatConfigOverrides: {
      networks: {
        ethNetwork: 'ethereum',
        verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification',
        zksync: true,
      },
    },
    id: '324',
    name: 'zkSync',
    providers: [{ alias: 'default', rpcUrl: 'https://mainnet.era.zksync.io' }],
    symbol: 'ETH',
    testnet: false,
  },
];
