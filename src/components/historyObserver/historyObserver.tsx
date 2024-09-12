import { useParams } from 'react-router-dom';

export const HistoryObserver = () => {
  const { data } = useParams();
  return (
    <div data-testid="history-observer-wrapper">
      <div className="block w-full h-screen" data-testid="history-observer">
        {data && JSON.stringify(data)}
      </div>
    </div>
  );
};
