import styles from './sideMenu.module.scss';
import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { SelectSideMenu, SideMenuToggle } from './sideMenu.slice';
import { KatLink } from '../katLink/KatLink';
import { MdAccessibilityNew, MdAllInbox, MdBarChart, MdBusiness, MdCode, MdExplore, MdHandyman, MdHistory, MdHome, MdInbox, MdInput, MdInventory, MdLayers, MdList, MdManageAccounts, MdOutbox, MdOutlineDescription, MdOutlineExplore, MdOutlineFileDownload, MdOutlineFlipCameraAndroid, MdOutlineFormatListNumbered, MdOutlineLayers, MdOutlineMultilineChart, MdOutlineQrCode, MdOutlineQrCode2, MdOutlineRequestQuote, MdOutlineSyncAlt, MdPages, MdPeople, MdPinDrop, MdPower, MdPowerSettingsNew, MdPublic, MdQueryBuilder, MdReceipt, MdReportProblem, MdSecurity, MdSettings, MdStorage, MdSupport, MdTab, MdVpnKey, MdWeb, MdWidgets } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { GiBullHorns, GiSandCastle } from 'react-icons/gi';
import { KatNavList } from '../katNavList/KatNavList';
import { KatNavListItem } from '../katNavList/katNavListItem/KatNavListItem';
import { KatNestedNavList } from '../katNavList/katNestedNavList/KatNestedNavList';

export const SideMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const sideMenuRef = useRef<any>(null);

  const sideMenuVisibleState = useAppSelector(SelectSideMenu);
  const [sideMenuVisibleClassName, setSideMenuVisibleClassName] = useState<string>('');

  const determineSideMenuVisibleClassName = () => {
    const className = sideMenuVisibleState.value.visible ? styles.sideMenu_opened : styles.sideMenu_opened
    setSideMenuVisibleClassName(className);
  }

  useEffect(() => {
    determineSideMenuVisibleClassName();
  }, [sideMenuVisibleState.value.visible])

  
  return (
    <>
    {
      sideMenuVisibleState.value.visible
      &&
      <div className={`${styles.sideMenu} ${sideMenuVisibleClassName}`} ref={sideMenuRef}>
        <KatNavList>
          <KatNavListItem to='/' text='Home' icon={<MdHome />} />

          <KatNestedNavList text={'Admin'} icon={<MdSecurity />} className={styles.sideMenu_listItem___admin}>
            <KatNavListItem to='/' text='Users & Groups' icon={<MdPeople />} nested/>
            <KatNavListItem to='/' text='Roles' icon={<MdVpnKey />} nested/>
            
            <KatNavListItem to='/' text='Locations' icon={<MdPinDrop />} nested/>
            
            <KatNavListItem to='/' text='Data Storage' icon={<MdStorage />} nested/>

            <KatNavListItem to='/' text='Service Builder' icon={<MdCode />} nested/>
            <KatNavListItem to='/' text='Service Monitor' icon={<MdPowerSettingsNew />} nested/>
            
            <KatNavListItem to='/' text='Organization Settings' icon={<MdSettings />} nested/>
          </KatNestedNavList>

          <KatNestedNavList text={'Data Tools'} icon={<MdReceipt />} className={styles.sideMenu_listItem___data}>
            <KatNavListItem to='/' text='Data Explorer' icon={<MdOutlineExplore />} nested/>
            <KatNavListItem to='/' text='Report Builder' icon={<MdOutlineDescription />} nested/>

          </KatNestedNavList>

          <KatNestedNavList text={'Inventory Tools'} icon={<MdWidgets />} className={styles.sideMenu_listItem___inventory}>
            <KatNavListItem to='/' text='Inventory' icon={<MdWidgets />} nested/>
            <KatNavListItem to='/' text='Scangun' icon={<MdOutlineQrCode />} nested/>

          </KatNestedNavList>

          <KatNestedNavList text={'Manufacturing Tools'} icon={<MdOutlineFlipCameraAndroid />} className={styles.sideMenu_listItem___manufacturing}>
            <KatNavListItem to='/' text='Work Planning' icon={<MdOutlineFormatListNumbered />} nested/>
            <KatNavListItem to='/' text='Machine Monitor' icon={<MdOutlineMultilineChart />} nested/>
            <KatNavListItem to='/' text='Scangun' icon={<MdOutlineQrCode />} nested/>

          </KatNestedNavList>

          <KatNestedNavList text={'Maintenence Tools'} icon={<MdHandyman />} className={styles.sideMenu_listItem___maintenence}>
            <KatNavListItem to='/' text='Work Planning' icon={<MdOutlineFormatListNumbered />} nested/>
            <KatNavListItem to='/' text='Scangun' icon={<MdOutlineQrCode />} nested/>

          </KatNestedNavList>

          <KatNestedNavList text={'Sales Tools'} icon={<MdBusiness />} className={styles.sideMenu_listItem___sales}>
            <KatNavListItem to='/' text='Orders' icon={<MdReceipt />} nested/>
            <KatNavListItem to='/' text='Contacts' icon={<MdPeople />} nested/>
            <KatNavListItem to='/' text='Sales Reports' icon={<MdBarChart />} nested/>

          </KatNestedNavList>

          <KatNestedNavList text={'Simulation Tools'} icon={<MdOutlineLayers />} className={styles.sideMenu_listItem___simulation}>
            <KatNavListItem to='/' text='Orders' icon={<MdReceipt />} nested/>
            <KatNavListItem to='/' text='Contacts' icon={<MdPeople />} nested/>
            <KatNavListItem to='/' text='Sales Reports' icon={<MdBarChart />} nested/>

          </KatNestedNavList>
          <KatNestedNavList text={'Web Services'} icon={<MdPublic />} className={styles.sideMenu_listItem___webservices}>
            <KatNavListItem to='/' text='Endpoints' icon={<MdOutlineFileDownload />} nested/>
            <KatNavListItem to='/' text='Web Request Logs' icon={<MdHistory />} nested/>
          </KatNestedNavList>
          <KatNavListItem to='/' text='My Settings' icon={<MdManageAccounts />} />

          <KatNavListItem to='/' text='Katal Support' icon={<BiSupport />} />

        </KatNavList>
      </div>
    }
    </>
  )
}
