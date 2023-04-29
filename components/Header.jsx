import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo';

const Header = () => {
  return (
    <header className="pt-20 pb-12">
      <ThemeSwitcher />
      <Logo />
    </header>
  );
}

export default Header;
