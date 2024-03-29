import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import { UserProvider } from './components/providers/userProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function fetchUser() {
    try {
      const response = await fetch(`http://localhost:3000/user`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error(`Error fetching company data for user`, error);
    }
  }
  const userData = await fetchUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider userData={userData}>
          <Navbar />
          <div style={{ display: ' flex' }}>
            <Sidebar />
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
