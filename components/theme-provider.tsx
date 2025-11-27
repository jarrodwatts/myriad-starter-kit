"use client";

/**
 * Theme Provider
 *
 * Provides dark/light mode theming using next-themes.
 * The theme is persisted in localStorage and respects system preferences.
 *
 */

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

