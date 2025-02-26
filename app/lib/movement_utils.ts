import { Ed25519PrivateKey, Aptos, AptosConfig, Network, NetworkToNetworkName } from "@aptos-labs/ts-sdk";
import dotenv from "dotenv";

// const MOVEMENT_NETWORK: Network = NetworkToNetworkName[Network.CUSTOM];
const config = new AptosConfig({
    network: Network.CUSTOM,
    fullnode: 'https://aptos.testnet.porto.movementlabs.xyz/v1',
    faucet: 'https://fund.testnet.porto.movementlabs.xyz/',
});

const movement = new Aptos(config);

dotenv.config();
const OWNER_PRIVATE_KEY = process.env.OWNER_PRIVATE_KEY!;

const getSigner = async () => {
    const privateKey = new Ed25519PrivateKey(OWNER_PRIVATE_KEY);
    const signer = await movement.deriveAccountFromPrivateKey({privateKey});
    return signer
}

export {getSigner, movement}