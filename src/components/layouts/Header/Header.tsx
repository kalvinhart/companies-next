import { EOSRoutes } from '@/enums/globalRoutes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.scss';

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
    <header className="bg-primary sticky-top">
      <nav className={`${styles.navbar} navbar-expand-lg`}>
        <div className="container">
          <Link
            href="/"
            className={`${styles['navbar-brand']}`}>
            <Image
              className="d-inline-block align-text-top me-2"
              src="/images/logos/white-logo-256.png"
              alt="Infospectrum Logo"
              width={55}
              height={55}
            />

            <span className="text-white font-weight-bold p-0 m-0">Infospectrum EOS</span>
          </Link>

          <button
            className={`${styles['navbar-toggler']} p-0`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            onClick={toggleMobileNav}
            aria-controls="navbarSupportedContent"
            aria-expanded={!showMobileNav}
            aria-label="Toggle navigation">
            <i className={`fa fa-xl text-white ${showMobileNav ? 'fa-x' : 'fa-bars'}`}></i>
          </button>

          <div
            className={`collapse ${styles['navbar-collapse']}`}
            id="navbarSupportedContent">
            <ul className={`${styles['navbar-nav']} me-auto mb-2 mb-lg-0`}>
              {mainMenuItems.map(item => (
                <li
                  key={item.route}
                  className="nav-item mx-3">
                  <Link
                    href={item.route}
                    className={`${styles['nav-link']} text-white cursor-pointer`}
                    onClick={() => setShowMobileNav(false)}>
                    <span>
                      <i className={`fa me-1 ${item.icon}`}></i>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
