import { EOSRoutes } from '@/core/enums/globalRoutes';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface IMenuItem {
  name: string;
  icon: string;
  route: string;
}

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

const HeaderNav: React.FC = () => {
  return (
    <Navbar
      bg="primary"
      sticky="top"
      expand="lg">
      <Container>
        <Navbar.Brand
          className="d-flex align-items-center"
          href="/"
          as={Link}>
          <Image
            className="d-inline-block align-text-top me-2"
            src="/images/logos/white-logo-256.png"
            alt="Infospectrum Logo"
            width={55}
            height={55}
          />
          <span className="text-white fs-4 p-0 m-0">Infospectrum EOS</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-4 me-auto">
            {mainMenuItems.map(item => (
              <Nav.Link
                key={item.route}
                href={item.route}
                className="text-white cursor-pointer me-4"
                as={Link}>
                <span>
                  <i className={`fa me-1 ${item.icon}`}></i>
                  {item.name}
                </span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
