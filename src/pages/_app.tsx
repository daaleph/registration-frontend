// frontend/src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { UserProvider } from '../contexts/User';
import '../styles/globals.css';
import Navbar from '@/components/common/Navbar';

const links = [
  { href: '/we', label: 'Nosotros' },
  { href: '/login', label: 'Entrar' },
  { href: '/register', label: 'Registro' },
  { href: 'https://linktr.ee/AlephSpace', label: 'Nets' }
];


function App({ Component, pageProps }: AppProps) {
  
  return (
    <UserProvider>
      <Navbar links={links} />
      <Component {...pageProps} />
    </UserProvider>
  );

}

export default App;