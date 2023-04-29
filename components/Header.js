import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher'
import Logo from './Logo';

export default function Header() {
  return (
    <header className="pt-20 pb-12">
      <ThemeSwitcher />
      <Logo />
    </header>
  );
}
