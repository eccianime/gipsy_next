import React, { FC } from 'react';
import { GipsyInstanceType } from '../../global';

import styles from './Header.module.css';

import LanguageSelect from './LanguageSelect';
import UserMenu from './UserMenu';
import useTranslation from '../../hooks/useTranslation';
import Link from 'next/link';
import { AppViews } from '../../endpoints';
import Image from 'next/image';

interface Props {
  handleShowSidebar: () => void;
}

const Header: FC<Props> = ({ handleShowSidebar }) => {
  const { t } = useTranslation();
  console.log(process.env.NEXT_PUBLIC_REACT_APP_INSTANCE_TYPE);
  return (
    <div className="container">
      <div className={styles.mainMenu}>
        <div className={styles.leftSection}>
          <button onClick={handleShowSidebar} type="button">
            <span />
            <span />
            <span />
          </button>
        </div>

        <span className={styles.centerSection}>
          <Link href={AppViews.HOME}>
            <>
              {process.env.NEXT_PUBLIC_REACT_APP_INSTANCE_TYPE === GipsyInstanceType.BRAZIL && (
                <Image src={'/images/logo/gipsyy_logo.png'} alt="Gipsyy Logo" height={47} width={126} className={styles.logo} />
              )}
              {process.env.NEXT_PUBLIC_REACT_APP_INSTANCE_TYPE === GipsyInstanceType.PORTUGAL && (
                <Image src={'/images/logo/gipsyy_royal_logo.png'} alt="Gipsyy Logo" height={47} width={100} className={styles.logo} />
              )}
            </>
          </Link>
        </span>

        <span className={styles.rightSection}>
          <LanguageSelect />
          <UserMenu />
          <span className={styles.help}>
            <Link href={AppViews.HELP}>{t.views.header.help}</Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
