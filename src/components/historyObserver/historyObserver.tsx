import { useParams } from 'react-router-dom';
import './historyObserver.css';
import { DropdownList } from 'src/components/dropdown-options/dropdown-options';

export const HistoryObserver = () => {
  const { data } = useParams();
  return (
    <div className="history-observer__wrapper" data-testid="history-observer-wrapper">
      <div className="history-observer" data-testid="history-observer">
        {data && JSON.stringify(data)}
        <DropdownList />
      </div>
    </div>
  );
};
