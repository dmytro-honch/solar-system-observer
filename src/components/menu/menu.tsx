import { CloseIcon } from 'src/components/_common/icons/closeIcon';
import { SwitchTheme } from 'src/components/switchTheme/switchTheme';
import { Link } from 'react-router-dom';
import { links } from 'src/components/menu/portal';
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
