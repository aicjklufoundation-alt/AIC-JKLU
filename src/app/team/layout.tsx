import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | AIC-JKLU - Atal Incubation Centre',
  description:
    'Meet the board of directors, leadership, and core team driving innovation and incubation at AIC-JKLU.',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

