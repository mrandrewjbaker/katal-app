import { Link } from "react-router-dom";
import { IKatLinkProps } from "./katLinkTypes";
import styles from './katLink.module.scss';
import { MdBuild, MdHome, MdReportProblem, MdSettings } from "react-icons/md";

export const KatLink: React.FC<IKatLinkProps> = ({
  to,
  text,
  icon,
  className,
  onClick,
}) => {
  const classNames = `${className ? className : ''} ${styles.katLink}`;

  return (
    <div className={styles.katLink_container}>
      <Link to={to} className={classNames} onClick={onClick}>
        {
          icon && <div className={styles.katLink_icon}>{icon}</div>
        }
        {text}
      </Link>
    </div>
  );
}

