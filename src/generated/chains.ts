// ===========================================================================
// DO NOT EDIT THIS FILE MANUALLY!
//
// The contents have been added automatically.
// See: scripts/generate-chains.ts for more information
// ===========================================================================

import { Chain } from '../types';

export const CHAINS: Chain[] = [
  {
    alias: 'arbitrum-goerli-testnet',
    blockTimeMs: 641,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'arbitrumGoerli', required: true },
        url: 'https://api-goerli.arbiscan.io/api',
      },
      browserUrl: 'https://testnet.arbiscan.io/',
    },
    id: '421613',
    name: 'Arbitrum testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://goerli-rollup.arbitrum.io/rpc' },
      { alias: 'publicnode', rpcUrl: 'https://arbitrum-goerli.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testETH',
    testnet: true,
  },
  {
    alias: 'arbitrum-nova',
    blockTimeMs: 862,
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
    alias: 'arbitrum',
    blockTimeMs: 265,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'arbitrumOne', required: true }, url: 'https://api.arbiscan.io/api' },
      browserUrl: 'https://arbiscan.io/',
    },
    id: '42161',
    name: 'Arbitrum One',
    providers: [
      { alias: 'default', rpcUrl: 'https://arb1.arbitrum.io/rpc' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'aurora-testnet',
    blockTimeMs: 988,
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
    symbol: 'testETH',
    testnet: true,
  },
  {
    alias: 'aurora',
    blockTimeMs: 1135,
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
    blockTimeMs: 2398,
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
      { alias: 'publicnode', rpcUrl: 'https://avalanche-fuji-c-chain.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testAVAX',
    testnet: true,
  },
  {
    alias: 'avalanche',
    blockTimeMs: 2036,
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
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'AVAX',
    testnet: false,
  },
  {
    alias: 'base-goerli-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://api-goerli.basescan.org/api' },
      browserUrl: 'https://goerli.basescan.org/',
    },
    id: '84531',
    name: 'Base Goerli testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://goerli.base.org' },
      { alias: 'publicnode', rpcUrl: 'https://base-goerli.publicnode.com' },
    ],
    symbol: 'testETH',
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
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'boba-bnb',
    blockTimeMs: 636,
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
    blockTimeMs: 86994,
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
    blockTimeMs: 3002,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'bscTestnet', required: true }, url: 'https://api-testnet.bscscan.com/api' },
      browserUrl: 'https://testnet.bscscan.com/',
    },
    id: '97',
    name: 'BNB Smart Chain testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://data-seed-prebsc-1-s3.binance.org:8545/' },
      { alias: 'publicnode', rpcUrl: 'https://bsc-testnet.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testBNB',
    testnet: true,
  },
  {
    alias: 'bsc',
    blockTimeMs: 3009,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'bsc', required: true }, url: 'https://api.bscscan.com/api' },
      browserUrl: 'https://bscscan.com/',
    },
    id: '56',
    name: 'BNB Smart Chain',
    providers: [
      { alias: 'default', rpcUrl: 'https://bsc-dataseed1.binance.org/' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'BNB',
    testnet: false,
  },
  {
    alias: 'cronos-testnet',
    blockTimeMs: 2446,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://cronos.org/explorer/testnet3/api' },
      browserUrl: 'https://cronos.org/explorer/testnet3/',
    },
    id: '338',
    name: 'Cronos testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://evm-t3.cronos.org' }],
    symbol: 'testCRO',
    testnet: true,
  },
  {
    alias: 'ethereum-goerli-testnet',
    blockTimeMs: 15140,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'goerli', required: true }, url: 'https://api-goerli.etherscan.io/api' },
      browserUrl: 'https://goerli.etherscan.io/',
    },
    id: '5',
    name: 'Ethereum Goerli testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.ankr.com/eth_goerli' },
      { alias: 'publicnode', rpcUrl: 'https://ethereum-goerli.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testETH',
    testnet: true,
  },
  {
    alias: 'ethereum-sepolia-testnet',
    blockTimeMs: 12982,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'sepolia', required: true }, url: 'https://api-sepolia.etherscan.io/api' },
      browserUrl: 'https://sepolia.etherscan.io/',
    },
    id: '11155111',
    name: 'Ethereum Sepolia testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc-sepolia.rockx.com' },
      { alias: 'publicnode', rpcUrl: 'https://ethereum-sepolia.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testETH',
    testnet: true,
  },
  {
    alias: 'ethereum',
    blockTimeMs: 12167,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'mainnet', required: true }, url: 'https://api.etherscan.io/api' },
      browserUrl: 'https://etherscan.io/',
    },
    id: '1',
    name: 'Ethereum',
    providers: [
      { alias: 'default', rpcUrl: 'https://eth.llamarpc.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'fantom-testnet',
    blockTimeMs: 1665,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'ftmTestnet', required: true }, url: 'https://api-testnet.ftmscan.com/api' },
      browserUrl: 'https://testnet.ftmscan.com/',
    },
    id: '4002',
    name: 'Fantom testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.testnet.fantom.network' },
      { alias: 'publicnode', rpcUrl: 'https://fantom-testnet.publicnode.com' },
    ],
    symbol: 'testFTM',
    testnet: true,
  },
  {
    alias: 'fantom',
    blockTimeMs: 1636,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'opera', required: true }, url: 'https://api.ftmscan.com/api' },
      browserUrl: 'https://ftmscan.com/',
    },
    id: '250',
    name: 'Fantom',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpcapi.fantom.network/' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'FTM',
    testnet: false,
  },
  {
    alias: 'gnosis-testnet',
    blockTimeMs: 5015,
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
      { alias: 'publicnode', rpcUrl: 'https://gnosis-chiado.publicnode.com' },
    ],
    symbol: 'testxDAI',
    testnet: true,
  },
  {
    alias: 'gnosis',
    blockTimeMs: 5244,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'gnosis', required: true }, url: 'https://api.gnosisscan.io/api' },
      browserUrl: 'https://gnosisscan.io/',
    },
    id: '100',
    name: 'Gnosis Chain',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.gnosischain.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'xDAI',
    testnet: false,
  },
  {
    alias: 'godwoken-testnet',
    blockTimeMs: 8127,
    decimals: 18,
    explorer: { browserUrl: 'https://v1.testnet.gwscan.com/' },
    id: '71401',
    name: 'Godwoken testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://v1.testnet.godwoken.io/rpc' }],
    symbol: 'testpCKB',
    testnet: true,
  },
  {
    alias: 'godwoken',
    blockTimeMs: 45041,
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
    blockTimeMs: 5201,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://testnet.kavascan.com/api' },
      browserUrl: 'https://testnet.kavascan.com/',
    },
    id: '2221',
    name: 'Kava testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://evm.testnet.kava.io/' }],
    symbol: 'testKAVA',
    testnet: true,
  },
  {
    alias: 'kava',
    blockTimeMs: 6318,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://kavascan.com/api' },
      browserUrl: 'https://kavascan.com/',
    },
    id: '2222',
    name: 'Kava',
    providers: [
      { alias: 'default', rpcUrl: 'https://evm.kava.io/' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'KAVA',
    testnet: false,
  },
  {
    alias: 'linea-goerli-testnet',
    blockTimeMs: 12099,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-testnet.lineascan.build/api' },
      browserUrl: 'https://goerli.lineascan.build/',
    },
    id: '59140',
    name: 'Linea Goerli testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.goerli.linea.build' },
      { alias: 'blockpi', rpcUrl: 'https://linea-goerli.blockpi.network/v1/rpc/public' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testETH',
    testnet: true,
  },
  {
    alias: 'linea',
    blockTimeMs: 12099,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api.lineascan.build/api' },
      browserUrl: 'https://lineascan.build/',
    },
    id: '59144',
    name: 'Linea',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.linea.build' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'mantle-goerli-testnet',
    blockTimeMs: 362,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer.testnet.mantle.xyz/api' },
      browserUrl: 'https://explorer.testnet.mantle.xyz/',
    },
    id: '5001',
    name: 'Mantle Goerli testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://rpc.testnet.mantle.xyz' }],
    symbol: 'testMNT',
    testnet: true,
  },
  {
    alias: 'mantle',
    blockTimeMs: 362,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://explorer.mantle.xyz/api' },
      browserUrl: 'https://explorer.mantle.xyz/',
    },
    id: '5000',
    name: 'Mantle',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.mantle.xyz' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'MNT',
    testnet: false,
  },
  {
    alias: 'metis-goerli-testnet',
    blockTimeMs: 5911,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://goerli.explorer.metisdevops.link/api' },
      browserUrl: 'https://goerli.explorer.metisdevops.link/',
    },
    id: '599',
    name: 'Metis testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://goerli.gateway.metisdevops.link' }],
    symbol: 'testMETIS',
    testnet: true,
  },
  {
    alias: 'metis',
    blockTimeMs: 2564,
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
    symbol: 'testmilkADA',
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
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'milkADA',
    testnet: false,
  },
  {
    alias: 'moonbeam-testnet',
    blockTimeMs: 13654,
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
    providers: [{ alias: 'default', rpcUrl: 'https://rpc.api.moonbase.moonbeam.network' }],
    symbol: 'testGLMR',
    testnet: true,
  },
  {
    alias: 'moonbeam',
    blockTimeMs: 12233,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'moonbeam', required: true }, url: 'https://api-moonbeam.moonscan.io/api' },
      browserUrl: 'https://moonscan.io/',
    },
    id: '1284',
    name: 'Moonbeam',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.api.moonbeam.network' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'GLMR',
    testnet: false,
  },
  {
    alias: 'moonriver',
    blockTimeMs: 12312,
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
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'MOVR',
    testnet: false,
  },
  {
    alias: 'optimism-goerli-testnet',
    blockTimeMs: 2000,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'optimisticGoerli', required: true },
        url: 'https://api-goerli-optimism.etherscan.io/api',
      },
      browserUrl: 'https://goerli-optimism.etherscan.io/',
    },
    id: '420',
    name: 'Optimism testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://goerli.optimism.io' },
      { alias: 'publicnode', rpcUrl: 'https://optimism-goerli.publicnode.com' },
    ],
    symbol: 'testETH',
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
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'polygon-testnet',
    blockTimeMs: 2576,
    decimals: 18,
    explorer: {
      api: {
        key: { hardhatEtherscanAlias: 'polygonMumbai', required: true },
        url: 'https://api-testnet.polygonscan.com/api',
      },
      browserUrl: 'https://mumbai.polygonscan.com/',
    },
    id: '80001',
    name: 'Polygon testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc-mumbai.maticvigil.com' },
      { alias: 'publicnode', rpcUrl: 'https://polygon-mumbai-bor.publicnode.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testMATIC',
    testnet: true,
  },
  {
    alias: 'polygon-zkevm-goerli-testnet',
    blockTimeMs: 6587,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-testnet-zkevm.polygonscan.com/api' },
      browserUrl: 'https://testnet-zkevm.polygonscan.com/',
    },
    id: '1442',
    name: 'Polygon zkEVM testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc.public.zkevm-test.net' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testETH',
    testnet: true,
  },
  {
    alias: 'polygon-zkevm',
    blockTimeMs: 1658,
    decimals: 18,
    explorer: {
      api: { key: { required: true }, url: 'https://api-zkevm.polygonscan.com/api' },
      browserUrl: 'https://zkevm.polygonscan.com/',
    },
    id: '1101',
    name: 'Polygon zkEVM',
    providers: [
      { alias: 'default', rpcUrl: 'https://zkevm-rpc.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
  {
    alias: 'polygon',
    blockTimeMs: 2210,
    decimals: 18,
    explorer: {
      api: { key: { hardhatEtherscanAlias: 'polygon', required: true }, url: 'https://api.polygonscan.com/api' },
      browserUrl: 'https://polygonscan.com/',
    },
    id: '137',
    name: 'Polygon',
    providers: [
      { alias: 'default', rpcUrl: 'https://rpc-mainnet.maticvigil.com' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'MATIC',
    testnet: false,
  },
  {
    alias: 'rsk-testnet',
    blockTimeMs: 26036,
    decimals: 18,
    explorer: { browserUrl: 'https://explorer.testnet.rsk.co/' },
    id: '31',
    name: 'Rootstock testnet',
    providers: [
      { alias: 'default', rpcUrl: 'https://public-node.testnet.rsk.co' },
      { alias: 'reblok', homepageUrl: 'https://reblok.io' },
    ],
    symbol: 'testRBTC',
    testnet: true,
  },
  {
    alias: 'rsk',
    blockTimeMs: 30946,
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
    alias: 'scroll-goerli-testnet',
    blockTimeMs: 3002,
    decimals: 18,
    explorer: {
      api: { key: { required: false }, url: 'https://blockscout.scroll.io/api' },
      browserUrl: 'https://blockscout.scroll.io/',
    },
    id: '534353',
    name: 'Scroll Goerli testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://alpha-rpc.scroll.io/l2' }],
    symbol: 'testETH',
    testnet: true,
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
    symbol: 'testSX',
    testnet: true,
  },
  {
    alias: 'sx',
    blockTimeMs: 2035,
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
    alias: 'zksync-goerli-testnet',
    blockTimeMs: 1069,
    decimals: 18,
    explorer: { browserUrl: 'https://goerli.explorer.zksync.io/' },
    hardhatConfigOverrides: {
      networks: {
        ethNetwork: 'ethereum-goerli-testnet',
        verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
        zksync: true,
      },
    },
    id: '280',
    name: 'zkSync testnet',
    providers: [{ alias: 'default', rpcUrl: 'https://testnet.era.zksync.dev' }],
    symbol: 'testETH',
    testnet: true,
  },
  {
    alias: 'zksync',
    blockTimeMs: 1020,
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
    providers: [
      { alias: 'default', rpcUrl: 'https://mainnet.era.zksync.io' },
      { alias: 'quicknode', homepageUrl: 'https://quicknode.com' },
      { alias: 'drpc', homepageUrl: 'https://drpc.org/' },
    ],
    symbol: 'ETH',
    testnet: false,
  },
];
