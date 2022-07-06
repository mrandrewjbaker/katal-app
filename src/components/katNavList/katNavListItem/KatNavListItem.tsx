import { Link } from "react-router-dom";

import styles from './katNavListItem.module.scss';
import { IKatNavListItemProps } from "./katNavListItemTypes";

export const KatNavListItem: React.FC<IKatNavListItemProps> = ({
  to,
  text,
  icon,
  className,
  onClick,
  nested,
}) => {
  const classNames = `${className ? className : ''} ${styles.katNavListItem_link}`;

  return (
    <div className={`${styles.katNavListItem}` + ` ${nested ? styles.katNavListItem___nested : ''}`}>
      <Link to={to} className={classNames} onClick={onClick}>
        {
          icon && <div className={styles.katNavListItem_icon}>{icon}</div>
        }
        {text}
      </Link>
    </div>
  );
}