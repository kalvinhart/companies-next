import { EOSRoutes } from '@/enums/globalRoutes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface IMenuItem {
  name: string;
  icon: string;
  route: string;
}

const Header: React.FC = () => {
  const mainMenuItems: IMenuItem[] = [
    {
      name: 'Home',
      icon: 'fa-house',
      route: EOSRoutes.HOME,
    },
    {
      name: 'Sectors',
      icon: 'fa-list',
      route: EOSRoutes.SECTORS,
    },
    {
      name: 'Companies',
      icon: 'fa-list-numeric',
      route: EOSRoutes.COMPANIES,
    },
    {
      name: 'Ranking',
      icon: 'fa-signal-perfect',
      route: EOSRoutes.RANKING,
    },
  ];

  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setShowMobileNav(value => !value);
  };

  return (
    <header className="navbar navbar-expand-lg bg-primary sticky-top">
      <div className="container">
        <Image
          className="d-inline-block align-text-top me-2"
          src="/public/images/logos/white-logo-256.png"
          alt="Infospectrum Logo"
          width={55}
          height={55}
        />

        <h1 className="navbar-brand text-white font-weight-bold p-0 m-0">Infospectrum EOS</h1>

        <button
          className="navbar-toggler p-0"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMobileNav}
          aria-expanded={!showMobileNav}
          aria-controls="collapseBasic">
          <i className={`fa fa-xl text-white ${showMobileNav ? 'fa-x' : 'fa-bars'}`}></i>
        </button>

        <nav
          className="ms-lg-3 collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {mainMenuItems.map(item => (
              <li
                key={item.route}
                className="nav-item mx-3">
                <Link
                  href={item.route}
                  className="nav-link text-white cursor-pointer"
                  onClick={() => setShowMobileNav(false)}>
                  <span>
                    <i className={`fa me-1 ${item.icon}`}></i>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
