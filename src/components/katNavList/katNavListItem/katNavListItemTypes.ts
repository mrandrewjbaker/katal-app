export interface IKatNavListItemProps {
  to: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  nested?: boolean;
}
