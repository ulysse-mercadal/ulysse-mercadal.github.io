import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import './global.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <RootProvider
          search={{
            enabled: true,
            options: {
              type: 'static',  // \u2705 Recherche statique c�t� client
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
