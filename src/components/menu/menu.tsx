import { CloseIcon } from 'src/components/_common/icons/closeIcon';
import { SwitchTheme } from 'src/components/switchTheme/switchTheme';
import { Link } from 'react-router-dom';
import { links } from 'src/components/menu/portal';
import { MenuProps } from 'src/types';

export const Menu = ({ clickOnMenu }: MenuProps) => {
  return (
    <div>
      <button
        className="hover:text-[var(--primary-text-color)] absolute top-5 left-5 md:top-10 md:left-10 cursor-pointer z-[1001] p-[6px] rounded-full leading-[1] text-icon-font-size bg-[var(--primary-element-color)]"
        onClick={clickOnMenu}
      >
        <CloseIcon data-testid="close-icon" />
      </button>
      <SwitchTheme />
      <div className="fixed inset-0 flex justify-center items-center z-[1000] bg-[var(--modal-background-color)]">
        <div className="relative p-5 rounded-[10px] max-w-full w-[400px]">
          <ul className="flex flex-col gap-[30px]">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-[var(--primary-text-color)] block py-2.5 bg-[var(--primary-element-color)] rounded-[30px] text-center transition-colors duration-300"
                >
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
