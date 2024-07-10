import { BackArrow } from 'src/components/_common/icons/backArrow.tsx';
import { SwitchTheme } from 'src/components/switchTheme/switchTheme.tsx';
import { Link } from 'react-router-dom';
import { links } from 'src/components/menu/menuDisplay.tsx';

type MenuProps = {
  clickOnMenu: () => void;
};

export const Menu = ({ clickOnMenu }: MenuProps) => {
  return (
    <div className="header-wrapper">
      <button className="header-buttons menu-close-button" onClick={clickOnMenu}>
        <BackArrow />
      </button>
      <SwitchTheme />
      <div className="menu-modal">
        <div className="menu-content">
          <ul className="menu-page">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="menu-links">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
