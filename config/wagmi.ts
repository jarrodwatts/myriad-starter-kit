import { createConfig, http } from "wagmi";
import { abstract, abstractTestnet } from "viem/chains";
import { chain } from "./chain";
import { abstractWalletConnector } from "@abstract-foundation/agw-react/connectors";

export const wagmiConfig = createConfig({
  chains: [chain],
  connectors: [abstractWalletConnector()],
  transports: {
    [abstract.id]: http(),
    [abstractTestnet.id]: http(),
  },
  ssr: true,
});

