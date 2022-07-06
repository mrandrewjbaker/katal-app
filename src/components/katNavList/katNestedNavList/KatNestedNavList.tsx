import { IKatNestedNavListProps } from './katNestedNavListTypes';
import styles from './katNestedNavList.module.scss';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';

export const KatNestedNavList: React.FC<IKatNestedNavListProps> = ({
  children,
  text,
  icon,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const randomIdHash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const toggleIconReference = useRef<any>(null);
  const classNames = `${styles.katNestedNav} ${className ? className : ''}`;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className={classNames}>
      <label className={styles.katNestedNav_label} htmlFor={`label_${text}_${randomIdHash}`} onClick={() => toggleMenu()}>
        {icon && <div className={styles.katNestedNav_labelIcon}>{icon}</div>}
        {text && <div className={styles.katNestedNav_labelText}>{text}</div>}
        <div className={styles.katNestedNav_labelToggleIcon} ref={toggleIconReference}>
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </div>
      </label>
      <input type="checkbox" className={styles.katNestedNav_checkbox} id={`label_${text}_${randomIdHash}`} />
      <ul className={styles.katNestedNavList}>
        {children}
      </ul>
    </div>
  );
}