import styles from './RouterContainer.module.scss';

interface IRouterContainerProps {
  children?: any;
}

export const RouterContainer = (props: IRouterContainerProps) => {
  return (
    <div className={`${styles.RouterContainer}`}>
      {
        props.children
      }
    </div>
  )
}