import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

// import { logout } from 'store/actions/auth';
import styles from './UserMenu.module.css';
import Image from 'next/image';
import useTranslation from '../../hooks/useTranslation';
import { useRouter } from 'next/router';
import { AppViews } from '../../endpoints';
import { RootState } from '../../redux/reducers';
import useGlobalState from '../../hooks/useGlobalState';
import Link from 'next/link';

const UserMenu: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const userIconRef = React.useRef<HTMLDivElement>(null);

  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const { auth: { token }, users: { currentUser } } = useGlobalState();

  const handleOutsideClick = (e: MouseEvent) => {
    if (userIconRef.current?.contains(e.target as Node)) return;

    setShowMenu(false);
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  });

  const handleClickOnMenu = React.useCallback(() => {
    if (token) {
      setShowMenu((prevShowMenu) => !prevShowMenu);
    } else {
      router.push({
        pathname: AppViews.SIGN_IN,
        // search: router.location.search,
      });
    }
  }, [history, token]);

  const onLogout = async () => {
    try {
      // await dispatch(logout.request());
    } finally {
      router.push({
        pathname: AppViews.HOME,
        // search: router.location.search,
      });
    }
  };

  return (
    <div className={styles.menu}>
      <div className={cx(styles.user, { [styles.loggedUser]: token })} onClick={handleClickOnMenu} ref={userIconRef}>
        {token && currentUser ? (
          <span>{`${currentUser.firstName?.charAt(0)}${currentUser.lastName?.charAt(0)}`}</span>
        ) : (
          <Image height={20} width={20} src={'/images/svg/user.svg'} />
        )}
      </div>

      {token && showMenu && (
        <div className={styles.actions}>
          <Link href={`${AppViews.USER_BOOKINGS}`}>
            <div>
              <span className={styles.text}>{t('views:header.userMenu.myBookings')}</span>
            </div>
          </Link>
          <Link href={`${AppViews.USER_PROFILE}`}>
            <div>
              <span className={styles.text}>{t('views:header.userMenu.userProfile')}</span>
            </div>
          </Link>
          <Link href={`${AppViews.USER_PAYMENT_METHODS}`}>
            <div>
              <span className={styles.text}>{t('views:header.userMenu.creditCards')}</span>
            </div>
          </Link>
          <div onClick={onLogout}>
            <span className={styles.text}>{t('views:header.userMenu.logout')}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
