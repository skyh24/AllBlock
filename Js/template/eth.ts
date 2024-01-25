// 1. Import modules.
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

// 2. Set up your client with desired chain & transport.
const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const balance = await client.getBalance({ 
  address: '0x8af8c26D62954B5CA17B7EEA5231b0F9893aDD9f',
})


// 3. Consume an action!
const blockNumber = await client.getBlockNumber()

// import { createTestClient, http, publicActions, walletActions } from 'viem'
// import { foundry } from 'viem/chains'


// const client = createTestClient({
//   chain: foundry,
//   mode: 'anvil',
//   transport: http(), 
// })
//   .extend(publicActions)
//   .extend(walletActions)

// const blockNumber = await client.getBlockNumber() // Public Action


export default `balance: ${balance}`;