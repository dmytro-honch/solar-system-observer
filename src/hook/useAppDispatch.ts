import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/configureStore.ts';

const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;
