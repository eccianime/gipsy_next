import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Navbar, Offcanvas } from 'react-bootstrap';
import { UrlObject } from 'url';
import { AppViews } from '../../endpoints';
import { GipsyInstanceType } from '../../global';
import useGlobalState from '../../hooks/useGlobalState';
import useTranslation from '../../hooks/useTranslation';
import Header from '../header/Header';
import styles from './Sidebar.module.css';

type ISideBarLink = {
  href: string | UrlObject;
  image: string | StaticImageData;
  label: string;
}

const SideBarLink = ({ href, image, label }: ISideBarLink) => (
  <><Link href={href}>
    <a>
      <Image width={50} height={50} src={image} />
      <span>{label}</span>
    </a>
  </Link><hr /></>
)

const SideBar = () => {
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(false);
  const handleHideSidebar = () => setDisplaySidebar(false);
  const handleShowSidebar = () => setDisplaySidebar(true);
  const { auth: { token }, users: { currentUser } } = useGlobalState();
  const { t } = useTranslation();


  return (
    <Navbar expand={false}>
      <Header handleShowSidebar={handleShowSidebar} />
      <Offcanvas
        show={displaySidebar}
        placement='start'
        onHide={handleHideSidebar}
        className={cx(styles.sidebar, styles.show)}
      >
        <Offcanvas.Body className={styles.offcanvasBody}>
          <div className={styles.topSideBar}>
            <span onClick={handleHideSidebar} className={cx('fas fa-close', styles.close)} />
            {token ? (
              <>
                {currentUser?.firstName && (
                  <p>
                    {t.views.sidebar.hello} {currentUser?.firstName} {currentUser?.lastName}
                  </p>
                )}
                <Link href={AppViews.USER_BOOKINGS}>{t.views.sidebar.myTickets}</Link>
              </>
            ) : (
              <Link
                href={{
                  pathname: AppViews.MANAGE_YOUR_BOOKING,
                  // state: { tab: Tab.haveAnAccount } 
                }}
              >
                <a>{t.views.sidebar.signIn}</a>
              </Link>
            )}
          </div>
          <div className={styles.staticPages}>
            <SideBarLink href={{ pathname: AppViews.HOME }} image={'/images/svg/sidebar/buyTicket.svg'} label={t.views.sidebar.buy} />
            <SideBarLink href={currentUser?.firstName
              ? {
                pathname: AppViews.USER_BOOKINGS,
                // state: { tab: Tab.haveBookingId }
              }
              : AppViews.MANAGE_YOUR_BOOKING} image={'/images/svg/sidebar/manageBooking.svg'} label={t.views.sidebar.booking} />
            <SideBarLink href={AppViews.HELP} image={'/images/svg/sidebar/help.svg'} label={t.views.sidebar.helplink} />
            {process.env.NEXT_PUBLIC_REACT_APP_INSTANCE_TYPE === GipsyInstanceType.PORTUGAL &&
              <SideBarLink href={AppViews.ALUGUERES} image={'/images/svg/sidebar/rental.svg'} label={t.views.sidebar.rental} />
            }
            {process.env.NEXT_PUBLIC_REACT_APP_INSTANCE_TYPE === GipsyInstanceType.BRAZIL &&
              <SideBarLink href={AppViews.FRETAMENTO} image={'/images/svg/sidebar/rental.svg'} label={t.views.sidebar.rental} />
            }
            {/* 
            {/* {pages.map((page: StaticPage, index) => (
              <React.Fragment key={page.slug}>
                {index === 2 && (
                  <>
                    <Link href={AppViews.STOPS_INFO}>
                      <BusStopSvg />
                      <span>{t('views:header.stopsInformation')}</span>
                    </Link>
                    <hr />
                  </>
                )}
                <Link href={`${AppViews.STATIC_PAGE}/${page.slug}`}>
                  <img src={page.imageUrl} alt={page.title} />
                  <span>{page.title}</span>
                </Link>
                <hr />
              </React.Fragment>
            ))} */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  )
}

export default SideBar;