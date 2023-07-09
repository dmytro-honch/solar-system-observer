import './pageHeader.css';
import { Link } from 'react-router-dom';
import { MENU_PATH } from 'src/features/Router/path';

type PageHeaderChild = {
    children: React.ReactNode;
  };

export const PageHeader = ({ children }: PageHeaderChild) => {
  return (
    <header>
        <button>
            <Link to={MENU_PATH}>{children}</Link>
        </button>
    </header>
  );
};

