import { RpcProvider, Account, Contract, shortString }  from 'starknet';
import abi from './snrc-abi.json'

// 假设您有一个私钥
const privateKey = PRIVKEY;
const accountAddress = "0x03df510191daa52123fc8838c14e9536c13823e6cf92f372a3b1d2fbc6faf743";

const provider = new RpcProvider({ nodeUrl: 'https://starknet-mainnet.infura.io/v3/d1d349ac736b49548a1de3e41b38395d' });

// 使用私钥创建账户对象
const account = new Account(provider, accountAddress, privateKey);
const address = account.address;
console.log(`Account Address: ${address}`);

const contractAddress = "0x0600386e4cd85d7bb925892b61b14ff019d3dd8e31432f4b97c8ee2462e0375d"
const contract = new Contract(abi, contractAddress, account);
contract.connect(account)

let ins = `{"p":"snsc-20","op":"mint","tick":"stark","amt":"1000"}`

// const { suggestedMaxFee: estimatedFee1 } = await account.estimateInvokeFee({ contractAddress: contractAddress, entrypoint: "inscription", calldata: [splitted, address] });
const {transaction_hash: hash} = await contract.invoke("inscription", [ins, address])
console.log(hash)

export default `hash: ${hash}`;
