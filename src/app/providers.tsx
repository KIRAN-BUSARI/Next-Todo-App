'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { RecoilRoot } from 'recoil';
import { ClerkProvider } from '@clerk/nextjs';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider>
        <RecoilRoot>{children}</RecoilRoot>
      </ClerkProvider >
    </ThemeProvider >
  );
};
