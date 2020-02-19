import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { InjectedConnector } from './Injected'
import { WalletConnectConnector } from './Walletconnect'

const POLLING_INTERVAL = 8000
const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/a28f35f70591419cbf422c5e58cd047d',
  4: 'https://rinkeby.infura.io/v3/a28f35f70591419cbf422c5e58cd047d',
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 4],
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

export const fortmatic = new FortmaticConnector({
  apiKey: 'pk_live_6BAFDA50B28520A4',
  chainId: 1,
})

export const torus = new TorusConnector({
  chainId: 1,
})

export const portis = new PortisConnector({
  dAppId: '2a45d6e4-6dfd-45bc-99d1-363bc8df1020',
  networks: [1],
})
