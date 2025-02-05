import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/configureStore';

const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;
