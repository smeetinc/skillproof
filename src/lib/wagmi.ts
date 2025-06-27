// lib/wagmi.ts
import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask, walletConnect } from "wagmi/connectors";

// Get your project ID from https://cloud.walletconnect.com
const projectId = "423747587dce2dbe75cfe4e2df6da07f";

export const config = createConfig({
	chains: [mainnet, sepolia],
	connectors: [
		injected(),
		metaMask(),
		walletConnect({
			projectId,
			metadata: {
				name: "SkillProof",
				description: "Blockchain-based skill verification platform",
				url: "https://skillproof.com",
				icons: ["https://skillproof.com/logo.svg"],
			},
		}),
	],
	transports: {
		[mainnet.id]: http(),
		[sepolia.id]: http(),
	},
});

declare module "wagmi" {
	interface Register {
		config: typeof config;
	}
}
