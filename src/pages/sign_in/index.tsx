import React from 'react';
import { useDispatch } from 'react-redux';
import useTranslation from '../../hooks/useTranslation';
import { setLocale } from '../../redux/actions/apps';

const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const toggleLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLocale(e.target.value))
    }
    return (
        <div>
            <p>{t.general.readMore}</p>
            <select onChange={toggleLang}>
                <option value={'en'}>Trocar para ingles</option>
                <option value={'es'}>Trocar para espanhol</option>
                <option value={'pt-BR'}>Trocar para portugues</option>
                <option value={'pt'}>Trocar para portugues portugal</option>
            </select>
        </div>
    )
}

export default Login;