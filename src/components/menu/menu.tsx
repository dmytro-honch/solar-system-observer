import { CloseIcon } from 'src/components/_common/icons/closeIcon.tsx';
import { SwitchTheme } from 'src/components/switchTheme/switchTheme.tsx';
import { Link } from 'react-router-dom';
import { links } from 'src/components/menu/portal.tsx';
import { MenuProps } from 'src/types';

export const Menu = ({ clickOnMenu }: MenuProps) => {
  return (
    <div className="header-wrapper">
      <button className="header-buttons menu-close-button" onClick={clickOnMenu}>
        <CloseIcon data-testid="close-icon" />
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
