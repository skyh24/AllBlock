import { Account, RpcProvider } from "starknet";

// https://starknet-mainnet.infura.io/v3/d1d349ac736b49548a1de3e41b38395d

const provider = new RpcProvider({ nodeUrl: 'https://starknet-mainnet.infura.io/v3/d1d349ac736b49548a1de3e41b38395d' });

// const block = await provider.getBlockHashAndNumber();

// export default `block: ${block.block_number}`;

const privateKey = "0xe3e70682c2094cac629f6fbed82c07cd";
const accountAddress = "0x03df510191daa52123fc8838c14e9536c13823e6cf92f372a3b1d2fbc6faf743";

const account = new Account(provider, accountAddress, privateKey);

const address = account.address

const nonce = await account.getNonce();

export default `address: ${address} ${nonce}`;