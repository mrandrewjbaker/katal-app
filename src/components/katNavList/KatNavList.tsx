import { IKatNavListProps } from "./katNavListTypes";

import styles from './katNavList.module.scss';

export const KatNavList: React.FC<IKatNavListProps> = ({
  children,
  className,
}) => {
  const classNames = `${className ? className : ''} ${styles.katNavList}`;

  return (
    <ul className={classNames}>
      {children}
    </ul>
  );
}