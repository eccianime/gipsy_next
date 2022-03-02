import Image from 'next/image';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GipsyInstanceType } from '../../global';
import { setLocale } from '../../redux/actions/apps';
import { RootState } from '../../redux/reducers';
// import GipsyApi from 'apis/Gipsy';
import styles from './LanguageSelect.module.css';

const LanguageSelect: FC = () => {
  const flagIconRef = React.useRef<HTMLDivElement>(null);
  const [showFlags, setShowFlags] = useState<boolean>(false);
  const { locale } = useSelector((state: RootState) => state.app);

  // const changeLanguage = (language: string) => {
  //   localStorage.setItem('language', language);
  //   i18n.changeLanguage(language);
  //   setShowFlags(false);
  //   GipsyApi.defaults.params = { ...GipsyApi.defaults.params, locale: language };

  //   // window.intercomSettings.language_override = language;
  //   // window.Intercom('shutdown');
  //   // window.Intercom('boot', window.intercomSettings);

  //   // moment.locale(language);
  // };

  // const handleOutsideClick = (e: MouseEvent) => {
  //   if (flagIconRef.current?.contains(e.target as Node)) return;
  //   setShowFlags(false);
  // };

  // React.useEffect(() => {
  //   document.addEventListener('click', handleOutsideClick);
  //   return () => document.removeEventListener('click', handleOutsideClick);
  // });
  const dispatch = useDispatch();
  const changeLanguage = (lang: string) => dispatch(setLocale(lang))

  return (
    <div className={styles.select}>
      <div onClick={() => setShowFlags(!showFlags)} className={styles.currentFlag} ref={flagIconRef}>
        <Image height={47} width={47} src={`/images/flags/${locale}.svg`} />
      </div>
      {showFlags && (
        <div className={styles.flags}>
          {process.env.REACT_APP_INSTANCE_TYPE !== GipsyInstanceType.BRAZIL && locale !== 'en' && (
            <div onClick={() => changeLanguage('en')}>
              <Image height={20} width={25} src={`/images/flags/en.svg`} />
            </div>
          )}
          {process.env.REACT_APP_INSTANCE_TYPE !== GipsyInstanceType.BRAZIL && locale !== 'pt' && (
            <div onClick={() => changeLanguage('pt')}>
              <Image height={20} width={25} src={`/images/flags/pt.svg`} />
            </div>
          )}
          {locale !== 'pt-BR' && (
            <div onClick={() => changeLanguage('pt-BR')}>
              <Image height={20} width={25} src={`/images/flags/pt-BR.svg`} />
            </div>
          )}
          {process.env.REACT_APP_INSTANCE_TYPE !== GipsyInstanceType.BRAZIL && locale !== 'es' && (
            <div onClick={() => changeLanguage('es')}>
              <Image height={20} width={25} src={`/images/flags/es.svg`} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
