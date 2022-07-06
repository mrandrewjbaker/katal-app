import { useAppSelector, useAppDispatch} from '../../app/hooks';
import { useEffect, useState } from 'react';

import styles from './NavBar.module.scss';
import { MdMenu } from 'react-icons/md';
import { SideMenuToggle } from '../SideMenu/sideMenu.slice';

export const NavBar = () => {
  const dispatch = useAppDispatch();

  const handleSideMenuToggle = () => {
    dispatch(SideMenuToggle());
  }
    

  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBarSection}>
        <div className={styles.NavBarSideMenuToggle}>
          <MdMenu className={styles.NavBarSideMenuToggle_icon} onClick={handleSideMenuToggle}/>
        </div>
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
    </div>
  )
}