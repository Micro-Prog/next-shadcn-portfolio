"use client";

type ThemeProviderTypes = {
    children: React.ReactNode,
    attribute: string,
    defaultTheme: string,
}


import { ThemeProvider } from "next-themes";

export function NextThemeProvider({ children, ...props }: ThemeProviderTypes) {
  return (
      <ThemeProvider attribute={props.attribute} defaultTheme={props.defaultTheme}>
        {children}
      </ThemeProvider>
  )
}



