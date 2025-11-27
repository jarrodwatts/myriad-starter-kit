"use client";

/**
 * Abstract Global Wallet Provider
 *
 * This provider wraps the app with all necessary wallet infrastructure:
 * - WagmiProvider: React hooks for Ethereum interactions
 * - QueryClientProvider: TanStack Query for data fetching and caching
 * - AbstractWalletProvider: Abstract's Global Wallet for seamless onboarding
 *
 */

import { AbstractWalletProvider } from "@abstract-foundation/agw-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { WagmiProvider } from "wagmi";

import { chain } from "@/config/chain";
import { wagmiConfig } from "@/config/wagmi";

export function NextAbstractWalletProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Create a new QueryClient instance for each session
  // This prevents data leakage between different users/sessions
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AbstractWalletProvider chain={chain}>{children}</AbstractWalletProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

