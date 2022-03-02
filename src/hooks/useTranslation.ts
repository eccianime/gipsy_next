import { useSelector } from 'react-redux';
import { getTranslations } from '../locales';
import { RootState } from '../redux/reducers';

const useTranslation = () => {
    const { locale } = useSelector((state: RootState) => state.app);
    const t = getTranslations(locale);
    return { t }
}

export default useTranslation;