import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const useGlobalState = () => {
    const state = useSelector((state: RootState) => state);
    return { ...state }
}

export default useGlobalState;